const routes = require("./sitemapRoute").default;
const fs = require("fs");
const path = require("path");

function generateSitemap() {
  const baseUrl = "https://sik-k.netlify.app";
  const currentDate = new Date().toISOString().split("T")[0];

  const urls = routes
    .map(
      (route) => `  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
    )
    .join("\n");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  const publicPath = path.join(__dirname, "../../public/sitemap.xml");
  fs.writeFileSync(publicPath, sitemap, "utf8");
  console.log("✅ Sitemap generated successfully at:", publicPath);
}

generateSitemap();
