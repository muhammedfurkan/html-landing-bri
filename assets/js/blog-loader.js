// Blog verilerini backend API'den çeken script
const API_URL = 'https://api.briportal.com/api/blog'; // Backend API URL'si
const TESTIMONIAL_API_URL = 'https://api.briportal.com/api/testimonial'; // Testimonial API URL'si

// API response'u parse et (result içinde nested olabilir)
function parseApiResponse(response) {
  return response.result || response;
}

// Blog yazılarını getir
async function loadBlogs() {
  try {
    const response = await fetch(`${API_URL}?limit=10&offset=0`);
    const data = await response.json();
    const result = parseApiResponse(data);
    return result.data || [];
  } catch (error) {
    console.error('Blog yazıları yüklenirken hata:', error);
    return [];
  }
}

// Blog kartını oluştur
function createBlogCard(blog) {
  const categoryMap = {
    'tech-company': 'Tech Company',
    'analytics': 'Analytics',
    'business': 'Business',
    'marketing': 'Marketing',
    'tech': 'Tech Company',
    'other': 'Other'
  };

  const categoryLabel = categoryMap[blog.category] || blog.category;

  return `
    <article class="ub-blog__card" data-aos="fade-up">
      <a href="./blog-single.html?slug=${blog.slug}">
        <div class="ub-blog__card-image-wrapper">
          ${blog.image ? `<img src="${blog.image}" alt="${blog.title}" class="ub-blog__card-image">` : '<div style="width:100%; height:200px; background-color:#e0e0e0;"></div>'}
        </div>
        <div class="ub-blog__card-content">
          <h3 class="ub-blog__card-title">${blog.title}</h3>
          <p class="ub-blog__card-text">${blog.description || blog.content.substring(0, 100)}...</p>
          <div class="ub-blog__card-link-wrapper">
            <span class="ub-blog__card-link">Daha fazla</span>
            <img class="ub-blog__card-link-icon" src="./assets/icons/arrow-up-right.svg" alt="Arrow icon">
          </div>
        </div>
      </a>
    </article>
  `;
}

// Blog yazısının detaylı sayfasını oluştur
async function loadBlogDetail() {
  // URL parametresinden slug'ı al
  const urlParams = new URLSearchParams(window.location.search);
  const slug = urlParams.get('slug');

  if (!slug) {
    console.error('Blog slug parametresi bulunamadı');
    return;
  }

  try {
    const response = await fetch(`${API_URL}/slug/${slug}`);
    if (!response.ok) {
      throw new Error('Blog yazısı bulunamadı');
    }

    const data = await response.json();
    const blog = parseApiResponse(data);

    // Sayfa başlığını güncelle
    document.title = blog.title + ' - bri.com.tr';

    // Blog detaylarını sayfaya yerleştir
    const detailContainer = document.getElementById('ub-blog-details__content');
    if (detailContainer) {
      detailContainer.innerHTML = `
        <div class="ub-blog-details__meta">
          <div class="ub-blog-details__category">${blog.category}</div>
          <div class="ub-blog-details__date">
            <i class="fas fa-calendar"></i>
            <time>${new Date(blog.createdAt).toLocaleDateString('tr-TR')}</time>
          </div>
        </div>
        <h2 class="ub-blog-details__title">${blog.title}</h2>
        <p class="ub-blog-details__desc">${blog.description}</p>
        ${blog.image ? `<img src="${blog.image}" alt="${blog.title}" class="ub-blog-details__image">` : ''}
        <div class="ub-blog-details__content-wrapper">
          ${blog.content}
        </div>
      `;
    }
  } catch (error) {
    console.error('Blog yazısı yüklenirken hata:', error);
  }
}

// Popüler blog yazılarını getir (sidebar için)
async function loadPopularBlogs() {
  try {
    const response = await fetch(`${API_URL}/popular/5`);
    const data = await response.json();
    const result = parseApiResponse(data);
    return result || [];
  } catch (error) {
    console.error('Popüler blog yazıları yüklenirken hata:', error);
    return [];
  }
}

// Kategori bazında blog yazılarını filtrele
async function loadBlogsByCategory(category) {
  try {
    const response = await fetch(`${API_URL}/category/${category}?limit=10`);
    const data = await response.json();
    const result = parseApiResponse(data);
    return result.data || [];
  } catch (error) {
    console.error(`${category} kategorisindeki blog yazıları yüklenirken hata:`, error);
    return [];
  }
}

// Blog yazılarında arama yap
async function searchBlogs(query) {
  try {
    const response = await fetch(`${API_URL}/search/${query}?limit=20`);
    const data = await response.json();
    const result = parseApiResponse(data);
    return result || [];
  } catch (error) {
    console.error('Blog arama yapılırken hata:', error);
    return [];
  }
}

// Ana sayfa blog bölümünü doldur
async function initializeHomepageBlogs() {
  const blogsContainer = document.querySelector('.ub-blog__cards');
  if (!blogsContainer) return;

  const blogs = await loadBlogs();
  if (blogs.length > 0) {
    blogsContainer.innerHTML = blogs
      .slice(0, 3) // İlk 3 blog yazısını göster
      .map(blog => createBlogCard(blog))
      .join('');

    // AOS animasyonlarını yeniden başlat
    if (window.AOS) {
      AOS.refresh();
    }
  }
}

// Blog listesi sayfasını doldur
async function initializeBlogListPage() {
  const blogsContainer = document.querySelector('.ub-latest-posts__grid');
  if (!blogsContainer) return;

  const blogs = await loadBlogs();
  if (blogs.length > 0) {
    blogsContainer.innerHTML = blogs
      .map((blog, index) => `
        <a href="./blog-single.html?slug=${blog.slug}" class="ub-latest-posts__card" data-category="${blog.category}" data-aos="fade-up" data-aos-delay="${(index + 1) * 100}">
          <div class="ub-latest-posts__img-wrapper">
            ${blog.image ? `<img src="${blog.image}" alt="${blog.title}" class="ub-latest-posts__img">` : '<div class="ub-latest-posts__img" style="background-color: #e0e0e0;"></div>'}
          </div>
          <div class="ub-latest-posts__content">
            <h3 class="ub-latest-posts__title">${blog.title}</h3>
            <p class="ub-latest-posts__desc">${blog.description || blog.content.substring(0, 100)}...</p>
            <div class="ub-latest-posts__meta">
              <span class="ub-latest-posts__category">${blog.category}</span>
              <time class="ub-latest-posts__date">${new Date(blog.createdAt).toLocaleDateString('tr-TR')}</time>
            </div>
          </div>
        </a>
      `)
      .join('');

    // AOS animasyonlarını yeniden başlat
    if (window.AOS) {
      AOS.refresh();
    }

    // Kategori filtreleme ekle
    setupCategoryFilters();
  }
}

// Kategori filtreleme
function setupCategoryFilters() {
  const filterButtons = document.querySelectorAll('.ub-latest-posts__filter-btn');
  const blogCards = document.querySelectorAll('.ub-latest-posts__card');
  const noPostsMessage = document.querySelector('.ub-latest-posts__no-posts');

  filterButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();

      // Aktif buton sınıfını güncelle
      filterButtons.forEach(btn => btn.classList.remove('ub-latest-posts__filter-btn--active'));
      button.classList.add('ub-latest-posts__filter-btn--active');

      // Seçilen kategoriyi al
      const category = button.getAttribute('data-category');

      // Blog kartlarını filtrele
      let visibleCount = 0;
      blogCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');

        if (category === 'all' || cardCategory === category) {
          card.style.display = 'block';
          visibleCount++;
        } else {
          card.style.display = 'none';
        }
      });

      // "Sonuç yok" mesajını göster/gizle
      if (visibleCount === 0 && noPostsMessage) {
        noPostsMessage.style.display = 'block';
      } else if (noPostsMessage) {
        noPostsMessage.style.display = 'none';
      }
    });
  });
}

// Sayfa yüklendikçe başlat
document.addEventListener('DOMContentLoaded', () => {
  // Ana sayfada blog bölümünü doldur
  if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
    initializeHomepageBlogs();
  }

  // Blog listesi sayfasında
  if (window.location.pathname.includes('blog.html')) {
    initializeBlogListPage();
  }

  // Blog detay sayfasında
  if (window.location.pathname.includes('blog-single.html')) {
    loadBlogDetail();
  }

  // Ana sayfada testimonial'ları yükle
  if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
    initializeTestimonials();
  }
});

// ===== TESTIMONIAL FÖNKSİYONLARI =====

// Testimonial'ları getir (top-rated)
async function loadTestimonials() {
  try {
    const response = await fetch(`${TESTIMONIAL_API_URL}/top-rated/3`);
    const data = await response.json();
    const result = parseApiResponse(data);
    return Array.isArray(result) ? result : (result.data || []);
  } catch (error) {
    console.error('Testimonial yüklenirken hata:', error);
    return [];
  }
}

// Star rating HTML'sini oluştur
function createStarRating(rating) {
  let stars = '';
  const fullStars = Math.floor(rating);
  
  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      stars += '<i class="fa-solid fa-star"></i>';
    } else {
      stars += '<i class="fa-regular fa-star"></i>';
    }
  }
  
  return `<div class="ub-testimonial__rating star-rating">${stars}</div>`;
}

// Testimonial kartını oluştur
function createTestimonialCard(testimonial) {
  const profileImage = testimonial.profileImage || './assets/img/testimonials/default-avatar.png';
  const rating = testimonial.rating || 5;
  
  return `
    <div class="ub-testimonial__item" data-aos="fade-up">
      ${createStarRating(rating)}
      <div class="ub-testimonial__text">
        <p>"${testimonial.content}"</p>
      </div>
      <div class="ub-testimonial__profile">
        <div class="ub-testimonial__avatar">
          <img src="${profileImage}" alt="${testimonial.name}" class="ub-testimonial__image" onerror="this.src='./assets/img/testimonials/default-avatar.png'">
        </div>
        <div class="ub-testimonial__info">
          <h3 class="ub-testimonial__name">${testimonial.name}</h3>
          <p class="ub-testimonial__company">${testimonial.company || 'Bri.com.tr Müşterisi'}</p>
        </div>
      </div>
    </div>
  `;
}

// Ana sayfa testimonial bölümünü doldur
async function initializeTestimonials() {
  const testimonialsContainer = document.querySelector('.ub-testimonial__content');
  if (!testimonialsContainer) return;

  const testimonials = await loadTestimonials();
  
  if (testimonials.length > 0) {
    testimonialsContainer.innerHTML = testimonials
      .slice(0, 3) // İlk 3 testimonial
      .map((testimonial, index) => {
        const card = createTestimonialCard(testimonial);
        // data-aos-delay ekle
        return card.replace('<div class="ub-testimonial__item"', `<div class="ub-testimonial__item" data-aos="fade-up" data-aos-delay="${(index + 1) * 100}"`);
      })
      .join('');

    // AOS animasyonlarını yeniden başlat
    if (window.AOS) {
      AOS.refresh();
    }
  }
}
