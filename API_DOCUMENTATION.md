# Cybersecurity Website - Comprehensive API Documentation

## Project Overview

This is a cybersecurity educational website built with HTML5, CSS3, Bootstrap 5, and vanilla JavaScript. The project provides information about cybersecurity threats, safety tips, and includes interactive components for user engagement.

## Table of Contents

1. [JavaScript APIs](#javascript-apis)
2. [HTML Components](#html-components)
3. [CSS Classes and Styling](#css-classes-and-styling)
4. [Usage Examples](#usage-examples)
5. [Installation and Setup](#installation-and-setup)

---

## JavaScript APIs

### Contact Form Validation API

**Location:** `js/script.js` (Lines 5-14)

**Description:** Validates contact form inputs using Bootstrap's built-in validation classes.

**Public Functions:**

#### Form Validation Handler
```javascript
// Auto-validates contact form on submit
form.addEventListener('submit', (event) => {
  if (!form.checkValidity()) {
    event.preventDefault();
    event.stopPropagation();
  }
  form.classList.add('was-validated');
}, false);
```

**Required Elements:**
- Form element with `id="contactForm"`
- Input fields with `required` attribute
- Bootstrap validation classes

**Usage Example:**
```html
<form id="contactForm" novalidate>
  <input type="text" class="form-control" id="nombre" required />
  <div class="invalid-feedback">Por favor ingresa tu nombre.</div>
  <button type="submit" class="btn btn-primary">Enviar</button>
</form>
```

---

### Security Test Modal API

**Location:** `js/script.js` (Lines 16-57)

**Description:** Interactive security assessment tool that scores users based on their security practices.

**Public Functions:**

#### Modal Initialization
```javascript
const testModal = new bootstrap.Modal(testModalElement);
```

#### Test Score Calculation
```javascript
// Calculates security score (0-3 points)
let score = 0;
score += Number(document.getElementById('q1').value);
score += Number(document.getElementById('q2').value);
score += Number(document.getElementById('q3').value);
```

#### Result Display Function
```javascript
// Displays personalized feedback based on score
if (score === 3) {
  message = '<div class="alert alert-success">¡Excelente! Tu seguridad es fuerte.</div>';
} else if (score === 2) {
  message = '<div class="alert alert-warning">Buen trabajo, pero aún puedes mejorar.</div>';
} else {
  message = '<div class="alert alert-danger">Debes mejorar tus prácticas de seguridad.</div>';
}
```

**Required Elements:**
- Button with `id="openTest"`
- Modal with `id="securityTestModal"`
- Form with `id="testForm"`
- Select elements with IDs: `q1`, `q2`, `q3`
- Result container with `id="resultadoTest"`

**Usage Example:**
```html
<!-- Trigger Button -->
<button class="btn btn-success" id="openTest">Realizar Test de Seguridad</button>

<!-- Modal Structure -->
<div class="modal fade" id="securityTestModal">
  <div class="modal-dialog">
    <div class="modal-content">
      <form id="testForm">
        <select class="form-select" id="q1" required>
          <option value="1">Sí</option>
          <option value="0">No</option>
        </select>
        <!-- More questions... -->
        <button type="submit" class="btn btn-primary">Ver Resultado</button>
      </form>
      <div id="resultadoTest" style="display:none;"></div>
    </div>
  </div>
</div>
```

---

## HTML Components

### Navigation Component

**Location:** All HTML files

**Description:** Responsive navigation bar with active state management.

**Structure:**
```html
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container">
    <a class="navbar-brand" href="index.html">CiberSeguridad</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item"><a class="nav-link active" href="index.html">Inicio</a></li>
        <li class="nav-item"><a class="nav-link" href="amenazas.html">Amenazas Comunes</a></li>
        <li class="nav-item"><a class="nav-link" href="consejos.html">Consejos de Seguridad</a></li>
      </ul>
    </div>
  </div>
</nav>
```

**Features:**
- Responsive collapsible menu
- Active page highlighting
- Brand logo linking to home

---

### Hero Header Component

**Location:** `index.html` (Lines 31-42)

**Description:** Eye-catching header with floating image animation.

**Structure:**
```html
<header class="text-center p-5 bg-primary text-white">
  <div class="container">
    <h1>Bienvenido a la Guía de Ciberseguridad</h1>
    <p class="lead">Protege tu información y navega seguro en el mundo digital</p>
    <div class="floating-container mt-3">
      <img src="img/seguridad-digital.jpeg" alt="Seguridad digital" class="img-fluid rounded floating-img" />
    </div>
  </div>
</header>
```

**Features:**
- Gradient background
- Floating image animation on hover
- Responsive design

---

### Threat Cards Component

**Location:** `amenazas.html` (Lines 42-83)

**Description:** Grid of cards displaying different cybersecurity threats.

**Structure:**
```html
<div class="row g-4">
  <div class="col-md-6 col-lg-3">
    <div class="card h-100 shadow-sm">
      <img src="img/phishing.webp" class="card-img-top" alt="Phishing" />
      <div class="card-body">
        <h5 class="card-title">Phishing</h5>
        <p class="card-text">Threat description...</p>
      </div>
    </div>
  </div>
  <!-- More cards... -->
</div>
```

**Features:**
- Responsive grid layout
- Equal height cards
- Optimized images with consistent sizing

---

### Image Carousel Component

**Location:** `amenazas.html` (Lines 86-132)

**Description:** Interactive carousel showcasing real-world cybersecurity cases.

**Structure:**
```html
<div id="casosCarousel" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="img/phishing.webp" class="d-block w-100" alt="Ejemplo Phishing" />
      <div class="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded">
        <h5>Phishing masivo a usuarios de banco en 2022</h5>
        <p>Usuarios recibieron correos falsos solicitando datos bancarios.</p>
      </div>
    </div>
    <!-- More slides... -->
  </div>
  <!-- Navigation controls -->
</div>
```

**Features:**
- Auto-playing slideshow
- Navigation controls
- Overlay captions with transparency
- Responsive image sizing

---

### Contact Form Component

**Location:** `consejos.html` (Lines 45-68)

**Description:** Validated contact form with Bootstrap styling and JavaScript validation.

**Structure:**
```html
<form id="contactForm" novalidate>
  <div class="mb-3">
    <label for="nombre" class="form-label">Nombre</label>
    <input type="text" class="form-control" id="nombre" required />
    <div class="invalid-feedback">Por favor ingresa tu nombre.</div>
  </div>
  
  <div class="mb-3">
    <label for="email" class="form-label">Correo electrónico</label>
    <input type="email" class="form-control" id="email" required />
    <div class="invalid-feedback">Por favor ingresa un correo válido.</div>
  </div>
  
  <div class="mb-3">
    <label for="mensaje" class="form-label">Mensaje</label>
    <textarea class="form-control" id="mensaje" rows="3" required></textarea>
    <div class="invalid-feedback">Por favor escribe tu mensaje.</div>
  </div>

  <button type="submit" class="btn btn-primary">Enviar</button>
</form>
```

**Features:**
- Real-time validation
- Custom error messages
- Email format validation
- Required field validation

---

## CSS Classes and Styling

### Custom Utility Classes

#### `.floating-container` and `.floating-img`
**Location:** `css/style.css` (Lines 50-60)

**Purpose:** Creates floating animation effect for images.

```css
.floating-container {
  display: inline-block;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.floating-img:hover {
  transform: translateY(-12px) scale(1.03);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
}
```

**Usage:**
```html
<div class="floating-container">
  <img src="image.jpg" class="floating-img" alt="Description" />
</div>
```

#### `.card-img-top` Override
**Location:** `css/style.css` (Lines 33-37)

**Purpose:** Ensures consistent card image sizing.

```css
.card-img-top {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
```

#### Custom Button Styling
**Location:** `css/style.css` (Lines 25-32)

**Purpose:** Custom primary button colors with hover effects.

```css
.btn-primary {
  background-color: #0052D4;
  border-color: #0052D4;
}

.btn-primary:hover {
  background-color: #4364F7;
  border-color: #4364F7;
}
```

#### Gradient Header Background
**Location:** `css/style.css` (Lines 14-17)

```css
header {
  background: linear-gradient(90deg, #0052D4, #4364F7, #6FB1FC);
  color: white;
}
```

---

## Usage Examples

### Adding a New Threat Card

```html
<div class="col-md-6 col-lg-3">
  <div class="card h-100 shadow-sm">
    <img src="img/new-threat.jpg" class="card-img-top" alt="New Threat" />
    <div class="card-body">
      <h5 class="card-title">New Cyber Threat</h5>
      <p class="card-text">Description of the new threat and its implications.</p>
    </div>
  </div>
</div>
```

### Implementing Form Validation on New Forms

```javascript
// Add this to your JavaScript file
const newForm = document.getElementById('newFormId');
if (newForm) {
  newForm.addEventListener('submit', (event) => {
    if (!newForm.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }
    newForm.classList.add('was-validated');
  }, false);
}
```

### Creating Custom Security Test Questions

```html
<div class="mb-3">
  <label>New security question?</label>
  <select class="form-select" id="q4" required>
    <option value="">Selecciona</option>
    <option value="1">Sí</option>
    <option value="0">No</option>
  </select>
</div>
```

Then update the JavaScript scoring:
```javascript
score += Number(document.getElementById('q4').value);
```

### Adding Floating Effect to New Images

```html
<div class="floating-container">
  <img src="new-image.jpg" class="img-fluid rounded floating-img" alt="New Image" />
</div>
```

---

## Installation and Setup

### Prerequisites
- Modern web browser
- No server requirements (static HTML site)

### Setup Instructions

1. **Clone or download the project:**
   ```bash
   git clone [repository-url]
   cd cybersecurity-website
   ```

2. **File structure:**
   ```
   project/
   ├── index.html
   ├── amenazas.html
   ├── consejos.html
   ├── css/
   │   └── style.css
   ├── js/
   │   └── script.js
   ├── img/
   │   ├── seguridad-digital.jpeg
   │   ├── phishing.webp
   │   ├── ransomware.jpeg
   │   ├── malware.jpg
   │   └── ddos.jpg
   └── README.md
   ```

3. **Run locally:**
   - Simply open any `.html` file in a modern web browser
   - For development, use a local server:
     ```bash
     python -m http.server 8000
     # or
     npx serve .
     ```

4. **Dependencies:**
   - Bootstrap 5.3.0 (loaded via CDN)
   - jQuery 3.6.0 (loaded via CDN)
   - All dependencies are included via CDN - no installation required

### Browser Compatibility
- Chrome 60+
- Firefox 55+
- Safari 11+
- Edge 79+

### Performance Considerations
- Images should be optimized for web (WebP format preferred)
- Bootstrap and jQuery are loaded from CDN for better caching
- CSS animations use `transform` for better performance

---

## API Response Formats

### Security Test Results

The security test returns one of three result types:

```javascript
// Perfect Score (3/3)
{
  type: "success",
  message: "¡Excelente! Tu seguridad es fuerte.",
  class: "alert-success"
}

// Good Score (2/3)
{
  type: "warning", 
  message: "Buen trabajo, pero aún puedes mejorar.",
  class: "alert-warning"
}

// Poor Score (0-1/3)
{
  type: "danger",
  message: "Debes mejorar tus prácticas de seguridad.",
  class: "alert-danger"
}
```

### Form Validation States

Bootstrap validation provides these states:

```css
/* Valid input */
.form-control:valid {
  border-color: #28a745;
}

/* Invalid input */
.form-control:invalid {
  border-color: #dc3545;
}

/* Feedback messages */
.invalid-feedback {
  display: block; /* when form has .was-validated */
}
```

---

## Customization Guide

### Changing Color Scheme

Update the CSS variables in `style.css`:

```css
:root {
  --primary-color: #0052D4;
  --secondary-color: #4364F7;
  --accent-color: #6FB1FC;
}

.btn-primary {
  background-color: var(--primary-color);
  border-color: var(--primary-color);
}
```

### Adding New Pages

1. Create new HTML file following the template structure
2. Update navigation in all existing files
3. Add corresponding JavaScript functionality if needed
4. Update this documentation

### Extending JavaScript Functionality

The JavaScript follows a modular pattern wrapped in an IIFE:

```javascript
(() => {
  'use strict';
  
  // Your new functionality here
  const newFeature = document.getElementById('newFeature');
  if (newFeature) {
    // Feature implementation
  }
})();
```

This ensures no global scope pollution and better maintainability.