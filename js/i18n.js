// ============================================
// GLAZORA – i18n Translations (AR + EN)
// ============================================
const TRANSLATIONS = {
  ar: {
    dir: 'rtl',
    lang: 'ar',

    // NAV
    nav_home: 'الرئيسية',
    nav_products: 'منتجاتنا',
    nav_about: 'من نحن',
    nav_contact: 'تواصل معنا',
    nav_portal: 'بوابة العملاء',

    // HERO
    hero_tag: 'الفجيرة · المنطقة الصناعية الحيل · الإمارات',
    hero_title_1: 'صناعة',
    hero_title_2: 'الزجاج',
    hero_title_3: 'والألمنيوم',
    hero_title_4: 'بامتياز',
    hero_sub: 'أبواب ونوافذ وأنظمة ستائر زجاجية فاخرة — مصنّعة ومركّبة باحترافية عالية في مختلف أنحاء الإمارات.',
    hero_btn_products: 'تصفح منتجاتنا',
    hero_btn_quote: 'اطلب عرض سعر',
    stat_projects: 'مشروع منجز',
    stat_years: 'سنوات خبرة',
    stat_uae: 'الإمارات',
    stat_projects_label: 'مشاريع منجزة',
    stat_years_label: 'سنوات الخبرة',
    stat_uae_label: 'مرخصون في الإمارات',

    // INTRO
    who_tag: 'من نحن',
    who_title: 'متخصصون في الزجاج والألمنيوم الهيكلي في الإمارات',
    who_p1: 'جلازورا لبيع الأبواب والنوافذ ذ.م.م. تأسست في المنطقة الصناعية الحيل بالفجيرة — أحد أسرع مراكز التصنيع نمواً في الإمارات. هدفنا بسيط: تصنيع أنظمة الزجاج والألمنيوم والـ UPVC والـ WPC بمعايير يستحقها سوق الإمارات.',
    who_p2: 'نشغّل مصنعاً مجهزاً بالكامل حيث يتم قطع الألمنيوم ولحامه ودهانه بالبودرة وتجميعه قبل وصوله إلى مواقع عملائنا. كل مشروع — من بوابة الفيلا إلى الستارة الزجاجية التجارية — يُنفّذ داخلياً من التصميم حتى التسليم.',
    who_btn: 'قصتنا ←',

    mat_al: 'الألمنيوم',
    mat_al_desc: 'أنظمة هيكلية وعازلة حرارياً، مؤكسدة ومطلية بالبودرة',
    mat_gl: 'الزجاج',
    mat_gl_desc: 'مقوّى وطبقات ومزدوج والمزخرف',
    mat_upvc: 'UPVC',
    mat_upvc_desc: 'أنظمة أبواب ونوافذ موفرة للطاقة وقليلة الصيانة',
    mat_wpc: 'WPC وحديد',
    mat_wpc_desc: 'ديكورات داخلية من الخشب البلاستيكي وهياكل فولاذية للبرجولات',

    // PRODUCTS
    prod_tag: 'ما نصنعه',
    prod_title: 'تشكيلة منتجاتنا',
    prod_view_all: 'عرض جميع المنتجات ←',
    prod_curtain: 'أنظمة الستارة الزجاجية',
    prod_curtain_desc: 'أنظمة واجهات زجاجية بالكامل للمباني التجارية والسكنية',
    prod_sliding: 'الأنظمة المنزلقة',
    prod_sliding_desc: 'أبواب ونوافذ منزلقة ناعمة وعازلة حرارياً',
    prod_doors: 'الأبواب',
    prod_doors_desc: 'مفردة وزوجية ومحورية وداخلية وخارجية — جميع التكوينات',
    prod_pergola: 'البرجولات',
    prod_pergola_desc: 'هياكل برجولات فولاذية وألمنيوم للفلل والمساحات التجارية',
    prod_handrail: 'الدرابزينات والبوابات',
    prod_handrail_desc: 'درابزينات وحواجز من الفولاذ المقاوم للصدأ والألمنيوم والزجاج',
    prod_kitchen: 'المطابخ والخزائن',
    prod_kitchen_desc: 'وحدات مطبخ ألمنيوم وأنظمة خزائن من WPC مخصصة',

    // PORTAL
    portal_badge: 'بوابة العملاء',
    portal_title: 'تابع مشروعك\nفي الوقت الفعلي',
    portal_sub: 'بمجرد بدء مشروعك، ستحصل على دخول إلى لوحة التحكم الخاصة بك — اعرض صور التقدم، وراجع عروض الأسعار، وتابع المدفوعات كلها في مكان واحد.',
    portal_btn: 'دخول إلى البوابة',
    pf_photos: 'صور قبل وبعد',
    pf_photos_sub: 'صور حية من الموقع في كل مرحلة',
    pf_quote: 'إدارة عروض الأسعار',
    pf_quote_sub: 'عرض وتنزيل واعتماد عرض السعر',
    pf_pay: 'المدفوعات والرصيد',
    pf_pay_sub: 'تابع المبالغ المدفوعة والمتبقية',
    pf_status: 'حالة التقدم',
    pf_status_sub: 'تحديثات مباشرة على مرحلة البناء',

    // WHY
    why_tag: 'لماذا تختارنا',
    why_title: 'مختلفون. أفضل.',
    why_1_title: 'تصنيع داخلي',
    why_1_desc: 'مصنعنا في الفجيرة يعني رقابة كاملة على الجودة — لا وسطاء، لا تأخير. كل قطعة تُقطع وتُلحم وتُشطّب تحت سقفنا.',
    why_2_title: 'خبرة مناخ الإمارات',
    why_2_desc: 'كل نظام مهندَس للخليج — كواسر حرارية، طلاءات مقاومة للأشعة فوق البنفسجية، ومتانة ضد الهواء المالح.',
    why_3_title: 'خدمة شاملة',
    why_3_desc: 'من القياس الأول حتى التسليم النهائي، ندير التصميم والتصنيع والتوصيل والتركيب بنقطة اتصال واحدة.',
    why_4_title: 'بوابة عملاء شفافة',
    why_4_desc: 'تحديثات في الوقت الفعلي وصور ومتابعة المدفوعات — لن تتساءل أبداً عما يحدث في موقعك.',

    // CONTACT STRIP
    loc_label: 'الموقع',
    loc_val: 'المنطقة الصناعية الحيل، الفجيرة، الإمارات',
    call_label: 'اتصل بنا',
    email_label: 'البريد الإلكتروني',
    cta_quote: 'اطلب عرض سعر',

    // FOOTER
    footer_company: 'جلازورا لبيع الأبواب والنوافذ ذ.م.م',
    footer_location: 'المنطقة الصناعية الحيل، الفجيرة، الإمارات العربية المتحدة',
    footer_products: 'المنتجات',
    footer_company_col: 'الشركة',
    footer_contact_col: 'تواصل معنا',
    footer_about: 'من نحن',
    footer_contact: 'تواصل معنا',
    footer_rights: '© 2025 جلازورا. جميع الحقوق محفوظة.',

    // SIGNIN
    signin_title: 'مرحباً بعودتك',
    signin_sub: 'سجّل دخولك باستخدام بريدك الإلكتروني أو رقم هاتفك.',
    tab_mobile: '📱 الجوال',
    tab_email: '✉️ البريد الإلكتروني',
    phone_label: 'رقم الجوال',
    email_label_auth: 'البريد الإلكتروني',
    send_otp: 'إرسال رمز التحقق ←',
    no_account: 'لا تملك حساباً؟ يتم إنشاء حسابك من قِبل جلازورا عند بدء مشروعك.',
    contact_us_link: 'تواصل معنا للبدء ←',
    otp_title: 'أدخل رمز التحقق',
    otp_back: '← تجربة رقم / بريد مختلف',
    otp_resend: 'إعادة إرسال الرمز',
    otp_resend_pre: 'لم تستلمه؟',
    otp_verify: 'تحقق وتسجيل الدخول ←',
    otp_wrong: 'الرمز غير صحيح. يرجى المحاولة مجدداً.',
    no_project_title: 'تم تسجيل دخولك!',
    no_project_sub: 'حسابك نشط، لكن لم يرتبط بمشروع بعد. بمجرد ربط الفريق لحسابك بمشروعك، ستتمكن من رؤية كل شيء هنا.',
    no_project_next: 'ماذا بعد؟',
    no_project_detail: 'سيقوم منسق المشروع لدينا بربط حسابك بمشروعك خلال 24 ساعة من بدء المشروع. ستتلقى إشعاراً عبر البريد الإلكتروني أو الرسائل النصية عند الاستعداد.',
    contact_team: 'تواصل مع فريقنا',
    back_to_website: '← العودة إلى الموقع',

    // DASHBOARD
    dash_overview: 'نظرة عامة',
    dash_photos: 'صور الموقع',
    dash_quotation: 'عرض السعر',
    dash_payments: 'المدفوعات',
    dash_contact: 'تواصل معنا',
    dash_back: 'العودة إلى الموقع',
    dash_signout: 'تسجيل الخروج',
    project_status: 'حالة المشروع',
    in_progress: 'قيد التنفيذ',
    completion: 'نسبة الإنجاز',
    on_schedule: 'في الموعد',
    amount_paid: 'المبلغ المدفوع',
    remaining: 'المتبقي',
    next_due: 'الاستحقاق القادم',
    project_progress: 'تقدم المشروع',
    recent_photos: 'أحدث صور الموقع',
    view_all: 'عرض الكل ←',
    payment_summary: 'ملخص المدفوعات',
    project_details: 'تفاصيل المشروع',
    proj_type: 'نوع المشروع',
    proj_location: 'الموقع',
    proj_start: 'تاريخ البدء',
    proj_end: 'الانتهاء المتوقع',
    proj_supervisor: 'مشرف الموقع',
    paid_badge: 'مدفوع ✓',
    pending_badge: 'مستحق',
    completion_badge: 'عند التسليم',
    pay_note_title: 'كيفية السداد',
    pay_note_desc: 'تواصل مع فريق الحسابات لدينا لمعالجة دفعتك عبر التحويل البنكي أو ترتيب الاستلام في الموقع.',
    contact_accounts: 'تواصل مع الحسابات ←',
    before: 'قبل',
    during: 'أثناء',
    after: 'بعد',
    quot_approved: 'معتمد',
    quot_download: '⬇ تنزيل PDF',
    quot_no: 'رقم العرض',
    quot_date: 'تاريخ الإصدار',
    quot_client: 'العميل',
    quot_location: 'موقع المشروع',
    quot_desc: 'الوصف',
    quot_unit: 'الوحدة',
    quot_qty: 'الكمية',
    quot_price: 'سعر الوحدة',
    quot_total: 'الإجمالي',
    quot_subtotal: 'المجموع',
    quot_vat: 'الإجمالي شامل ضريبة القيمة المضافة 5٪',
    approve_quot: 'اعتماد عرض السعر',
    approve_success: '✅ تم اعتماد عرض السعر بنجاح',
    signout_confirm: 'هل تريد تسجيل الخروج من بوابة العملاء؟',

    // ABOUT
    about_tag: 'من نحن',
    about_title: 'مبنيون في الفجيرة،\nموثوقون في الإمارات',
    about_sub: 'متخصصون في تصنيع وتركيب أنظمة الألمنيوم والزجاج والـ UPVC والـ WPC — مع التزام بالجودة والشفافية.',
    story_tag: 'قصتنا',
    story_title: 'من الفجيرة إلى كل زاوية في الإمارات',
    story_p1: 'تأسست جلازورا لبيع الأبواب والنوافذ ذ.م.م. في المنطقة الصناعية الحيل بالفجيرة. نشغّل مصنعاً مجهزاً بالكامل حيث تُقطع الملفات الألمنيومية وتُلحم وتُطلى بالبودرة وتُجمّع قبل وصولها إلى مواقع عملائنا.',
    story_p2: 'فريقنا يضم مهندسين وصانعين ومشرفي مواقع متمرسين يفهمون ليس فقط المواد، بل أيضاً متطلبات بيئة البناء في الإمارات: الحرارة الشديدة، والهواء المالح، والرمال، وجداول المشاريع الضيقة.',
    story_btn: 'اتصل بنا ←',
    val_tag: 'قيمنا',
    val_title: 'المبادئ التي تقود كل مشروع',
    val_quality: 'الجودة أولاً',
    val_quality_desc: 'كل ملف ولحام وحشو يخضع لفحص الجودة قبل مغادرة مصنعنا.',
    val_trans: 'الشفافية مع العميل',
    val_trans_desc: 'بوابتنا الرقمية تمنح أصحاب المشاريع رؤية مباشرة لحالة مشروعهم والصور والشؤون المالية.',
    val_time: 'التسليم في الموعد',
    val_time_desc: 'ننسق جداول التصنيع والتركيب مع جدولك الزمني للبناء. التأخير يكلف الجميع — نخطط لتجنبه.',
    val_uae: 'مصنوع للإمارات',
    val_uae_desc: 'كل مواد وطلاءات وحشوات مختارة لأداء مناخ الإمارات — مقاومة حرارية وثبات ضد الأشعة فوق البنفسجية.',
    val_e2e: 'خدمة شاملة',
    val_e2e_desc: 'نتولى كل شيء من القياس الأول حتى التسليم النهائي. شركة واحدة، مسؤولية واحدة.',
    val_design: 'دعم التصميم',
    val_design_desc: 'فريقنا يعمل مع المعماريين والمصممين الداخليين والمطورين لإيجاد النظام الأمثل لكل مشروع.',

    // CONTACT
    contact_tag: 'تواصل معنا',
    contact_title: 'دعنا نتحدث عن مشروعك',
    contact_sub: 'سواء كنت تحتاج إلى عرض سعر أو استشارة أو لديك سؤال — فريقنا مستعد للمساعدة.',
    contact_h2: 'يسعدنا سماعك',
    contact_p: 'نحن متواجدون في الفجيرة ونخدم عملاء في جميع الإمارات السبع. أرسل لنا رسالة وسيتواصل معك أحد مستشاري المشاريع خلال 24 ساعة.',
    visit_label: 'زيارة مصنعنا',
    visit_val: 'المنطقة الصناعية الحيل،\nالفجيرة، الإمارات العربية المتحدة',
    hours_label: 'ساعات العمل',
    hours_val: 'الاثنين – السبت: 8:00 ص – 6:00 م\nالأحد: مغلق',
    already_client: 'عميل بالفعل؟',
    already_client_sub: 'سجّل دخولك إلى بوابة العملاء لمتابعة حالة مشروعك، وعرض الصور، وإدارة المدفوعات.',
    portal_link: 'الوصول إلى بوابة العملاء ←',
    form_title: 'أرسل لنا رسالة',
    fname: 'الاسم الأول *',
    fname_ph: 'محمد',
    lname: 'الاسم الأخير *',
    lname_ph: 'الراشدي',
    phone_f: 'رقم الهاتف *',
    phone_ph: '+971 50 000 0000',
    email_f: 'البريد الإلكتروني',
    email_ph: 'you@example.com',
    proj_type_f: 'نوع المشروع *',
    proj_type_ph: 'اختر منتجاً / خدمة',
    emirate_f: 'الإمارة',
    emirate_ph: 'اختر الإمارة',
    message_f: 'أخبرنا عن مشروعك',
    message_ph: 'صف مشروعك باختصار — نوع المبنى، الأبعاد التقريبية، الجدول الزمني، المتطلبات الخاصة...',
    submit_form: 'إرسال الرسالة ←',
    form_success: '✅ تم إرسال رسالتك! سيتواصل معك فريقنا خلال 24 ساعة.',

    proj_options: [
      'نظام ستارة زجاجية', 'أبواب / نوافذ منزلقة', 'أبواب محورية / مدخل',
      'أبواب داخلية', 'أبواب خارجية / أمنية', 'بوابات جدارية',
      'برجولة / مظلة', 'درابزين / حاجز', 'نظام مطبخ', 'خزانة / دريسنج',
      'مشروع متعدد / كامل', 'أخرى'
    ],
    emirate_options: ['دبي', 'أبوظبي', 'الفجيرة', 'الشارقة', 'عجمان', 'رأس الخيمة', 'أم القيوين'],
  },

  en: {
    dir: 'ltr',
    lang: 'en',
    nav_home: 'Home', nav_products: 'Products', nav_about: 'About Us',
    nav_contact: 'Contact', nav_portal: 'Client Portal',
    hero_tag: 'Fujairah · AlHail Industrial · UAE',
    hero_title_1: 'Crafting', hero_title_2: 'Glass &', hero_title_3: 'Aluminum', hero_title_4: 'Excellence',
    hero_sub: 'Premium doors, windows, curtain walls & architectural systems — manufactured and installed with precision across the UAE.',
    hero_btn_products: 'Explore Products', hero_btn_quote: 'Get a Quote',
    stat_projects: '500+', stat_years: '12+', stat_uae: 'UAE',
    stat_projects_label: 'Projects Completed', stat_years_label: 'Years Experience', stat_uae_label: 'Based & Certified',
    who_tag: 'Who We Are', who_title: "UAE's Trusted Architectural Glazing Specialists",
    who_p1: "Glazora for Doors and Windows Sales LLC is based in Fujairah's AlHail Industrial Zone. We specialize in the full cycle — design, manufacturing, supply, and installation — of aluminum, glass, UPVC, and WPC systems.",
    who_p2: "We operate a fully equipped fabrication facility. Every project — from a villa gate to a commercial curtain wall — is handled in-house from design to delivery.",
    who_btn: 'Our Story →',
    mat_al: 'Aluminum', mat_al_desc: 'Structural, thermal-break, anodized & powder-coated systems',
    mat_gl: 'Glass', mat_gl_desc: 'Tempered, laminated, double-glazed & patterned glass',
    mat_upvc: 'UPVC', mat_upvc_desc: 'Energy-efficient, low-maintenance door & window profiles',
    mat_wpc: 'WPC & Steel', mat_wpc_desc: 'Wood-plastic composite interiors & steel pergola structures',
    prod_tag: 'What We Make', prod_title: 'Our Product Range', prod_view_all: 'View All Products →',
    prod_curtain: 'Curtain Wall Systems', prod_curtain_desc: 'Full-height glazed facade systems for commercial & residential buildings',
    prod_sliding: 'Sliding Systems', prod_sliding_desc: 'Smooth, thermally-efficient sliding doors & windows',
    prod_doors: 'Doors', prod_doors_desc: 'Single, double, pivot, interior & exterior — all configurations',
    prod_pergola: 'Pergolas', prod_pergola_desc: 'Steel & aluminum outdoor pergola structures',
    prod_handrail: 'Handrails & Gates', prod_handrail_desc: 'Stainless steel, aluminum & glass balustrades and wall gates',
    prod_kitchen: 'Kitchens & Dressings', prod_kitchen_desc: 'Custom aluminum & WPC kitchen units and wardrobe systems',
    portal_badge: 'Client Portal', portal_title: 'Track Your Project\nin Real Time',
    portal_sub: "Once your project begins, you'll receive access to your personal dashboard — view progress photos, approve quotations, and track payments all in one place.",
    portal_btn: 'Sign In to Portal',
    pf_photos: 'Before & After Photos', pf_photos_sub: 'Live site imagery at every stage',
    pf_quote: 'Quotation Management', pf_quote_sub: 'View, download & approve your quote',
    pf_pay: 'Payments & Balance', pf_pay_sub: 'Track paid & remaining amounts',
    pf_status: 'Progress Status', pf_status_sub: 'Live updates on your build phase',
    why_tag: 'Why Choose Us', why_title: 'Built Different. Built Better.',
    why_1_title: 'In-House Manufacturing', why_1_desc: 'Our Fujairah facility means full quality control — no middlemen, no delays.',
    why_2_title: 'UAE Climate Expertise', why_2_desc: 'Every system is engineered for the Gulf — thermal breaks, UV-resistant coatings.',
    why_3_title: 'End-to-End Service', why_3_desc: 'From first measurement to final handover, we manage everything with one point of contact.',
    why_4_title: 'Transparent Client Portal', why_4_desc: 'Real-time updates, photos, and payment tracking — you\'re never left wondering.',
    loc_label: 'Location', loc_val: 'AlHail Industrial, Fujairah, UAE',
    call_label: 'Call Us', email_label: 'Email', cta_quote: 'Get a Quote',
    footer_company: 'Glazora for Doors and Windows Sales LLC', footer_location: 'AlHail Industrial, Fujairah, UAE',
    footer_products: 'Products', footer_company_col: 'Company', footer_contact_col: 'Contact',
    footer_about: 'About Us', footer_contact: 'Contact', footer_rights: '© 2025 Glazora. All rights reserved.',
    signin_title: 'Welcome Back', signin_sub: 'Sign in with your mobile number or email address.',
    tab_mobile: '📱 Mobile', tab_email: '✉️ Email', phone_label: 'Mobile Number', email_label_auth: 'Email Address',
    send_otp: 'Send Verification Code →', no_account: 'Don\'t have access? Your account is created by Glazora once your project starts.',
    contact_us_link: 'Contact us to get started →', otp_title: 'Enter OTP',
    otp_back: '← Try a different number / email', otp_resend: 'Resend code', otp_resend_pre: "Didn't receive it?",
    otp_verify: 'Verify & Sign In →', otp_wrong: 'Incorrect code. Please try again.',
    no_project_title: "You're Signed In!", no_project_sub: "Your account is active, but hasn't been linked to a project yet.",
    no_project_next: 'What happens next?', no_project_detail: 'Our project coordinator will link your account to your project within 24 hours of your project beginning.',
    contact_team: 'Contact Our Team', back_to_website: '← Back to Website',
    dash_overview: 'Overview', dash_photos: 'Site Photos', dash_quotation: 'Quotation',
    dash_payments: 'Payments', dash_contact: 'Contact Us', dash_back: 'Back to Website', dash_signout: 'Sign Out',
    project_status: 'Project Status', in_progress: 'In Progress', completion: 'Completion', on_schedule: 'On schedule',
    amount_paid: 'Amount Paid', remaining: 'Remaining', next_due: 'Next Due',
    project_progress: 'Project Progress', recent_photos: 'Recent Site Photos', view_all: 'View All →',
    payment_summary: 'Payment Summary', project_details: 'Project Details',
    proj_type: 'Project Type', proj_location: 'Location', proj_start: 'Start Date', proj_end: 'Expected Completion', proj_supervisor: 'Site Supervisor',
    paid_badge: 'Paid ✓', pending_badge: 'Due Soon', completion_badge: 'On Completion',
    pay_note_title: 'How to make a payment', pay_note_desc: 'Contact our accounts team to process your payment by bank transfer or arrange on-site collection.',
    contact_accounts: 'Contact Accounts Team →', before: 'Before', during: 'During', after: 'After',
    quot_approved: 'Approved', quot_download: '⬇ Download PDF', quot_no: 'Quotation No.', quot_date: 'Date Issued',
    quot_client: 'Client', quot_location: 'Project Location', quot_desc: 'Description', quot_unit: 'Unit',
    quot_qty: 'Qty', quot_price: 'Unit Price', quot_total: 'Total', quot_subtotal: 'Subtotal',
    quot_vat: 'TOTAL (VAT Inclusive 5%)', approve_quot: 'Approve Quotation', approve_success: '✅ Quotation approved successfully',
    signout_confirm: 'Sign out of your client portal?',
    about_tag: 'About Glazora', about_title: 'Built in Fujairah,\nTrusted Across the UAE',
    about_sub: 'A specialist manufacturer and installer of aluminum, glass, UPVC, and WPC architectural systems.',
    story_tag: 'Our Story', story_title: 'From Fujairah to Every Corner of the UAE',
    story_p1: 'Glazora for Doors and Windows Sales LLC was established in the AlHail Industrial Zone of Fujairah. We operate a fully equipped fabrication facility where aluminum profiles are cut, welded, powder-coated, and assembled.',
    story_p2: 'Our team brings together experienced engineers, fabricators, and site supervisors who understand the UAE construction environment: extreme heat, salt air, sand, and tight project timelines.',
    story_btn: 'Contact Us →',
    val_tag: 'Our Values', val_title: 'The Principles That Guide Every Project',
    val_quality: 'Quality First', val_quality_desc: 'Every profile, weld, and seal is quality-checked before it leaves our facility.',
    val_trans: 'Client Transparency', val_trans_desc: 'Our digital client portal gives project owners real-time visibility.',
    val_time: 'On-Time Delivery', val_time_desc: 'We coordinate our schedules with your construction timeline.',
    val_uae: 'Built for the UAE', val_uae_desc: 'Every material choice is selected for UAE climate performance.',
    val_e2e: 'End-to-End Service', val_e2e_desc: 'We handle everything from the first measurement to final handover.',
    val_design: 'Design Support', val_design_desc: 'Our team works with architects and designers to find the best system.',
    contact_tag: 'Get in Touch', contact_title: "Let's Talk About Your Project", contact_sub: 'Whether you need a quote, a consultation, or just have a question — our team is ready to help.',
    contact_h2: "We'd love to hear from you", contact_p: "We're based in Fujairah and serve clients across all seven Emirates.",
    visit_label: 'Visit Our Facility', visit_val: 'AlHail Industrial Zone,\nFujairah, UAE',
    hours_label: 'Working Hours', hours_val: 'Monday – Saturday: 8:00 AM – 6:00 PM\nSunday: Closed',
    already_client: 'Already a client?', already_client_sub: 'Sign in to your client portal to track your project status.',
    portal_link: 'Access Client Portal →',
    form_title: 'Send Us a Message', fname: 'First Name *', fname_ph: 'Mohammed', lname: 'Last Name *', lname_ph: 'Al Rashidi',
    phone_f: 'Phone Number *', phone_ph: '+971 50 000 0000', email_f: 'Email Address', email_ph: 'you@example.com',
    proj_type_f: 'Project Type *', proj_type_ph: 'Select a product / service', emirate_f: 'Location / Emirate', emirate_ph: 'Select Emirate',
    message_f: 'Tell Us About Your Project', message_ph: 'Briefly describe your project — building type, approximate dimensions, timeline...',
    submit_form: 'Send Message →', form_success: '✅ Your message has been sent! Our team will contact you within 24 hours.',
    proj_options: ['Curtain Wall System','Sliding Doors / Windows','Pivot / Entrance Doors','Interior Doors','Exterior / Security Doors','Wall Gates','Pergola / Canopy','Handrails / Balustrades','Kitchen System','Wardrobe / Dressing','Multiple / Full Project','Other'],
    emirate_options: ['Dubai','Abu Dhabi','Fujairah','Sharjah','Ajman','Ras Al Khaimah','Umm Al Quwain'],
  }
};

// Current language (default Arabic)
let currentLang = localStorage.getItem('glazora_lang') || 'ar';

function t(key) {
  return TRANSLATIONS[currentLang][key] || TRANSLATIONS['en'][key] || key;
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('glazora_lang', lang);
  document.documentElement.dir = TRANSLATIONS[lang].dir;
  document.documentElement.lang = lang;
  applyTranslations();
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = t(key);
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = val;
    } else {
      el.textContent = val;
    }
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    el.innerHTML = t(el.getAttribute('data-i18n-html'));
  });
  // Update lang toggle button
  const toggleBtn = document.getElementById('langToggle');
  if (toggleBtn) toggleBtn.textContent = currentLang === 'ar' ? 'EN' : 'ع';
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
  document.documentElement.dir = TRANSLATIONS[currentLang].dir;
  document.documentElement.lang = currentLang;
  applyTranslations();
});
