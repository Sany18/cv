'use client';

import { useLanguage } from '@/context/language-context';
import { translations } from '@/i18n/translations';
import { Time } from "@/components/time/time";

const projectMeta = [
  {
    url: 'https://www.infracloud3d.com/en/',
    skills: 'LuciadRIA • GIS • Point Clouds • 3D Tiles • Geo-reference Systems • TypeScript',
    start: '2024-10',
    end: undefined,
  },
  {
    url: null,
    skills: 'Angular • React • Three Js (3D) • Optimizing Performance • Software Deployment • SASS • GPU.js • OpenLayers • OpenCV.js',
    start: '2021-07',
    end: '2024-10',
  },
  {
    url: 'https://www.instagram.com/frothcoffeeapp/?hl=en',
    skills: 'Ruby on Rails • React • React Native • Webpack • CI/CD • Docker • Software Development',
    start: '2020-02',
    end: '2020-09',
  },
  {
    url: null,
    skills: 'Ruby on Rails • React • WebRTC/WS • CI/CD • Docker • Software Development',
    start: '2019-08',
    end: '2020-01',
  },
  {
    url: null,
    skills: 'jQuery • Parallax.js • CSS filters • Software Development',
    start: '2019-06',
    end: '2019-07',
  },
  {
    url: 'https://alter-space.biz.ua/',
    skills: 'ThreeJS (3d) • React • NodeJs/Express • WS • Webpack • JavaScript • CannonJS',
    start: '2019-06',
    end: '2019-07',
    subprojects: [
      { url: 'https://alter-space.biz.ua/tetris/', label: 'Classic Tetris' },
      { url: 'https://alter-space.biz.ua/3d-shooter', label: '3D shooter playground (demo)' },
      { url: 'https://sany18.github.io/note-keeper/', label: 'Note Keeper' },
    ],
  },
];

const projectNames = [
  'InfraCloud',
  'Spector AI (SPD Technology)',
  'Froth',
  'Clyste',
  'Site of company Milestep',
  'Alter space',
];

export const ProjectsSection = () => {
  const { lang } = useLanguage();
  const t = translations[lang].projects;

  return (
    <>
      <h3 className='color-gray-2'>{t.heading}</h3>

      <div className='d-flex grid-3'>
        {t.items.map((item, i) => {
          const meta = projectMeta[i];
          const name = projectNames[i];

          return (
            <div key={i} className='d-flex flex-column gap-1'>
              {meta.url
                ? <a href={meta.url} target='_blank'><h4>{name}</h4></a>
                : <h4>{name}</h4>
              }

              {'subprojects' in meta && meta.subprojects && (
                <>
                  <h6>{t.subprojectsLabel}</h6>
                  {meta.subprojects.map((sp) => (
                    <a key={sp.url} href={sp.url} target='_blank'>{sp.label}</a>
                  ))}
                </>
              )}

              <b>
                <Time time={meta.start} /> - {meta.end ? <Time time={meta.end} /> : <Time />}
              </b>
              <p>{item.description}</p>
              <p><b>{t.skillsLabel}</b> {meta.skills}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};
