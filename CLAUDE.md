# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static HTML website for Aparna Kaushik, a luxury architecture and interior design firm. The site was downloaded/archived from aparnakaushik.com.

## Architecture

**Static HTML Site Structure:**
- `index.html` - Homepage with animated logo intro, banner carousel, and portfolio slider
- Root HTML pages: `about-us.html`, `brand.html`, `contact.html`, `portfolio.html`, `press.html`, `service.html`, `video.html`
- Portfolio detail pages: `portfoliodetail/*.html` (individual project showcases)
- Assets directory: `front/` containing CSS, JS, fonts, and images
- Uploaded images: `images/` (banners, CMS content)
- Service images: `services/` (service section thumbnails)

**CSS Architecture (load order matters):**
1. `bootstrap.min.css` - Framework
2. `font-awesome.css` - Icons
3. `owl.carousel.min.css`, `slick.css`, `fotorama.css` - Carousel/slider plugins
4. `jgallery.min.css`, `jquery.mCustomScrollbar.css` - Gallery and scrollbar plugins
5. `demo.css`, `global.css` - Base styles and CSS reset with font-face definitions
6. `style.css` - Main custom styles
7. `responsive.css` - Media queries

**JavaScript Stack:**
- jQuery (foundation)
- Bootstrap JS
- Owl Carousel, Slick, Fotorama - Sliders/carousels
- Isotope - Grid layouts
- mCustomScrollbar - Custom scrollbars
- `common.js` - Site-specific interactions

## Key Interactions in common.js

- Menu popup: `.bgr_mn_cl` click toggles `.global-menu` mega menu
- Sticky header: Appears after 50px scroll (header slides from -106px to 0)
- Enquiry form modal: `#enq` triggers `.Offr_form_div` fadeIn
- Newsletter modal: `footer a.sub_btn` triggers `.SubscribeDiv`
- Smooth scroll: `.href_click` elements with hash hrefs
- First visit video intro: Uses sessionStorage to show intro video once per session
- Anti-copy protection: Disables right-click, Ctrl+C/V/U, F12, and DevTools shortcuts

## Key CSS Classes

- `.header_menu.HomePage` / `.header_menu.All_page` - Different header styles for homepage vs inner pages
- `.global-menu` - Mega menu overlay
- `.home_brad_st` - Brand story sections with split layout
- `.home_service` - Services grid section
- `.home_portfolio` - Portfolio carousel section
- `.Mobile_disNone` / `.Mobile_disBlk` - Responsive visibility helpers

## Fonts

Custom fonts loaded from `front/fonts/`:
- FuturaBT-Light (body text, font-family: 'Futura Lt BT')
- FuturaLT (regular and bold)
- FuturaBT-MediumItalic
- FontAwesome icons

External: Adobe Typekit (`use.typekit.net/tcy8bdu.css`)

## Development Notes

This is a static site - no build process, package manager, or server required. Open HTML files directly in a browser or serve via any static file server.

Forms submit to live endpoints at `aparnakaushik.com` (newsletter, enquiry) - these will not work locally without backend.
