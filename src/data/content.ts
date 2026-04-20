export type Lang = 'en' | 'ar';

export const LOCALES: Lang[] = ['en', 'ar'];

export const COPY = {
  en: {
    nav: { home: 'Home', courses: 'Courses', register: 'Register', about: 'About' },
    cta: { apply: 'Apply now', syllabus: 'View syllabus', signup: 'Register interest', submit: 'Submit' },
    home: {
      eyebrow: 'COHORT 05 · APPLICATIONS OPEN',
      heroLine1: 'Learn the',
      heroEm: 'craft',
      heroLine2: 'of AI-era marketing.',
      heroSub:
        'An eight-week intensive for mid-career professionals in Saudi Arabia. Hands-on with the tools, frameworks, and teams shaping what comes next.',
      metricsTitle: 'Eight weeks. One cohort. Mid-career momentum.',
      m1: '8', m1l: 'week intensive',
      m2: '24', m2l: 'learners per cohort',
      m3: '5', m3l: 'senior practitioners on faculty',
      m4: '96%', m4l: 'completion rate',
      programsTitle: 'Our programmes',
      programsSub: 'Two tracks. Both taught in the evenings, in person in Riyadh, with a remote option.',
      testimonyEyebrow: 'FROM COHORT 04',
      testimonyQuote:
        '"I came in thinking I knew how marketing worked. I left knowing how to rebuild our whole team around AI. Hema didn\'t give me tools — it gave me a new operating model."',
      testimonyBy: 'Nora Al-Otaibi · Head of Growth, Nahdi',
      closingTitle: 'Ambition is a skill.',
      closingSub: 'Apply for Cohort 05. Applications close 15 May 2026.',
    },
    register: {
      eyebrow: 'REGISTER YOUR INTEREST',
      title: "Tell us you're coming.",
      sub: "Leave your email and we'll send syllabus details, cohort dates, and admissions info.",
      emailLabel: 'Email address',
      emailPh: 'you@company.com',
      trackLabel: 'Which track?',
      cohortLabel: 'COHORT',
      cohortWord: 'Cohort',
      scheduleTitle: 'Upcoming cohorts',
      scheduleSub: 'All dates are in Riyadh time. Select one above when you register.',
      through: 'through',
      successTitle: "We'll be in touch.",
      successBody: (email: string) =>
        `Thanks, ${email}. Check your inbox in the next few hours for syllabus details and next steps.`,
    },
    about: {
      eyebrow: 'ABOUT',
      title: 'A school for the ambitious.',
      sub: "Hema Academy was founded in 2025 in Riyadh by five senior practitioners who'd spent their careers bridging AI and marketing — and who wanted to bring that practice home.",
      nameTitle: 'Behind the name',
      nameBody:
        "In Arabic, همّة (hemma) is a quiet word. It doesn't mean drive, or hustle, or grind — it means the particular kind of patient ambition that moves mountains. It's the word you use for someone who keeps climbing when no one is watching. We chose it because it describes the learners we build for.",
      markTitle: 'Behind the mark',
      markBody:
        'Our mark is a letter H made from two rising strokes, meeting at a summit. A small notch at the peak marks the top — a flag planted, a view earned. It reads as a mountain; it reads as ambition; it reads as an H. All three at once.',
      teamTitle: 'The team',
      teamSub: 'Five practitioners. Senior enough to have seen every hype cycle. Present enough to teach you this one.',
    },
    course: {
      eyebrow: 'PROGRAMME',
      syllabusTitle: 'Syllabus',
      syllabusHeading: 'Eight weeks, week by week.',
      whoTitle: 'Who it\'s for',
      whoHeading: 'Designed for',
      facTitle: 'Faculty',
      logTitle: 'Logistics',
      logHeading: 'How it runs',
      durationLabel: 'Duration',
      nextLabel: 'Next cohort',
      formatLabel: 'Format',
      formatValue: 'In-person · Riyadh',
      readyTitle: 'Ready to climb?',
      readySub: "Register interest and we'll save you a seat for review.",
      logWhen: 'When',
      logWhere: 'Where',
      logRemote: 'Remote',
      logCost: 'Cost',
      logWhenVal: 'Mon & Wed evenings, 6–9pm',
      logWhereVal: 'Hema Studio, King Fahd Rd, Riyadh',
      logRemoteVal: 'Available for 30% of cohort by application',
      logCostVal: 'Free for this pilot cohort — paid tracks start 2027',
    },
    coursesPage: {
      title: 'Two tracks, one system.',
      sub: 'Pick the track that matches where you are. Most learners take one; some take both over two cohorts.',
    },
    footer: {
      tag: 'Ambition, taught.',
      made: 'Made in Riyadh · صُنع في الرياض',
      courses: 'COURSES',
      contact: 'CONTACT',
      follow: 'FOLLOW',
      wordmark: 'أكاديمية همّة',
      rights: '© 2026 Hema Academy · Riyadh',
    },
    langToggle: 'العربية',
  },
  ar: {
    nav: { home: 'الرئيسية', courses: 'البرامج', register: 'التسجيل', about: 'عن الأكاديمية' },
    cta: { apply: 'قدّم الآن', syllabus: 'عرض المنهج', signup: 'سجّل اهتمامك', submit: 'إرسال' },
    home: {
      eyebrow: 'الدفعة الخامسة · التسجيل مفتوح',
      heroLine1: 'تعلّم',
      heroEm: 'حرفة',
      heroLine2: 'التسويق في عصر الذكاء الاصطناعي.',
      heroSub:
        'برنامج مكثّف مدته ثمانية أسابيع، مصمَّم للمهنيين في منتصف مسارهم في المملكة العربية السعودية. تدريب عملي على الأدوات والأطر وفرق العمل التي تشكّل ملامح المرحلة القادمة.',
      metricsTitle: 'ثمانية أسابيع. دفعة واحدة. زخم في منتصف المسار المهني.',
      m1: '٨', m1l: 'أسابيع مكثّفة',
      m2: '٢٤', m2l: 'متعلّمًا في الدفعة',
      m3: '٥', m3l: 'ممارسين في هيئة التدريس',
      m4: '٩٦٪', m4l: 'معدّل إتمام البرنامج',
      programsTitle: 'برامجنا',
      programsSub: 'مساران. كلاهما يُقدَّم مساءً، حضوريًا في الرياض، مع خيار الانضمام عن بُعد.',
      testimonyEyebrow: 'من الدفعة الرابعة',
      testimonyQuote:
        '«دخلتُ البرنامج وأنا أظنّ أني أعرف كيف يعمل التسويق. خرجتُ وأنا أعرف كيف أعيد بناء فريقنا بالكامل حول الذكاء الاصطناعي. همّة لم تعطني أدوات — أعطتني نموذج تشغيل جديدًا.»',
      testimonyBy: 'نورة العتيبي · مديرة النمو في نهدي',
      closingTitle: 'الهمّة مهارة.',
      closingSub: 'قدّم للدفعة الخامسة. يُغلَق التسجيل في ١٥ مايو ٢٠٢٦.',
    },
    register: {
      eyebrow: 'سجّل اهتمامك',
      title: 'أخبرنا أنك قادم.',
      sub: 'اترك بريدك الإلكتروني وسنرسل لك تفاصيل المنهج ومواعيد الدفعات ومعلومات القبول.',
      emailLabel: 'البريد الإلكتروني',
      emailPh: 'you@company.com',
      trackLabel: 'أي مسار؟',
      cohortLabel: 'الدفعة',
      cohortWord: 'دفعة',
      scheduleTitle: 'الدفعات القادمة',
      scheduleSub: 'جميع المواعيد بتوقيت الرياض. اختر دفعة عند التسجيل أعلاه.',
      through: 'حتى',
      successTitle: 'سنتواصل معك قريبًا.',
      successBody: (email: string) =>
        `شكرًا، ${email}. تفقّد بريدك الإلكتروني خلال الساعات القادمة لتصلك تفاصيل المنهج والخطوات التالية.`,
    },
    about: {
      eyebrow: 'عن الأكاديمية',
      title: 'مدرسة لأصحاب الهمّة.',
      sub:
        'تأسّست أكاديمية همّة عام ٢٠٢٥ في الرياض، على يد خمسة ممارسين أمضوا سنواتهم على تقاطع الذكاء الاصطناعي والتسويق — وأرادوا أن يُعيدوا هذه الممارسة إلى وطنهم.',
      nameTitle: 'وراء الاسم',
      nameBody:
        'في العربية، «همّة» كلمة هادئة. لا تعني الاندفاع ولا الكدّ ولا السباق — بل ذلك النوع الصبور من الطموح الذي يُزحزح الجبال. هي الكلمة التي تصف من يواصل التسلّق حين لا يراه أحد. اخترناها لأنها تصف المتعلّمين الذين نبني لأجلهم.',
      markTitle: 'وراء الشعار',
      markBody:
        'شعارنا هو حرف H مكوَّن من ضربتين صاعدتين تلتقيان عند القمّة. تُعلّم شُقّةٌ صغيرة في الأعلى موقع القمّة — علمٌ مغروس، ومشهدٌ مستحَقّ. يُقرأ جبلًا، ويُقرأ همّةً، ويُقرأ حرف H — ثلاثتها في آن.',
      teamTitle: 'الفريق',
      teamSub: 'خمسة ممارسين. من الخبرة ما يكفي لرؤية كلّ موجة ضجيج. ومن الحضور ما يكفي لتدريسك هذه الموجة.',
    },
    course: {
      eyebrow: 'البرنامج',
      syllabusTitle: 'المنهج',
      syllabusHeading: 'ثمانية أسابيع، أسبوعًا بأسبوع.',
      whoTitle: 'لمن هذا البرنامج',
      whoHeading: 'مصمَّم لأجل',
      facTitle: 'هيئة التدريس',
      logTitle: 'التفاصيل اللوجستية',
      logHeading: 'كيف يُقدَّم',
      durationLabel: 'المدّة',
      nextLabel: 'الدفعة القادمة',
      formatLabel: 'الصيغة',
      formatValue: 'حضوري · الرياض',
      readyTitle: 'مستعدّ للتسلّق؟',
      readySub: 'سجّل اهتمامك وسنحجز لك مقعدًا للمراجعة.',
      logWhen: 'الوقت',
      logWhere: 'المكان',
      logRemote: 'عن بُعد',
      logCost: 'التكلفة',
      logWhenVal: 'الإثنين والأربعاء مساءً، ٦–٩',
      logWhereVal: 'استوديو همّة، طريق الملك فهد، الرياض',
      logRemoteVal: 'متاح لـ ٣٠٪ من الدفعة بالترشيح',
      logCostVal: 'مجاني لهذه الدفعة التجريبية — المسارات المدفوعة تبدأ ٢٠٢٧',
    },
    coursesPage: {
      title: 'مساران، منظومة واحدة.',
      sub: 'اختر المسار الذي يناسب موقعك الحالي. معظم المتعلّمين يأخذون مسارًا واحدًا، والبعض يأخذ كليهما عبر دفعتَين.',
    },
    footer: {
      tag: 'الهمّة تُدرَّس.',
      made: 'صُنع في الرياض · Made in Riyadh',
      courses: 'البرامج',
      contact: 'تواصل',
      follow: 'تابعنا',
      wordmark: 'أكاديمية همّة',
      rights: '© ٢٠٢٦ أكاديمية همّة · الرياض',
    },
    langToggle: 'ENGLISH',
  },
} as const;

export type Course = {
  id: string;
  title: Record<Lang, string>;
  tagline: Record<Lang, string>;
  duration: Record<Lang, string>;
  next: Record<Lang, string>;
  syllabus: Record<Lang, readonly [string, string, string][]>;
  who: Record<Lang, string[]>;
};

export const COURSES: Course[] = [
  {
    id: 'ai-marketing',
    title: {
      en: 'Applied AI for Marketing Leaders',
      ar: 'الذكاء الاصطناعي التطبيقي لقادة التسويق',
    },
    tagline: {
      en: 'Rebuild your marketing stack around generative AI. For directors, VPs, and founders.',
      ar: 'أعد بناء منظومتك التسويقية حول الذكاء الاصطناعي التوليدي. للمديرين ونوّاب الرؤساء والمؤسّسين.',
    },
    duration: { en: '8 weeks · evenings', ar: '٨ أسابيع · مساءً' },
    next: { en: 'Starts 1 June 2026', ar: 'يبدأ ١ يونيو ٢٠٢٦' },
    syllabus: {
      en: [
        ['01', 'Foundations of generative systems', "How LLMs actually work. What they're good at, and where they fail. Prompt architecture as a marketing skill."],
        ['02', 'The AI-native funnel', 'Rebuilding awareness, consideration, and conversion with generative tools. Audit your current stack.'],
        ['03', 'Content at scale — with a taste filter', 'Using AI to produce more, without losing brand voice. Building a review pipeline your CMO trusts.'],
        ['04', 'Customer intelligence', 'Clustering, segmentation, and insight extraction from unstructured customer data using embeddings.'],
        ['05', 'Paid media, automated', "AI-driven bid management, creative testing, and attribution. Hands-on with Meta and Google's model endpoints."],
        ['06', 'Building an AI team', 'Who you hire, who you train, and who you replace. Role design for an AI-literate marketing org.'],
        ['07', 'Measuring what matters', 'Past the vanity metrics. Evaluation, hallucination guardrails, and ROI frameworks for AI initiatives.'],
        ['08', 'Capstone · your 90-day plan', 'Present a concrete 90-day rollout to faculty and peers. Walk out with a board-ready deck.'],
      ],
      ar: [
        ['٠١', 'أسُس الأنظمة التوليدية', 'كيف تعمل نماذج اللغة الكبيرة فعلًا. ما تُجيده وأين تفشل. هندسة الـ prompt بوصفها مهارة تسويقية.'],
        ['٠٢', 'قمع المبيعات بعقلية الذكاء الاصطناعي', 'إعادة بناء الوعي والاهتمام والتحويل باستخدام الأدوات التوليدية. تقييم منظومتك الحالية.'],
        ['٠٣', 'محتوى بكمّية عالية — مع فلتر ذوق', 'استخدام الذكاء الاصطناعي لإنتاج أكثر، دون فقد صوت العلامة. بناء خط مراجعة يثق به مديرك.'],
        ['٠٤', 'ذكاء العميل', 'التجميع والتقسيم واستخراج الرؤى من بيانات العملاء غير المنظّمة عبر الـ embeddings.'],
        ['٠٥', 'الإعلانات المدفوعة، بشكل مؤتمَت', 'إدارة المزايدات وتجربة المحتوى الإبداعي والـ attribution. تطبيق عملي على واجهات ميتا وجوجل.'],
        ['٠٦', 'بناء فريق ذكاء اصطناعي', 'من تُعيّن، ومن تُدرّب، ومن تستغني عنه. تصميم الأدوار لمنظّمة تسويقية ملمّة بالذكاء الاصطناعي.'],
        ['٠٧', 'قياس ما يستحقّ', 'تجاوُز مقاييس الغرور. التقييم وضوابط الهلوسة وأُطر العائد على الاستثمار لمبادرات الذكاء الاصطناعي.'],
        ['٠٨', 'المشروع الختامي · خطّة التسعين يومًا', 'قدّم خطّة تنفيذ ملموسة مدّتها تسعون يومًا لهيئة التدريس وزملائك.'],
      ],
    },
    who: {
      en: ['Marketing directors, VPs, CMOs', 'Founders running their own marketing', '5+ years of experience required'],
      ar: ['مديرو ومديرات التسويق ونوّاب الرئيس', 'المؤسِّسون الذين يديرون تسويقهم بأنفسهم', 'تُشترَط خبرة لا تقلّ عن ٥ سنوات'],
    },
  },
  {
    id: 'digital-craft',
    title: {
      en: 'Digital Marketing: The Craft',
      ar: 'التسويق الرقمي: الحِرفة',
    },
    tagline: {
      en: 'The fundamentals, taught properly. For practitioners stepping up into senior roles.',
      ar: 'الأساسيات كما ينبغي أن تُدرَّس. للممارسين الذين يستعدّون لأدوار قيادية.',
    },
    duration: { en: '8 weeks · evenings', ar: '٨ أسابيع · مساءً' },
    next: { en: 'Starts 1 June 2026', ar: 'يبدأ ١ يونيو ٢٠٢٦' },
    syllabus: {
      en: [
        ['01', 'Strategy before tactics', 'Positioning, audience, category — why most marketing fails at step one.'],
        ['02', 'The modern funnel', 'Awareness, acquisition, retention. How the funnel actually works in 2026.'],
        ['03', 'Brand as infrastructure', 'Why brand is a marketing asset, not a design deliverable.'],
        ['04', 'Channels that matter', "Deep dive on SEO, paid social, content, and influencer — what's changed, what hasn't."],
        ['05', 'Measurement without lying to yourself', 'Attribution models, incrementality, and the numbers that actually predict growth.'],
        ['06', 'Creative that earns attention', 'The craft of making things people want to share — and the data behind why.'],
        ['07', 'Running the marketing org', 'Briefs, agencies, teams. The boring stuff no one teaches.'],
        ['08', 'Capstone · a 12-month plan', 'Present a real 12-month plan for your org. Peer-reviewed, faculty-critiqued.'],
      ],
      ar: [
        ['٠١', 'الاستراتيجية قبل التكتيكات', 'التموضع والجمهور والفئة — لماذا يفشل معظم التسويق عند الخطوة الأولى.'],
        ['٠٢', 'القمع الحديث', 'الوعي والاكتساب والاحتفاظ. كيف يعمل القمع فعلًا في ٢٠٢٦.'],
        ['٠٣', 'العلامة بوصفها بنية تحتية', 'لماذا العلامة أصلٌ تسويقي، لا مخرجٌ تصميمي.'],
        ['٠٤', 'القنوات التي تهمّ', 'تعمّق في الـ SEO والإعلانات الاجتماعية والمحتوى والمؤثّرين — ما تغيّر، وما ظلّ كما هو.'],
        ['٠٥', 'القياس دون خداع للنفس', 'نماذج الإسناد، والـ incrementality، والأرقام التي تتنبّأ بالنمو فعلًا.'],
        ['٠٦', 'إبداع يستحقّ الانتباه', 'حِرفة صُنع ما يرغب الناس بمشاركته — والبيانات التي تفسّر السبب.'],
        ['٠٧', 'إدارة قسم التسويق', 'الـ briefs والوكالات والفِرَق. الأشياء المملّة التي لا يُدرّسها أحد.'],
        ['٠٨', 'المشروع الختامي · خطّة اثني عشر شهرًا', 'قدّم خطّة حقيقية لمدّة ١٢ شهرًا لمؤسّستك.'],
      ],
    },
    who: {
      en: ['Marketing managers moving up', 'Specialists broadening into generalists', '3+ years of experience'],
      ar: ['مديرو التسويق في طور الترقّي', 'المتخصّصون الذين يتوسّعون إلى أدوار عامّة', 'خبرة لا تقلّ عن ٣ سنوات'],
    },
  },
];

export type Cohort = {
  code: string;
  start: Record<Lang, string>;
  end: Record<Lang, string>;
  status: Record<Lang, string>;
  open: boolean;
};

export const COHORTS: Cohort[] = [
  { code: '05', start: { en: '1 June 2026', ar: '١ يونيو ٢٠٢٦' }, end: { en: '27 July 2026', ar: '٢٧ يوليو ٢٠٢٦' }, status: { en: 'Open', ar: 'مفتوحة' }, open: true },
  { code: '06', start: { en: '14 September 2026', ar: '١٤ سبتمبر ٢٠٢٦' }, end: { en: '9 November 2026', ar: '٩ نوفمبر ٢٠٢٦' }, status: { en: 'Waitlist', ar: 'قائمة انتظار' }, open: false },
  { code: '07', start: { en: '11 January 2027', ar: '١١ يناير ٢٠٢٧' }, end: { en: '8 March 2027', ar: '٨ مارس ٢٠٢٧' }, status: { en: 'Announced', ar: 'معلَنة' }, open: false },
];

export type TeamMember = {
  initials: string;
  colorClass: string;
  textClass: string;
  name: Record<Lang, string>;
  role: Record<Lang, string>;
  bio: Record<Lang, string>;
  socials: string[];
};

export const TEAM: TeamMember[] = [
  {
    initials: 'LK', colorClass: 'bg-clay', textClass: 'text-cream',
    name: { en: 'Layla Al-Qahtani', ar: 'ليلى القحطاني' },
    role: { en: 'Co-founder · Faculty Lead, AI', ar: 'شريكة مؤسِّسة · رئيسة هيئة التدريس، الذكاء الاصطناعي' },
    bio: {
      en: 'Former Head of ML at Careem. Built her first neural net in 2014, her first marketing attribution model in 2018, her first LLM-powered product in 2022. PhD, KAUST.',
      ar: 'الرئيسة السابقة لتعلُّم الآلة في كريم. بنت أوّل شبكة عصبية لها عام ٢٠١٤، وأوّل نموذج إسناد تسويقي عام ٢٠١٨، وأوّل منتج قائم على النماذج اللغوية الكبيرة عام ٢٠٢٢. دكتوراه من جامعة الملك عبدالله للعلوم والتقنية.',
    },
    socials: ['layla.sa', 'linkedin', 'x'],
  },
  {
    initials: 'RS', colorClass: 'bg-oasis', textClass: 'text-cream',
    name: { en: 'Rakan Al-Sudairi', ar: 'راكان السديري' },
    role: { en: 'Co-founder · Head of Faculty', ar: 'شريك مؤسِّس · رئيس هيئة التدريس' },
    bio: {
      en: "Twenty years in brand strategy. Built marketing orgs at STC, noon, and a Stockholm-based consumer brand you've heard of. Teaches the Digital Craft track.",
      ar: 'عشرون عامًا في استراتيجية العلامات التجارية. بنى أقسام التسويق في الاتصالات السعودية ونون وعلامة استهلاكية مقرّها ستوكهولم تعرفها جيّدًا. يُدرّس مسار التسويق الرقمي.',
    },
    socials: ['rakan.sa', 'linkedin'],
  },
  {
    initials: 'NH', colorClass: 'bg-night', textClass: 'text-cream',
    name: { en: 'Nouf Al-Harbi', ar: 'نوف الحربي' },
    role: { en: 'Co-founder · Head of Admissions', ar: 'شريكة مؤسِّسة · رئيسة القبول' },
    bio: {
      en: 'Previously head of growth at a Saudi fintech. Runs the admissions process and makes sure every cohort is the right mix of ambition and humility.',
      ar: 'رئيسة النمو سابقًا في إحدى شركات التقنية المالية السعودية. تقود عملية القبول وتحرص على أن تكون كلّ دفعة مزيجًا صحيحًا من الطموح والتواضع.',
    },
    socials: ['nouf.sa', 'linkedin'],
  },
  {
    initials: 'MA', colorClass: 'bg-saffron', textClass: 'text-ink',
    name: { en: 'Majed Al-Ansari', ar: 'ماجد الأنصاري' },
    role: { en: 'Faculty · Paid Media', ar: 'هيئة التدريس · الإعلانات المدفوعة' },
    bio: {
      en: "Ran paid acquisition teams at two unicorns. Teaches weeks 5 and 7 of the AI Marketing track. Known for refusing to teach anything he hasn't shipped that quarter.",
      ar: 'قاد فرق الاكتساب المدفوع في شركتين يونيكورن. يُدرّس الأسبوعين الخامس والسابع من مسار التسويق بالذكاء الاصطناعي. يُعرَف برفضه تدريس أيّ شيء لم يُنفّذه بنفسه في الربع الحالي.',
    },
    socials: ['majed.sa', 'linkedin', 'x'],
  },
  {
    initials: 'SK', colorClass: 'bg-ink', textClass: 'text-cream',
    name: { en: 'Sara Al-Khalifa', ar: 'سارة الخليفة' },
    role: { en: 'Faculty · Brand & Creative', ar: 'هيئة التدريس · العلامة والإبداع' },
    bio: {
      en: "Creative director. Built brand systems for three of the region's most recognizable consumer brands. Teaches week 6 of both tracks.",
      ar: 'مديرة إبداعية. بنت أنظمة هويّة لثلاث من أبرز العلامات الاستهلاكية في المنطقة. تُدرّس الأسبوع السادس في كلا المسارَين.',
    },
    socials: ['sara.sa', 'linkedin', 'x'],
  },
];

export function oppositeLang(lang: Lang): Lang {
  return lang === 'en' ? 'ar' : 'en';
}

export function dir(lang: Lang): 'ltr' | 'rtl' {
  return lang === 'ar' ? 'rtl' : 'ltr';
}
