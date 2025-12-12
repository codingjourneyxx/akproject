# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static HTML website for Aparna Kaushik, a luxury architecture and interior design firm. The site was downloaded/archived from aparnakaushik.com.

## Architecture

**Static HTML Site Structure:**
- Root HTML pages: `about-us.html`, `brand.html`, `contact.html`, `portfolio.html`, `press.html`, `service.html`, `video.html`
- Portfolio detail pages: `portfoliodetail/*.html` (individual project showcases)
- Assets directory: `front/` containing CSS, JS, fonts, and images
- Uploaded images: `images/` (banners, CMS content)

**CSS Architecture (load order matters):**
1. `bootstrap.min.css` - Framework
2. `font-awesome.css` - Icons
3. `owl.carousel.min.css`, `slick.css`, `fotorama.css` - Carousel/slider plugins
4. `jgallery.min.css`, `jquery.mCustomScrollbar.css` - Gallery and scrollbar plugins
5. `demo.css`, `global.css` - Base styles
6. `style.css` - Main custom styles
7. `responsive.css` - Media queries

**JavaScript Stack:**
- jQuery (foundation)
- Bootstrap JS
- Owl Carousel, Slick, Fotorama - Sliders/carousels
- Isotope - Grid layouts
- mCustomScrollbar - Custom scrollbars
- `common.js` - Site-specific interactions (menu popup, scroll effects, anchor links)

## Key Interactions in common.js

- Menu popup: `.menu a` triggers `.bg-popup` fadeIn
- Sticky header: Appears after 50px scroll
- Enquiry form modal: `#enq` triggers `.Offr_form_div`
- Smooth scroll: `.href_click` elements with hash hrefs
- First visit video intro: Uses sessionStorage to show intro video once per session

## Fonts

Custom fonts loaded from `front/fonts/`:
- FuturaBT-Light
- FuturaLT (regular and bold)
- FontAwesome icons

External: Adobe Typekit (`use.typekit.net/tcy8bdu.css`)

## Development Notes

This is a static site - no build process, package manager, or server required. Open HTML files directly in a browser or serve via any static file server.
