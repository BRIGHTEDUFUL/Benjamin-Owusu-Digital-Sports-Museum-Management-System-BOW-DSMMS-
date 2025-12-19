// GFA Digital Sports Museum - Main JavaScript

// ==================== Hero Slideshow ====================
let currentSlide = 0;
let slideInterval;
const totalSlides = 4;
const slideDelay = 5000;

function initSlideshow() {
  const slides = document.querySelectorAll('.slide');
  const indicators = document.querySelectorAll('.indicator');
  
  if (slides.length === 0) return;
  
  // Start auto-play
  startAutoSlide();
  
  // Pause on hover
  const slideshow = document.querySelector('.hero-slideshow');
  if (slideshow) {
    slideshow.addEventListener('mouseenter', stopAutoSlide);
    slideshow.addEventListener('mouseleave', startAutoSlide);
  }
}

function startAutoSlide() {
  stopAutoSlide();
  slideInterval = setInterval(() => {
    nextSlide();
  }, slideDelay);
}

function stopAutoSlide() {
  if (slideInterval) {
    clearInterval(slideInterval);
  }
}

function goToSlide(index) {
  const slides = document.querySelectorAll('.slide');
  const indicators = document.querySelectorAll('.indicator');
  
  if (slides.length === 0) return;
  
  // Remove active class from all
  slides.forEach(slide => slide.classList.remove('active'));
  indicators.forEach(ind => ind.classList.remove('active'));
  
  // Set new index
  currentSlide = index;
  if (currentSlide >= totalSlides) currentSlide = 0;
  if (currentSlide < 0) currentSlide = totalSlides - 1;
  
  // Add active class
  slides[currentSlide].classList.add('active');
  indicators[currentSlide].classList.add('active');
}

function nextSlide() {
  goToSlide(currentSlide + 1);
}

function prevSlide() {
  goToSlide(currentSlide - 1);
}

// Keyboard navigation for slideshow
document.addEventListener('keydown', (e) => {
  const slideshow = document.querySelector('.hero-slideshow');
  if (!slideshow) return;
  
  if (e.key === 'ArrowLeft') {
    prevSlide();
    startAutoSlide();
  }
  if (e.key === 'ArrowRight') {
    nextSlide();
    startAutoSlide();
  }
});

// ==================== Archive Data ====================
const archives = [
  {
    id: 1,
    title: "1963 AFCON Trophy",
    type: "trophy",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=640&h=480&fit=crop",
    description: "Ghana's historic first Africa Cup of Nations victory, held on home soil. The Black Stars defeated Sudan 3-0 in the final.",
    year: 1963,
  },
  {
    id: 2,
    title: "1965 AFCON Defense",
    type: "trophy",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=640&h=480&fit=crop",
    description: "Ghana successfully defended their continental title in Tunisia, showcasing dominance in African football.",
    year: 1965,
  },
  {
    id: 3,
    title: "Accra Sports Stadium",
    type: "stadium",
    image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=640&h=480&fit=crop",
    description: "The iconic home of Ghana football, witness to countless historic moments and legendary matches.",
    year: 1952,
  },
  {
    id: 4,
    title: "Black Stars 2010 World Cup",
    type: "match",
    image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=640&h=480&fit=crop",
    description: "Ghana became only the third African nation to reach the World Cup quarter-finals in South Africa.",
    year: 2010,
  },
  {
    id: 5,
    title: "Vintage Memorabilia Collection",
    type: "memorabilia",
    image: "https://images.unsplash.com/photo-1518604666860-9ed391f76460?w=640&h=480&fit=crop",
    description: "Original jerseys, match balls, and memorabilia from Ghana's football golden era in the 1960s and 70s.",
    year: 1970,
  },
  {
    id: 6,
    title: "1978 AFCON Championship",
    type: "trophy",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=640&h=480&fit=crop",
    description: "Ghana claimed their third continental title on home soil, defeating Uganda 2-0 in the final.",
    year: 1978,
  },
  {
    id: 7,
    title: "1982 AFCON Victory",
    type: "trophy",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=640&h=480&fit=crop",
    description: "The Black Stars secured their fourth Africa Cup of Nations trophy in Libya.",
    year: 1982,
  },
  {
    id: 8,
    title: "Olympic Bronze 1992",
    type: "match",
    image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=640&h=480&fit=crop",
    description: "Ghana's U-23 team won bronze at the Barcelona Olympics, marking a historic Olympic achievement.",
    year: 1992,
  },
  {
    id: 9,
    title: "Cape Coast Stadium",
    type: "stadium",
    image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=640&h=480&fit=crop",
    description: "Modern 15,000-seat stadium in Cape Coast, hosting international matches and local competitions.",
    year: 2016,
  },
  {
    id: 10,
    title: "Golden Generation Jerseys",
    type: "memorabilia",
    image: "https://images.unsplash.com/photo-1518604666860-9ed391f76460?w=640&h=480&fit=crop",
    description: "Match-worn jerseys from Abedi Pele, Tony Yeboah, and the golden generation of Ghanaian football.",
    year: 1995,
  },
  {
    id: 11,
    title: "FIFA U-20 World Cup 2009",
    type: "trophy",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=640&h=480&fit=crop",
    description: "Ghana became the first African nation to win the FIFA U-20 World Cup in Egypt.",
    year: 2009,
  },
  {
    id: 12,
    title: "2006 World Cup Debut",
    type: "match",
    image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=640&h=480&fit=crop",
    description: "Ghana's historic first World Cup appearance in Germany, reaching the Round of 16.",
    year: 2006,
  },
];

const archiveTypes = ["all", "trophy", "stadium", "memorabilia", "match"];

// ==================== Timeline Data ====================
const timeline = [
  { year: 1957, event: "Ghana FA Founded", description: "The Ghana Football Association was established." },
  { year: 1963, event: "First AFCON Title", description: "Ghana wins first Africa Cup of Nations on home soil." },
  { year: 1965, event: "Back-to-Back Champions", description: "Successful defense of AFCON title in Tunisia." },
  { year: 1978, event: "Third AFCON Victory", description: "Ghana hosts and wins AFCON for the third time." },
  { year: 1982, event: "Fourth AFCON Title", description: "Black Stars claim fourth continental championship." },
  { year: 2006, event: "World Cup Debut", description: "Historic first FIFA World Cup appearance in Germany." },
  { year: 2009, event: "U-20 World Champions", description: "First African nation to win FIFA U-20 World Cup." },
  { year: 2010, event: "World Cup Quarter-Finals", description: "Third African nation to reach WC quarter-finals." },
];

// ==================== State Management ====================
let currentFilter = "all";
let currentSort = "year-desc";
let currentView = "grid";
let searchQuery = "";
let favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
let lightboxIndex = -1;
let isLoggedIn = false;
let activeAdminTab = "dashboard";
let activeTimelineYear = 1957;

// ==================== Utility Functions ====================
function $(selector) {
  return document.querySelector(selector);
}

function $$(selector) {
  return document.querySelectorAll(selector);
}

function showToast(message, type = "info") {
  const container = $("#toast-container") || createToastContainer();
  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `<span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

function createToastContainer() {
  const container = document.createElement("div");
  container.id = "toast-container";
  container.className = "toast-container";
  document.body.appendChild(container);
  return container;
}

// ==================== Mobile Menu ====================
function initMobileMenu() {
  const btn = $("#mobile-menu-btn");
  const nav = $("#mobile-nav");
  
  if (btn && nav) {
    btn.addEventListener("click", () => {
      nav.classList.toggle("open");
      const icon = btn.querySelector("svg");
      if (nav.classList.contains("open")) {
        icon.innerHTML = '<path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>';
      } else {
        icon.innerHTML = '<path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>';
      }
    });
  }
}

// ==================== Archive Functions ====================
function getFilteredArchives() {
  let result = archives;

  if (searchQuery) {
    const query = searchQuery.toLowerCase();
    result = result.filter(
      (item) =>
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query)
    );
  }

  if (currentFilter !== "all") {
    result = result.filter((item) => item.type === currentFilter);
  }

  result = [...result].sort((a, b) => {
    if (currentSort === "year-desc") return b.year - a.year;
    if (currentSort === "year-asc") return a.year - b.year;
    return a.title.localeCompare(b.title);
  });

  return result;
}

function toggleFavorite(id) {
  const index = favorites.indexOf(id);
  if (index > -1) {
    favorites.splice(index, 1);
  } else {
    favorites.push(id);
  }
  localStorage.setItem("favorites", JSON.stringify(favorites));
  renderArchives();
}

function renderArchiveCard(item) {
  const isFavorite = favorites.includes(item.id);
  return `
    <div class="card archive-card card-hover animate-slide-up" data-id="${item.id}">
      <div class="archive-card-image">
        <img src="${item.image}" alt="${item.title}" loading="lazy">
        <div class="archive-card-overlay"></div>
        <div class="archive-card-badge">
          <span class="badge badge-${item.type === 'trophy' ? 'secondary' : item.type === 'stadium' ? 'primary' : item.type === 'match' ? 'accent' : 'muted'}">${item.type}</span>
        </div>
        <div class="archive-card-actions">
          <button class="archive-card-action ${isFavorite ? 'active' : ''}" onclick="event.stopPropagation(); toggleFavorite(${item.id})">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="${isFavorite ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </button>
          <button class="archive-card-action" onclick="event.stopPropagation(); openLightbox(${item.id})">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
          </button>
        </div>
      </div>
      <div class="archive-card-content">
        <div class="archive-card-meta">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
            <line x1="16" y1="2" x2="16" y2="6"/>
            <line x1="8" y1="2" x2="8" y2="6"/>
            <line x1="3" y1="10" x2="21" y2="10"/>
          </svg>
          <span>${item.year}</span>
        </div>
        <h3 class="archive-card-title">${item.title}</h3>
        <p class="archive-card-description">${item.description}</p>
      </div>
    </div>
  `;
}

function renderArchiveListItem(item) {
  return `
    <div class="card archive-list-item" data-id="${item.id}" onclick="openLightbox(${item.id})">
      <img src="${item.image}" alt="${item.title}" class="archive-list-image" loading="lazy">
      <div class="archive-list-content">
        <div class="archive-list-meta">
          <span class="badge badge-${item.type === 'trophy' ? 'secondary' : 'muted'}" style="font-size: 0.625rem; padding: 0.125rem 0.5rem;">${item.type}</span>
          <span class="text-muted" style="font-size: 0.875rem;">${item.year}</span>
        </div>
        <h3 class="archive-list-title">${item.title}</h3>
        <p class="archive-list-description">${item.description}</p>
      </div>
    </div>
  `;
}

function renderArchives() {
  const container = $("#archive-container");
  if (!container) return;

  const filtered = getFilteredArchives();
  const countEl = $("#results-count");
  if (countEl) {
    countEl.textContent = `Showing ${filtered.length} of ${archives.length} items`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <svg class="empty-state-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="4" y1="21" x2="4" y2="14"/>
          <line x1="4" y1="10" x2="4" y2="3"/>
          <line x1="12" y1="21" x2="12" y2="12"/>
          <line x1="12" y1="8" x2="12" y2="3"/>
          <line x1="20" y1="21" x2="20" y2="16"/>
          <line x1="20" y1="12" x2="20" y2="3"/>
        </svg>
        <h3 class="empty-state-title">No Results Found</h3>
        <p class="empty-state-text">Try adjusting your search or filter criteria</p>
      </div>
    `;
    container.className = "";
    return;
  }

  if (currentView === "grid") {
    container.className = "archive-grid";
    container.innerHTML = filtered.map(renderArchiveCard).join("");
  } else {
    container.className = "archive-list";
    container.innerHTML = filtered.map(renderArchiveListItem).join("");
  }

  // Add click handlers for grid cards
  $$(".archive-card").forEach((card) => {
    card.addEventListener("click", () => {
      const id = parseInt(card.dataset.id);
      openLightbox(id);
    });
  });
}

function initArchiveFilters() {
  // Search
  const searchInput = $("#search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchQuery = e.target.value;
      renderArchives();
    });
  }

  // Filter buttons
  $$(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      currentFilter = btn.dataset.type;
      $$(".filter-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderArchives();
    });
  });

  // Sort select
  const sortSelect = $("#sort-select");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      currentSort = e.target.value;
      renderArchives();
    });
  }

  // View toggle
  $$(".view-toggle-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      currentView = btn.dataset.view;
      $$(".view-toggle-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderArchives();
    });
  });
}

// ==================== Lightbox ====================
function openLightbox(id) {
  const filtered = getFilteredArchives();
  lightboxIndex = filtered.findIndex((item) => item.id === id);
  renderLightbox();
  $("#lightbox").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  $("#lightbox")?.classList.remove("open");
  document.body.style.overflow = "";
  lightboxIndex = -1;
}

function prevLightbox() {
  if (lightboxIndex > 0) {
    lightboxIndex--;
    renderLightbox();
  }
}

function nextLightbox() {
  const filtered = getFilteredArchives();
  if (lightboxIndex < filtered.length - 1) {
    lightboxIndex++;
    renderLightbox();
  }
}

function renderLightbox() {
  const lightbox = $("#lightbox");
  if (!lightbox || lightboxIndex < 0) return;

  const filtered = getFilteredArchives();
  const item = filtered[lightboxIndex];
  const hasPrev = lightboxIndex > 0;
  const hasNext = lightboxIndex < filtered.length - 1;

  lightbox.innerHTML = `
    <div class="lightbox-header">
      <div class="lightbox-meta">
        <span class="badge badge-secondary">${item.type}</span>
        <span class="text-muted">${item.year}</span>
      </div>
      <div class="lightbox-actions">
        <button class="lightbox-btn" onclick="toggleFavorite(${item.id}); renderLightbox();">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="${favorites.includes(item.id) ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>
        <button class="lightbox-btn" onclick="closeLightbox()">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
      </div>
    </div>
    <div class="lightbox-content">
      ${hasPrev ? `
        <button class="lightbox-nav lightbox-prev" onclick="prevLightbox()">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>
      ` : ''}
      <div class="lightbox-main">
        <div class="lightbox-image">
          <img src="${item.image}" alt="${item.title}">
        </div>
        <div class="lightbox-info">
          <h2 class="lightbox-title">${item.title}</h2>
          <p class="lightbox-description">${item.description}</p>
          <button class="btn btn-hero btn-lg">View Full Details</button>
        </div>
      </div>
      ${hasNext ? `
        <button class="lightbox-nav lightbox-next" onclick="nextLightbox()">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </button>
      ` : ''}
    </div>
  `;
}

function initLightbox() {
  document.addEventListener("keydown", (e) => {
    if (lightboxIndex < 0) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") prevLightbox();
    if (e.key === "ArrowRight") nextLightbox();
  });
}

// ==================== Timeline ====================
function initTimeline() {
  const items = $$(".timeline-item");
  const content = $("#timeline-content");
  
  if (!items.length || !content) return;

  function updateTimeline(year) {
    activeTimelineYear = year;
    const data = timeline.find((t) => t.year === year);
    
    items.forEach((item) => {
      const itemYear = parseInt(item.dataset.year);
      item.classList.remove("active", "passed");
      if (itemYear === year) {
        item.classList.add("active");
      } else if (itemYear < year) {
        item.classList.add("passed");
      }
    });

    if (data) {
      content.innerHTML = `
        <div class="card animate-fade-in">
          <div class="card-content" style="padding: 2rem; text-align: center;">
            <p class="timeline-content-year">${data.year}</p>
            <h3 class="timeline-content-title">${data.event}</h3>
            <p class="timeline-content-description">${data.description}</p>
          </div>
        </div>
      `;
    }
  }

  items.forEach((item) => {
    item.addEventListener("click", () => {
      updateTimeline(parseInt(item.dataset.year));
    });
  });

  updateTimeline(activeTimelineYear);
}

// ==================== Contact Form ====================
function initContactForm() {
  const form = $("#contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const name = form.querySelector('[name="name"]').value.trim();
    const email = form.querySelector('[name="email"]').value.trim();
    const subject = form.querySelector('[name="subject"]').value.trim();
    const message = form.querySelector('[name="message"]').value.trim();
    
    // Clear previous errors
    $$(".error-text").forEach((el) => el.remove());
    
    let hasError = false;
    
    if (!name) {
      showFieldError(form.querySelector('[name="name"]'), "Name is required");
      hasError = true;
    } else if (name.length > 100) {
      showFieldError(form.querySelector('[name="name"]'), "Name must be less than 100 characters");
      hasError = true;
    }
    
    if (!email) {
      showFieldError(form.querySelector('[name="email"]'), "Email is required");
      hasError = true;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showFieldError(form.querySelector('[name="email"]'), "Invalid email address");
      hasError = true;
    }
    
    if (!subject) {
      showFieldError(form.querySelector('[name="subject"]'), "Subject is required");
      hasError = true;
    }
    
    if (!message) {
      showFieldError(form.querySelector('[name="message"]'), "Message is required");
      hasError = true;
    } else if (message.length > 1000) {
      showFieldError(form.querySelector('[name="message"]'), "Message must be less than 1000 characters");
      hasError = true;
    }
    
    if (hasError) return;
    
    // Show success
    form.innerHTML = `
      <div class="success-message animate-fade-in">
        <svg class="success-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
          <polyline points="22 4 12 14.01 9 11.01"/>
        </svg>
        <h3 class="success-title">Thank You!</h3>
        <p class="success-text">Your message has been sent successfully.</p>
      </div>
    `;
    
    showToast("Thank you for your feedback!", "success");
  });
}

function showFieldError(input, message) {
  const error = document.createElement("p");
  error.className = "error-text";
  error.textContent = message;
  input.parentNode.appendChild(error);
  input.style.borderColor = "var(--destructive)";
}

// ==================== Admin Functions ====================
function initAdminLogin() {
  const form = $("#admin-login-form");
  if (!form) return;

  const passwordInput = form.querySelector('[name="password"]');
  const toggleBtn = form.querySelector(".password-toggle");
  
  if (toggleBtn && passwordInput) {
    toggleBtn.addEventListener("click", () => {
      const type = passwordInput.type === "password" ? "text" : "password";
      passwordInput.type = type;
      toggleBtn.innerHTML = type === "password" 
        ? '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>'
        : '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>';
    });
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = form.querySelector('[name="username"]').value;
    const password = form.querySelector('[name="password"]').value;
    
    if (username === "admin" && password === "museum2024") {
      isLoggedIn = true;
      showToast("Welcome to the Admin Panel!", "success");
      renderAdminDashboard();
    } else {
      showToast("Invalid credentials. Try admin / museum2024", "error");
    }
  });
}

function renderAdminDashboard() {
  const container = $("#admin-container");
  if (!container) return;

  container.innerHTML = `
    <div class="admin-layout">
      <aside class="admin-sidebar">
        <nav class="admin-nav">
          <button class="admin-nav-item ${activeAdminTab === 'dashboard' ? 'active' : ''}" onclick="setAdminTab('dashboard')">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
              <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
            </svg>
            Dashboard
          </button>
          <button class="admin-nav-item ${activeAdminTab === 'archives' ? 'active' : ''}" onclick="setAdminTab('archives')">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 8v13H3V8"/><path d="M1 3h22v5H1z"/><path d="M10 12h4"/>
            </svg>
            Archives
          </button>
          <button class="admin-nav-item ${activeAdminTab === 'media' ? 'active' : ''}" onclick="setAdminTab('media')">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
              <circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
            </svg>
            Media
          </button>
          <button class="admin-nav-item ${activeAdminTab === 'settings' ? 'active' : ''}" onclick="setAdminTab('settings')">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
            </svg>
            Settings
          </button>
        </nav>
        <button class="admin-nav-item" style="color: var(--destructive);" onclick="adminLogout()">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
            <polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>
          </svg>
          Sign Out
        </button>
      </aside>
      <main class="admin-main" id="admin-main-content"></main>
    </div>
  `;

  renderAdminContent();
}

function setAdminTab(tab) {
  activeAdminTab = tab;
  renderAdminDashboard();
}

function renderAdminContent() {
  const content = $("#admin-main-content");
  if (!content) return;

  if (activeAdminTab === "dashboard") {
    content.innerHTML = `
      <div class="admin-header">
        <h1 class="admin-title">Dashboard</h1>
        <p class="admin-subtitle">Welcome back, Administrator</p>
      </div>
      <div class="admin-stats">
        <div class="card admin-stat-card">
          <p class="admin-stat-label">Total Archives</p>
          <div style="display: flex; align-items: flex-end; justify-content: space-between; margin-top: 0.5rem;">
            <p class="admin-stat-value">${archives.length}</p>
            <span class="admin-stat-change">+12%</span>
          </div>
        </div>
        <div class="card admin-stat-card">
          <p class="admin-stat-label">Monthly Visitors</p>
          <div style="display: flex; align-items: flex-end; justify-content: space-between; margin-top: 0.5rem;">
            <p class="admin-stat-value">24,500</p>
            <span class="admin-stat-change">+8%</span>
          </div>
        </div>
        <div class="card admin-stat-card">
          <p class="admin-stat-label">Virtual Tours</p>
          <div style="display: flex; align-items: flex-end; justify-content: space-between; margin-top: 0.5rem;">
            <p class="admin-stat-value">1,250</p>
            <span class="admin-stat-change">+23%</span>
          </div>
        </div>
        <div class="card admin-stat-card">
          <p class="admin-stat-label">Feedback</p>
          <div style="display: flex; align-items: flex-end; justify-content: space-between; margin-top: 0.5rem;">
            <p class="admin-stat-value">89</p>
            <span class="admin-stat-change">+5%</span>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-content" style="padding: 1.5rem;">
          <h3 style="font-family: var(--font-display); font-size: 1.25rem; margin-bottom: 1rem;">Recent Activity</h3>
          <div style="border-bottom: 1px solid var(--border); padding: 1rem 0;">
            <p style="font-weight: 500;">New archive added</p>
            <p style="font-size: 0.875rem; color: var(--muted-foreground);">FIFA U-20 World Cup 2009 • 2 hours ago</p>
          </div>
          <div style="border-bottom: 1px solid var(--border); padding: 1rem 0;">
            <p style="font-weight: 500;">Media updated</p>
            <p style="font-size: 0.875rem; color: var(--muted-foreground);">Black Stars Celebration Photo • 5 hours ago</p>
          </div>
          <div style="padding: 1rem 0;">
            <p style="font-weight: 500;">Feedback received</p>
            <p style="font-size: 0.875rem; color: var(--muted-foreground);">From Kofi Mensah • Yesterday</p>
          </div>
        </div>
      </div>
    `;
  } else if (activeAdminTab === "archives") {
    content.innerHTML = `
      <div class="admin-header" style="display: flex; justify-content: space-between; align-items: center;">
        <div>
          <h1 class="admin-title">Archives</h1>
          <p class="admin-subtitle">Manage archive content</p>
        </div>
        <button class="btn btn-primary">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
          </svg>
          Add Archive
        </button>
      </div>
      <div class="card">
        <div style="overflow-x: auto;">
          <table class="admin-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Type</th>
                <th>Year</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              ${archives.slice(0, 6).map(item => `
                <tr>
                  <td>
                    <div class="admin-table-item">
                      <img src="${item.image}" alt="${item.title}" class="admin-table-thumb">
                      <span style="font-weight: 500;">${item.title}</span>
                    </div>
                  </td>
                  <td><span class="badge badge-muted">${item.type}</span></td>
                  <td style="color: var(--muted-foreground);">${item.year}</td>
                  <td>
                    <button class="btn btn-ghost btn-icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                      </svg>
                    </button>
                    <button class="btn btn-ghost btn-icon" style="color: var(--destructive);">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="3 6 5 6 21 6"/>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                      </svg>
                    </button>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  } else {
    content.innerHTML = `
      <div class="empty-state" style="min-height: 60vh; display: flex; flex-direction: column; align-items: center; justify-content: center;">
        <svg class="empty-state-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
        </svg>
        <h3 class="empty-state-title" style="text-transform: capitalize;">${activeAdminTab}</h3>
        <p class="empty-state-text">This section is coming soon</p>
      </div>
    `;
  }
}

function adminLogout() {
  isLoggedIn = false;
  showToast("Logged out successfully", "info");
  location.reload();
}

// ==================== Initialize ====================
document.addEventListener("DOMContentLoaded", () => {
  initSlideshow();
  initMobileMenu();
  initArchiveFilters();
  initLightbox();
  initTimeline();
  initContactForm();
  initAdminLogin();
  renderArchives();
});
