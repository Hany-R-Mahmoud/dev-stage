# SEO deployment notes

Set the real production origin before generating crawler assets:

```bash
SITE_URL=https://your-real-domain.example npm run seo:generate
npm run build
```

The generator writes `public/sitemap.xml` for the homepage and published project routes, plus a `robots.txt` file with an absolute sitemap directive. Do not commit generated output with a placeholder, localhost, or staging origin.
