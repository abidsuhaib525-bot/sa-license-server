const crypto = require('crypto');
const fetch = require('node-fetch');
const SELLER_KEY = "bf0129d9bf90dc922b2acca7650852a6";
const LZ_API = "https://licenseauth.cloud/api/seller/";
const headers = {'Access-Control-Allow-Origin':'*','Access-Control-Allow-Headers':'Content-Type, x-device-id','Access-Control-Allow-Methods':'POST, OPTIONS','Content-Type':'application/json'};
function fk(k){return(k||"").trim().toUpperCase();}
exports.handler = async (event) => {
  if(event.httpMethod==='OPTIONS') return {statusCode:204,headers,body:''};
  if(event.httpMethod!=='POST') return {statusCode:405,headers,body:JSON.stringify({valid:false})};
  try{
    const b=JSON.parse(event.body),key=fk(b.license_key);
    if(!key) return {statusCode:200,headers,body:JSON.stringify({valid:false,message:'Key required'})};
    if(b.heartbeat){
      const r=await fetch(LZ_API+"?sellerkey="+encodeURIComponent(SELLER_KEY)+"&type=info&key="+encodeURIComponent(key)+"&format=json");
      const d=await r.json();
      if(!d||!d.success) return {statusCode:200,headers,body:JSON.stringify({valid:false,message:'Not found'})};
      const dev=b.device_id||'unknown',sig=crypto.createHmac('sha256',SELLER_KEY).update(key+':'+dev).digest('hex').substring(0,16);
      return {statusCode:200,headers,body:JSON.stringify({valid:true,session_id:'lz_'+sig,user_name:d.createdby||'User',status:'active',plan:d.level==='1'?'standard':'premium',expires_at:d.duration?new Date(parseInt(d.duration)*1000).toISOString():'9999-12-31T23:59:59.000Z',online_count:1,activated_at:d.creationdate?new Date(parseInt(d.creationdate)*1000).toISOString():new Date().toISOString()})};
    }
    const vr=await fetch(LZ_API+"?sellerkey="+encodeURIComponent(SELLER_KEY)+"&type=verify&key="+encodeURIComponent(key)+"&format=json");
    const vd=await vr.json();
    if(!vd||!vd.success) return {statusCode:200,headers,body:JSON.stringify({valid:false,message:'Invalid or expired license key'})};
    const ir=await fetch(LZ_API+"?sellerkey="+encodeURIComponent(SELLER_KEY)+"&type=info&key="+encodeURIComponent(key)+"&format=json");
    const id=await ir.json();
    const dev2=b.device_id||'unknown',sig2=crypto.createHmac('sha256',SELLER_KEY).update(key+':'+dev2).digest('hex').substring(0,16);
    return {statusCode:200,headers,body:JSON.stringify({valid:true,session_id:'lz_'+sig2,user_name:(id&&id.createdby)||'User',expires_at:id&&id.duration?new Date(parseInt(id.duration)*1000).toISOString():'9999-12-31T23:59:59.000Z',activated_at:id&&id.creationdate?new Date(parseInt(id.creationdate)*1000).toISOString():new Date().toISOString(),status:'active',plan:'standard',online_count:1,message:'License activated!'})};
  }catch(e){return {statusCode:200,headers,body:JSON.stringify({valid:false,message:'Error: '+e.message})};}
};
