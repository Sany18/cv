import Image from 'next/image';

import profilePhoto from '@/assets/images/profile-photo.webp';

import { Divider } from '@/components/divider/divider';

import './page.scss';

export default function Home() {
  const skills = [
    'JavaScript', 'TypeScript', 'Angular', 'React', 'React Native', 'Expo', 'Three.js (3D)',
    'Node.js', 'Express.js', 'WebRTC/WS', 'NGINX', 'Webpack', 'jQuery', 'Docker',
    'Shell Script', 'RoR', 'Ruby', 'Jekyll', 'Git', 'GitLab CI/CD', 'Jest',
  ];

  const dateNow = new Date().toISOString().split('T')[0];

  const renderTime = (date: string) => {
    if (date == 'now') return <time dateTime={dateNow}>Present</time>;

    const [year, month] = date.split('-');

    return <time dateTime='2019-01'>{`${month}/${year}`}</time>
  }

  return (
    <main className="p-2 pl-4 pr-4 home d-flex flex-column gap-2">
      <div className="d-flex gap-2">
        {/* Name, contacts, summary, skills */}
        <div className="d-flex flex-2 flex-column">
          <h1 className="bold mb-2">Tantsiura Olexandr</h1>

          <h2 className='mb-4'>Software Development Engineer (Front-End)</h2>

          <div className='d-flex gap-2'>
            <div className="d-flex flex-column mb-2">
              <div className="d-flex align-items-center">
                <span className="material-symbols-outlined mr-1">
                  mail
                </span>
                parubok.sashko@gmail.com
              </div>

              <div className="d-flex align-items-center">
                <span className="material-symbols-outlined mr-1">
                  call
                </span>
                +380633884959
              </div>

              <div className="d-flex align-items-center">
                <span className="material-symbols-outlined mr-1">
                  location_on
                </span>
                Ukraine, Cherkasy
              </div>
            </div>

            <div className="d-flex flex-column mb-2">
              <div className="d-flex align-items-center">
                <span className="material-symbols-outlined mr-1">
                  link
                </span>
                <a href='https://www.linkedin.com/in/alexandr-tantsiura-49393a166/' target='_blank'>
                  LinkedIn
                </a>
              </div>

              <div className="d-flex align-items-center">
                <span className="material-symbols-outlined mr-1">
                  link
                </span>
                <a href='https://github.com/Sany18' target='_blank'>
                  GitHub
                </a>
              </div>

              <div className="d-flex align-items-center">
                <span className="material-symbols-outlined mr-1">
                  link
                </span>
                <a href='https://stackoverflow.com/users/12074431/hoxz' target='_blank'>
                  Stack Overflow
                </a>
              </div>
            </div>
          </div>

          <Divider className='mb-2' />

          <div className='d-flex gap-2 flex-column-sm'>
            <div className='flex-1'>
              <h3 className='mb-2 color-gray-2'>Summary</h3>

              <p>
                I`m experienced Web Developer for more then 5 years. I have knowledge in developing, testing, debugging, optimization,
                deployment and support of web applications. My journey started as full-stack developer but for the last 3 years I have
                preferred only front-end development.
              </p>
            </div>

            <div className='flex-1'>
              <h3 className='mb-2 color-gray-2'>Skills</h3>

              <p>
                {skills.join(', ')}
              </p>
            </div>
          </div>
        </div>

        {/* Profile photo */}
        <div className="flex-1 d-flex justify-content-center">
          <div className='profile-photo-container'>
            <Image
              priority
              className='profile-photo'
              width={408}
              height={414}
              src={profilePhoto}
              alt='Olexandr Tantsiura profile photo' />
          </div>
        </div>
      </div>

      <Divider />

      <h3 className='color-gray-2'>Experience</h3>

      <div className='d-flex grid-3'>
        <div className='d-flex flex-column gap-1'>
          <h4>Software Development Engineer (Front-End)</h4>
          <i>SPD-Technology / Spector.AI</i>
          <b>
            {renderTime('2020-11')} - {renderTime('now')}
          </b>
          <p>
            <b>Skills:</b> Angular • React • Three Js (3D) • Optimizing Performance • Software Deployment • SASS
          </p>
          <p>
            <b>Responsibility:</b> Design, develop and maintain web applications on Angular and React. Code review, conducting
            consultations, estimation of project development time etc. Communication with customer and team, daily\weekly
            reports and meetings. Direct participation in
          </p>
        </div>


        <div className='d-flex flex-column gap-1'>
          <h4>Full Stack Developer</h4>
          <i>MileStep LLC</i>
          <p>
            {renderTime('2018-09')} - {renderTime('2020-11')}
          </p>
          <p>
            <b>Skills:</b> React Js • React Native • Webpack • CI/CD • jQuery • Ruby on Rails
          </p>
          <p>
            <b>Responsibility:</b> Development and support applications with RoR, Jekyll, React and React Native.
            Test coverage, CI\CD integration, deployment, dockerization.
            Text communication with customer.
          </p>
        </div>


        <div className='d-flex flex-column gap-1'>
          <h4>Radio Engineer</h4>
          <i>NovuMedical</i>
          <p>
            {renderTime('2016-07')} - {renderTime('2018-07')}
          </p>
          <p>
            <b>Skills:</b> C# • MySQL
          </p>
          <p>
            <b>Responsibility:</b> Support of the internal accounting program (C#, MySQL).
            Repair of branded equipment, installation of software and hardware.
          </p>
        </div>
      </div>

      <Divider />

      <div className='d-flex grid-2'>
        <div className='d-flex flex-column gap-1'>
          <h3 className='color-gray-2'>Education</h3>
          <h4>Economics and management: Economic cybernetics</h4>
          Cherkasy State Technological University
          <p>
            {renderTime('2011-09')} - {renderTime('2015-07')}
          </p>
          Bachelor`s degree
        </div>

        <div className='d-flex flex-column gap-1'>
          <h3 className='color-gray-2'>Languages</h3>
          <p>Ukrainian - Fluent</p>
          <p>English - Intermediate (B1-B2)</p>
        </div>
      </div>

      <Divider />

      <h3 className='color-gray-2'>Projects</h3>

      <div className='d-flex grid-3'>
        <div className='d-flex flex-column gap-1'>
          <h4>Spector AI (SPD Technology)</h4>
          <b>
            {renderTime('2021-07')} - {renderTime('now')}
          </b>
          <p>
            AI based patform for industrial asset inspection. My job is frontend side of application,
            landing page and extension for DroneDeploy. Here I gained a lot of experience in supporting and developing
            large applications and developing new solutions with various technologies.
          </p>
          <p>
            <b>Skills:</b> Angular • React • Three Js (3D) • Optimizing Performance • Software Deployment • SASS • GPU.js •
            OpenLayers • OpenCV.js
          </p>
        </div>

        <div className='d-flex flex-column gap-1'>
          <a href='https://www.instagram.com/frothcoffeeapp/?hl=en' target='_blank'>
            <h4>Froth</h4>
          </a>

          <b>
            {renderTime('2020-02')} - {renderTime('2020-09')}
          </b>
          <p>
            The application to ordering a cup of coffee from your smartphone for Cape Town.
            Landing page, mobile app and server side-app. were developed by a small team of me and my colleague Dmitry.
            Also we were responsible for the release on Play market and Apple store and support.
          </p>
          <p>
            <b>Skills:</b> Ruby on Rails • React • React Native • Webpack • CI/CD • Docker • Software Development
          </p>
        </div>

        <div className='d-flex flex-column gap-1'>
          <h4>Clyste</h4>
          <b>
            {renderTime('2019-08')} - {renderTime('2020-01')}
          </b>
          <p>
            Experimental social media platform. At that time, I set up video calls and chat in the platform.
            Here I got experience with WS and WebRTC
          </p>
          <p>
            <b>Skills:</b> Ruby on Rails • React • WebRTC/WS • CI/CD • Docker • Software Development
          </p>
        </div>

        <div className='d-flex flex-column gap-1'>
          <h4>Site of company Milestep</h4>
          <b>
            {renderTime('2019-06')} - {renderTime('2019-07')}
          </b>
          <p>
            With this project I was introduced to parallax.js, jQuery opportunities and css filters.
            For me it was more like a techno demo then just a page. There were horisontal multi-layered parallax,
            a lot of presize animated particles, cursor highlighted background and more.
            First version of this site was the business card of the company in the first years of its life.
          </p>
          <p>
            <b>Skills:</b> jQuery • Parallax.js • CSS filters • Software Development
          </p>
        </div>

        <div className='d-flex flex-column gap-1'>
          <a href='https://alter-space.biz.ua/' target='_blank'>
            <h4>Alter space</h4>
          </a>

          <h6>Subprojects:</h6>
          <a href='https://alter-space.biz.ua/tetris/' target='_blank'>Classic Tetris</a>
          <a href='https://alter-space.biz.ua/3d-shooter' target='_blank'>3D shooter playground (demo)</a>

          <b>
            {renderTime('2019-06')} - {renderTime('2019-07')}
          </b>
          <p>
            Here I collect my web pet projects, which I wrote at various times out of curiosity.
            This is what I was able to compile and run, so I won`t be surprised if something goes wrong
          </p>
          <p>
            <b>Skills:</b> ThreeJS (3d) • React • NodeJs/Express • WS • Webpack • JavaScript • CannonJS
          </p>
        </div>
      </div>
    </main>
  );
}
