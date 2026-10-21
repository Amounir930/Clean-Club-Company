/**
 * Clean Club Hospitality & Services - Interactive Operations & Bilingual Controller
 * Standard: Modern Modular Vanilla JavaScript (Zero External Dependencies)
 * Governance: Strict Zero Emoji Compliance
 * Primary Hotline: 33498554 (+974 3349 8554)
 */

document.addEventListener('DOMContentLoaded', () => {
  initLanguageToggle();
  initMobileMenu();
  initLiveinSlider();
  initStaffSlider();
  initFaqAccordion();
  initSmoothScroll();
  initStickyHeader();
});

/**
 * Bilingual Translation Dictionary (Arabic & English) - Comprehensive 100% Page Coverage
 */
const translations = {
  ar: {
    // Page Title & Meta
    page_title: "شركة كلاب كلين للتنظيفات والضيافة والخدمات - هاتف: 33498554",

    // Top Bar
    top_location: "الدوحة، دولة قطر",
    top_hours: "السبت — الخميس: 7:00 ص — 11:30 م",
    top_wa_pill: "واتساب فوري 24/7",
    brand_title: "شركة كلاب كلين",
    brand_subtitle: "للتنظيفات والضيافة والخدمات",
    drawer_brand_title: "كلاب كلين للخدمات",
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
    hero_company_title: "شركة كلاب كلين للتنظيفات والضيافة والخدمات",
    hero_badge: "شركة قطرية رائدة",
    hero_title_1: "نظافة تليق بك",
    hero_title_2: "خدمة تستحق الثقة",
    hero_title: "نظام المبيت والتعاقد الشهري",
    hero_accent: "عاملات منزليات ومحترفات ضيافة معتمدات في قطر",
    hero_desc: "في كلاب كلين، نقدم حلول تنظيف وضيافة متكاملة بأعلى معايير الجودة والاحترافية لنوفر لك بيئة نظيفة وآمنة تعكس التميز.",
    hero_cta_contact: "تواصل معنا الآن",
    hero_cta_services: "استكشف خدماتنا",
    hero_wa_btn: "احجز عبر واتساب: 33498554",
    hero_call_btn: "اتصال مباشر: 33498554",
    hero_spec_1: "عاملات مدربات وفحص طبي شامل من القومسيون الطبي",
    hero_spec_2: "كفالة قانونية 100% مع ضمان الاستبدال الفوري",
    hero_spec_3: "عقود شهرية وسنوية مرنة تلبي خصوصية العائلة",
    hero_spec_4: "خدمة عملاء ومتابعة مستمرة على مدار الساعة",

    stat_1_label: "كوادر مرخصة ومفحوصة طبياً",
    stat_2_label: "معايير فندقية وضيافة راقية",
    stat_3_label: "خدمة عملاء واستجابة فورية",

    // Partners
    partners_eyebrow: "شركاء النجاح والجهات المعتمدة في دولة قطر",

    // Live-In Offers & Campaign Posters
    livein_eyebrow: "الخدمة الأبرز والأكثر طلباً في قطر",
    livein_title: "نظام المبيت والتعاقد الشهري والسنوي",
    livein_desc: "نوفر باقات مبيت شهرية متكاملة تضمن لعائلتك أعلى درجات الراحة والأمان، مع كوادر مدربة وفحص طبي شامل وكفالة قانونية كاملة.",
    livein_c1_badge: "باقة الراحة الكاملة",
    livein_c1_title: "تنظيف احترافي ومبيت شهري دائم",
    livein_c1_desc: "عاملات إقامة دائمة ومبيت شهري مدربات على إدارة شؤون الفلل والمنازل والضيافة بأعلى معايير الخصوصية.",
    livein_c2_badge: "باقة دعم الأسرة والتعليم",
    livein_c2_title: "وقتك للأهم... ونظافة بيتك مسؤوليتنا",
    livein_c2_desc: "تفرغي لتدريس أبنائك والاهتمام بمستقبلهم، ودعي أعمال النظافة والطهي والترتيب لعاملاتنا المقيمات.",
    livein_c3_badge: "باقة البيت الهادئ",
    livein_c3_title: "وقتك مع أولادك... ووقتنا للمنزل",
    livein_c3_desc: "خدمات رعاية متكاملة تشمل تدبير شؤون الغرف، تعقيم الأسطح، غسيل وكي الملابس وتحضير الوجبات.",
    livein_c4_badge: "راحة البال والضمان",
    livein_c4_title: "تبدأ بالنظافة... وتنتهي براحة بالك",
    livein_c4_desc: "ضمان استبدال فوري عند الحاجة، مع إشراف ومتابعة دورية من قسم خدمة العملاء على مدار الساعة.",
    livein_c5_badge: "الترتيب الشامل",
    livein_c5_title: "بيت مرتب ومكان مريح كل ما تحتاجه",
    livein_c5_desc: "تنظيم الخزائن، تنظيف الأثاث، العناية بالمجالس والمفروشات بأيدي خبيرات معتمدات في قطر.",
    book_now_btn: "احجز الآن على 33498554",

    // Core Services Section
    services_eyebrow: "خدماتنا الرئيسية",
    services_title: "باقات التنظيف المتخصصة في قطر",
    services_desc: "حلول مدروسة ومخصصة للأسر، الفلل، المنشآت التجارية والصناعية في قطر، تجمع بين مهارة الكوادر وأحدث التقنيات المعتمدة عالمياً.",
    s1_badge: "01 رعاية وتدبير",
    s1_title: "رعاية الأطفال والتدبير المنزلي المقيم",
    s1_desc: "عاملات مدربات على العناية بالأطفال الرضع والصغار، ومساعدة الأمهات في التدبير المنزلي اليومي وفق أعلى معايير النظافة والاهتمام.",
    s1_f1: "اهتمام فائق بنظافة وغذاء الرضع والصغار",
    s1_f2: "كفاءة عالية وأمان موثوق داخل المنزل",

    s2_badge: "02 سكني وفلل",
    s2_title: "التنظيف السكني الشامل للفلل والمنازل",
    s2_desc: "حلول تنظيف فائقة العناية للمنازل والشقق والفلل في قطر. يضمن طاقمنا تنظيف وتعقيم كل غرفة ومطبخ وحمام وأسطح معيشية بمواد صديقة للبيئة.",
    s2_f1: "تنظيف وتطهير عميق لغرف النوم والمجالس",
    s2_f2: "إزالة الدهون وتعقيم المطابخ والحمامات",

    s3_badge: "03 مكاتب وشركات",
    s3_title: "التنظيف التجاري وإدارة نظافة المكاتب",
    s3_desc: "خدمات تنظيف مخصصة للمكاتب والشركات، المحلات التجارية، والمطاعم، بما يضمن بيئة عمل نقية ومثالية لاستقبال عملائكم طوال ساعات العمل.",
    s3_f1: "تنظيف المكاتب والواجهات والأرضيات وقاعات الاجتماعات",
    s3_f2: "جداول مرنة قبل أو بعد ساعات الدوام الرسمي",

    s4_badge: "04 ضيافة فندقية",
    s4_title: "الضيافة الفندقية والمناسبات والمؤتمرات",
    s4_desc: "توفير مضيفات محترفات بالزي الموحد الأنيق للمناسبات العائلية، الحفلات، والمؤتمرات الرسمية بمعايير فنادق الخمس نجوم في قطر.",
    s4_f1: "تقديم القهوة والشاي والمشروبات بلباقة عالية",
    s4_f2: "تنظيم طاولات البوفيه والاستقبال والترحيب بالضيوف",

    s5_badge: "05 كي وبخار",
    s5_title: "كي الملابس والعباءات بالأجهزة البخارية",
    s5_desc: "عناية فائقة بالأقمشة والملابس الحساسة والعباءات بأحدث أجهزة البخار العمودية والأفقية مع الحفاظ التام على رونق الأقمشة.",
    s5_f1: "كي العباءات والفساتين بالبخار بدون إتلاف الأنسجة",
    s5_f2: "ترتيب وتنسيق الخزائن وفق أفضل المعايير",

    s6_badge: "06 تعقيم متقدم",
    s6_title: "التعقيم الصحي والتطهير المعتمد",
    s6_desc: "تطهير عميق ومكافحة الجراثيم والبكتيريا بمواد معتمدة صحياً في قطر، مع تعقيم آمن لغرف الأطفال ومناطق المعيشة والمطابخ.",
    s6_f1: "معقمات مرخصة آمنة تماماً على صحة الأطفال والرضع",
    s6_f2: "تعقيم مقابض الأبواب ومناطق اللمس المتكرر",
    s_cta: "طلب الخدمة عبر 33498554",

    // Why Choose Us
    whyus_eyebrow: "لماذا يختارنا العملاء؟",
    whyus_title: "معايير احترافية تجعلنا الخيار الموثوق في قطر",
    whyus_desc: "نحن في شركة كلاب كلين ندرك أن المنزل هو مساحة الراحة والخصوصية، ولذلك نختار كوادرنا بعناية فائقة ونخضعهم لبرامج تدريب متقدمة في أساليب التنظيف والضيافة واحترام خصوصية الأسر القطرية.",
    about_overlay_title: "كفاءة معتمدة 100%",
    about_overlay_text: "طاقم مؤهل قانونياً وصحياً بأعلى معايير السلامة المهنية بدولة قطر.",
    p1_title: "فحص أمني وصحي شامل",
    p1_desc: "جميع العاملات يحملن بطاقات صحية وإقامات عمل قانونية معتمدة.",
    p2_title: "انضباط ودقة في المواعيد",
    p2_desc: "جدولة مرنة تناسب جدولكم اليومي مع التزام تام بالوقت.",
    p3_title: "مواد آمنة وصديقة للبيئة",
    p3_desc: "معقمات ومطهرات آمنة كلياً على الأطفال والحيوانات الأليفة.",
    p4_title: "ضمان الاستبدال الفوري",
    p4_desc: "مرونة كاملة في استبدال العاملة لضمان رضاكم وسعادتكم التامة.",
    vision_badge: "رؤيتنا",
    vision_desc: "أن نكون الخيار المفضل لخدمات التنظيف والضيافة في قطر، والمعروفين بالجودة العالية والموثوقية ورضا العملاء والابتكار المستدام.",
    mission_badge: "رسالتنا",
    mission_desc: "تقديم خدمات تنظيف وضيافة استثنائية في قطر، وتوفير بيئات نقية وصحية للعملاء بالاعتماد على تقنيات حديثة وكوادر مدربة بمعايير فندقية.",
    about_call_btn: "اتصل الآن: 33498554",
    about_wa_btn: "محادثة واتساب سريعة",

    // Staff Directory
    staff_eyebrow: "كوادرنا المعتمدة رسمياً",
    staff_title: "كادر عاملات ومربيات كلاب كلين",
    staff_desc: "طاقم نسائي متكامل ومحترف، حاصل على فحص طبي شامل وإقامات عمل قانونية، مدرب على أعلى معايير التدبير المنزلي والضيافة والخصوصية.",
    staff_status_livein: "متاحة للمبيت",
    staff_status_contract: "متاحة للتعاقد",
    staff_action: "طلب حجز العاملة",
    staff_c1_name: "عاملة تدبير منزلي ومبيت",
    staff_c1_role: "فحص طبي سارٍ - كفالة رسمية",
    staff_c1_specs: "خبرة في تنظيف الفلل وإدارة شؤون المنزل والعناية بالأثاث.",
    staff_c2_name: "أخصائية ضيافة وتدبير",
    staff_c2_role: "تدريب فندقي معتمد",
    staff_c2_specs: "كفاءة عالية في الترتيب اليومي والضيافة المنزلية الراقية.",
    staff_c3_name: "مربية أطفال وتدبير منزلي",
    staff_c3_role: "رعاية أطفال متخصصة",
    staff_c3_specs: "عناية فائقة بنظافة وغذاء الأطفال مع مساعدة شاملة للأم.",
    staff_c4_name: "عاملة مبيت وضيافة راقية",
    staff_c4_role: "خبرة خليجية موثقة",
    staff_c4_specs: "إتقان الطهي المنزلي المساعد وتقديم المشروبات وترتيب الغرف.",
    staff_c5_name: "أخصائية تنظيف وتعقيم فلل",
    staff_c5_role: "كفاءة وأمانة معتمدة",
    staff_c5_specs: "سرعة ودقة متناهية في تنظيف الأرضيات والمطابخ والواجهات.",
    staff_c6_name: "مربية أطفال حديثي الولادة",
    staff_c6_role: "فحص طبي دوري شامل",
    staff_c6_specs: "خبرة متميزة في التعامل مع الرضع والاهتمام بمواعيد النوم والغذاء.",
    staff_c7_name: "عاملة تدبير منزلي شامل",
    staff_c7_role: "إقامة نظامية 100%",
    staff_c7_specs: "العناية اليومية الكاملة بكافة مرافق المنزل والفلل الكبيرة.",
    staff_c8_name: "أخصائية كي وتنظيم ملابس",
    staff_c8_role: "خبرة في الأقمشة الفاخرة",
    staff_c8_specs: "مهارة عالية في كي العباءات والملابس الحساسة وترتيب الخزائن.",
    staff_c9_name: "عاملة مبيت ماهرة وموثوقة",
    staff_c9_role: "كفالة كاملة وضمان استبدال",
    staff_c9_specs: "التزام تام بالتعليمات واحترام خصوصية العائلة وهدوء المنزل.",
    staff_c10_name: "مساعدة منزلية وضيافة",
    staff_c10_role: "تدريب معتمد على النظافة",
    staff_c10_specs: "مساعدة ربة المنزل في كافة المهام اليومية والترتيب.",
    staff_c11_name: "أخصائية نظافة مطابخ ومجالس",
    staff_c11_role: "شهادة لياقة طبية معتمدة",
    staff_c11_specs: "إزالة الشحوم وتعقيم الأسطح وتلميع الأثاث الخشبي والرخامي.",
    staff_c12_name: "مربية ومساعدة أسرية",
    staff_c12_role: "خبرة في رعاية الأطفال",
    staff_c12_specs: "مرافقة الأطفال ومساعدتهم في أنشطتهم وتوفير بيئة نظيفة وآمنة.",
    staff_c13_name: "عاملة تنظيف مقيمة للفلل",
    staff_c13_role: "جاهزية فورية للتعاقد",
    staff_c13_specs: "نشاط واجتهاد في تغطية المساحات الكبيرة بكفاءة عالية.",
    staff_c14_name: "أخصائية ضيافة ومناسبات",
    staff_c14_role: "لباقة ومظهر فندقي أنيق",
    staff_c14_specs: "تقديم القهوة والشاي واستقبال الضيوف في المناسبات الأسرية.",
    staff_c15_name: "عاملة مبيت ذات خبرة ممتازة",
    staff_c15_role: "كفالة وأوراق نظامية",
    staff_c15_specs: "هدوء وإتقان وانضباط تام في مواعيد العمل اليومية والمهام الأسرية.",

    // Operations Gallery
    gallery_eyebrow: "من واقع عملنا الميداني",
    gallery_title: "معرض العمليات والرعاية الأسرية",
    gallery_desc: "صور حية من قلب منازل عملائنا في قطر تعكس العناية بالأطفال والرعاية الأسرية والجاهزية المهنية لطاقمنا.",
    g1_title: "رعاية المواليد والأطفال الصغار",
    g1_sub: "اهتمام وحنان وأمان تام يمنح الأمهات راحة البال طوال اليوم",
    g2_title: "عناية فائقة ونظافة يومية للأطفال",
    g2_sub: "كوادر متخصصة في مساعدة الأمهات في المهام الدقيقة",
    g3_title: "طواقم تنظيف للفلل والمؤسسات",
    g3_sub: "فرق عمل جماعية للتعامل مع المشاريع السكنية والتجارية الكبرى",
    g4_title: "جاهزية تامة بالزي الرسمي الموحد",
    g4_sub: "فريق عمل متكامل مرخص ومفحوص طبياً يخدم كافة مناطق دولة قطر",

    // Booking Process
    process_eyebrow: "آلية الحجز السريعة",
    process_title: "احجز خدمتك في 4 خطوات سهلة ومباشرة",
    process_desc: "صممنا نظام الحجز ليكون بسيطاً ومريحاً، دون أي تعقيد أو هدر للوقت.",
    step1_title: "اتصل أو راسلنا",
    step1_desc: "تواصل معنا عبر الاتصال المباشر على 33498554 أو أرسل رسالة واتساب بنوع الخدمة وموقعك في قطر.",
    step2_title: "تحديد نوع العقد والموعد",
    step2_desc: "اختر نظام المبيت أو الباقة الشهرية أو الزيارة اليومية مع تحديد الوقت الأنسب لجدول أسرتك.",
    step3_title: "وصول الكادر والبدء",
    step3_desc: "تصل العاملة أو الطاقم المجهز في الموعد المحدد تماماً بالزي الموحد وكافة المستلزمات لبدء العمل.",
    step4_title: "الدفع وضمان الرضا",
    step4_desc: "ادفع بالطريقة التي تناسبك بعد إتمام الخدمة بنجاح، مع متابعة دورية لضمان راحتكم الكاملة.",

    // Geographic Coverage
    coverage_eyebrow: "مناطق التغطية",
    coverage_title: "نخدم جميع مدن ومناطق دولة قطر",
    coverage_desc: "تصل خدماتنا وفِرقنا المجهزة إلى باب بيتك أو منشأتك في أي موقع داخل قطر.",
    cov_doha: "مدينة الدوحة",
    cov_pearl: "جزيرة اللؤلؤة (The Pearl)",
    cov_lusail: "مدينة لوسيل الحديثة",
    cov_westbay: "منطقة الخليج الغربي (West Bay)",
    cov_sadd: "السد والنصر ومحمود",
    cov_rayyan: "الريان ومعيذر وعين خالد",
    cov_wakra: "مدينة الوكرة والوكير",
    cov_khor: "مدينة الخور والذخيرة",
    cov_umsalal: "أم صلال والخريطيات",
    cov_dafna: "الدفنة والقصار وعنيزة",
    cov_hilal: "الهلال والمطار القديم",
    cov_all: "جميع أنحاء ومناطق قطر",

    // FAQ
    faq_eyebrow: "إجابات واضحة",
    faq_title: "الأسئلة الشائعة حول خدمات كلاب كلين",
    faq_desc: "كل ما تحتاج معرفته عن عقود المبيت، التعاقد الشهري، وإجراءات السلامة.",
    faq_q1: "ما هي شروط ومزايا التعاقد بنظام المبيت الشهري؟",
    faq_a1: "يتيح لكم نظام المبيت الشهري الحصول على عاملة مقيمة داخل المنزل بتفرغ كامل للقيام بكافة أعمال النظافة، الطبخ المساعد، والتدبير المنزلي. يشمل العقد تغطية الإقامة القانونية والفحص الصحي الكامل مع إمكانية استبدال العاملة فوراً في حال عدم التوافق.",
    faq_q2: "هل العاملات والموظفون مفحوصون طبياً ولهم إقامات نظامية؟",
    faq_a2: "نعم، 100% من كوادر شركة كلاب كلين يعملون تحت كفالتنا القانونية الرسمية ويحملون شهادات صحية سارية صادرة من القومسيون الطبي في قطر، بالإضافة إلى فحص السجل الجنائي لضمان أقصى درجات الأمان لأسرتكم.",
    faq_q3: "كيف يمكنني طلب عاملة أو خدمة تنظيف مستعجلة في نفس اليوم؟",
    faq_a3: "نوفر خدمة الحجز الفوري في نفس اليوم. يكفي الاتصال المباشر على الرقم 33498554 أو إرسال موقعك ورغبتك عبر الواتساب، وسيقوم فريق العمليات بتوجيه أقرب كادر متاح إليك مباشرة.",
    faq_q4: "هل توفر الشركة أدوات ومواد التنظيف أم يتكفل بها العميل؟",
    faq_a4: "نوفر كلا الخيارين بناءً على رغبتكم: باقة شاملة كافة مواد التنظيف المستوردة الصديقة للبيئة والماكينات المتطورة، أو باقة توفير الكادر فقط مع استخدام مواد العميل الخاصة بأسعار مخفضة.",

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
    footer_s_commercial: "التنظيف التجاري وإدارة المكاتب",
    footer_s_industrial: "التنظيف الصناعي للمستودعات",
    footer_s_hospitality: "خدمات الضيافة وكي العباءات",
    footer_website_label: "الموقع:",
    footer_rights: "جميع الحقوق محفوظة © 2026 شركة كلاب كلين للتنظيفات والضيافة والخدمات - دولة قطر.",
    footer_timing: "رقم الحجز السريع: 33498554 | متاح السبت - الخميس: 7:00 ص - 11:30 م",

    // Floating Tooltips
    float_wa_title: "مراسلة واتساب: 33498554",
    float_call_title: "اتصال فوري: 33498554",

    // Slider Controls
    slider_prev: "السابق",
    slider_next: "التالي"
  },

  en: {
    // Page Title & Meta
    page_title: "Clean Club Hospitality & Cleaning Services - Tel: 33498554",

    // Top Bar
    top_location: "Doha, State of Qatar",
    top_hours: "Sat — Thu: 7:00 AM — 11:30 PM",
    top_wa_pill: "Instant WhatsApp 24/7",
    brand_title: "Clean Club",
    brand_subtitle: "Hospitality & Services",
    drawer_brand_title: "Clean Club Services",
    lang_btn_text: "العربية",

    // Navigation
    nav_home: "Home",
    nav_livein: "Live-In & Monthly",
    nav_services: "Our Services",
    nav_whyus: "Why Clean Club",
    nav_staff: "Staff Directory",
    nav_gallery: "Operations Gallery",
    nav_process: "Booking Process",
    nav_contact: "Contact Us",

    drawer_call_btn: "Instant Call: 33498554",
    drawer_wa_btn: "Chat on WhatsApp: 33498554",

    // Hero Section
    hero_company_title: "Clean Club Hospitality & Cleaning Services",
    hero_badge: "Leading Qatari Company",
    hero_title_1: "Cleanliness That Befits You",
    hero_title_2: "Service Worthy of Trust",
    hero_title: "Live-In Maids & Monthly Contracts",
    hero_accent: "Certified Domestic Workers & Hospitality Staff in Qatar",
    hero_desc: "At Clean Club, we provide comprehensive cleaning and hospitality solutions adhering to the highest standards of quality and professionalism, ensuring a spotless, secure environment reflecting excellence.",
    hero_cta_contact: "Contact Us Now",
    hero_cta_services: "Explore Our Services",
    hero_wa_btn: "Book via WhatsApp: 33498554",
    hero_call_btn: "Direct Call: 33498554",
    hero_spec_1: "Medically screened staff with certified health cards",
    hero_spec_2: "100% legal sponsorship with instant replacement guarantee",
    hero_spec_3: "Flexible monthly and annual contracts respecting family privacy",
    hero_spec_4: "24/7 dedicated customer support and rapid response",

    stat_1_label: "Legally Certified & Medically Screened Staff",
    stat_2_label: "5-Star Hotel & Luxury Hospitality Standards",
    stat_3_label: "24/7 Customer Care & Rapid Deployment",

    // Partners
    partners_eyebrow: "Our Trusted Partners & Accredited Entities in Qatar",

    // Live-In Offers & Campaign Posters
    livein_eyebrow: "Most In-Demand Service Across Qatar",
    livein_title: "Live-In Maids & Monthly Contract Solutions",
    livein_desc: "We deliver full-time monthly live-in solutions that guarantee comfort, safety, and utmost family privacy, backed by medical checks and legal guarantees.",
    livein_c1_badge: "Total Comfort Package",
    livein_c1_title: "Professional Cleaning & Permanent Live-In",
    livein_c1_desc: "Full-time residential live-in maids trained in luxury villa upkeep, housekeeping, and utmost family privacy.",
    livein_c2_badge: "Family Support & Education Package",
    livein_c2_title: "Your Time for What Matters... We Handle the Home",
    livein_c2_desc: "Focus on your children's education and future while our live-in staff manages daily cleaning and chores.",
    livein_c3_badge: "Peaceful Home Package",
    livein_c3_title: "Your Time with Family... Our Time for Your Home",
    livein_c3_desc: "Comprehensive home management covering room sanitization, wardrobe care, precision laundry, and cooking support.",
    livein_c4_badge: "Peace of Mind & Guarantee",
    livein_c4_title: "Starts with Cleanliness... Ends with Peace of Mind",
    livein_c4_desc: "Immediate replacement warranty whenever needed, with continuous supervision and round-the-clock customer support.",
    livein_c5_badge: "Comprehensive Organization Package",
    livein_c5_title: "Organized Home & Pristine Comfort",
    livein_c5_desc: "Wardrobe organization, deep furniture cleansing, and majlis care handled by certified specialists in Qatar.",
    book_now_btn: "Book Now on 33498554",

    // Core Services Section
    services_eyebrow: "Our Core Services",
    services_title: "Specialized Cleaning & Hospitality Packages",
    services_desc: "Tailored solutions for families, luxury villas, commercial firms, and industrial facilities in Qatar, combining skilled workforce with international standards.",
    s1_badge: "01 Care & Housekeeping",
    s1_title: "Live-In Childcare & Housekeeping",
    s1_desc: "Professional nannies trained in infant care and supporting mothers in daily housekeeping with five-star hygiene.",
    s1_f1: "Attentive care for infant hygiene, feeding, and play",
    s1_f2: "High competency and trusted home security",

    s2_badge: "02 Residential & Villas",
    s2_title: "Comprehensive Residential & Villa Cleaning",
    s2_desc: "Deep cleaning and sanitization for luxury villas and residences across Qatar using certified eco-friendly supplies.",
    s2_f1: "Deep sanitization for bedrooms, majlis, and living areas",
    s2_f2: "Degreasing and sterilization for kitchens and bathrooms",

    s3_badge: "03 Commercial & Offices",
    s3_title: "Commercial & Office Facility Cleaning",
    s3_desc: "Dedicated cleaning for corporate headquarters, offices, retail spaces, and restaurants ensuring a spotless business environment.",
    s3_f1: "Cleaning desks, glass facades, flooring, and meeting halls",
    s3_f2: "Flexible schedules outside standard office hours",

    s4_badge: "04 Hotel Hospitality",
    s4_title: "Hospitality for Events & Conferences",
    s4_desc: "Providing elegant, uniformed hostesses for family gatherings, weddings, and executive summits with 5-star hospitality.",
    s4_f1: "Serving Arabic coffee, tea, and beverages with utmost etiquette",
    s4_f2: "Buffet management and guest reception services",

    s5_badge: "05 Steam & Ironing",
    s5_title: "Garment & Abaya Steam Ironing",
    s5_desc: "Delicate fabric and abaya steaming with advanced vertical steamer units preserving textiles and shine.",
    s5_f1: "Steam pressing for abayas and dresses with zero fabric damage",
    s5_f2: "Wardrobe organization and folding to hotel standards",

    s6_badge: "06 Deep Sanitization",
    s6_title: "Certified Health Sanitization & Disinfection",
    s6_desc: "Hospital-grade disinfection combating germs and viruses with safe chemicals certified by Qatar health authorities.",
    s6_f1: "Licensed disinfectants 100% safe for infants and pets",
    s6_f2: "Sterilization of high-touch surfaces and entryways",
    s_cta: "Request Service on 33498554",

    // Why Choose Us
    whyus_eyebrow: "Why Choose Clean Club?",
    whyus_title: "Professional Standards Making Us the Preferred Choice in Qatar",
    whyus_desc: "At Clean Club Company, we understand that your home is your sanctuary. We rigorously vet our personnel and put them through advanced hospitality and cleaning training programs with deep respect for Qatari cultural values and family privacy.",
    about_overlay_title: "100% Certified Efficiency",
    about_overlay_text: "Workforce legally and medically cleared under the highest occupational safety in Qatar.",
    p1_title: "Security & Medical Clearance",
    p1_desc: "All workers hold valid health cards and official legal work residencies.",
    p2_title: "Punctuality & Discipline",
    p2_desc: "Flexible scheduling fitting your routine with strict commitment to time.",
    p3_title: "Safe & Eco-Friendly Materials",
    p3_desc: "Eco-certified sanitizers completely safe for infants, children, and pets.",
    p4_title: "Immediate Replacement Warranty",
    p4_desc: "Seamless worker replacement whenever requested to ensure complete satisfaction.",
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
    staff_status_livein: "Available for Live-In",
    staff_status_contract: "Available for Contract",
    staff_action: "Book This Worker",
    staff_c1_name: "Live-In Housekeeper",
    staff_c1_role: "Valid Medical Check - Official Sponsorship",
    staff_c1_specs: "Experienced in luxury villa housekeeping, floor care, and furniture maintenance.",
    staff_c2_name: "Hospitality & Housekeeping Specialist",
    staff_c2_role: "Certified 5-Star Hotel Training",
    staff_c2_specs: "High competency in daily organization and high-end residential hospitality.",
    staff_c3_name: "Nanny & Childcare Specialist",
    staff_c3_role: "Specialized Infant & Toddler Care",
    staff_c3_specs: "Attentive care for infant hygiene, feeding, and full maternal assistance.",
    staff_c4_name: "Live-In Hospitality Maid",
    staff_c4_role: "Documented GCC Experience",
    staff_c4_specs: "Proficient in assisted cooking, tea/coffee service, and room management.",
    staff_c5_name: "Villa Sanitization Specialist",
    staff_c5_role: "Certified Reliability & Integrity",
    staff_c5_specs: "Speed and thorough precision in cleaning kitchens, bathrooms, and marble floors.",
    staff_c6_name: "Newborn Care Nanny",
    staff_c6_role: "Comprehensive Periodic Medical Screening",
    staff_c6_specs: "Outstanding track record in baby care, sleep schedule management, and hygiene.",
    staff_c7_name: "Comprehensive Residential Housekeeper",
    staff_c7_role: "100% Legal Qatar Residency",
    staff_c7_specs: "Complete daily upkeep for multi-story villas and expansive homes.",
    staff_c8_name: "Garment Care & Ironing Specialist",
    staff_c8_role: "Luxury Fabric & Abaya Experience",
    staff_c8_specs: "Exceptional skill in steam pressing delicate fabrics, abayas, and wardrobe arrangement.",
    staff_c9_name: "Reliable Full-Time Live-In Maid",
    staff_c9_role: "Full Sponsorship & Replacement Guarantee",
    staff_c9_specs: "Strict adherence to household rules, family privacy, and serene environment.",
    staff_c10_name: "Home Assistant & Hostess",
    staff_c10_role: "Certified Hygiene & Housekeeping Training",
    staff_c10_specs: "Supporting the lady of the house in all daily domestic requirements.",
    staff_c11_name: "Kitchen & Majlis Sanitization Specialist",
    staff_c11_role: "Official Medical Commission Fitness Clearance",
    staff_c11_specs: "Degreasing, deep surface disinfection, and marble & wood polishing.",
    staff_c12_name: "Family Assistant & Nanny",
    staff_c12_role: "Proven Childcare Experience",
    staff_c12_specs: "Accompanying children, assisting their activities, and maintaining clean play zones.",
    staff_c13_name: "Villa Live-In Housekeeper",
    staff_c13_role: "Immediate Deployment Readiness",
    staff_c13_specs: "High energy and meticulous dedication in managing large residences.",
    staff_c14_name: "Event & Reception Hostess",
    staff_c14_role: "Polished Manners & Elegant Uniform",
    staff_c14_specs: "Serving coffee, tea, and welcoming guests at private family gatherings.",
    staff_c15_name: "Highly Experienced Live-In Maid",
    staff_c15_role: "Full Legal Paperwork & Sponsorship",
    staff_c15_specs: "Calm, disciplined, and punctual in executing daily family and home routines.",

    // Operations Gallery
    gallery_eyebrow: "Real Field Operations",
    gallery_title: "Operations & Childcare Gallery",
    gallery_desc: "Authentic glimpses from our client residences in Qatar showcasing child safety, family care, and our team's operational readiness.",
    g1_title: "Infant & Newborn Childcare",
    g1_sub: "Gentle, compassionate, and secure attention giving mothers all-day peace of mind",
    g2_title: "Attentive Daily Child Hygiene & Support",
    g2_sub: "Specialized personnel assisting mothers in delicate daily family duties",
    g3_title: "Villa & Corporate Cleaning Crews",
    g3_sub: "Collaborative teams handling large residential compounds and commercial towers",
    g4_title: "Full Readiness in Official Uniform",
    g4_sub: "Complete, certified, and medically cleared team serving all regions across Qatar",

    // Booking Process
    process_eyebrow: "Quick Booking Timeline",
    process_title: "Book Your Service in 4 Easy Steps",
    process_desc: "Our booking workflow is designed to be streamlined, prompt, and effortless.",
    step1_title: "Call or Message Us",
    step1_desc: "Call our hotline 33498554 or WhatsApp us specifying your requested service and location in Qatar.",
    step2_title: "Choose Contract & Schedule",
    step2_desc: "Select live-in, monthly, or daily service and set the schedule that fits your family.",
    step3_title: "Staff Arrival & Kick-off",
    step3_desc: "Your assigned candidate or equipped crew arrives punctually in uniform to begin service.",
    step4_title: "Payment & Satisfaction Guarantee",
    step4_desc: "Convenient payment upon satisfaction, backed by ongoing quality follow-up.",

    // Geographic Coverage
    coverage_eyebrow: "Service Coverage",
    coverage_title: "Serving All Cities & Districts in Qatar",
    coverage_desc: "Our equipped teams and live-in staff reach your doorstep anywhere across the State of Qatar.",
    cov_doha: "Doha City",
    cov_pearl: "The Pearl-Qatar",
    cov_lusail: "Lusail City",
    cov_westbay: "West Bay",
    cov_sadd: "Al Sadd & Al Nasr",
    cov_rayyan: "Al Rayyan & Ain Khaled",
    cov_wakra: "Al Wakrah & Al Wukair",
    cov_khor: "Al Khor & Al Dhakhira",
    cov_umsalal: "Umm Salal & Al Kharaitiyat",
    cov_dafna: "Al Dafna & Onaiza",
    cov_hilal: "Al Hilal & Old Airport",
    cov_all: "All Regions Across Qatar",

    // FAQ
    faq_eyebrow: "Clear Answers",
    faq_title: "Frequently Asked Questions About Clean Club",
    faq_desc: "Everything you need to know regarding monthly contracts, live-in arrangements, and safety protocols.",
    faq_q1: "What are the conditions and benefits of the monthly live-in contract?",
    faq_a1: "The monthly live-in arrangement provides you with a dedicated full-time domestic worker residing in your home to handle cleaning, kitchen assistance, and housekeeping. The contract covers legal residency, complete medical fitness, and an immediate replacement guarantee.",
    faq_q2: "Are workers medically screened and holding legal residencies?",
    faq_a2: "Yes, 100% of Clean Club personnel operate under our official legal sponsorship and carry valid health certificates issued by the Qatar Medical Commission, alongside criminal background checks for maximum family security.",
    faq_q3: "How can I request a same-day urgent maid or cleaning service?",
    faq_a3: "We provide instant same-day booking. Simply call 33498554 or send your location via WhatsApp, and our operations dispatch will assign the nearest available team to your address.",
    faq_q4: "Does the company provide cleaning supplies or does the client?",
    faq_a4: "We offer both options based on your preference: an all-inclusive package with imported eco-friendly supplies and advanced equipment, or a staff-only package using client-provided supplies at discounted rates.",

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
    footer_s_commercial: "Commercial & Office Cleaning",
    footer_s_industrial: "Industrial Warehouse Cleaning",
    footer_s_hospitality: "Hospitality & Abaya Steaming",
    footer_website_label: "Website:",
    footer_rights: "All Rights Reserved © 2026 Clean Club Company for Cleaning & Hospitality - Qatar.",
    footer_timing: "Fast Booking Hotline: 33498554 | Open Sat - Thu: 7:00 AM - 11:30 PM",

    // Floating Tooltips
    float_wa_title: "WhatsApp Inquiry: 33498554",
    float_call_title: "Instant Call: 33498554",

    // Slider Controls
    slider_prev: "Previous",
    slider_next: "Next"
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

  function updateButtonLabels(lang) {
    const isMobile = window.innerWidth <= 640;
    const desktopNextText = (lang === 'ar') ? 'English' : 'العربية';
    const mobileNextText = (lang === 'ar') ? 'EN' : 'عربي';

    if (langLabel) {
      langLabel.textContent = isMobile ? mobileNextText : desktopNextText;
    }
    if (drawerLangLabel) {
      drawerLangLabel.textContent = desktopNextText;
    }
  }

  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('cleanclub_lang', lang);

    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === 'en') ? 'ltr' : 'rtl';
    if (document.body) {
      document.body.dir = (lang === 'en') ? 'ltr' : 'rtl';
      document.body.setAttribute('dir', (lang === 'en') ? 'ltr' : 'rtl');
    }

    // Update toggle button text
    updateButtonLabels(lang);

    // Update all elements with data-i18n
    const transObj = translations[lang];
    if (transObj) {
      if (transObj.page_title) {
        document.title = transObj.page_title;
      }

      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (transObj[key]) {
          el.textContent = transObj[key];
        }
      });

      document.querySelectorAll('[data-i18n-title]').forEach(el => {
        const key = el.getAttribute('data-i18n-title');
        if (transObj[key]) {
          el.setAttribute('title', transObj[key]);
          el.setAttribute('aria-label', transObj[key]);
        }
      });
    }

    if (window.refreshLiveinSlider) {
      window.refreshLiveinSlider();
    }
    if (window.refreshStaffSlider) {
      window.refreshStaffSlider();
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
    drawerLangToggleBtn.addEventListener('click', () => {
      toggleLanguage();
      const drawer = document.getElementById('mobileDrawer');
      if (drawer) {
        drawer.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  window.addEventListener('resize', () => {
    updateButtonLabels(currentLang);
  });

  // Apply default or stored language
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

/**
 * Generic Interactive Carousel / Slider Controller
 */
function createCarouselController(config) {
  const slider = document.getElementById(config.sliderId);
  const track = document.getElementById(config.trackId);
  const prevBtn = document.getElementById(config.prevBtnId);
  const nextBtn = document.getElementById(config.nextBtnId);
  const dotsContainer = document.getElementById(config.dotsContainerId);

  if (!slider || !track || !prevBtn || !nextBtn || !dotsContainer) return null;

  const cards = Array.from(track.querySelectorAll(config.cardSelector));
  if (cards.length === 0) return null;

  let currentIndex = 0;
  let autoPlayTimer = null;

  function getMaxIndex() {
    return Math.max(0, cards.length - config.getVisibleCount());
  }

  function renderDots() {
    dotsContainer.innerHTML = '';
    const totalDots = getMaxIndex() + 1;
    for (let i = 0; i < totalDots; i++) {
      const dot = document.createElement('button');
      dot.className = 'slider-dot' + (i === currentIndex ? ' active' : '');
      dot.setAttribute('aria-label', (config.dotLabelPrefix || 'Slide ') + (i + 1));
      dot.addEventListener('click', () => {
        currentIndex = i;
        updateSlider();
        restartAutoPlay();
      });
      dotsContainer.appendChild(dot);
    }
  }

  function updateSlider() {
    const isRtl = document.documentElement.dir !== 'ltr';
    const maxIdx = getMaxIndex();
    if (currentIndex > maxIdx) currentIndex = maxIdx;
    if (currentIndex < 0) currentIndex = 0;

    const firstCard = cards[0];
    const cardRect = firstCard.getBoundingClientRect();
    const cardWidth = cardRect.width;
    const gap = parseFloat(getComputedStyle(track).gap) || 20;
    const step = cardWidth + gap;
    const offset = currentIndex * step;

    track.style.transform = `translateX(${isRtl ? offset : -offset}px)`;

    prevBtn.classList.toggle('disabled', currentIndex === 0);
    prevBtn.disabled = currentIndex === 0;
    nextBtn.classList.toggle('disabled', currentIndex >= maxIdx);
    nextBtn.disabled = currentIndex >= maxIdx;

    const dots = dotsContainer.querySelectorAll('.slider-dot');
    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === currentIndex);
    });
  }

  function nextSlide() {
    const maxIdx = getMaxIndex();
    currentIndex = (currentIndex < maxIdx) ? currentIndex + 1 : 0;
    updateSlider();
  }

  function prevSlide() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : getMaxIndex();
    updateSlider();
  }

  nextBtn.addEventListener('click', () => {
    nextSlide();
    restartAutoPlay();
  });

  prevBtn.addEventListener('click', () => {
    prevSlide();
    restartAutoPlay();
  });

  function startAutoPlay() {
    if (!config.autoPlayInterval) return;
    stopAutoPlay();
    autoPlayTimer = setInterval(nextSlide, config.autoPlayInterval);
  }

  function stopAutoPlay() {
    if (autoPlayTimer) {
      clearInterval(autoPlayTimer);
      autoPlayTimer = null;
    }
  }

  function restartAutoPlay() {
    stopAutoPlay();
    startAutoPlay();
  }

  slider.addEventListener('mouseenter', stopAutoPlay);
  slider.addEventListener('mouseleave', startAutoPlay);

  let touchStartX = 0;
  let touchDiffX = 0;

  track.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
    touchDiffX = 0;
    stopAutoPlay();
  }, { passive: true });

  track.addEventListener('touchmove', (e) => {
    touchDiffX = e.touches[0].clientX - touchStartX;
  }, { passive: true });

  track.addEventListener('touchend', () => {
    if (Math.abs(touchDiffX) > 40) {
      const isRtl = document.documentElement.dir !== 'ltr';
      if ((isRtl && touchDiffX > 0) || (!isRtl && touchDiffX < 0)) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    startAutoPlay();
  });

  window.addEventListener('resize', () => {
    renderDots();
    updateSlider();
  });

  renderDots();
  updateSlider();
  startAutoPlay();

  return {
    refresh: () => {
      renderDots();
      updateSlider();
    }
  };
}

/**
 * Interactive Live-In & Monthly Contracts Carousel / Slider
 */
function initLiveinSlider() {
  const controller = createCarouselController({
    sliderId: 'liveinSlider',
    trackId: 'liveinSliderTrack',
    prevBtnId: 'liveinSliderPrev',
    nextBtnId: 'liveinSliderNext',
    dotsContainerId: 'liveinSliderDots',
    cardSelector: '.campaign-poster-card',
    autoPlayInterval: 5000,
    getVisibleCount: () => {
      const w = window.innerWidth;
      if (w > 1024) return 3;
      if (w > 640) return 2;
      return 1;
    }
  });

  if (controller) {
    window.refreshLiveinSlider = controller.refresh;
  }
}

/**
 * Interactive Verified Staff Directory Carousel / Slider
 */
function initStaffSlider() {
  const controller = createCarouselController({
    sliderId: 'staffSlider',
    trackId: 'staffSliderTrack',
    prevBtnId: 'staffSliderPrev',
    nextBtnId: 'staffSliderNext',
    dotsContainerId: 'staffSliderDots',
    cardSelector: '.staff-card',
    autoPlayInterval: 6000,
    getVisibleCount: () => {
      const w = window.innerWidth;
      if (w > 1100) return 4;
      if (w > 768) return 3;
      if (w > 480) return 2;
      return 1;
    }
  });

  if (controller) {
    window.refreshStaffSlider = controller.refresh;
  }
}
