(function () {
  'use strict';

  var LZ_API = "https://lovable-license-system.lovable.app/api/public/validate";
  var LZ_HEARTBEAT_API = "https://lovable-license-system.lovable.app/api/public/heartbeat";
  var STORAGE_KEY = "lz_license_data";
  var KEYS_TO_REMOVE = [
    "ql_license_valid", "license_valid",
    "ql_license_key", "license_key",
    "ql_license_id", "ql_license_status", "ql_license_plan",
    "ql_user_name", "ql_user_email",
    "ql_expires_at", "ql_activated_at",
    "ql_device_id", "ql_device_id_fallback", "device_id",
    "ql_session_id", "ql_synced_sessions",
    "ql_native_chat", "ql_bypass_active", "__ql_bypass_active"
  ];

  function chromeGet(keys) {
    return new Promise(function (resolve) {
      try {
        chrome.storage.local.get(keys, function (items) { resolve(items || {}); });
      } catch (e) { resolve({}); }
    });
  }

  function chromeSet(values) {
    return new Promise(function (resolve) {
      try {
        chrome.storage.local.set(values, resolve);
      } catch (e) { resolve(); }
    });
  }

  function chromeRemove(keys) {
    return new Promise(function (resolve) {
      try {
        chrome.storage.local.remove(keys, resolve);
      } catch (e) { resolve(); }
    });
  }

  async function getDeviceId() {
    try {
      if (typeof getHardwareFingerprint === "function") {
        var fp = await getHardwareFingerprint();
        if (fp) return String(fp);
      }
    } catch (e) {}
    var stored = await chromeGet(["lz_device_id"]);
    if (stored.lz_device_id) return stored.lz_device_id;
    var id = "lz_" + Date.now().toString(36) + "_" + Math.random().toString(36).slice(2, 8);
    await chromeSet({ lz_device_id: id });
    return id;
  }

  async function validateLicense(licenseKey) {
    var deviceId = await getDeviceId();
    var body = { license_key: licenseKey, device_id: deviceId };
    try {
      var res = await fetch(LZ_API, {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-device-id": deviceId },
        body: JSON.stringify(body)
      });
      var data = await res.json();
      if (data && data.valid) {
        var store = {
          lz_valid: true,
          lz_key: licenseKey,
          lz_session: data.session_id,
          lz_user: data.user_name,
          lz_expires: data.expires_at,
          lz_activated: data.activated_at,
          lz_status: data.status,
          lz_plan: data.plan,
          lz_online: data.online_count || 0
        };
        await chromeSet(store);
        await chromeRemove(KEYS_TO_REMOVE);
        try { localStorage.setItem("__ql_bypass_active", "1"); } catch (e) {}
        return store;
      }
      return null;
    } catch (e) {
      return null;
    }
  }

  async function heartbeat(licenseKey) {
    var stored = await chromeGet([STORAGE_KEY, "lz_key", "lz_session", "lz_device_id"]);
    var key = licenseKey || stored.lz_key;
    var sid = stored.lz_session;
    var did = stored.lz_device_id || await getDeviceId();
    if (!key) return null;
    try {
      var res = await fetch(LZ_HEARTBEAT_API, {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-device-id": did },
        body: JSON.stringify({ license_key: key, session_id: sid, device_id: did, heartbeat: true })
      });
      var data = await res.json();
      if (data && data.valid) {
        await chromeSet({
          lz_status: data.status,
          lz_expires: data.expires_at,
          lz_user: data.user_name,
          lz_online: data.online_count || 0
        });
        return data;
      }
      return null;
    } catch (e) {
      return null;
    }
  }

  async function loadLicense() {
    var stored = await chromeGet(["lz_valid", "lz_key", "lz_user", "lz_expires", "lz_activated", "lz_status", "lz_plan", "lz_session", "lz_online"]);
    if (!stored.lz_valid || !stored.lz_key) return null;
    return {
      valid: true,
      key: stored.lz_key,
      userName: stored.lz_user,
      expiresAt: stored.lz_expires,
      activatedAt: stored.lz_activated,
      status: stored.lz_status,
      plan: stored.lz_plan,
      sessionId: stored.lz_session,
      onlineCount: stored.lz_online || 0
    };
  }

  async function clearLicense() {
    await chromeRemove(["lz_valid", "lz_key", "lz_session", "lz_user", "lz_expires", "lz_activated", "lz_status", "lz_plan", "lz_online", "lz_device_id"]);
    await chromeRemove(KEYS_TO_REMOVE);
    try { localStorage.removeItem("__ql_bypass_active"); } catch (e) {}
  }

  window.LZ = {
    validate: validateLicense,
    heartbeat: heartbeat,
    load: loadLicense,
    clear: clearLicense,
    getDeviceId: getDeviceId,
    api: LZ_API,
    heartbeatApi: LZ_HEARTBEAT_API
  };
})();
