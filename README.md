# IT COMPANY — Premium Corporate Demo Website

> **ENGINEERING DIGITAL SOLUTIONS. POWERING WHAT'S NEXT.**

A high-performance, responsive multi-page corporate website built for an enterprise IT solutions provider. Designed with a dark modern aesthetic inspired by high-end SaaS platforms, enterprise technology consulting firms, and AI innovation studios.

---

## 1. Project Specifications & Strict Architecture

- **Technology Stack:** Pure HTML5, CSS3, and Vanilla JavaScript (ES6+).
- **Framework-Free:** Absolutely **zero** React, Next.js, Vue, Angular, Bootstrap, Tailwind CSS, jQuery, or Node.js backend.
- **Hosting Target:** 100% compatible with Hostinger Static Hosting, Cloudflare Pages, GitHub Pages, Vercel Static, or any standard HTTP web server (`public_html`).
- **Dependencies:** Fully self-contained. No external CDN dependencies required for layout, typography, or core functionality.
- **Responsive Design:** Optimized breakpoints for Desktop (1200px+), Laptop (992px–1199px), Tablet (768px–991px), and Mobile (< 768px).

---

## 2. Directory Structure

```text
IT Companyy/
├── images/                        # All 57 production visual assets (Google Flow)
├── index.html                     # 01. Homepage (11 core sections)
├── about.html                     # 02. About the Company
├── services.html                  # 03. Central Services Directory
├── software-development.html      # 04. Custom Software Development
├── web-development.html           # 05. Web Development & Portals
├── mobile-app-development.html    # 06. iOS & Android Development
├── ai-solutions.html              # 07. Artificial Intelligence Solutions
├── ai-automation.html             # 08. AI & Business Automation
├── cloud-services.html            # 09. Cloud Computing & DevOps
├── data-analytics.html            # 10. Data Analytics & BI
├── cybersecurity.html             # 11. Cybersecurity Solutions
├── ui-ux-design.html              # 12. UI/UX Design & Architecture
├── digital-transformation.html    # 13. Digital Transformation
├── it-consulting.html             # 14. Technology Consulting
├── industries.html                # 15. Target Industry Verticals (10 sectors)
├── technologies.html              # 16. Technology Stack & Frameworks
├── process.html                   # 17. 6-Step Development Process
├── portfolio.html                 # 18. Work Portfolio (6 demo projects + filters)
├── case-studies.html              # 19. Detailed Enterprise Case Studies (3 scenarios)
├── careers.html                   # 20. Careers & Job Openings (6 roles + application form)
├── blog.html                      # 21. Technology Insights & Articles (8 articles)
├── faq.html                       # 22. Frequently Asked Questions (12-item accordion)
├── contact.html                   # 23. Contact Us & Office Info
├── request-quote.html             # 24. Project Scoping & Estimation Form
├── sitemap.xml                    # Complete XML sitemap (24 indexed URLs)
├── README.md                      # Project setup & deployment manual
├── IMAGE-GENERATION-GUIDE.md      # Comprehensive Google Flow prompt generation guide
└── assets/
    ├── css/
    │   └── style.css              # Unified responsive design system & color tokens
    ├── js/
    │   └── main.js               # Zero-dependency interactive scripts & modals
    └── images/
        └── README.md              # Image dimension & replacement guidelines
```

---

## 3. Brand Identity & Color Palette

The visual system uses a dark palette accented by electric cyan, blue, and violet glows:

| Token Name | Hex Code | Purpose |
| :--- | :--- | :--- |
| **Primary Background** | `#080D18` | Deep midnight canvas background |
| **Secondary Background** | `#101827` | Section alternations, dropdowns, hero panels |
| **Card Background** | `#141F32` | Elevated surface for cards, tabs, and modals |
| **Primary Accent** | `#4F8CFF` | Electric blue buttons, active links, primary borders |
| **Secondary Accent** | `#36D6E8` | High-tech cyan highlights, gradient stops |
| **Highlight** | `#9B7BFF` | Violet accents, tag badges, node connections |
| **Text Main** | `#F5F7FC` | High-contrast readable typography |
| **Text Secondary** | `#A7B1C2` | Subheadings, metadata, card body copy |
| **Border Color** | `#26344B` | Subtle card borders, dividers, form field outlines |

---

## 4. Key Interactive Components

All interactive behaviors run on lightweight Vanilla JavaScript:
1. **Responsive Header & Mobile Drawer:** Smooth slide-out mobile navigation with hamburger toggle and dropdown accessibility.
2. **Scroll-Driven Sticky Navigation:** Dynamic backdrop blur and border shading on page scroll.
3. **Interactive 6-Step Development Timeline:** Clickable phase switcher (`Discover`, `Plan`, `Design`, `Develop`, `Test`, `Launch`) updating deliverables dynamically on `index.html` and `process.html`.
4. **Interactive 6-Stage AI Workflow Diagram:** Interactive visual node selector on `ai-solutions.html` and `ai-automation.html`.
5. **Interactive Business Intelligence Demo Dashboard:** Tabbed analytics viewer on `data-analytics.html` showing dynamic SVG vector curves for Sales, Finance, Operations, Marketing, and Executive KPI views.
6. **Portfolio & Technology Stack Filters:** Real-time category filtering on `portfolio.html` and `technologies.html`.
7. **Accessible FAQ Accordion:** ARIA-compliant expandable Q&A items on `faq.html`.
8. **Client-Side Form Validation & Demo Modals:** Accessible popup modals for Quote Requests, Contact Submissions, and Career Applications showing explicit non-storage demo notices.

---

## 5. Local Development & Preview Instructions

You do not need Node.js or any build tools to preview this website.

### Option A: VS Code Live Server (Recommended)
1. Open the project folder in Visual Studio Code.
2. Install the **Live Server** extension (by Ritwick Dey).
3. Right-click on `index.html` and select **"Open with Live Server"**.

### Option B: Python Simple HTTP Server
If Python 3 is installed on your machine, open PowerShell or terminal in the project directory:
```bash
python -m http.server 8000
```
Open your browser and navigate to: `http://localhost:8000`

### Option C: Direct File System
You can double-click any `.html` file (e.g. `index.html`) to open it directly in Google Chrome, Microsoft Edge, Mozilla Firefox, or Safari.

---

## 6. Hostinger Static Deployment Guide

Deploying this site to **Hostinger** takes less than 3 minutes:

### Method 1: Using Hostinger hPanel File Manager
1. Log in to your **Hostinger Control Panel (hPanel)**.
2. Under **Websites**, select your domain and click **Manage**.
3. In the sidebar or search bar, click on **File Manager**.
4. Double-click on the `public_html` directory.
5. If there is a default Hostinger `default.php` file, delete or rename it.
6. Upload all 24 `.html` files, `sitemap.xml`, and the entire `assets/` folder directly into `public_html`.
7. Ensure `index.html` is located directly in the root of `public_html` (e.g. `public_html/index.html`).
8. Visit your domain name in any web browser to view the live site.

### Method 2: Using FTP / SFTP (FileZilla, Cyberduck)
1. Locate your FTP credentials in Hostinger hPanel under **Files > FTP Accounts**.
2. Connect using your FTP client (Host, Username, Password, Port `21` for FTP or `22` for SFTP).
3. Navigate to the remote directory `/public_html`.
4. Drag and drop all project files (`*.html`, `sitemap.xml`, and `assets/`) into `/public_html`.
5. Once transfer completes (Status 226), clear browser cache and test.

---

## 7. Customization & Brand Transition Guide

To transition this professional demo into an actual corporate site:

1. **Company Name & Logo:**
   - In all HTML files, replace `IT COMPANY` with the company's real brand name.
   - Replace the SVG symbol in `<header>` and `<footer>` with your client's registered SVG or PNG logo mark.
2. **Contact Details & Address:**
   - Replace `Plot No. 000, Demo Road, Sample Area, Hyderabad, Telangana – 000000` with the actual headquarters address.
   - Replace phone `0000000000` and email `demo@example.com` in header, footer, `contact.html`, and `request-quote.html`.
3. **Form Backend Handlers:**
   - The current forms run client-side JavaScript demos. To connect them to real email or CRM systems, point `<form action="...">` to Formspree, Web3Forms, Basin, or an API gateway endpoint.
4. **Image Assets:**
   - Follow the detailed prompts in `IMAGE-GENERATION-GUIDE.md` to generate production images via Google Flow and place them into `assets/images/`.

---

## 8. License & Commercial Rights

This template is structured for customization and deployment for technology businesses, software engineering consultancies, and digital agencies. All layout code, CSS stylesheets, and scripts are modular and reusable.
