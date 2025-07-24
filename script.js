// script.js

document.addEventListener('DOMContentLoaded', () => {
  // =========== Smooth Scroll ===========
  const navLinks = document.querySelectorAll('.navbar a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetID = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetID);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 60,
          behavior: 'smooth'
        });
      }
    });
  });

  // =========== Active Link Highlight ===========
  const sections = document.querySelectorAll('main section');
  const navItems = document.querySelectorAll('.navbar a');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 70;
      if (pageYOffset >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navItems.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  });

  // =========== Back To Top Button ===========
  const backToTopBtn = document.createElement('button');
  backToTopBtn.textContent = '↑';
  backToTopBtn.id = 'backToTopBtn';
  backToTopBtn.title = 'Back to top';
  document.body.appendChild(backToTopBtn);

  backToTopBtn.style.cssText = `
    position: fixed;
    bottom: 40px;
    right: 40px;
    padding: 10px 15px;
    font-size: 24px;
    border: none;
    border-radius: 50%;
    background-color: #ff6f61;
    color: white;
    cursor: pointer;
    display: none;
    z-index: 1000;
    box-shadow: 0 2px 8px rgba(0,0,0,0.3);
    transition: background-color 0.3s;
  `;
  backToTopBtn.addEventListener('mouseenter', () => backToTopBtn.style.backgroundColor = '#ff3b2f');
  backToTopBtn.addEventListener('mouseleave', () => backToTopBtn.style.backgroundColor = '#ff6f61');

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      backToTopBtn.style.display = 'block';
    } else {
      backToTopBtn.style.display = 'none';
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  });

  // =========== Dark Mode Toggle ===========
  const darkModeBtn = document.createElement('button');
  darkModeBtn.textContent = '🌓';
  darkModeBtn.id = 'darkModeBtn';
  darkModeBtn.title = 'Toggle dark mode';
  document.body.appendChild(darkModeBtn);

  darkModeBtn.style.cssText = `
    position: fixed;
    bottom: 40px;
    left: 40px;
    padding: 10px 15px;
    font-size: 24px;
    border: none;
    border-radius: 50%;
    background-color: #2a5298;
    color: white;
    cursor: pointer;
    z-index: 1000;
    box-shadow: 0 2px 8px rgba(0,0,0,0.3);
    transition: background-color 0.3s;
  `;
  darkModeBtn.addEventListener('mouseenter', () => darkModeBtn.style.backgroundColor = '#1e3c72');
  darkModeBtn.addEventListener('mouseleave', () => darkModeBtn.style.backgroundColor = '#2a5298');

  // Load dark mode preference
  if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
  }

  darkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if(document.body.classList.contains('dark-mode')) {
      localStorage.setItem('darkMode', 'enabled');
    } else {
      localStorage.setItem('darkMode', 'disabled');
    }
  });

  // =========== Typing Animation for Tagline ===========
  const tagline = "Final-Year IT Student | Aspiring Data Scientist | Full-Stack & Python Developer";
  const taglineElement = document.querySelector('.hero p');
  let index = 0;
  taglineElement.textContent = '';
  function typeWriter() {
    if (index < tagline.length) {
      taglineElement.textContent += tagline.charAt(index);
      index++;
      setTimeout(typeWriter, 50);
    }
  }
  typeWriter();

  // =========== Reveal On Scroll ===========
  const revealElements = document.querySelectorAll('.section');
  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    revealElements.forEach(el => {
      const elementTop = el.getBoundingClientRect().top;
      const revealPoint = 150;
      if (elementTop < windowHeight - revealPoint) {
        el.classList.add('active');
      } else {
        el.classList.remove('active');
      }
    });
  };
  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();

  // =========== Animated Counter (Example) ===========
  // For this, add a class .counter and data-target attribute to elements you want to animate count
  const counters = document.querySelectorAll('.counter');
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const speed = 200; // lower is faster
      const increment = target / speed;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 15);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });
});
