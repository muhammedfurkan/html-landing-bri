/**
 * Pricing Loader for HTML Landing Page
 * Fetches pricing plans from API and dynamically updates the pricing section
 */

const PRICING_API_URL = 'https://api.briportal.com/api/pricing';

class PricingLoader {
  constructor() {
    this.plans = [];
    this.currentBillingCycle = 'monthly';
    this.init();
  }

  async init() {
    try {
      console.log('🚀 Initializing PricingLoader...');
      
      // Load pricing plans from API
      await this.loadPlans();
      
      // Setup event listeners
      this.setupEventListeners();
      
      // Initial render
      this.renderPricingCards();
      
      console.log('✨ PricingLoader initialized successfully');
    } catch (error) {
      console.error('❌ Error initializing pricing loader:', error);
      this.fallbackToStaticPricing();
    }
  }

  async loadPlans() {
    try {
      console.log('🔄 Fetching pricing plans from API:', PRICING_API_URL);
      
      const response = await fetch(`${PRICING_API_URL}/list`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({}),
      });

      console.log('📡 API Response Status:', response.status);
      console.log('📡 API Response Headers:', response.headers);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      
      console.log('📊 Full API Response:', result);
      console.log('📊 API Data (result.result.rows):', result.result?.rows);
      
      // Extract plans from result.result.rows (not result.data)
      this.plans = (result.result?.rows || []).sort((a, b) => a.order - b.order);
      
      console.log('✅ Pricing plans loaded successfully:', this.plans);
      console.log('📈 Total plans loaded:', this.plans.length);
    } catch (error) {
      console.error('❌ Error loading pricing plans:', error);
      throw error;
    }
  }

  setupEventListeners() {
    // Billing cycle switcher buttons
    const switcherButtons = document.querySelectorAll('.ub-pricing__switcher-btn');
    switcherButtons.forEach((button) => {
      button.addEventListener('click', (e) => {
        const target = e.target.getAttribute('data-target');
        this.switchBillingCycle(target);
      });
    });

    // Setup AOS animation for new cards
    if (window.AOS) {
      AOS.refreshHard();
    }
  }

  switchBillingCycle(cycle) {
    if (cycle === this.currentBillingCycle) return;

    this.currentBillingCycle = cycle;

    // Update button states
    const buttons = document.querySelectorAll('.ub-pricing__switcher-btn');
    buttons.forEach((button) => {
      const target = button.getAttribute('data-target');
      if (target === cycle) {
        button.classList.add('ub-pricing__switcher-btn--active');
      } else {
        button.classList.remove('ub-pricing__switcher-btn--active');
      }
    });

    // Show/hide cards with animation
    this.renderPricingCards();
  }

  renderPricingCards() {
    console.log('🎨 Rendering pricing cards...');
    
    const monthlyContainer = document.querySelector('[data-target="monthly"]');
    const annualContainer = document.querySelector('[data-target="annual"]');

    if (!monthlyContainer || !annualContainer) {
      console.error('❌ Pricing containers not found');
      console.log('📍 Monthly container:', monthlyContainer);
      console.log('📍 Annual container:', annualContainer);
      return;
    }

    console.log('📍 Found containers - Monthly:', monthlyContainer, 'Annual:', annualContainer);

    // Clear existing cards
    monthlyContainer.innerHTML = '';
    annualContainer.innerHTML = '';

    console.log('🗑️ Cleared existing cards');

    // Create and add cards
    this.plans.forEach((plan, index) => {
      console.log(`📍 Creating card ${index + 1}:`, plan);
      
      const monthlyCard = this.createPricingCard(plan, 'monthly', index);
      const annualCard = this.createPricingCard(plan, 'annual', index);

      monthlyContainer.appendChild(monthlyCard);
      annualContainer.appendChild(annualCard);
    });

    console.log(`✅ Created ${this.plans.length * 2} cards (monthly + annual)`);

    // Update visibility
    if (this.currentBillingCycle === 'monthly') {
      monthlyContainer.classList.remove('ub-pricing__cards--hidden');
      annualContainer.classList.add('ub-pricing__cards--hidden');
      console.log('👁️ Showing monthly cards');
    } else {
      monthlyContainer.classList.add('ub-pricing__cards--hidden');
      annualContainer.classList.remove('ub-pricing__cards--hidden');
      console.log('👁️ Showing annual cards');
    }

    // Refresh AOS animations
    if (window.AOS) {
      AOS.refreshHard();
      console.log('🔄 Refreshed AOS animations');
    }
  }

  createPricingCard(plan, billingCycle, index) {
    const price = billingCycle === 'monthly' ? plan.monthlyPrice : plan.annualPrice;
    const delay = 600 + index * 100;

    const card = document.createElement('div');
    card.className = 'ub-pricing__card';
    card.setAttribute('data-aos', 'fade-up');
    card.setAttribute('data-aos-delay', delay.toString());

    // Add highlighted styling if needed
    if (plan.highlighted) {
      card.classList.add('ub-pricing__card--highlighted');
    }

    // Create features list
    const featuresList = plan.features
      .map((feature) => `<li><i class="fa-solid fa-check"></i> ${this.escapeHtml(feature)}</li>`)
      .join('');

    card.innerHTML = `
      ${plan.highlighted ? '<div class="ub-pricing__highlight-badge">⭐ Popüler</div>' : ''}
      <h3 class="ub-pricing__plan-title">${this.escapeHtml(plan.name)}</h3>
      <p class="ub-pricing__plan-description">${this.escapeHtml(plan.description)}</p>
      <div class="ub-pricing__price-wrapper">
        <span class="ub-pricing__price">₺${price.toFixed(2)}</span>
        ${billingCycle === 'annual' ? `<span class="ub-pricing__discount">%${plan.discount} İndirim</span>` : ''}
      </div>
      <ul class="ub-pricing__features-list">
        ${featuresList}
      </ul>
      <a class="ub-pricing__button" href="https://briportal.com/register?plan=${this.escapeHtml(plan.slug)}">
        ${billingCycle === 'monthly' ? 'Üye Ol' : '14 Gün Ücretsiz Deneyin'}
      </a>
    `;

    return card;
  }

  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  fallbackToStaticPricing() {
    console.warn('Using fallback static pricing configuration');
    // Static pricing will remain visible as it's already in HTML
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.pricingLoader = new PricingLoader();
  });
} else {
  window.pricingLoader = new PricingLoader();
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = PricingLoader;
}
