// Upload files in static/ So any file static/file.pdf -> /file.pdf is accessible at root

export default {
  name: 'Rik Peeters',
  domain: 'rikp777.github.io', // add without https:// , used in meta tags and share urls
  image: '/images/bighead-five.png',
  email: 'rikpeeters11@hotmail.com',
  googleAnalyticsV4: {
    enabled: true,
    id: 'G-22G4GKFTPR'
  },
  plausibleAnalytics: {
    enabled: true,
    domain: 'https://rikp777.github.io/',
    trackLocalhost: true,
    // leave it empty if plausible is not self hosted
    apiHost: 'https://analytics.lookatx.dev' // default: https://plausible.io
  },
  // enable if you want comments and likes on posts
  firebase: {
    enabled: true
  },
  social: {
    github: 'rikp777',
    linkedin: 'rikpeeters-nl',
    facebook: '',
    twitter: '',
    instagram: 'me.rikp/',
    lastfm: 'rikp777'
  },
  buyMeACoffee: {
    enabled: true,
    url: 'https://www.buymeacoffee.com/rikpeeters'
  },
  projects: {
    enabled: true,
  },
  blog: {
    enabled: false,
  },
  resume: {
    enabled: true,
    pdfUrl: '/RHF_Peeters_CV-2021-mini.pdf', // add files in static folder
    password: 'test'
  },
  uses: {
    enabled: true,
    image: {
      laptop: '/images/laptop.jpeg'
    }
  },
  internships: {
    // add logos in static and at max add 3/4
    enabled: true,
    meta: [
      {

        name: 'CytoSMART',
        src: '/images/jobs/cytosmart-logo.svg',
        url: 'https://www.cytosmart.com/',
        year: 2020,
        period: "Sept 2020 – Feb 2021 – 6 months",

        grade: 8.9
      },
      {
        name: 'Limax',
        src: '/images/jobs/limax-logo.png',
        url: 'https://limax.nl',
        year: 2018,
        period: "Feb 2018 – Jul 2018 – 6 months",
        description: "Digitization of distribution and production processes",
        grade: 8
      },
      {
        id: "63fc3e66-5ae2-4a33-a620-5d49f06f1599",
        name: 'Cre8media',
        src: '/images/jobs/cre8media-logo.png',
        url: 'https://www.cre8media.nl/',
        year: 2016,
        location: "Heibloem, Provincie Limburg, Nederland",
      },
    ]
  },
  recommendations: {
    enabled: true,
    meta: [
      {
        name: 'Saray Rond',
        designation: 'Psychology student & Full time girlfriend ❤',
        image: 'images/saray.jfif',
        linkedin: 'https://www.linkedin.com/in/saray-r-672049212/',
        content: 'When ✨motivated✨, Rik persists till a task is finished. ' +
          'That is a valuable skill to have since some tasks can be difficult or a lot of work. ' +
          'He is also quite good at communicating with fellow students about how to approach a certain goal, he can sort of lead them to succes. That makes him a real teamplayer which is important in his field. 👨🏼‍💻'

      }
    ]
  },
  loadingIndicator: {
    name: 'pulse'
    // https://tobiasahlin.com/spinkit/
    // circle
    // cube-grid
    // fading-circle
    // folding-cube
    // chasing-dots
    // nuxt
    // pulse
    // rectangle-bounce
    // rotating-plane
    // three-bounce
    // wandering-cubes
  },

  technologies: {
    enabled: true,
    meta: [
      {
        id: "python",
        name: "Python",
        subs: [
          {
            id: "project-jupyter",
            name: "Project Jupyter",
            url: "https://jupyter.org/"
          },
          {
            id: "pandas",
            name: "Pandas",
            url: "https://pandas.pydata.org/"
          },
          {
            id:"scikit-learn",
            name: "Scikit-learn",
            url: "https://scikit-learn.org/stable/"
          }
        ]
      },
      {
        id: "c#",
        name: "C#",
        frameworks: [
          {
            id: "asp.net",
            name: "ASP.NET",
            url: "https://dotnet.microsoft.com/en-us/apps/aspnet",
            subs: [
              {
                id: "entity-framework",
                name: "Entity Framework",
                url: "https://docs.microsoft.com/en-us/ef/"
              }
            ]
          }
        ]
      },
      {
        id: "java",
        name: "Java",
        frameworks: [
          {
            id: "spring-boot \n",
            name: "Springboot",
            url: "https://spring.io/guides/gs/spring-boot/"
          },
        ],
        subs: [
          {
            id: "hibernate-orm",
            name: "Hibernate ORM",
            url: "https://hibernate.org/"
          },
          {
            id: "lombok",
            name: "Lombok",
            url: "https://projectlombok.org/"
          }
        ]
      },
      {
        id: "php",
        name: "PHP",
        frameworks: [
          {
            id: "laravel",
            name: "Laravel",
            url: "https://laravel.com/",
            subs: [
              {
                id: "eloquent-orm",
                name: "Eloquent ORM",
                url: "https://laravel.com/docs/eloquent"
              },
              {
                id: "blade",
                name: "Blade Template",
                url: "https://laravel.com/docs/blade"
              },
              {
                id: "symfony",
                name: "Symfony",
                url: "https://symfony.com/"
              },
              {
                id: "composer",
                name: "Composer",
                url: "https://getcomposer.org/"
              }
            ]
          }
        ]
      },
      {
        id: "javascript",
        name: "JavaScript / TypeScript",
        url: "https://www.javascript.com/",
        frameworks: [
          {
            id: "vue-js",
            name: "Vue.js",
            url: "https://vuejs.org/",
            subs: [
              {
                id: "20a14816-0799-4b97-896e-48a62da0144b",
                name: "Vuex",
                url: "https://vuex.vuejs.org/"
              }
            ]
          }
        ],
        subs: [
          {
            id: "msw",
            name: "MSW js",
            url: "https://mswjs.io"
          },
          {
            id: "axios",
            name: "Axios",
            url: "https://github.com/axios/axios"
          }
        ]
      }
    ],
  },





  workedAt: [
    {
      id: "63fc3e66-5ae2-4a33-a620-5d49f06f1599",
      name: "Energy essentials",
      src: '/images/jobs/energyessentials-logo.png',
      url: "https://www.energyessentials.nl/",
      description: null,
      positions: [
        {
          type: "internship",
          title: "Software Engineer",
          description: null,
          startAt: "01-02-2022",
          endAt: "01-08-2022",
          technologies: [
            "c#",
            "asp.net",
            "entity-framework"
          ]
        }
      ],
      profession: true
    },
    {
      id: "63fc3e66-5ae2-4a33-a620-5d49f06f1599",
      name: "Cre8media",
      src: '/images/jobs/cre8media-logo.png',
      url: "https://www.cre8media.nl/",
      description: null,
      positions: [
        {
          type: "internship",
          title: "Application Developer",
          description: null,
          startAt: "01-09-2016",
          endAt: "01-03-2017",
          technologies: [
            "php",
            "laravel",
            "eloquent-orm"
          ]
        }
      ],
      profession: true
    },
    {
      id: "dccf1a31-2abf-48a6-8055-8dc4b0374c4e",
      name: "Jumbo Supermarkten",
      src: '/images/jobs/jumbo.png',
      url: 'https://www.jumbo.com/winkel/jumbo-panningen-jumbo-harald-en-ilse-van-beek',
      description: null,
      positions: [
        {
          type: "part-time",
          title: "Vakkenvuller",
          description: null,
          startAt: "01-06-2015",
          endAt: "01-05-2018"
        }
      ],
      profession: false
    },
    {
      id: "37bd13ed-ce8d-4693-b092-121448216d96",
      name: "De maris B.V.",
      src: '/images/jobs/maris-logo.png',
      url: 'https://kwekerij-demaris.nl/',
      description: null,
      positions: [
        {
          type: "part-time",
          title: "Functioneel medewerker",
          description: null,
          startAt: "01-10-2012",
          endAt: "01-08-2018"
        }
      ],
      profession: false
    },
    {
      id: "59303b9b-3348-4f0c-9fb3-5a595a8381de",
      name: "CytoSMART Technologies B.V.",
      src: '/images/jobs/cytosmart-logo.svg',
      url: 'https://cytosmart.com/',
      description: null,
      positions: [
        {
          type: "internship",
          title: "Software Engineer",
          description: "e00e7a0e-2ab8-4f68-bce2-cb746535c802",
          startAt: "01-09-2020",
          endAt: "01-03-2021",
          technologies: [
            "c#",
            "asp.net",
            "entity-framework"
          ]
        }
      ],
      profession: true
    },
    {
      id: "16c6a7ed-e4e2-428f-8fd1-da8cd55b4564",
      name: "GoStudent",
      src: '/images/jobs/gostudent-logo.png',
      url: 'https://www.gostudent.org/en',
      description: null,
      positions: [
        {
          type: "freelance",
          title: "Bijlesdocent informatica",
          description: null,
          startAt: "01-08-2021",
          endAt: null,
          technologies: [
            "java"
          ]
        }
      ],
      profession: true
    },
    {
      id: "bf781026-28a1-4b80-a683-1673b5da2522",
      name: "Limax",
      description: null,
      src: '/images/jobs/limax-logo.png',
      url: 'https://www.limax.nl/',
      positions: [
        {
          type: "internship",
          title: "Software Engineer",
          description: "869e88ce-7a17-4aab-8495-eba997c9e146",
          startAt: "01-02-2018",
          endAt: "01-08-2018",
          technologies: [
            "php",
            "laravel",
            "eloquent-orm",
            "blade",
            "javascript"
          ]
        },
        {
          type: "part-time",
          title: "Junior Employee Supply Chain / IT",
          description: "69bf0516-5a12-4e45-8171-0034488c90ef",
          startAt: "01-08-2018",
          endAt: null,
          technologies: [
            "java",
            "spring-boot",
            "hibernate-orm",
            "typescript",
            "vue-js",
            "vuex",
            "axios",
            "msw"
          ]
        }
      ],
      profession: true
    },
  ],

  strings: {
    NL: {
      technologies: {
        header: "technologieën",
        subtext: "technologieën die ik heb toegepast binnen mijn projecten"
      },
      present: "Tot heden",
      workTypes: {
        internship: "Stage",
        partTime: "Part-time",
        freelance: "freelance"
      },
      position: {
        "e00e7a0e-2ab8-4f68-bce2-cb746535c802": "Onderzoek en implementatie van functies/modules om CytoSMART's celteller te laten voldoen aan FDA 21 CFR part 11 regelgeving. Eindcijfer: 8,9",
        "869e88ce-7a17-4aab-8495-eba997c9e146": "Digitalisering van distributie- en productieprocessen. Eindcijfer: 8",
        "69bf0516-5a12-4e45-8171-0034488c90ef": "Ontwikkeling van de digitalisering van de distributieprocessen met de nieuwste technieken.",
      },
      download: 'download',
      cookies: {
        title: 'Mag ik cookies gebruiken voor analyses?',
        dueTo: 'Vanwege de Europese wetgeving de GDPR moet ik het vragen😅. ',
        settings: 'Maak je geen zorgen, je instellingen worden bewaard, dus je hoeft maar één keer akkoord te gaan! 😇',
        ok: 'Ja, natuurlijk👍',
        no: 'Ik denk het niet🖕',
        moreInfo: 'https://ec.europa.eu/info/law/law-topic/data-protection/data-protection-eu_nl'
      },
      nav: {
        home: 'thuis',
        blog: 'blog',
        projects: 'projecten',
        uses: 'gebruikt',
        resume: 'curriculum vitae',
        buyMeACoffee: 'koop mij een biertje 🍺',
        signIn: 'log in',
        signOut: 'log uit'
      },
      internships: {
        title: "Stages bij"
      },
      resume:{
        password: 'wachtwoord',
        provide: 'Voer het opgegeven wachtwoord in'
      },
      hero: {
        iBlogTech: 'Voltijd student ',
        haveALook: 'neem een kijkje',
        friendlyNeighborhood: 'jouw vriendelijke buurt',
        description: '' +
          'Hey daar, mijn naam is Rik Peeters 👋👀. ' +
          'Ik ben Software Engineer en Cyber Security specialist. Op deze site kun je alles lezen over projecten en opdrachten die ik tijdens mijn studie heb gedaan. ' +
          'Zo kun je bijvoorbeeld lezen hoe ik mijn projecten heb aangepakt en wordt mijn kennis in deze onderwerpen duidelijk.',
        intro: ['hey daar ik ben','ik bouw dingen voor op \nhet web en ik ben..'],
        words: ['web-ontwikkelaar', 'software-ingenieur', 'programmeur', 'encoder', 'gegevens analist', 'cyber security specialist'],
      },
      githubCalendar: {
        header: 'bijdragen',
        subtext: 'github calender heatmap'
      },
      blog: {
        header: 'blog',
        subtext: 'ik probeer af en toe te schrijven. Laat me weten wat je denkt in de commentaren.'
      },
      recentBlog: {
        header: 'recente blogs',
        subtext: 'het kost veel tijd om te schrijven man'
      },
      recentProject: {
        header: 'recente projecten',
        subtext: 'het neem echt veel tijd in beslag dat ✨ schrijven ✨'
      },
      uses: {
        header: 'gebruikt',
        subtext: 'een korte samenvatting van wat ik dagelijks gebruik om te coderen',
        meta: [
          {
            title: 'OS',
            value: 'Linux Arch / Windows 11'
          },
          {
            title: 'Werk geheugen',
            value: '16 GB '
          },
          {
            title: 'Toetsenbord',
            value: 'Razer DeathStalker'
          },
          {
            title: 'Muis',
            value: 'Logitech MX Verticale Ergonomische Muis'
          },
          {
            title: 'Beeldscherm',
            value: 'Acer Predator X34'
          },
          {
            title: 'Laptop • Processor • Grafisch',
            value: 'Lenovo Yoga 9 (15-inch, 2021) • 2.4 GHz 8-Core Intel Core i9 • GeForce GTX 1650 Ti'
          }
        ],
      },
      projects: {
        header: 'projecten & onderzoeken',
        subtext: 'op deze pagina staan enkele van mijn persoonlijke en werkprojecten. elk project heeft een verhaal, klik op de titel om het te lezen. ' +
          'Opmerking: Deze projecten zijn wel in het engels geschreven.',
        minor: {
          subtext: 'Ik ben Rik Peeters en ik studeer momenteel Software-engineering.  ' +
            'daarnaast ben ik ook gespecialiseerd in de route Cyber Security. ' +
            'In de onderwerpen hieronder kunt u alles lezen over mijn kennis van onderwerpen ' +
            'Op deze website komen alle taken en activiteiten te staan die ik tijdens de minor ga doen. Bij elke taak zal een theorie uitleg staan over het onderwerp en een proof of concept dat ik heb gedaan om die taak te oefenen.'
        },
        technologies: 'Technologieën',
        categories: 'Categorieën',
        all: 'alle',
        category_data: [
          {
            id: 'minor',
            name: 'Minor',
            description: 'Ik ben Rik Peeters en ik studeer momenteel Software-engineering. ' +
              'daarnaast ben ik ook gespecialiseerd in het traject Cyber Security. ' +
              'In de onderstaande onderwerpen kun je alles lezen over mijn kennis van onderwerpen ' +
              'Op deze website staan alle taken en werkzaamheden die ik tijdens de minor zal uitvoeren. ' +
              'Bij elke taak, zal een theorie uitleg staan over het onderwerp en een proof of concept dat ik heb gedaan om die taak te kunnen oefenen.',
            image: '/images/projects/cyber.jpg',
          },
          {
            id: 'cyber',
            name: 'Cyber',
            description: 'Het internet brengt vele bedreigingen met zich mee. ' +
              'Tegenwoordig zijn er veel vormen van cyber crime, waardoor er ook meer professionals nodig zijn om de veiligheid op het internet te garanderen.' +
              'Hier hoop ik een deel van uit te mogen maken de topics hieronder gaan over dit vakgebied',
            image: '/images/projects/cyber.jpg',
          },
          {
            id: "body of knowledge",
            name: "Body of knowledge",
            description: 'Hoeveelheid kennis die de basis vormt voor het uitoefenen van een specifiek beroep. ' +
              'Ieder beroep kent een \'body of knowledge\', en het leren van die body of knowledge noemen we conceptueel leren.',
            image: '/images/projects/study.jpg',
          },
          {
            id: 'software-engineering',
            name: 'Software-engineering',
            description: 'Software engineering is een deelgebied van de informatica dat zich bezighoudt met alle aspecten van het bouwen van complexe maar betrouwbare software tot informatiesystemen.',
            image: '/images/projects/software.jpg',
          },
          {
            id: 'internship',
            name: 'Stage',
            description: "Stage opdrachten",
            image: '/images/projects/internship.svg',
          }
        ]
      },
      recommendations: {
        header: 'aanbevelingen',
        subtext: 'wat zeggen mijn mentoren, vrienden en collega\'s',
        meta: [
          {
            name: 'Saray Rond',
            designation: 'Psychologie student en hele lieve vriendin ❤',
            image: 'images/saray.jfif',
            linkedin: 'https://www.linkedin.com/in/saray-r-672049212/',
            content: 'Als Rik ✨gemotiveerd✨ is, blijft hij aan een taak werken totdat die klaar is. ' +
              'Dat is een waardevolle skill om te hebben, aangezien sommige taken moeilijk of veel werk kunnen zijn. ' +
              'Ook is hij heel sterk op het gebied van communicatie met medestudenten. Bijvoorbeeld over hoe ze een bepaald doel moeten aanpakken, hij kan hen als het ware naar succes leiden. ' +
              'Dat maakt hem een echte teamplayer en dat is belangrijk in zijn vakgebied. 👨🏼💻'
          },
          {
            name: 'Jeanine Peeters',
            designation: 'Mams',
            content: 'Rik is een persoon waar je op kunt bouwen en die zijn werk serieus neemt. Hij stopt hier veel tijd en energie in. Hij maakt het eerst af, al duurt het tot in de late uurtjes. Rik is de kracht in zijn vak.'}
        ]
      }
    },












    en_US: {
      technologies: {
        header: "technologies",
        subtext: "Here are a few technologies I’ve been working with recently:"
      },
      present: "Present",
      workTypes: {
        internship: "Internship",
        partTime: "Part-time",
        freelance: "freelance"
      },
      position: {
        "e00e7a0e-2ab8-4f68-bce2-cb746535c802": "Research and implementation of features/modules in order to make CytoSMART’s cell counter comply to FDA 21 CFR part 11 regulations. Final grade: 8,9",
        "869e88ce-7a17-4aab-8495-eba997c9e146": "Digitization of distribution and production processes. Final grade: 8",
        "69bf0516-5a12-4e45-8171-0034488c90ef": "Developing the digitalization of the distribution processes with the latest techniques ",
      },
      download: 'download',
      cookies: {
        title: '- Can I use cookies for analytics? -',
        dueTo: 'Due to european legislation, the GDPR I must ask😅. ',
        settings: 'Don\'t worry, your settings will be saved, so you only need to agree once! 😇',
        ok: 'Yes, sure👍',
        no: 'Don\'t think so🖕',
        moreInfo: 'https://ec.europa.eu/info/law/law-topic/data-protection/data-protection-eu_en'
      },
      nav: {
        home: 'home',
        blog: 'blog',
        projects: 'projects',
        uses: 'uses',
        resume: 'résumé',
        buyMeACoffee: 'buy me a beer 🍺',
        signIn: 'sign in',
        signOut: 'sign out'
      },
      internships: {
        title: "Internships at"
      },
      resume:{
        password: 'password',
        provide: 'Enter provided password'
      },
      hero: {
        iBlogTech: 'Full time student',
        haveALook: 'have a look',
        friendlyNeighborhood: 'your friendly neighborhood',
        description: '' +
          'Hey there it\'s me Rik Peeters 👋👀. ' +
          'I am a Software Engineer and Cyber Security specialist. On this website you can read all about projects and assignments I did during my studies.' +
          'In doing so, you can read what my approach is to projects and my knowledge for these topics becomes clear.',
        intro: ['hey there i\'m...', 'I build things for the \nweb and i\'m..'],
        words: ['web-developer', 'software-engineer', 'programmer', 'encoder', 'data analysis', 'cyber security specialist'],
      },
      githubCalendar: {
        header: 'contributions',
        subtext: 'github calendar heatmap'
      },
      blog: {
        header: 'blog',
        subtext: 'i try to write once in a while. let me know your thoughts in comments'
      },
      recentBlog: {
        header: 'recent blogs',
        subtext: 'it takes a lot of time to write man'
      },
      recentProject: {
        header: 'recent projects',
        subtext: 'it takes a lot of time to write ✍🏽 man'
      },
      uses: {
        header: 'uses',
        subtext: 'a quick summary of what I use on a daily basis to code',
        meta: [
          {
            title: 'OS',
            value: 'Linux Arch / Windows 11'
          },
          {
            title: 'Memory',
            value: '16 GB '
          },
          {
            title: 'Keyboard',
            value: 'Razer DeathStalker'
          },
          {
            title: 'Mouse',
            value: 'Logitech MX Vertical Ergonomic Mouse'
          },
          {
            title: 'Monitor',
            value: 'Acer Predator X34'
          },
          {
            title: 'Laptop • Processor • Graphics',
            value: 'Lenovo Yoga 9 (15-inch, 2021) • 2.4 GHz 8-Core Intel Core i9 • GeForce GTX 1650 Ti'
          }
        ],
      },
      projects: {
        header: 'projects & research',
        subtext: 'this page lists some of my personal and work projects. every project has some story, click on the title to read',
        minor: {
          subtext: ""
        },
        technologies: 'Technologies',
        categories: 'Categories',
        all: 'all',
        category_data: [
          {
            id: 'minor',
            name: 'Minor',
            description: 'I am Rik Peeters and I am currently studying Software-engineering. ' +
              'in addition I also am specializing in the route Cyber Security. ' +
              'In the topics below you can read all about my knowledge of topics ' +
              'This website will show all the tasks and activities that I will do during the minor. ' +
              'By every task, will be a theory explanation about the subject and a proof of concept that I did in order to practice that task.',
            image: '/images/projects/cyber.jpg',
          },
          {
            id: 'cyber',
            name: 'Cyber',
            description: 'The Internet brings with it many threats. ' +
              'Nowadays, there are many forms of cyber crime, which also means that more professionals are needed to ensure security on the Internet.' +
              'This is where I hope to be a part of the topics below are about this field',
            image: '/images/projects/cyber.jpg',
          },
          {
            id: 'body of knowledge',
            name: 'Body of knowledge',
            description: 'Amount of knowledge that forms the basis for practicing a specific profession. ' +
              'Every profession has a body of knowledge, and the learning of that body of knowledge is called conceptual learning.',
            image: '/images/projects/study.jpg',
          },
          {
            id: 'software-engineering',
            name: 'Software-engineering',
            description: 'Software engineering is a subfield of computer science that deals with all aspects of building complex but reliable software into information systems.',
            image: '/images/projects/software.jpg',
          },
          {
            id: 'internship',
            name: "Internship",
            description: "Internship assignments",
            image: '/images/projects/internship.svg',
          }
        ]
      },
      recommendations: {
        header: 'recommendations',
        subtext: 'what do my mentors, friends & colleagues say',
        meta: [
          {
            name: 'Saray Rond',
            designation: 'Psychology student & Full time girlfriend ❤',
            image: './images/saray.jfif',
            linkedin: 'https://www.linkedin.com/in/saray-r-672049212/',
            content: 'When ✨motivated✨, Rik persists till a task is finished. ' +
              'That is a valuable skill to have since some tasks can be difficult or a lot of work. ' +
              'He is also quite good at communicating with fellow students about how to approach a certain goal, he can sort of lead them to succes. That makes him a real teamplayer which is important in his field. 👨🏼‍💻'
          },
          {
            name: 'Jeanine Peeters',
            designation: 'Full time mother 👪',
            content: 'Rik is a person you can build on and who takes his work seriously. He puts a lot of time and energy into this. He finishes first even if it takes until the wee hours of the morning. Rik is the power in his profession.'
          }
        ]
      }
    }
  }
}
