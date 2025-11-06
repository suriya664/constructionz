/*
 * SmartBuild Construction Template - Main JavaScript
 * Animations, Navigation, and Core Functionality
 */

(function() {
  'use strict';

  // ===== PRELOADER =====
  window.addEventListener('load', function() {
    const preloader = document.getElementById('preloader');
    if (preloader) {
      setTimeout(function() {
        preloader.classList.add('hidden');
      }, 500);
    }
  });

  // ===== NAVBAR SCROLL EFFECT =====
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  // ===== MOBILE NAVBAR TOGGLE =====
  const navbarToggler = document.getElementById('navbarToggler');
  const navbarNav = document.getElementById('navbarNav');
  
  if (navbarToggler && navbarNav) {
    navbarToggler.addEventListener('click', function() {
      navbarNav.classList.toggle('active');
      const icon = navbarToggler.querySelector('i');
      if (navbarNav.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
      } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!navbar.contains(e.target) && navbarNav.classList.contains('active')) {
        navbarNav.classList.remove('active');
        const icon = navbarToggler.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    });
  }

  // ===== ACTIVE NAV LINK =====
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(function(link) {
    const linkPath = new URL(link.href).pathname;
    if (linkPath === currentPath || currentPath.includes(linkPath)) {
      link.classList.add('active');
    }
  });

  // ===== BACK TO TOP BUTTON =====
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 300) {
        backToTop.classList.add('show');
      } else {
        backToTop.classList.remove('show');
      }
    });

    backToTop.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href.length > 1) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          const headerOffset = 80;
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });

          // Close mobile menu if open
          if (navbarNav && navbarNav.classList.contains('active')) {
            navbarNav.classList.remove('active');
          }
        }
      }
    });
  });

  // ===== DROPDOWN MENU =====
  const dropdowns = document.querySelectorAll('.dropdown');
  dropdowns.forEach(function(dropdown) {
    const toggle = dropdown.querySelector('.dropdown-toggle');
    const menu = dropdown.querySelector('.dropdown-menu');
    
    if (toggle && menu) {
      toggle.addEventListener('click', function(e) {
        e.preventDefault();
        menu.classList.toggle('show');
      });
    }
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', function(e) {
    dropdowns.forEach(function(dropdown) {
      if (!dropdown.contains(e.target)) {
        const menu = dropdown.querySelector('.dropdown-menu');
        if (menu) {
          menu.classList.remove('show');
        }
      }
    });
  });

  // ===== ANIMATION ON SCROLL (AOS Alternative) =====
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in-up');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe elements with animation class
  document.querySelectorAll('.card, .section-title, .service-item').forEach(function(el) {
    observer.observe(el);
  });

  // ===== COUNTER ANIMATION =====
  function animateCounter(element, target, duration) {
    let start = 0;
    const increment = target / (duration / 16);

    // Ensure we show +0 at start
    element.textContent = `+0`;

    const timer = setInterval(function() {
      start += increment;
      if (start >= target) {
        element.textContent = `+${target}`;
        clearInterval(timer);
      } else {
        element.textContent = `+${Math.floor(start)}`;
      }
    }, 16);
  }

  const counters = document.querySelectorAll('.counter');
  const counterObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        const target = parseInt(entry.target.getAttribute('data-target'));
        animateCounter(entry.target, target, 2000);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(function(counter) {
    counterObserver.observe(counter);
  });

})();

