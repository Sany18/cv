import { Time } from "@/components/time/time";

export const EducationLanguagesSection = () => {
  return (
    <>
        <div className='d-flex grid-2'>
        <div className='d-flex flex-column gap-1'>
          <h3 className='color-gray-2'>Education</h3>
          <h4>Economics and management: Economic cybernetics</h4>
          Cherkasy State Technological University
          <p>
            <Time time='2011-09' /> - <Time time='2015-07' />
          </p>
          Bachelor`s degree
        </div>

        <div className='d-flex flex-column gap-1'>
          <h3 className='color-gray-2'>Languages</h3>
          <p>Ukrainian - Fluent</p>
          <p>English - Intermediate (B1-B2)</p>
        </div>
      </div>
    </>
  );
}
