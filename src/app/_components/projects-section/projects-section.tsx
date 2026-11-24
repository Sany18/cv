'use client';

import { useLanguage } from '@/context/language-context';
import { translations } from '@/i18n/translations';
import { Time } from "@/components/time/time";

const projectMeta = [
  {
    url: null,
    skills: 'Next.js 15 • React + Vite • Fastify • PostgreSQL • Redis/BullMQ • Zod • SSE • TanStack Query • Zustand • MCP • Docker • NGINX • Blue-green deploy • CI/CD',
    start: '2026-05',
    end: undefined,
  },
  {
    url: 'https://www.infracloud3d.com/en/',
    skills: 'LuciadRIA • GIS • Point Clouds • 3D Tiles • Geo-reference Systems • TypeScript',
    start: '2024-10',
    end: '2026-05',
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
    skills: 'WebAssembly/Emscripten • Free Pascal • Python tooling • ThreeJS (3d) • React • Service Worker/PWA • NGINX • Cloudflare • AI Agent Orchestration • Bash • TypeScript',
    start: '2019-06',
    end: undefined,
  },
];

const projectNames = [
  'Veronica',
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
    <section>
      <h3 className='color-gray-2'>{t.heading}</h3>

      <div className='d-flex grid-3'>
        {t.items.map((item, i) => {
          const meta = projectMeta[i];
          const name = projectNames[i];

          return (
            <article key={i} className='d-flex flex-column gap-1'>
              {meta.url
                ? <h4><a href={meta.url} target='_blank' rel='noopener'>{name}</a></h4>
                : <h4>{name}</h4>
              }

              <b>
                <Time time={meta.start} /> - {meta.end ? <Time time={meta.end} /> : <Time />}
              </b>
              <p>{item.description}</p>
              <p><b>{t.skillsLabel}</b> {meta.skills}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};
