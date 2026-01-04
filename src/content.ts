export type Language = 'en' | 'ko';

export const NAV_IDS = ['home', 'about', 'services', 'expertise', 'projects', 'contact'] as const;
export type SectionId = (typeof NAV_IDS)[number];

export type Copy = {
  nav: Record<SectionId, string>;
  langSwitchLabel: (next: Language) => string;

  brand: string;

  home: {
    pill: string;
    headline: string;
    subheadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };

  about: {
    title: string;
    card: {
      name: string;
      role: string;
      subtitle: string;
      educationTitle: string;
      careerTitle?: string;
      careerBullets?: string[];
      education: {
        maTitle: string;
        maSchool: string;
        maNote: string;
        baTitle: string;
        baSchool: string;
        secondaryTitle: string;
        secondaryPlace: string;
      };
      militaryTitle: string;
      military: {
        rafTitle: string;
        jcsTitle: string;
        jcsSubtitle1: string;
        jcsSubtitle2: string;
        jcsBullets: string[];
        cbrnTitle: string;
        cbrnSubtitle: string;
        cbrnBullets: string[];
      };
      expertiseTitle: string;
      expertiseTags: string[];
    };
  };

  services: {
    title: string;
    subtitle: string;
    cards: Array<{ title: string; bullets: string[] }>;
  };

  models: {
    title: string;
    subtitle: string;
    longTermInternational: {
      title: string;
      desc: string;
      currentProjectTitle: string;
      currentProjectDates: string;
      upcomingTitle: string;
      upcomingDesc: string;
    };
    domesticLongTerm: {
      title: string;
      desc: string;
      bullets: string[];
    };
    smallCards: Array<{ title: string; bullets: string[] }>;
  };

  projects: {
    title: string;
    subtitle: string;
    left: { title: string; bullets: string[] };
    right: { title: string; bullets: string[] };
    mission: { title: string; body: string };
  };

  contact: {
    title: string;
    subtitle: string;
    cards: {
      locationTitle: string;
      locationBodyHtml: string;
      phoneTitle: string;
      emailTitle: string;
    };
  };

  footer: {
    copyright: string;
    tagline: string;
  };
};

export const COPY: Record<Language, Copy> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      expertise: 'Expertise',
      projects: 'Projects',
      contact: 'Contact',
    },
    langSwitchLabel: (next) => (next === 'ko' ? '한국어' : 'English'),

    brand: 'GSMA Consulting Group Inc.',

    home: {
      pill: 'Your Strategic Partner in Global Communications',
      headline: 'Elite Defense & Industrial Communication Specialists',
      subheadline:
        'Cutting-edge interpretation and translation solutions tailored to meet the complex\n              challenges of defense, aerospace, and high-stakes international communications',
      ctaPrimary: 'Our Services',
      ctaSecondary: 'Get in Touch',
    },

    about: {
      title: 'Who We Are',
      card: {
        name: 'CEO',
        role: 'Korean–English Conference Interpreter',
        subtitle: 'Founder & CEO, GSMA Consulting Group',
        educationTitle: 'Education',
        education: {
          maTitle: 'M.A. in Korean-English Conference Interpretation',
          maSchool: 'Hankuk University of Foreign Studies (HUFS)',
          maNote: '',
          baTitle: '',
          baSchool: '',
          secondaryTitle: '',
          secondaryPlace: '',
        },
        militaryTitle: 'Military Service',
        military: {
          rafTitle: 'ROK Air Force – Interpreting Officer',
          jcsTitle: 'Joint Chiefs of Staff',
          jcsSubtitle1: 'Strategic Planning Directorate',
          jcsSubtitle2: 'Nuclear & WMD Response Center',
          jcsBullets: [
            'Interpreted for the JCS Chairman and three-, two-, and one-star generals at the Joint Chiefs of Staff',
            'Business trips to USSTRATCOM and U.S. Space Command',
            'Translated U.S. nuclear operations manuals',
          ],
          cbrnTitle: 'ROK CBRN Defense Command',
          cbrnSubtitle: 'Nuclear Characterization Team',
          cbrnBullets: [
            'Interpreter to the Commander',
            'Translated DTRA training materials',
            'Supported bilateral ROK–U.S. cooperation',
          ],
        },
        expertiseTitle: 'Areas of Expertise',
        expertiseTags: [
          'Defense & Aerospace',
          'Cybersecurity',
          'ESG & Sustainability',
          'Government Affairs',
          'Business Strategy',
          'International Relations',
        ],
      },
    },

    services: {
      title: 'Comprehensive Language Solutions',
      subtitle:
        'Specialized services across critical industries where precision, security, and operational context matter most',
      cards: [
        {
          title: 'Defense & Aerospace',
          bullets: [
            'Military strategy and weapons systems',
            'Defense procurement and contract negotiations',
            'Defense exhibitions and technical cooperation',
            'On-site interpretation for international defense infrastructure',
            'Nuclear and CBRN operational doctrine translation',
          ],
        },
        {
          title: 'International Diplomacy',
          bullets: [
            'Summit-level meetings and diplomatic events',
            'State dinners and official luncheons',
            'International organizations and forums',
            'Global conferences and high-level political interpretation',
            'VIP escort interpretation for heads of state',
          ],
        },
        {
          title: 'Advanced Technology',
          bullets: [
            'Software and hardware solutions',
            'Cybersecurity and data protection',
            'Electric vehicle development',
            'AI-based network security solutions',
            'Virtual production and digital twin technologies',
          ],
        },
        {
          title: 'Business & Commerce',
          bullets: [
            'Corporate business meetings and strategy workshops',
            'Investment and negotiation sessions',
            'Global consulting firm townhalls and client meetings',
            'Marketing and business development initiatives',
          ],
        },
        {
          title: 'Environment & Sustainability',
          bullets: [
            'International sustainable forestry certification audits',
            'FSC and MSC CoC certifications',
            'ESG reporting and sustainability translation',
            'National forest management inspections',
          ],
        },
      ],
    },

    models: {
      title: 'Service Models',
      subtitle:
        'Flexible solutions tailored to your needs, from single-day engagements to multi-month international deployments',
      longTermInternational: {
        title: 'Long-Term International Deployment',
        desc: 'Overseas on-site interpreter placement for multi-month defense and infrastructure projects',
        currentProjectTitle: 'Recent Project: Saudi Arabia Underground Bunker Construction',
        currentProjectDates: 'August - December 2025',
        upcomingTitle: 'Upcoming: Brazil Defense Company Training Program',
        upcomingDesc: '2026 - Four interpreters supporting ROK Air Force pilot training program in Brazil',
      },
      domesticLongTerm: {
        title: 'Domestic Long-Term Engagement',
        desc:
          'Multi-month to multi-year interpretation contracts for global consulting firms and major corporations',
        bullets: [
          'Dedicated interpreters for regular client meetings',
          'Strategic workshops and operational sessions',
          'Proven track record with Global Consulting Firms',
          'Major multinational client support',
        ],
      },
      smallCards: [
        {
          title: 'Short-Term & Event-Based',
          bullets: ['Single-day interpretation', 'Multi-day conferences', 'Trade shows (ADEX, APEC)'],
        },
        {
          title: 'Professional Interpretation',
          bullets: ['Simultaneous interpretation', 'Consecutive interpretation', 'VIP escort services'],
        },
        {
          title: 'Expert Translation',
          bullets: ['Technical documentation', 'ESG sustainability reports', 'Strategic white papers'],
        },
      ],
    },

    projects: {
      title: 'Our Team Excellence',
      subtitle: 'Rigorously vetted professionals with graduate degrees and proven field experience',
      left: {
        title: 'Professional Credentials',
        bullets: [
          "Graduate degrees from Korea's premier interpretation institutions",
          'Military and diplomatic credentials with government clearance',
          'In-house experience with major Korean conglomerates',
          'Technical expertise across defense, cybersecurity, and advanced tech',
        ],
      },
      right: {
        title: 'Notable Engagements',
        bullets: [
          'US-ROK CBRN joint training exercises',
          'Former US Forces Korea Commander private meetings',
          'Donald Trump Jr. visit escort interpretation',
          'Belgium Chief of Defense official reception',
          'US Ambassador and Korean Minister meetings',
        ],
      },
      mission: {
        title: 'Our Mission',
        body:
          'To serve as the communication backbone for organizations operating at the intersection of defense,\n              technology, and international cooperation—where words carry weight, precision saves time and money,\n              and trust is earned through proven performance.',
      },
    },

    contact: {
      title: 'Global Communication. Local Precision.',
      subtitle:
        'Work with GSMA Consulting Group to design bespoke language solutions that elevate clarity, security, and impact across borders.',
      cards: {
        locationTitle: 'Location',
        locationBodyHtml: 'Jeongdeun-ro 24, Suji-gu<br />\n                Yongin-si, Gyeonggi-do<br />\n                South Korea',
        phoneTitle: 'Phone',
        emailTitle: 'Email',
      },
    },

    footer: {
      copyright: '© 2025 GSMA Consulting Group. All rights reserved.',
      tagline: 'Strive for Greatness',
    },
  },

  ko: {
    nav: {
      home: '홈',
      about: '소개',
      services: '서비스',
      expertise: '전문성',
      projects: '프로젝트',
      contact: '문의',
    },
    langSwitchLabel: (next) => (next === 'en' ? 'English' : '한국어'),

    brand: 'GSMA Consulting Group Inc.',

    home: {
      pill: '글로벌 커뮤니케이션의 전략적 파트너',
      headline: '국방·방산 통번역 전문',
      subheadline:
        '국방, 항공우주, 국제회의 현장에서 요구되는 정확하고 신뢰할 수 있는 통번역 솔루션을 제공합니다.',
      ctaPrimary: '서비스 보기',
      ctaSecondary: '문의하기',
    },

    about: {
      title: '회사 소개',
      card: {
        name: '',
        role: '한영국제회의통역사',
        subtitle: 'GSMA Consulting Group 대표',
        educationTitle: '학력',
        education: {
          maTitle: '한국외대 통번역대학원 석사',
          maSchool: '',
          maNote: '',
          baTitle: '',
          baSchool: '',
          secondaryTitle: '',
          secondaryPlace: '',
        },
        militaryTitle: '군 경력',
        military: {
          rafTitle: '대한민국 공군 – 통역장교',
          jcsTitle: '합동참모본부',
          jcsSubtitle1: '전략기획본부',
          jcsSubtitle2: '핵·WMD 대응센터',
          jcsBullets: [
            '합참의장 미7함대사령관 조찬 통역, 전략기획본부장, 핵WMD센터장, 핵WMD센터 차장 통역',
            '미국 전략사령부, 우주사령부 수행통역',
            '미 핵작전교범 번역',
          ],
          cbrnTitle: '국군화생방방호사령부',
          cbrnSubtitle: '핵특성분석팀',
          cbrnBullets: ['사령관 전담 통역', 'DTRA 교육자료 번역'],
        },
        careerTitle: '주요 경력',
        careerBullets: [
          '한–미 CBRN 합동 훈련',
          '주한미군 사령관 비공개 미팅',
          'Donald Trump Jr. 방한 수행 통역',
          '벨기에 국방총장 공식 리셉션',
          '미 대사 및 한국 장관급 회의',
        ],
        expertiseTitle: '전문 분야',
        expertiseTags: ['국방·항공우주', '사이버보안', 'ESG·지속가능성', '비즈니스 전략', '국제관계'],
      },
    },

    services: {
      title: '통번역 솔루션',
      subtitle: '정밀성·보안·현장 이해가 중요한 산업에서 맞춤형 통역·번역 서비스를 제공합니다',
      cards: [
        {
          title: '국방·항공우주',
          bullets: ['군사 전략 및 무기체계', '방산 조달 및 계약 협상', '방산 전시회 및 기술 협력', '핵·CBRN 작전 교리/문서 번역'],
        },
        {
          title: '국제 외교',
          bullets: ['정상급 회담 및 외교 행사', '국빈 만찬 및 공식 오찬', '국제기구·포럼', '국제회의 및 고위급 정치 통역', '정상/VIP 수행 통역'],
        },
        {
          title: '첨단 기술',
          bullets: ['소프트웨어·하드웨어 솔루션', '사이버보안 및 데이터 보호', '전기차 개발', 'AI 기반 네트워크 보안 솔루션', '버추얼 프로덕션 및 디지털 트윈'],
        },
        {
          title: '비즈니스/전략',
          bullets: ['기업 회의 및 전략 워크숍', '투자/협상 세션', '글로벌 컨설팅펌 타운홀 및 고객 미팅', '마케팅·사업개발 이니셔티브'],
        },
        {
          title: '환경·지속가능성',
          bullets: ['국제 산림 인증 심사 통역', 'FSC/MSC CoC 인증', 'ESG 보고서 및 지속가능성 번역', '국유림/산림경영 점검 통역'],
        },
      ],
    },

    models: {
      title: '다양한 서비스',
      subtitle: '단기 행사부터 수개월 해외 파견까지, 목적과 기간에 맞는 유연한 모델을 제안합니다',
      longTermInternational: {
        title: '해외 장기 파견',
        desc: '국방·인프라 프로젝트에 수개월 단위로 현장 상주 통역을 배치합니다',
        currentProjectTitle: '완료: 사우디아라비아 지하 벙커 건설',
        currentProjectDates: '2025년 8월 - 12월',
        upcomingTitle: '진행 중: 브라질 방산업체 교육훈련',
        upcomingDesc: '2026년 - 브라질 현지 공군 조종/정비사 교육훈련 통역사 4명 파견',
      },
      domesticLongTerm: {
        title: '국내 장기 상주',
        desc: '글로벌 컨설팅펌 및 대기업을 위한 다개월~다년 단위 통역 계약을 운영합니다',
        bullets: ['정기 미팅 전담 통역', '전략 워크숍 및 운영 세션', '글로벌 컨설팅펌 다수 장기 수행 경험', '다국적 고객 지원'],
      },
      smallCards: [
        { title: '단기·이벤트', bullets: ['단일 일정 통역', '다일 컨퍼런스', '전시회(ADEX, APEC)'] },
        { title: '전문 통역', bullets: ['동시통역', '순차통역', 'VIP 수행'] },
        { title: '전문 번역', bullets: ['기술 문서', 'ESG/지속가능성 보고서', '전략 백서'] },
      ],
    },

    projects: {
      title: '전문 인력',
      subtitle: '대학원 학위와 현장 경험을 갖춘 검증된 전문가로 팀을 구성합니다',
      left: {
        title: '전문 자격',
        bullets: ['국내 최고 통번역 교육기관 출신', '군·외교 분야 보안/경력 기반', '대기업 인하우스 경험', '국방·보안·첨단기술 분야 전문성'],
      },
      right: {
        title: '주요 수행',
        bullets: ['한–미 CBRN 합동 훈련', '주한미군 사령관 비공개 미팅', 'Donald Trump Jr. 방한 수행 통역', '벨기에 국방총장 공식 리셉션', '미 대사 및 한국 장관급 회의'],
      },
      mission: {
        title: 'Our Mission',
        body:
          'To serve as the communication backbone for organizations operating at the intersection of defense,\n              technology, and international cooperation—where words carry weight, precision saves time and money,\n              and trust is earned through proven performance.',
      },
    },

    contact: {
      title: 'Global Communication. Local Precision.',
      subtitle: 'GSMA Consulting Group과 함께, 국경을 넘는 소통에서 명확성·보안·임팩트를 높이는 맞춤형 언어 솔루션을 설계하세요.',
      cards: {
        locationTitle: '주소',
        locationBodyHtml: '경기도 용인시 수지구 정든로 24',
        phoneTitle: '전화',
        emailTitle: '이메일',
      },
    },

    footer: {
      copyright: '© 2025 GSMA Consulting Group. All rights reserved.',
      tagline: '',
    },
  },
};
