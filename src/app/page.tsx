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

  return (
    <main className="p-2 pl-4 pr-4 home d-flex flex-column gap-2">
      <div className="d-flex gap-2">
        {/* Name, contacts, summary, skills */}
        <div className="d-flex flex-2 flex-column">
          <h1 className="bold mb-2">Tantsiura Olexandr</h1>

          <h2 className='mb-4'>Software Development Engineer (Front-End)</h2>

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
            <time dateTime='2020-11'>11/2020</time> - <time dateTime={(new Date).toISOString().split('T')[0]}>Present</time>
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
            <time dateTime='2018-09'>09/2018</time> - <time dateTime='2020-11'>11/2020</time>
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
            <time dateTime='2016-07'>07/2016</time> - <time dateTime='2018-07'>07/2018</time>
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
            <time dateTime='2011-09'>09/2011</time> - <time dateTime='2015-07'>07/2015</time>
          </p>
          Bachelor`s degree
        </div>

        <div className='d-flex flex-column gap-1'>
          <h3 className='color-gray-2'>Languages</h3>
          <p>Ukrainian - Fluent</p>
          <p>English - Intermediate (B1-B2)</p>
        </div>
      </div>
    </main>
  );
}
