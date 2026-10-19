/**
 * Clean Club Hospitality & Services - Interactive Operations & Bilingual Controller
 * Standard: Modern Modular Vanilla JavaScript (Zero External Dependencies)
 * Governance: Strict Zero Emoji Compliance
 * Primary Hotline: 33498554 (+974 3349 8554)
 */

document.addEventListener('DOMContentLoaded', () => {
  initLanguageToggle();
  initMobileMenu();
  initFaqAccordion();
  initSmoothScroll();
  initStickyHeader();
});

/**
 * Bilingual Translation Dictionary (Arabic & English)
 */
const translations = {
  ar: {
    top_location: "الدوحة، دولة قطر",
    top_hours: "السبت — الخميس: 7:00 ص — 11:30 م",
    top_wa_pill: "واتساب فوري 24/7",
    brand_title: "شركة كلوب كلين",
    brand_subtitle: "للتنظيفات والضيافة والخدمات",
    drawer_brand_title: "كلوب كلين للخدمات",
    lang_btn_text: "English",

    // Navigation
    nav_home: "الرئيسية",
    nav_livein: "عقود المبيت والشهري",
    nav_services: "خدماتنا",
    nav_whyus: "لماذا نحن؟",
    nav_staff: "كادر العاملات",
    nav_gallery: "معرض العمليات",
    nav_process: "آلية الحجز",
    nav_contact: "اتصل بنا",

    drawer_call_btn: "اتصال فوري: 33498554",
    drawer_wa_btn: "مراسلة واتساب: 33498554",

    // Hero Section
    hero_badge: "الخيار الأول والموثوق في دولة قطر — كفالة معتمدة وضمان استبدال",
    hero_title: "شركة كلوب كلين للتنظيفات والضيافة والخدمات",
    hero_accent: "نظام المبيت والتعاقد الشهري",
    hero_desc: "نوفر لعملائنا في قطر عاملات منزليات ومحترفات ضيافة مدربات على أعلى معايير الجودة والأمان بنظام المبيت والعقود الشهرية واليومية المرنة. شريك موثوق معتمد لدى أرقى الفنادق والجهات الحكومية في الدوحة.",
    hero_call_btn: "اتصال مباشر: 33498554",
    hero_wa_btn: "واتساب فوري: 33498554",
    hero_offers_btn: "استعراض عروض وبوسترات المبيت",

    stat_1_label: "كوادر مرخصة ومفحوصة طبياً",
    stat_2_label: "معايير فندقية وضيافة راقية",
    stat_3_label: "خدمة عملاء واستجابة فورية",

    // Partners
    partners_eyebrow: "شركاء النجاح والجهات المعتمدة في دولة قطر",

    // Live-In Offers
    livein_eyebrow: "الخدمة الأبرز والأكثر طلباً في قطر",
    livein_title: "نظام المبيت والتعاقد الشهري والسنوي",
    livein_desc: "نوفر باقات مبيت شهرية متكاملة تضمن لعائلتك أعلى درجات الراحة والأمان، مع كوادر مدربة وفحص طبي شامل وكفالة قانونية كاملة.",

    // Services
    services_eyebrow: "حلول شاملة",
    services_title: "خدمات التنظيف والضيافة المتكاملة",
    services_desc: "نلبي متطلبات المنازل، الشركات، والمنشآت الكبرى بأحدث المعدات ومواد تعقيم معتمدة دولياً.",

    // Why Choose Us
    whyus_eyebrow: "لماذا يختارنا العملاء؟",
    whyus_title: "معايير احترافية تجعلنا الخيار الموثوق في قطر",
    whyus_desc: "نحن في شركة كلوب كلين ندرك أن المنزل هو مساحة الراحة والخصوصية، ولذلك نختار كوادرنا بعناية فائقة ونخضعهم لبرامج تدريب متقدمة في أساليب التنظيف والضيافة واحترام خصوصية الأسر القطرية.",

    vision_badge: "رؤيتنا",
    vision_desc: "أن نكون الخيار المفضل لخدمات التنظيف والضيافة في قطر، والمعروفين بالجودة العالية والموثوقية ورضا العملاء والابتكار المستدام.",
    mission_badge: "رسالتنا",
    mission_desc: "تقديم خدمات تنظيف وضيافة استثنائية في قطر، وتوفير بيئات نقية وصحية للعملاء بالاعتماد على تقنيات حديثة وكوادر مدربة بمعايير فندقية.",

    about_call_btn: "اتصل الآن: 33498554",
    about_wa_btn: "محادثة واتساب سريعة",

    // Staff Directory
    staff_eyebrow: "كوادرنا المعتمدة رسمياً",
    staff_title: "كادر عاملات ومربيات كلوب كلين",
    staff_desc: "طاقم نسائي متكامل ومحترف، حاصل على فحص طبي شامل وإقامات عمل قانونية، مدرب على أعلى معايير التدبير المنزلي والضيافة والخصوصية.",

    // Gallery
    gallery_eyebrow: "عناية ميدانية ومعايير فندقية",
    gallery_title: "معرض العمليات والرعاية الميدانية",
    gallery_desc: "لقطات واقعية من عمليات الرعاية والتنظيف والكي المتخصص لكوادرنا في مختلف مناطق قطر.",

    // Process
    process_eyebrow: "بساطة وسرعة",
    process_title: "آلية حجز واستقدام الكادر في 4 خطوات",
    process_desc: "إجراءات تعاقد واستلام مرنة وميسرة تضمن وصول الكادر في الوقت المحدد دون عناء.",

    // Coverage
    coverage_eyebrow: "مناطق التغطية",
    coverage_title: "نخدم جميع مدن ومناطق دولة قطر",
    coverage_desc: "تصل خدماتنا وفِرقنا المجهزة إلى باب بيتك أو منشأتك في أي موقع داخل قطر.",

    // FAQ
    faq_eyebrow: "إجابات واضحة",
    faq_title: "الأسئلة الشائعة حول خدمات كلوب كلين",
    faq_desc: "كل ما تحتاج معرفته عن عقود المبيت، التعاقد الشهري، وإجراءات السلامة.",

    // CTA Banner
    cta_title: "جاهزون لخدمتكم وتوفير أفضل الكوادر في قطر",
    cta_desc: "تواصل معنا اليوم للاستفسار عن عقود المبيت الشهرية أو حجز زيارة تنظيف فورية بأفضل الأسعار التنافسية.",
    cta_call: "اتصل فوراً: 33498554",
    cta_wa: "واتساب فوري: 33498554",

    // Footer
    footer_desc: "الشركة الرائدة في خدمات التنظيف وعقود المبيت والضيافة في دولة قطر. شريك معتمد لدى الجهات الحكومية والفنادق الفاخرة لتقديم أعلى مستويات النظافة والتعقيم.",
    footer_services_title: "خدماتنا الرئيسية",
    footer_quick_links: "روابط سريعة",
    footer_contact_title: "بيانات التواصل المباشر",
    footer_primary_num: "الرقم الأساسي:",
    footer_extra_num: "الرقم الإضافي:",
    footer_rights: "جميع الحقوق محفوظة © 2026 شركة كلوب كلين للتنظيفات والضيافة والخدمات - دولة قطر.",
    footer_timing: "رقم الحجز السريع: 33498554 | متاح السبت - الخميس: 7:00 ص - 11:30 م"
  },

  en: {
    top_location: "Doha, State of Qatar",
    top_hours: "Sat — Thu: 7:00 AM — 11:30 PM",
    top_wa_pill: "Instant WhatsApp 24/7",
    brand_title: "Clean Club Company",
    brand_subtitle: "Hospitality, Cleaning & Facility Services",
    drawer_brand_title: "Clean Club Services",
    lang_btn_text: "العربية",

    // Navigation
    nav_home: "Home",
    nav_livein: "Live-In & Monthly",
    nav_services: "Our Services",
    nav_whyus: "Why Clean Club?",
    nav_staff: "Staff Directory",
    nav_gallery: "Operations Gallery",
    nav_process: "Booking Process",
    nav_contact: "Contact Us",

    drawer_call_btn: "Instant Call: 33498554",
    drawer_wa_btn: "Chat on WhatsApp: 33498554",

    // Hero Section
    hero_badge: "Qatar's Premier & Trusted Choice — Certified Sponsorship & Replacement Guarantee",
    hero_title: "Clean Club Company for Cleaning, Hospitality & Facility Services",
    hero_accent: "Live-In Maids & Flexible Monthly Contracts",
    hero_desc: "Providing clients across Qatar with certified domestic workers and hospitality professionals trained to the highest safety and hygiene standards under flexible monthly, live-in, and daily arrangements. A trusted partner to premier 5-star luxury hotels and governmental entities in Doha.",
    hero_call_btn: "Direct Call: 33498554",
    hero_wa_btn: "Instant WhatsApp: 33498554",
    hero_offers_btn: "Explore Live-In Offers & Posters",

    stat_1_label: "Legally Certified & Medically Screened Staff",
    stat_2_label: "5-Star Hotel & Luxury Hospitality Standards",
    stat_3_label: "24/7 Customer Care & Rapid Deployment",

    // Partners
    partners_eyebrow: "Our Trusted Partners & Accredited Entities in Qatar",

    // Live-In Offers
    livein_eyebrow: "Most In-Demand Service Across Qatar",
    livein_title: "Live-In Maids & Monthly Contract Solutions",
    livein_desc: "We deliver full-time monthly live-in solutions that guarantee comfort, safety, and utmost family privacy, backed by medical checks and legal guarantees.",

    // Services
    services_eyebrow: "Comprehensive Solutions",
    services_title: "Integrated Cleaning & Hospitality Services",
    services_desc: "Serving luxury villas, residential compounds, corporate headquarters, and industrial facilities with state-of-the-art machinery and eco-certified chemicals.",

    // Why Choose Us
    whyus_eyebrow: "Why Choose Clean Club?",
    whyus_title: "Professional Standards Making Us the Preferred Choice in Qatar",
    whyus_desc: "At Clean Club Company, we understand that your home is your sanctuary. We rigorously vet our personnel and put them through advanced hospitality and cleaning training programs with deep respect for Qatari cultural values and family privacy.",

    vision_badge: "Our Vision",
    vision_desc: "To be the preferred benchmark for cleaning and hospitality services in Qatar, renowned for unyielding quality, absolute reliability, and sustainable innovation.",
    mission_badge: "Our Mission",
    mission_desc: "To deliver exceptional cleaning and hospitality services across Qatar, creating healthy, pristine environments for our clients through advanced techniques, eco-friendly supplies, and five-star trained personnel.",

    about_call_btn: "Call Now: 33498554",
    about_wa_btn: "Quick WhatsApp Inquiry",

    // Staff Directory
    staff_eyebrow: "Officially Certified Workforce",
    staff_title: "Clean Club Domestic Workers & Nannies",
    staff_desc: "A dedicated, professional all-female team holding verified medical fitness certificates and legal work permits, specialized in housekeeping, childcare, and residential privacy.",

    // Gallery
    gallery_eyebrow: "Field Operations & Quality Control",
    gallery_title: "Operations & Childcare Gallery",
    gallery_desc: "Authentic photos demonstrating our teams performing specialized care, deep cleaning, and precision steam ironing across Qatar.",

    // Process
    process_eyebrow: "Simple & Swift",
    process_title: "How to Book Your Staff in 4 Easy Steps",
    process_desc: "Seamless, hassle-free booking and onboarding procedures ensuring prompt staff arrival at your doorstep.",

    // Coverage
    coverage_eyebrow: "Service Coverage",
    coverage_title: "Serving All Cities & Districts in Qatar",
    coverage_desc: "Our fully equipped service teams and live-in candidates reach your doorstep anywhere across the State of Qatar.",

    // FAQ
    faq_eyebrow: "Clear Answers",
    faq_title: "Frequently Asked Questions About Clean Club",
    faq_desc: "Everything you need to know regarding monthly contracts, live-in arrangements, and safety protocols.",

    // CTA Banner
    cta_title: "Ready to Serve You with Qatar's Finest Staff",
    cta_desc: "Reach out to us today to inquire about monthly live-in contracts or book an instant cleaning service at competitive rates.",
    cta_call: "Call Hotline: 33498554",
    cta_wa: "Instant WhatsApp: 33498554",

    // Footer
    footer_desc: "The leading cleaning, live-in maid contracting, and luxury hospitality provider in the State of Qatar. Verified partner to governmental entities and five-star luxury hotels.",
    footer_services_title: "Our Main Services",
    footer_quick_links: "Quick Navigation",
    footer_contact_title: "Direct Contact Information",
    footer_primary_num: "Primary Hotline:",
    footer_extra_num: "Secondary Hotline:",
    footer_rights: "All Rights Reserved © 2026 Clean Club Company for Cleaning & Hospitality - Qatar.",
    footer_timing: "Fast Booking Hotline: 33498554 | Open Sat - Thu: 7:00 AM - 11:30 PM"
  }
};

/**
 * Initialize Bilingual Language Toggle (AR / EN)
 */
function initLanguageToggle() {
  const langToggleBtn = document.getElementById('langToggleBtn');
  const drawerLangToggleBtn = document.getElementById('drawerLangToggleBtn');
  const langLabel = document.getElementById('langLabel');
  const drawerLangLabel = document.getElementById('drawerLangLabel');

  let currentLang = localStorage.getItem('cleanclub_lang') || 'ar';

  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('cleanclub_lang', lang);

    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === 'en') ? 'ltr' : 'rtl';

    // Update toggle button text
    const nextLangText = (lang === 'ar') ? 'English' : 'العربية';
    if (langLabel) langLabel.textContent = nextLangText;
    if (drawerLangLabel) drawerLangLabel.textContent = nextLangText;

    // Update all elements with data-i18n
    const transObj = translations[lang];
    if (transObj) {
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (transObj[key]) {
          el.textContent = transObj[key];
        }
      });
    }
  }

  function toggleLanguage() {
    const nextLang = (currentLang === 'ar') ? 'en' : 'ar';
    applyLanguage(nextLang);
  }

  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', toggleLanguage);
  }

  if (drawerLangToggleBtn) {
    drawerLangToggleBtn.addEventListener('click', toggleLanguage);
  }

  // Initial apply
  applyLanguage(currentLang);
}

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
