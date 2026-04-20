export type Lang = 'en' | 'ar';

export const LOCALES: Lang[] = ['en', 'ar'];

export const COPY = {
  en: {
    nav: { home: 'Home', courses: 'Courses', register: 'Register', about: 'About' },
    cta: { apply: 'Apply now', syllabus: 'View syllabus', signup: 'Apply to join', submit: 'Submit' },
    home: {
      eyebrow: 'FIRST COHORT · LAUNCHING SOON',
      heroLine1: 'Learn the',
      heroEm: 'craft',
      heroLine2: 'of AI-era marketing.',
      heroSub:
        'An eight-week intensive for mid-career professionals in Saudi Arabia. Hands-on with the tools, frameworks, and teams shaping what comes next.',
      metricsTitle: 'Eight weeks. One cohort. Mid-career momentum.',
      m1: '8', m1l: 'week intensive',
      m2: '25', m2l: 'learners in the first cohort',
      m3: '4', m3l: 'senior practitioners on faculty',
      m4: '1', m4l: 'track, taught to depth',
      programsTitle: 'Our programme',
      programsSub: 'One track. Taught in the evenings, in person in Riyadh, with a remote option.',
      closingTitle: 'Ambition is a skill.',
      closingSub: 'Register your interest — our first cohort is launching soon.',
    },
    register: {
      eyebrow: 'REGISTER YOUR INTEREST',
      title: 'Apply to join.',
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
      sub: "Hema Academy was founded in 2026 in Riyadh by four senior practitioners who'd spent their careers bridging AI and marketing, to help others ascend.",
      nameTitle: 'Behind the name',
      nameBody:
        "In Arabic, همّة (hemma) is a quiet word. It doesn't mean drive, or hustle, or grind — it means the particular kind of patient ambition that moves mountains. It's the word you use for someone who keeps climbing when no one is watching. We chose it because it describes the learners we build for.",
      markTitle: 'Behind the mark',
      markBody:
        'Our mark is a letter H made from two rising strokes, meeting at a summit. A small notch at the peak marks the top — a flag planted, a view earned. It reads as a mountain; it reads as ambition; it reads as an H. All three at once.',
      teamTitle: 'The team',
      teamSub: 'Four practitioners. Senior enough to have seen every hype cycle. Present enough to teach you this one.',
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
      readySub: "Apply to join and we'll save you a seat for review.",
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
      title: 'One track, taught to depth.',
      sub: 'Applied AI for Marketing Leaders — our first track, designed for directors, VPs, and founders. Additional tracks will follow in later cohorts.',
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
    nav: { home: 'الرئيسية', courses: 'البرامج', register: 'التسجيل', about: 'عن همّة' },
    cta: { apply: 'قدّم الآن', syllabus: 'عرض المنهج', signup: 'قدّم للانضمام', submit: 'إرسال' },
    home: {
      eyebrow: 'الدفعة الأولى · تنطلق قريبًا',
      heroLine1: 'تعلّم',
      heroEm: 'حرفة',
      heroLine2: 'التسويق في عصر الذكاء الاصطناعي.',
      heroSub:
        'برنامج مكثّف مدته ثمانية أسابيع، مصمَّم للمهنيين في منتصف مسارهم في المملكة العربية السعودية. تدريب عملي على الأدوات والأطر وفرق العمل التي تشكّل ملامح المرحلة القادمة.',
      metricsTitle: 'ثمانية أسابيع. دفعة واحدة. زخم في منتصف المسار المهني.',
      m1: '٨', m1l: 'أسابيع مكثّفة',
      m2: '٢٥', m2l: 'متعلّمًا في الدفعة الأولى',
      m3: '٤', m3l: 'ممارسين في هيئة التدريس',
      m4: '١', m4l: 'مسار، بعمق',
      programsTitle: 'برنامجنا',
      programsSub: 'مسار واحد. يُقدَّم مساءً، حضوريًا في الرياض، مع خيار الانضمام عن بُعد.',
      closingTitle: 'الهمّة مهارة.',
      closingSub: 'سجّل اهتمامك — دفعتنا الأولى تنطلق قريبًا.',
    },
    register: {
      eyebrow: 'سجّل اهتمامك',
      title: 'قدّم للانضمام.',
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
        'تأسّست أكاديمية همّة عام ٢٠٢٦ في الرياض، على يد أربعة ممارسين أمضوا سنواتهم على تقاطع الذكاء الاصطناعي والتسويق، ليساعدوا غيرهم على الارتقاء.',
      nameTitle: 'وراء الاسم',
      nameBody:
        'في العربية، «همّة» كلمة هادئة. لا تعني الاندفاع ولا الكدّ ولا السباق — بل ذلك النوع الصبور من الطموح الذي يُزحزح الجبال. هي الكلمة التي تصف من يواصل التسلّق حين لا يراه أحد. اخترناها لأنها تصف المتعلّمين الذين نبني لأجلهم.',
      markTitle: 'وراء الشعار',
      markBody:
        'شعارنا هو حرف H مكوَّن من ضربتين صاعدتين تلتقيان عند القمّة. تُعلّم شُقّةٌ صغيرة في الأعلى موقع القمّة — علمٌ مغروس، ومشهدٌ مستحَقّ. يُقرأ جبلًا، ويُقرأ همّةً، ويُقرأ حرف H — ثلاثتها في آن.',
      teamTitle: 'الفريق',
      teamSub: 'أربعة ممارسين. من الخبرة ما يكفي لرؤية كلّ موجة ضجيج. ومن الحضور ما يكفي لتدريسك هذه الموجة.',
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
      readySub: 'قدّم للانضمام وسنحجز لك مقعدًا للمراجعة.',
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
      title: 'مسار واحد، بعمق.',
      sub: 'الذكاء الاصطناعي التطبيقي لقادة التسويق — مسارنا الأوّل، مصمَّم للمديرين ونوّاب الرؤساء والمؤسّسين. ستنضمّ مسارات أخرى في الدفعات القادمة.',
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
];

export type Cohort = {
  code: string;
  start: Record<Lang, string>;
  end: Record<Lang, string>;
  status: Record<Lang, string>;
  open: boolean;
};

export const COHORTS: Cohort[] = [
  { code: '01', start: { en: '1 June 2026', ar: '١ يونيو ٢٠٢٦' }, end: { en: '27 July 2026', ar: '٢٧ يوليو ٢٠٢٦' }, status: { en: 'Launching soon', ar: 'تنطلق قريبًا' }, open: true },
  { code: '02', start: { en: '14 September 2026', ar: '١٤ سبتمبر ٢٠٢٦' }, end: { en: '9 November 2026', ar: '٩ نوفمبر ٢٠٢٦' }, status: { en: 'Waitlist', ar: 'قائمة انتظار' }, open: false },
  { code: '03', start: { en: '11 January 2027', ar: '١١ يناير ٢٠٢٧' }, end: { en: '8 March 2027', ar: '٨ مارس ٢٠٢٧' }, status: { en: 'Announced', ar: 'معلَنة' }, open: false },
];

export type TeamMember = {
  initials: string;
  colorClass: string;
  textClass: string;
  photo?: string;
  name: Record<Lang, string>;
  role: Record<Lang, string>;
  bio?: Record<Lang, string>;
  linkedin?: string;
};

export const TEAM: TeamMember[] = [
  {
    initials: 'MA', colorClass: 'bg-night', textClass: 'text-cream',
    photo: '/team/mohtab-arabiat.jpg',
    name: { en: 'Mohtab Arabiat', ar: 'مهتاب عربيات' },
    role: { en: 'Co-founder', ar: 'شريك مؤسِّس' },
    linkedin: 'https://www.linkedin.com/in/mohtab/',
  },
  {
    initials: 'NT', colorClass: 'bg-oasis', textClass: 'text-cream',
    photo: '/team/naguib-toihiri.jpg',
    name: { en: 'Naguib Toihiri', ar: 'نجيب طويهري' },
    role: { en: 'Co-founder', ar: 'شريك مؤسِّس' },
    linkedin: 'https://www.linkedin.com/in/naguib-toihiri/',
  },
  {
    initials: 'AA', colorClass: 'bg-clay', textClass: 'text-cream',
    photo: '/team/ahmad-abugosh.jpg',
    name: { en: 'Ahmad Abugosh', ar: 'أحمد أبو غوش' },
    role: { en: 'Co-founder', ar: 'شريك مؤسِّس' },
    linkedin: 'https://www.linkedin.com/in/ahmadabugosh/',
  },
  {
    initials: 'AJ', colorClass: 'bg-saffron', textClass: 'text-ink',
    photo: '/team/abdel-kader-jrab.jpg',
    name: { en: 'Abdel Kader Jrab', ar: 'عبد القادر جراب' },
    role: { en: 'Co-founder', ar: 'شريك مؤسِّس' },
    linkedin: 'https://www.linkedin.com/in/abdelkaderjrab/',
  },
];

export function oppositeLang(lang: Lang): Lang {
  return lang === 'en' ? 'ar' : 'en';
}

export function dir(lang: Lang): 'ltr' | 'rtl' {
  return lang === 'ar' ? 'rtl' : 'ltr';
}
