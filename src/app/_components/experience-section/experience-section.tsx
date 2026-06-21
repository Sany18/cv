'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/language-context';
import { translations } from '@/i18n/translations';
import { Time } from "@/components/time/time";
import './experience-section.scss';

const jobDates = [
  { start: '2024-10', end: '2026-05' },
  { start: '2020-11', end: '2024-10' },
  { start: '2018-09', end: '2020-11' },
  { start: '2016-07', end: '2018-07' },
];

const jobSkills = [
  'LuciadRIA • GIS • Point Clouds • 3D Tiles • Geo-reference Systems • TypeScript',
  'Angular • React • Three Js (3D) • Optimizing Performance • Software Deployment • SASS',
  'React Js • React Native • Webpack • CI/CD • jQuery • Ruby on Rails',
  'C# • MySQL',
];

export const ExperienceSection = () => {
  const { lang } = useLanguage();
  const t = translations[lang].experience;
  const [radioOpen, setRadioOpen] = useState(false);

  return (
    <>
      <h3 className='color-gray-2'>{t.heading}</h3>

      <div className='d-flex grid-3'>
        {t.jobs.map((job, i) => (
          <div key={i} className='d-flex flex-column gap-1'>
            <h4>{job.title}</h4>
            <i>{job.company}</i>
            <b>
              <Time time={jobDates[i].start} /> - <Time time={jobDates[i].end} />
            </b>
            <p><b>{t.skillsLabel}</b> {jobSkills[i]}</p>
            <p><b>{t.responsibilityLabel}</b> {job.responsibility}</p>
          </div>
        ))}
        <div className='d-flex flex-column gap-1 radio-card'>
          <button
            className='radio-card__toggle'
            onClick={() => setRadioOpen(o => !o)}
            aria-expanded={radioOpen}
          >
            <span>{radioOpen ? '▼' : '▶'}</span>
            {t.radioToggleLabel}
          </button>
          {radioOpen && (
            <div className='radio-card__body d-flex flex-column gap-1'>
              <p>{t.radioDetails.intro}</p>
              <p><b>{t.radioDetails.esp32Heading}:</b></p>
              <ul>
                {t.radioDetails.esp32Projects.map((proj, j) => (
                  <li key={j}>{proj}</li>
                ))}
              </ul>
              <p><b>{t.radioDetails.gisHeading}:</b></p>
              <p>{t.radioDetails.gisDescription}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
