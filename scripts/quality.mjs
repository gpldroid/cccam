import {readFileSync,readdirSync,statSync} from "node:fs";
import {join} from "node:path";

const required=["index.html","404.html","robots.txt","sitemap.xml","public/site.webmanifest","public/logo.svg","src/components/cookie-consent.js"];
for(const file of required){if(!statSafe(file))fail("Missing required file: "+file)}
const html=readFileSync("index.html","utf8");
for(const pattern of [
  /<html[^>]+lang="ar"[^>]+dir="rtl"/i,
  /<meta[^>]+name="viewport"/i,
  /<meta[^>]+name="description"/i,
  /<link[^>]+rel="canonical"/i,
  /<title>[^<]+<\/title>/i,
  /<link[^>]+rel="stylesheet"[^>]+href="src\/styles\/global\.css/i
]){if(!pattern.test(html))fail("index.html quality check failed: "+pattern)}
if(/cdn\.tailwindcss\.com/i.test(html))fail("Tailwind CDN must not be used in production.");
const pages=["categories/iptv.html","categories/iptv-apps.html","posts/cccam-guide.html","posts/iptv-github.html","posts/iptv-apps-android.html","posts/iptv-m3u-guide.html","about.html","contact.html","terms.html","privacy.html"];
for(const file of pages){
 if(!statSafe(file))fail("Missing public page: "+file);
 const s=readFileSync(file,"utf8");
 if(!/<title>[^<]+<\/title>/i.test(s)||!/<meta[^>]+name="description"/i.test(s)||!/<link[^>]+rel="canonical"/i.test(s))fail("SEO metadata missing in "+file);
}
const sitemap=readFileSync("sitemap.xml","utf8");
for(const file of pages){const url=file==="categories/iptv.html"?"https://gpldroid.github.io/cccam/categories/iptv.html":`https://gpldroid.github.io/cccam/${file}`;if(!sitemap.includes(url))fail("Sitemap missing public URL: "+url)}
console.log("StreamX quality checks passed.");
function statSafe(file){try{return statSync(file).isFile()}catch{return false}}
function fail(message){console.error(message);process.exit(1)}
