const SELLER_KEY = process.env.SELLER_KEY || 'bf0129d9bf90dc922b2acca7650852a6';

const TYPES = [
  { name: 'trial', days: 7 },
  { name: 'monthly', days: 30 },
  { name: 'yearly', days: 365 },
  { name: 'lifetime', days: 36500 }
];

async function main() {
  const args = process.argv.slice(2);
  let type = 'lifetime';
  let days = 0;
  let owner = '';
  let amount = 1;
  let level = 1;

  for (let i = 0; i < args.length; i++) {
    switch (args[i]) {
      case '--type': type = args[++i]; break;
      case '--days': days = parseInt(args[++i]); break;
      case '--owner': owner = args[++i]; break;
      case '--amount': amount = parseInt(args[++i]); break;
      case '--level': level = parseInt(args[++i]); break;
      case '--help':
        console.log(`
Usage: node generate-license.js [options]

Generate licenses via LicenseAuth API.

Options:
  --type <type>     trial, monthly, yearly, lifetime (default: lifetime)
  --days <number>   Override expiry days
  --owner <name>    Just for display
  --amount <num>    Number of keys to generate (default: 1)
  --level <1-5>     License level (default: 1)
  --help            Show this help

Examples:
  node generate-license.js --type lifetime
  node generate-license.js --type yearly --days 365 --amount 5
`);
        process.exit(0);
    }
  }

  if (!days) {
    const found = TYPES.find(t => t.name === type);
    days = found ? found.days : 36500;
  }

  const mask = 'SA-****-****-****-****-****';

  const url = 'https://licenseauth.cloud/api/seller/?sellerkey=' +
    encodeURIComponent(SELLER_KEY) +
    '&type=add' +
    '&expiry=' + days +
    '&mask=' + encodeURIComponent(mask) +
    '&level=' + level +
    '&amount=' + amount +
    '&format=json';

  try {
    const res = await fetch(url);
    const data = await res.json();

    if (!data || !data.success) {
      console.error('Error:', data ? data.message : 'No response');
      process.exit(1);
    }

    const keys = Array.isArray(data.key) ? data.key : [data.key];

    console.log('');
    console.log('╔══════════════════════════════════════╗');
    console.log('║        LICENSE(S) GENERATED          ║');
    console.log('╠══════════════════════════════════════╣');
    keys.forEach(k => {
      console.log('║  ' + k.padEnd(36) + '║');
    });
    console.log('╠══════════════════════════════════════╣');
    console.log('║ Type:  ' + type.padEnd(34) + '║');
    console.log('║ Days:  ' + String(days).padEnd(34) + '║');
    console.log('╚══════════════════════════════════════╝');
    console.log('');

    // Also save to file if --owner is provided
    if (owner) {
      const fs = require('fs');
      const fname = 'licenses-' + type + '-' + Date.now() + '.json';
      const data = { generated: new Date().toISOString(), type, days, level, keys };
      fs.writeFileSync(fname, JSON.stringify(data, null, 2));
      console.log('Saved to: ' + fname);
    }
  } catch (e) {
    console.error('Failed:', e.message);
    process.exit(1);
  }
}

main();
