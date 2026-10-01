/**
 * Fast-Indexing Automation Script for Belvie Spa Islamabad
 * Run using: node scripts/ping-search-engines.mjs
 */

const BASE_URL = "https://www.islamabadmassagecenter.com";
const SITEMAP_URL = `${BASE_URL}/sitemap.xml`;

async function pingEngines() {
  console.log("==================================================");
  console.log("🚀 Starting Search Engine Fast-Indexing Protocol...");
  console.log(`📡 Sitemap Target: ${SITEMAP_URL}`);
  console.log("==================================================");

  const targets = [
    {
      name: "Google Sitemap Ping",
      url: `https://www.google.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`,
    },
    {
      name: "Bing Sitemap Ping",
      url: `https://www.bing.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`,
    },
  ];

  for (const target of targets) {
    try {
      console.log(`\n⏳ Pinging ${target.name}...`);
      const res = await fetch(target.url);
      console.log(`✅ ${target.name} responded with HTTP ${res.status}`);
    } catch (err) {
      console.log(`⚠️ ${target.name} ping note:`, err.message);
    }
  }

  console.log("\n==================================================");
  console.log("📋 PRIORITY GSC URL INSPECTION LIST (Next Step):");
  console.log("Submit these 6 URLs one-by-one in Google Search Console:");
  console.log("1. https://bestsparawalpindi.com/");
  console.log("2. https://bestsparawalpindi.com/massage-center-bahria-town-phase-7");
  console.log("3. https://bestsparawalpindi.com/massage-center-rawalpindi");
  console.log("4. https://bestsparawalpindi.com/full-body-massage");
  console.log("5. https://bestsparawalpindi.com/location");
  console.log("6. https://bestsparawalpindi.com/services");
  console.log("==================================================");
}

pingEngines();
