# Nexhaus Tenders — Website

A complete, responsive, static business website for a tender packaging, bidding, submission and procurement consultancy service. Built with semantic HTML5, hand-written CSS and vanilla JavaScript only — no frameworks, no build step, no server required.

## Folder Structure

```
TenderWebsite/
│
├── index.html          Homepage
├── about.html           Company story, mission, team, timeline
├── services.html         Detailed service descriptions
├── pricing.html          Package pricing and comparison table
├── faq.html              20+ frequently asked questions
├── contact.html          Contact form, map, business details
│
├── css/
│   └── style.css        All site styling and animations
│
├── js/
│   └── script.js        Navbar, animations, counters, FAQ, form validation
│
├── images/
│   ├── logo.png          Site logo (generated placeholder — replace with your own)
│   └── ...               Photography is currently loaded from Unsplash URLs directly
│                          inside each HTML file (see "Replacing Images" below)
│
├── robots.txt            Search engine crawl rules
├── sitemap.xml            XML sitemap for search engines
├── favicon.ico            Browser tab icon (generated placeholder)
└── README.md              This file
```

## 1. Uploading to GitHub

1. Create a new repository on GitHub (e.g. `tender-website`).
2. On your computer, open a terminal inside the unzipped `TenderWebsite` folder.
3. Run:
   ```bash
   git init
   git add .
   git commit -m "Initial commit — Nexhaus Tenders website"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/tender-website.git
   git push -u origin main
   ```
   You can also just drag-and-drop all the files into the GitHub web interface using "Add file → Upload files" if you prefer not to use the command line.

## 2. Enabling GitHub Pages

1. Go to your repository on GitHub.
2. Click **Settings → Pages** (in the left sidebar).
3. Under **Build and deployment → Source**, choose **Deploy from a branch**.
4. Under **Branch**, select `main` and folder `/ (root)`, then click **Save**.
5. Wait 1–2 minutes. GitHub will publish your site at:
   ```
   https://YOUR-USERNAME.github.io/tender-website/
   ```
6. Visit `index.html` at that address to confirm the site is live.

## 3. Replacing Images

The site currently uses live Unsplash photo URLs (free-to-use, royalty-free business and procurement photography) directly inside the HTML `<img src="...">` and background-image attributes, so the site works immediately with no missing images.

To use your own photography instead:

1. Save your image files into the `images/` folder (e.g. `images/hero.jpg`, `images/packaging.jpg`).
2. In each HTML file, find the relevant `<img src="https://images.unsplash.com/...">` tag or `background-image:url('https://images.unsplash.com/...')` style, and replace the URL with a relative path, e.g.:
   ```html
   <img src="images/packaging.jpg" alt="Tender packaging documents">
   ```
3. Recommended sizes: hero/background images 1920×1080px, service card images 900×600px, team portraits 500×500px, all as compressed `.jpg` files under 300KB for fast loading.
4. To replace the logo, save a new square PNG (at least 256×256px, transparent background) as `images/logo.png`.
5. To replace the favicon, generate a new `.ico` file (e.g. via [favicon.io](https://favicon.io)) and overwrite `favicon.ico` in the project root.

## 4. Editing Text Content

All text lives directly inside the HTML files — there is no CMS or database.

- **Company name, phone, email, address, WhatsApp number:** search for `Nexhaus Tenders`, `+254 745 553 496`, `nexhaustenders1@gmail.com` and the office address across all HTML files and replace with your own details (also update the `href="https://wa.me/254745553496"` WhatsApp links and `href="tel:..."` links).
- **Headlines and paragraphs:** open any `.html` file in a text editor and edit the text between tags directly, e.g. change the text inside `<h1>...</h1>` or `<p>...</p>`.
- **Pricing:** edit the amounts inside `pricing.html` inside each `.price-amount` element.
- **FAQs:** add or remove `.faq-item` blocks inside `faq.html`, following the existing pattern of a `.faq-question` button and a `.faq-answer` paragraph.
- **Google Map:** in `contact.html`, replace the address in the `src="https://www.google.com/maps?q=..."` iframe with your own location.

## 5. Customization Guide

- **Colors:** all colors are defined once as CSS variables at the top of `css/style.css` under `:root` (e.g. `--navy`, `--royal`, `--gold`). Change a variable there and it updates across the entire site.
- **Fonts:** the site uses Arial (a system font, so no external font files or internet connection are required) for both headings and body text, set via the `--font-display` / `--font-body` variables in `style.css`. To switch to a different typeface, update those two variables — add a Google Fonts `<link>` back into each page's `<head>` if you choose a web font.
- **Navigation links:** the header menu is repeated inside the `<nav class="main-nav">` block on every page — update all six files if you add or remove a page.
- **Sections:** each homepage section is wrapped in its own `<section>` tag with a comment above it (e.g. `<!-- ================= HERO ================= -->`) so you can find, reorder, duplicate or delete sections easily.
- **Animations:** scroll fade-ins are applied by adding the `reveal` class to any element; animated counters work on any element with a `data-count="123"` attribute. Both are handled automatically by `js/script.js`.

## 6. Running Locally

No build tools or server are required. Simply double-click `index.html`, or open it in any browser via **File → Open**, to preview the site locally before publishing.

For a closer-to-production local preview (recommended, since some browsers restrict local file requests), run a simple local server from inside the project folder:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000` in your browser.

## 7. SEO Notes

- Each page has a unique `<title>`, meta description, meta keywords, canonical URL, Open Graph tags and Twitter Card tags — update the placeholder domain `https://www.nexhaustenders.com/` throughout once your GitHub Pages or custom domain URL is confirmed.
- `sitemap.xml` and `robots.txt` are included at the project root and reference the same placeholder domain — update both after publishing.
- If you connect a custom domain to GitHub Pages, add a `CNAME` file at the project root containing your domain name (GitHub's Pages settings page can generate this for you automatically).

## Credits

Photography sourced from Unsplash contributors under the free [Unsplash License](https://unsplash.com/license) (no attribution required, but crediting photographers is appreciated), chosen specifically to show African business people and workplaces — including images shot in Nairobi, Kenya (Cytonn Photography) and Lagos, Nigeria (Ninthgrid, an Afrocentric stock photography studio). Typeface: Arial, a pre-installed system font on virtually every device, so no external font loading is required.
