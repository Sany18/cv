export type Lang = 'en' | 'uk';

export const translations = {
  en: {
    present: 'Present',
    header: {
      name: 'Tantsiura Olexandr',
      title: 'Software Systems Engineer (Web / 3D)',
      photoAlt: 'Olexandr Tantsiura profile photo',
      location: 'Ukraine, Cherkasy',
    },
    summary: {
      heading: 'Summary',
      body: (years: number, feYears: number) =>
        `I\`m experienced Web Developer for more then ${years} years. I have knowledge in developing, testing, debugging, optimization, deployment and support of web applications. My journey started as full-stack developer but for the last ${feYears} years I have preferred only front-end development.`,
    },
    skills: {
      heading: 'Skills',
      main: 'Main Skills',
      other: 'Other Skills',
    },
    experience: {
      heading: 'Experience',
      skillsLabel: 'Skills:',
      responsibilityLabel: 'Responsibility:',
      jobs: [
        {
          title: 'Software Systems Engineer (Web / 3D)',
          company: 'InfraCloud',
          responsibility: 'Development of a 3D web application for infrastructure management. Working with GIS data, various geo-reference systems, point clouds and 3D tiles. Building and maintaining the map interface using LuciadRIA as the core mapping library.',
        },
        {
          title: 'Software Development Engineer (Front-End)',
          company: 'SPD-Technology / Spector.AI',
          responsibility: 'Design, develop and maintain web applications on Angular and React. Code review, conducting consultations, estimation of project development time etc. Communication with customer and team, daily\\weekly reports and meetings. Direct participation in project discussions and project’s development way. Refactoring, optimization, documentation covering.',
        },
        {
          title: 'Full Stack Developer',
          company: 'MileStep LLC',
          responsibility: 'Development and support applications with RoR, Jekyll, React and React Native. Test coverage, CI\\CD integration, deployment, dockerization. Text communication with customer.',
        },
        {
          title: 'Radio Engineer',
          company: 'NovuMedical',
          responsibility: 'Support of the internal accounting program (C#, MySQL). Repair of branded equipment, installation of software and hardware.',
        },
      ],
    },
    education: {
      heading: 'Education',
      degree: 'Economics and management: Economic cybernetics',
      university: 'Cherkasy State Technological University',
      level: 'Bachelor’s degree',
    },
    languages: {
      heading: 'Languages',
      items: ['Ukrainian - Native', 'English - Upper-Intermediate (B2)', 'Russian - prefer to avoid'],
    },
    projects: {
      heading: 'Projects',
      skillsLabel: 'Skills:',
      subprojectsLabel: 'Subprojects:',
      items: [
        {
          description: 'Web application built around a 3D map environment for infrastructure management. Involves working with GIS data, multiple geo-reference systems, point clouds and 3D tiles. Here I gained hands-on experience with LuciadRIA as the core mapping library.',
        },
        {
          description: 'AI based patform for industrial asset inspection. My job is frontend side of application, landing page and extension for DroneDeploy. Here I gained a lot of experience in supporting and developing large applications and developing new solutions with various technologies.',
        },
        {
          description: 'The application to ordering a cup of coffee from your smartphone for Cape Town. Landing page, mobile app and server side-app. were developed by a small team of me and my colleague Dmitry. Also we were responsible for the release on Play market and Apple store and support.',
        },
        {
          description: 'Experimental social media platform. At that time, I set up video calls and chat in the platform. Here I got experience with WS and WebRTC',
        },
        {
          description: 'With this project I was introduced to parallax.js, jQuery opportunities and css filters. For me it was more like a techno demo then just a page. There were horisontal multi-layered parallax, a lot of presize animated particles, cursor highlighted background and more. First version of this site was the business card of the company in the first years of its life.',
        },
        {
          description: 'Here I collect my web pet projects, which I wrote at various times out of curiosity. This is what I was able to compile and run, so I won\`t be surprised if something goes wrong',
        },
      ],
    },
  },
  uk: {
    present: 'Зараз',
    header: {
      name: 'Танцюра Олександр',
      title: 'Інженер програмних систем (Web / 3D)',
      photoAlt: 'Фото профілю Олександра Танцюри',
      location: 'Україна, Черкаси',
    },
    summary: {
      heading: 'Резюме',
      body: (years: number, feYears: number) =>
        `Досвідчений веб-розробник із більш ніж ${years} роками досвіду. Маю знання в розробці, тестуванні, налагодженні, оптимізації, розгортанні та підтримці веб-застосунків. Мій шлях починався як full-stack розробник, але протягом останніх ${feYears} років я надаю перевагу виключно front-end розробці.`,
    },
    skills: {
      heading: 'Навички',
      main: 'Основні навички',
      other: 'Інші навички',
    },
    experience: {
      heading: 'Досвід роботи',
      skillsLabel: 'Навички:',
      responsibilityLabel: 'Обов’язки:',
      jobs: [
        {
          title: 'Інженер програмних систем (Web / 3D)',
          company: 'InfraCloud',
          responsibility: 'Розробка 3D веб-застосунку для управління інфраструктурою. Робота з GIS-даними, різними геореферентними системами, хмарами точок та 3D-тайлами. Побудова та підтримка картографічного інтерфейсу з використанням LuciadRIA як основної картографічної бібліотеки.',
        },
        {
          title: 'Інженер з розробки програмного забезпечення (Front-End)',
          company: 'SPD-Technology / Spector.AI',
          responsibility: 'Проектування, розробка та підтримка веб-застосунків на Angular та React. Код-рев’ю, проведення консультацій, оцінка часу розробки тощо. Комунікація з клієнтом та командою, щоденні/тижневі звіти та наради. Безпосередня участь в обговоренні проектів та визначенні шляхів їх розвитку. Рефакторинг, оптимізація, документування.',
        },
        {
          title: 'Full Stack розробник',
          company: 'MileStep LLC',
          responsibility: 'Розробка та підтримка застосунків на RoR, Jekyll, React та React Native. Покриття тестами, інтеграція CI/CD, розгортання, докеризація. Текстова комунікація з клієнтом.',
        },
        {
          title: 'Радіоінженер',
          company: 'NovuMedical',
          responsibility: 'Підтримка внутрішньої бухгалтерської програми (C#, MySQL). Ремонт фірмового обладнання, встановлення програмного та апаратного забезпечення.',
        },
      ],
    },
    education: {
      heading: 'Освіта',
      degree: 'Економіка та управління: Економічна кібернетика',
      university: 'Черкаський державний технологічний університет',
      level: 'Ступінь бакалавра',
    },
    languages: {
      heading: 'Мови',
      items: ['Українська — рідна', 'Англійська — вище середнього (B2)', 'Російська — уникаю'],
    },
    projects: {
      heading: 'Проекти',
      skillsLabel: 'Навички:',
      subprojectsLabel: 'Підпроекти:',
      items: [
        {
          description: 'Веб-застосунок побудований навколо 3D картографічного середовища для управління інфраструктурою. Включає роботу з GIS-даними, різними геореферентними системами, хмарами точок та 3D-тайлами. Тут я набув практичного досвіду роботи з LuciadRIA як основною картографічною бібліотекою.',
        },
        {
          description: 'AI-платформа для інспекції промислових об’єктів. Моя робота — фронтенд частина застосунку, лендінг та розширення для DroneDeploy. Тут я отримав великий досвід у підтримці та розробці великих застосунків і впровадженні нових рішень з різними технологіями.',
        },
        {
          description: 'Застосунок для замовлення кави зі смартфона для Кейптауна. Лендінг, мобільний застосунок та серверна частина були розроблені невеликою командою — мною та моїм колегою Дмитром. Також ми були відповідальні за випуск на Play Market і App Store та подальшу підтримку.',
        },
        {
          description: 'Експериментальна платформа соціальних мереж. На той момент я налаштував відеодзвінки та чат у платформі. Тут я отримав досвід роботи з WS та WebRTC.',
        },
        {
          description: 'З цим проектом я познайомився з parallax.js, можливостями jQuery та CSS-фільтрами. Для мене це було більше схоже на техно-демо, ніж просто сторінка. Там був горизонтальний багатошаровий параллакс, безліч точних анімованих частинок, підсвічений фоном курсор та багато іншого. Перша версія цього сайту була візитною карткою компанії в перші роки її існування.',
        },
        {
          description: 'Тут я збираю свої веб-пет-проекти, написані в різний час із цікавості. Це те, що мені вдалося зібрати та запустити, тому не дивуйтеся, якщо щось піде не так.',
        },
      ],
    },
  },
} as const;
