# Premium Healthcare HTML Template (Bootstrap 5)

## Overview
Medicare is a fully responsive and modern healthcare HTML template built with **Bootstrap 5**, **HTML5**, and **CSS3**.  
Perfect for clinics, medical centers, private practices, dentists, telemedicine platforms, and healthcare service providers.

The template is lightweight, fast, cleanly coded, and easy to customize.

---

## Features
- Built with **Bootstrap 5.3.8**
- 100% responsive — works on all devices
- Modern, clean, professional design
- Easy-to-edit HTML structure
- Organized CSS with variables for quick theme customization
- Free Google Fonts included
- Working appointment form (static front-end)
- Cross-browser compatible
- Well-commented and well-organized code

---

## Folder Structure

/medicare-template
│
├── index.html
├── about.html
├── services.html
├── team.html
├── booking.html
├── contact.html
│
├── assets/
│ ├── css/
│ │ ├── bootstrap.min.css
│ │ └── style.css
│ │
│ ├── js/
│ │ ├── bootstrap.bundle.min.js
│ │ └── main.js
│ │
│ ├── images/
│ │ ├── hero.jpg
│ │ ├── doctor-1.jpg
│ │ ├── doctor-2.jpg
│ │ ├── doctor-3.jpg
│ │ └── (other placeholder images)
│
└── documentation/
└── readme.md

---

## How to Install & Preview

### **Option 1 — Using VS Code (Recommended)**
1. Open the template folder in **VS Code**.
2. Install the **Live Server** extension.
3. Right-click `index.html` → **Open with Live Server**.

### **Option 2 — Without VS Code**
1. Open the folder on your computer.
2. Double-click `index.html` to open it in your browser.

---

## Customization Guide

### **1. Editing Colors**
Open `assets/css/style.css`  
Modify the CSS variables at the top:

```css
:root {
    --primary: #0d6efd;
    --secondary: #0a3d62;
    --accent: #1dd1a1;
}
2. Replacing Images
Add your new images inside: assets/images/

Keep the same names, or update the HTML like:

html
Copy code
<img src="assets/images/doctor-1.jpg" alt="Doctor">
3. Adding New Pages
Create a new file (e.g., new-page.html)

Copy the header + footer from any existing page

Add the new page link inside the navbar:

html
Copy code
<li class="nav-item">
    <a class="nav-link" href="new-page.html">New Page</a>
</li>
Appointment Form Behavior
The template includes a front-end only appointment form.

When the form is submitted, the page will refresh.

The form does not send emails by default.

Buyers may integrate:

PHP mail handler

Formspree

Netlify Forms

Zapier

Custom backend API

This is the correct behavior for HTML templates on TemplateMonster.

Included Libraries
Bootstrap 5.3.8 (CSS + JavaScript)

Google Fonts (Poppins / Open Sans)

Font Awesome or Bootstrap Icons (if included)

Browser Compatibility
Chrome

Safari

Firefox

Edge

Opera

License
All placeholder images are for demo purposes only.
Buyers must replace them with their own licensed images.

See license.txt for full license information.

Support
If additional help is needed customizing the template, refer to this documentation.

