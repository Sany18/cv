import { Time } from "@/components/time/time";

export const ExperienceSection = () => {
  return (
    <>
      <h3 className='color-gray-2'>Experience</h3>

      <div className='d-flex grid-3'>
        <div className='d-flex flex-column gap-1'>
          <h4>Software Development Engineer (Front-End)</h4>
          <i>SPD-Technology / Spector.AI</i>
          <b>
            <Time time='2020-11' /> - <Time time='2024-10' />
          </b>
          <p>
            <b>Skills:</b> Angular • React • Three Js (3D) • Optimizing Performance • Software Deployment • SASS
          </p>
          <p>
            <b>Responsibility:</b> Design, develop and maintain web applications on Angular and React. Code review, conducting
            consultations, estimation of project development time etc. Communication with customer and team, daily\weekly
            reports and meetings. Direct participation in project discussions and project&apos;s development way. Refactoring,
            optimization, documentation covering.
          </p>
        </div>

        <div className='d-flex flex-column gap-1'>
          <h4>Full Stack Developer</h4>
          <i>MileStep LLC</i>
          <p>
            <Time time='2018-09' /> - <Time time='2020-11'/>
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
            <Time time='2016-07' /> - <Time time='2018-07'/>
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
    </>
  );
}
