import { Time } from "@/components/time/time";

export const ProjectsSection = () => {
  return (
    <>
      <h3 className='color-gray-2'>Projects</h3>

      <div className='d-flex grid-3'>
        <div className='d-flex flex-column gap-1'>
          <h4>Spector AI (SPD Technology)</h4>
          <b>
            <Time time='2021-07' /> - <Time />
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
            <Time time='2020-02' /> - <Time time='2020-09' />
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
            <Time time='2019-08' /> - <Time time='2020-01' />
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
            <Time time='2019-06' /> - <Time time='2019-07' />
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
            <Time time='2019-06' /> - <Time time='2019-07' />
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
    </>
  );
}
