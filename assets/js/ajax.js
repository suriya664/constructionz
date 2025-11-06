/*
 * SmartBuild Construction Template - AJAX Functionality
 * Form Handling and Dynamic Content Loading
 */

(function() {
  'use strict';

  // ===== LOAD PARTIALS (Header, Footer, etc.) =====
  // Inline fallback templates for file:// or fetch failures
  const INLINE_PARTIALS = {
    header: `<!-- SmartBuild Construction - Header -->
<header>
  <nav class="navbar" id="navbar">
    <div class="container">
      <div class="d-flex justify-content-between align-items-center">
        <a href="index.html" class="navbar-brand">SmartBuild</a>
        
        <button class="navbar-toggler" id="navbarToggler" aria-label="Toggle navigation">
          <i class="fas fa-bars"></i>
        </button>
        
        <ul class="navbar-nav" id="navbarNav">
          <li class="nav-item"><a class="nav-link active" href="index.html">Home</a></li>
          <li class="nav-item"><a class="nav-link" href="about.html">About</a></li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="services.html">Services</a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="services.html">All Services</a></li>
              <li><a class="dropdown-item" href="services.html#residential">Residential</a></li>
              <li><a class="dropdown-item" href="services.html#commercial">Commercial</a></li>
              <li><a class="dropdown-item" href="services.html#interior">Interior</a></li>
            </ul>
          </li>
          <li class="nav-item"><a class="nav-link" href="projects.html">Projects</a></li>
          <li class="nav-item"><a class="nav-link" href="team.html">Team</a></li>
          <li class="nav-item"><a class="nav-link" href="blog.html">Blog</a></li>
          <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
          <li class="nav-item"><a class="btn btn-primary" href="login.html">Login</a></li>
        </ul>
      </div>
    </div>
  </nav>
</header>` ,
    footer: `<!-- SmartBuild Construction - Footer -->
<footer class="footer">
  <div class="container">
    <div class="row">
      <div class="col-lg-4 col-md-6 mb-4">
        <h5>SmartBuild</h5>
        <p>Building excellence since 2010. We specialize in residential, commercial, and interior construction projects across India.</p>
        <div class="social-links mt-3">
          <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
          <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
          <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
          <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
        </div>
      </div>
      <div class="col-lg-2 col-md-6 mb-4">
        <h5>Quick Links</h5>
        <ul class="list-unstyled">
          <li><a href="about.html">About Us</a></li>
          <li><a href="services.html">Services</a></li>
          <li><a href="projects.html">Projects</a></li>
          <li><a href="team.html">Team</a></li>
          <li><a href="blog.html">Blog</a></li>
        </ul>
      </div>
      <div class="col-lg-3 col-md-6 mb-4">
        <h5>Services</h5>
        <ul class="list-unstyled">
          <li><a href="services.html#residential">Residential Construction</a></li>
          <li><a href="services.html#commercial">Commercial Buildings</a></li>
          <li><a href="services.html#interior">Interior Design</a></li>
          <li><a href="services.html">Renovation</a></li>
        </ul>
      </div>
      <div class="col-lg-3 col-md-6 mb-4">
        <h5>Contact Info</h5>
        <p><i class="fas fa-map-marker-alt"></i> 123 Construction Street, Mumbai, India</p>
        <p><i class="fas fa-phone"></i> +91 98765 43210</p>
        <p><i class="fas fa-envelope"></i> info@smartbuild.in</p>
      </div>
    </div>
    <div class="footer-bottom">
      <p class="mb-0">&copy; 2025 SmartBuild Construction. All rights reserved.</p>
    </div>
  </div>
</footer>
<button class="back-to-top" id="backToTop" aria-label="Back to top">
  <i class="fas fa-arrow-up"></i>
</button>` ,
    preloader: `<div class="preloader" id="preloader"><div class="loader"></div></div>`
  };

  function loadPartial(url, elementId) {
    const isFileProtocol = window.location.protocol === 'file:';
    const element = document.getElementById(elementId);
    if (!element) return;

    // Prefer fetch for http(s); fallback to inline if file:// or on error
    if (!isFileProtocol) {
      fetch(url)
        .then(response => {
          if (!response.ok) throw new Error('Network response was not ok');
          return response.text();
        })
        .then(html => {
          element.innerHTML = html;
          initializeAfterLoad();
        })
        .catch(() => {
          // Fallback based on requested url
          if (url.includes('header.html')) element.innerHTML = INLINE_PARTIALS.header;
          else if (url.includes('footer.html')) element.innerHTML = INLINE_PARTIALS.footer;
          else if (url.includes('preloader.html')) element.innerHTML = INLINE_PARTIALS.preloader;
          initializeAfterLoad();
        });
    } else {
      // file:// fallback
      if (url.includes('header.html')) element.innerHTML = INLINE_PARTIALS.header;
      else if (url.includes('footer.html')) element.innerHTML = INLINE_PARTIALS.footer;
      else if (url.includes('preloader.html')) element.innerHTML = INLINE_PARTIALS.preloader;
      initializeAfterLoad();
    }
  }

  // Load partials on page load
  document.addEventListener('DOMContentLoaded', function() {
    const currentPath = window.location.pathname;
    const isInPages = currentPath.includes('/pages/');
    const prefix = isInPages ? '../' : '';

    // Load header
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (headerPlaceholder) {
      loadPartial(prefix + 'partials/header.html', 'header-placeholder');
    }

    // Load footer
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
      loadPartial(prefix + 'partials/footer.html', 'footer-placeholder');
    }

    // Load preloader
    const preloaderPlaceholder = document.getElementById('preloader-placeholder');
    if (preloaderPlaceholder) {
      loadPartial(prefix + 'partials/preloader.html', 'preloader-placeholder');
    }
  });

  // Re-initialize after loading partials
  function initializeAfterLoad() {
    // Re-initialize navigation
    if (typeof window.initNav !== 'undefined') {
      window.initNav();
    }
  }

  // ===== CONTACT FORM SUBMISSION =====
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const formData = new FormData(contactForm);
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      
      // Show loading state
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';

      // Simulate AJAX submission (replace with actual endpoint)
      fetch('contact.php', {
        method: 'POST',
        body: formData
      })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          showNotification('Thank you! Your message has been sent.', 'success');
          contactForm.reset();
        } else {
          showNotification('Error sending message. Please try again.', 'error');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        showNotification('Error sending message. Please try again.', 'error');
      })
      .finally(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
      });
    });
  }

  // ===== NEWSLETTER SUBSCRIPTION =====
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const email = newsletterForm.querySelector('input[type="email"]').value;
      const submitBtn = newsletterForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      
      submitBtn.disabled = true;
      submitBtn.textContent = 'Subscribing...';

      // Simulate AJAX submission
      fetch('newsletter.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email })
      })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          showNotification('Thank you for subscribing!', 'success');
          newsletterForm.reset();
        } else {
          showNotification('Subscription failed. Please try again.', 'error');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        showNotification('Subscription failed. Please try again.', 'error');
      })
      .finally(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
      });
    });
  }

  // ===== NOTIFICATION SYSTEM =====
  function showNotification(message, type) {
    // Remove existing notification
    const existing = document.querySelector('.notification');
    if (existing) {
      existing.remove();
    }

    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
      <div class="notification-content">
        <span>${message}</span>
        <button class="notification-close">&times;</button>
      </div>
    `;

    document.body.appendChild(notification);

    // Show notification
    setTimeout(() => {
      notification.classList.add('show');
    }, 10);

    // Auto hide after 5 seconds
    setTimeout(() => {
      notification.classList.remove('show');
      setTimeout(() => notification.remove(), 300);
    }, 5000);

    // Close button
    notification.querySelector('.notification-close').addEventListener('click', function() {
      notification.classList.remove('show');
      setTimeout(() => notification.remove(), 300);
    });
  }

  // Add notification styles
  const style = document.createElement('style');
  style.textContent = `
    .notification {
      position: fixed;
      top: 20px;
      right: 20px;
      background: white;
      padding: 1rem 1.5rem;
      border-radius: 0.5rem;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      z-index: 10000;
      transform: translateX(400px);
      transition: transform 0.3s ease;
      max-width: 400px;
    }
    .notification.show {
      transform: translateX(0);
    }
    .notification-success {
      border-left: 4px solid #28a745;
    }
    .notification-error {
      border-left: 4px solid #dc3545;
    }
    .notification-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
    }
    .notification-close {
      background: none;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
      color: #666;
    }
  `;
  document.head.appendChild(style);

})();

