/**
 * Clean Club Hospitality & Services - Interactive Operations Controller
 * Standard: Modern Modular Vanilla JavaScript (Zero External Dependencies)
 * Governance: Strict Zero Emoji Compliance
 * Primary Hotline: 33498554 (+974 3349 8554)
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initBookingEstimator();
  initFaqAccordion();
  initSmoothScroll();
  initStickyHeader();
});

/**
 * Mobile Navigation Drawer Controller
 */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const drawer = document.getElementById('mobileDrawer');
  const closeBtn = document.getElementById('closeDrawerBtn');
  const drawerLinks = document.querySelectorAll('.drawer-link');

  if (!toggleBtn || !drawer) return;

  const openDrawer = () => {
    drawer.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    drawer.classList.remove('active');
    document.body.style.overflow = '';
  };

  toggleBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);

  drawerLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  // Close on outside overlay click
  drawer.addEventListener('click', (e) => {
    if (e.target === drawer) closeDrawer();
  });
}

/**
 * Interactive Contract & Service Estimator with Instant WhatsApp Generator
 */
function initBookingEstimator() {
  const serviceSelect = document.getElementById('calcService');
  const contractTypeSelect = document.getElementById('calcContractType');
  const durationSlider = document.getElementById('calcDuration');
  const durationValue = document.getElementById('calcDurationValue');
  const totalPriceDisplay = document.getElementById('calcTotalPrice');
  const summaryService = document.getElementById('summaryService');
  const summaryContract = document.getElementById('summaryContract');
  const summaryDuration = document.getElementById('summaryDuration');
  const waSubmitBtn = document.getElementById('calcWaSubmit');

  if (!serviceSelect || !totalPriceDisplay || !waSubmitBtn) return;

  const rates = {
    // Service base multipliers
    'live_in': { name: 'عاملات بنظام المبيت', baseMonthly: 2800, hourly: 40 },
    'monthly_contract': { name: 'تعاقد شهري زيارات', baseMonthly: 1900, hourly: 35 },
    'residential': { name: 'تنظيف سكني للفلل والشقق', baseMonthly: 1800, hourly: 35 },
    'commercial': { name: 'تنظيف مكاتب وشركات', baseMonthly: 2200, hourly: 45 },
    'industrial': { name: 'تنظيف مستودعات ومنشآت', baseMonthly: 3500, hourly: 60 },
    'hospitality': { name: 'ضيافة فندقية وكي عباءات', baseMonthly: 2400, hourly: 40 }
  };

  function calculateQuote() {
    const serviceKey = serviceSelect.value || 'live_in';
    const contractType = contractTypeSelect ? contractTypeSelect.value : 'monthly';
    const duration = parseInt(durationSlider ? durationSlider.value : '4', 10);
    const serviceData = rates[serviceKey] || rates['live_in'];

    let estimatedPrice = 0;
    let durationText = '';

    if (contractType === 'live_in_contract') {
      estimatedPrice = 2800;
      durationText = 'عقد شهري شامل الإقامة والمبيت';
    } else if (contractType === 'monthly') {
      estimatedPrice = serviceData.baseMonthly;
      durationText = 'عقد شهري منتظم (زيارات مجدولة)';
    } else {
      // Hourly visit
      estimatedPrice = serviceData.hourly * duration;
      durationText = duration + ' ساعات زيارة مباشرة';
    }

    if (durationValue) {
      durationValue.textContent = duration + ' ساعات';
    }

    totalPriceDisplay.textContent = estimatedPrice.toLocaleString('en-US');
    if (summaryService) summaryService.textContent = serviceData.name;
    if (summaryContract) summaryContract.textContent = contractTypeSelect ? contractTypeSelect.options[contractTypeSelect.selectedIndex].text : 'عقد شهري';
    if (summaryDuration) summaryDuration.textContent = durationText;

    // Build dynamic pre-filled WhatsApp link to primary hotline 33498554
    const message = encodeURIComponent(
      'مرحباً شركة كلوب كلين للتنظيفات والضيافة، أرغب في حجز واستفسار عن:\n' +
      '- نوع الخدمة: ' + serviceData.name + '\n' +
      '- نوع التعاقد: ' + (contractTypeSelect ? contractTypeSelect.options[contractTypeSelect.selectedIndex].text : 'عقد شهري') + '\n' +
      '- المدة/التفاصيل: ' + durationText + '\n' +
      '- التكلفة التقديرية: ' + estimatedPrice + ' ريال قطري\n' +
      'يرجى تأكيد الحجز والتفاصيل عبر الرقم: 33498554.'
    );

    waSubmitBtn.href = 'https://wa.me/97433498554?text=' + message;
  }

  if (serviceSelect) serviceSelect.addEventListener('change', calculateQuote);
  if (contractTypeSelect) contractTypeSelect.addEventListener('change', calculateQuote);
  if (durationSlider) durationSlider.addEventListener('input', calculateQuote);

  // Initial calculation run
  calculateQuote();
}

/**
 * Accessible FAQ Accordion
 */
function initFaqAccordion() {
  const faqCards = document.querySelectorAll('.faq-card');

  faqCards.forEach(card => {
    const header = card.querySelector('.faq-header');
    if (!header) return;

    header.addEventListener('click', () => {
      const isOpen = card.classList.contains('open');

      // Close other cards
      faqCards.forEach(otherCard => {
        if (otherCard !== card) {
          otherCard.classList.remove('open');
          const otherHeader = otherCard.querySelector('.faq-header');
          if (otherHeader) otherHeader.setAttribute('aria-expanded', 'false');
        }
      });

      // Toggle current card
      if (isOpen) {
        card.classList.remove('open');
        header.setAttribute('aria-expanded', 'false');
      } else {
        card.classList.add('open');
        header.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/**
 * Smooth Scroll for Navigation Anchors
 */
function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId === '#' || !targetId.startsWith('#')) return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerOffset = 80;
        const elPosition = targetEl.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

/**
 * Sticky Header Elevation on Scroll
 */
function initStickyHeader() {
  const header = document.querySelector('.main-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });
}
