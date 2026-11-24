export type Lang = 'en' | 'uk';

export const translations = {
  en: {
    present: 'Present',
    header: {
      name: 'Tantsiura Olexandr',
      title: 'Senior Front-End / Full-Stack Engineer — Web, 3D, WebAssembly',
      photoAlt: 'Olexandr Tantsiura profile photo',
      location: 'Ukraine, Cherkasy',
    },
    summary: {
      heading: 'Summary',
      body: (years: number, feYears: number) =>
        `Engineer with ${years}+ years shipping production web applications, ${feYears} of them focused on front-end for React/Angular product teams. Strongest at the hard end of the front end: 3D/GIS visualisation (LuciadRIA, Three.js, WebGL), WebAssembly and WebGPU, offline-first PWAs with gigabytes of data. As a founding engineer I also own the API, database and infrastructure: a production e-commerce + CRM platform with an omnichannel chat inbox and an LLM night assistant, and 25+ browser ports of Windows software. Open to remote full-time or B2B contract roles.`,
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
          title: 'Founder & Lead Engineer',
          company: 'Alter Space Tech',
          responsibility: 'Own studio: porting Windows software to the browser, Mac/Linux and tablets, plus end-to-end products for clients. Single-handedly designing, building, and maintaining an end-to-end B2B CRM platform integrated with an e-commerce storefront for the floral industry. Full-cycle workflow automation covering supply chain, stock tracking, and retail/online sales. Multi-tenant architecture with secure, isolated contractor access (RBAC). Real-time integration between the CRM backend and the customer-facing storefront. Automated CI/CD, authentication, and monitoring, maintaining 100% production uptime. LLM-based night assistant in the chat inbox that answers customers and takes orders (switchable providers, cost tracking, scenario tests).',
        },
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
      radioToggleLabel: 'Radio Engineering Details',
      radioDetails: {
        intro: 'Worked at NovuMedical repairing branded electronics. Around 3 years developing skills with ESP32 and Arduino.',
        esp32Heading: 'Notable ESP32 Projects',
        esp32Projects: [
          'TDOA-based noise direction detector',
          'Custom car speedometer',
          'Pseudo 3D demo on ESP32 C3 on customized 128×160 TFT display',
          'RF plane tail module',
        ],
        gisHeading: 'GIS & Maps',
        gisDescription: 'Online IoT and drone photo scans with projected representation.',
      },
    },
    education: {
      heading: 'Education',
      degree: 'Economics and management: Economic cybernetics',
      university: 'Cherkasy State Technological University',
      level: 'Bachelor’s degree',
    },
    languages: {
      heading: 'Languages',
      items: ['Ukrainian - Native', 'English - Advanced (C1)', 'Russian - prefer to avoid'],
    },
    projects: {
      heading: 'Projects',
      skillsLabel: 'Skills:',
      items: [
        {
          description: 'Production e-commerce storefront and CRM/ERP for a flower business, built and operated solo as a pnpm monorepo of six apps: Next.js storefront, React admin SPA, Fastify API, control center and an MCP server. Unified chat inbox over Telegram, WhatsApp and Instagram, real-time order feed (SSE), WayForPay payments, background workers (BullMQ), multi-tenant access (RBAC), custom Bash deploy framework with blue-green releases and monitoring.',
        },
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
          description: 'The idea started as a collection of my web pet projects and grew into a hub for Ukrainian localization of classic PC games, organised together with like-minded volunteers who do the translations. I lead its development: 25+ released browser ports done nine different ways — C/C++ to WebAssembly, Delphi to Free Pascal to WASM, Windows XP in a browser VM, and original .exe files on a Win32/DirectX to WebGPU runtime; several are playable on phones with touch controls. Angular hub with a Go/PostgreSQL API, cloud saves and offline downloads of multi-GB games with delta updates. The community of localizers handles the translation work.',
        },
      ],
    },
  },
  uk: {
    present: 'Зараз',
    header: {
      name: 'Танцюра Олександр',
      title: 'Senior Front-End / Full-Stack інженер — Web, 3D, WebAssembly',
      photoAlt: 'Фото профілю Олександра Танцюри',
      location: 'Україна, Черкаси',
    },
    summary: {
      heading: 'Резюме',
      body: (years: number, feYears: number) =>
        `Інженер із ${years}+ роками розробки продакшн-вебзастосунків, з них ${feYears} — фронтенд у продуктових командах на React/Angular. Найсильніший у складному фронтенді: 3D/GIS-візуалізація (LuciadRIA, Three.js, WebGL), WebAssembly і WebGPU, офлайн-PWA з гігабайтами даних. Як інженер-засновник також відповідаю за API, базу даних та інфраструктуру: продакшн-магазин + CRM з єдиним чат-інбоксом і нічним AI-асистентом, а також 25+ браузерних портів Windows-програм. Відкритий до віддаленої роботи full-time або B2B-контракту.`,
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
          title: 'Засновник і провідний інженер',
          company: 'Alter Space Tech',
          responsibility: 'Власна студія: портування Windows-програм у браузер, на Mac/Linux і планшети, а також продукти під ключ для клієнтів. Одноосібне проєктування, розробка та підтримка B2B CRM-платформи, інтегрованої з інтернет-магазином для квіткової галузі. Повна автоматизація операційних процесів: від управління постачанням та обліку залишків до роздрібних і онлайн-продажів. Мультитенантна архітектура з ізольованим доступом для підрядників (RBAC). Інтеграція в реальному часі між CRM-бекендом та клієнтським сайтом. Автоматизовані CI/CD, автентифікація та моніторинг — 100% безвідмовної роботи в продакшені. Нічний AI-асистент у чат-інбоксі, що відповідає клієнтам і приймає замовлення (вибір провайдера, облік вартості, тест-сценарії).',
        },
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
      radioToggleLabel: 'Деталі радіоінженерії',
      radioDetails: {
        intro: 'Працював у NovuMedical, займаючись ремонтом брендової електроніки. Близько 3 років розвитку навичок роботи з ESP32 та Arduino.',
        esp32Heading: 'Цікаві проекти на ESP32',
        esp32Projects: [
          'Детектор напрямку шуму на основі TDOA',
          'Нестандартний спідометр для автомобіля',
          'Псевдо-3D демо на ESP32 C3 на кастомізованому TFT-дисплеї 128×160',
          'RF-модуль хвостового оперення для літака',
        ],
        gisHeading: 'ГІС та карти',
        gisDescription: 'Онлайн IoT та фотосканування з дронів із проекційним відображенням.',
      },
    },
    education: {
      heading: 'Освіта',
      degree: 'Економіка та управління: Економічна кібернетика',
      university: 'Черкаський державний технологічний університет',
      level: 'Ступінь бакалавра',
    },
    languages: {
      heading: 'Мови',
      items: ['Українська — рідна', 'Англійська — просунутий (C1)', 'Російська — уникаю'],
    },
    projects: {
      heading: 'Проекти',
      skillsLabel: 'Навички:',
      items: [
        {
          description: 'Продакшн-вітрина інтернет-магазину та CRM/ERP для квіткового бізнесу — розроблено й підтримується одноосібно як pnpm-монорепозиторій із шести застосунків: Next.js-вітрина, React-адмінка, Fastify API, control center та MCP-сервер. Єдиний чат-інбокс для Telegram, WhatsApp та Instagram, стрічка замовлень у реальному часі (SSE), платежі WayForPay, фонові воркери (BullMQ), мультитенантний доступ (RBAC), власний Bash-фреймворк деплою з blue-green релізами та моніторинг.',
        },
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
          description: 'Ідея зародилась як збірка моїх веб-пет-проєктів і виросла в хаб української локалізації класичних ПК-ігор, організований разом з однодумцями-волонтерами, які роблять переклади. Я веду розробку: 25+ випущених браузерних портів, зроблених дев’ятьма способами — C/C++ у WebAssembly, Delphi через Free Pascal у WASM, Windows XP у віртуальній машині в браузері та оригінальні .exe на рушії Win32/DirectX → WebGPU; частина грається на телефонах із сенсорним керуванням. Хаб на Angular з API на Go/PostgreSQL, хмарні збереження та офлайн-завантаження ігор на кілька гігабайт із дельта-оновленнями. Спільнота локалізаторів займається перекладом.',
        },
      ],
    },
  },
} as const;
