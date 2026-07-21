import type { Metadata } from 'next';
import { Lang, translations } from '@/i18n/translations';
import { LanguageProvider } from '@/context/language-context';
import { LanguageSwitcher } from '@/components/language-switcher/language-switcher';
import { Divider } from '@/components/divider/divider';
import { HeaderSection } from '../_components/header-section/header-section';
import { ExperienceSection } from '../_components/experience-section/experience-section';
import { EducationLanguagesSection } from '../_components/education-languages-section/education-languages-section';
import { ProjectsSection } from '../_components/projects-section/projects-section';

import '../page.scss';

const CV_URL = 'https://sany18.github.io/cv';
const START_YEAR = 2018;
const FE_YEARS_OFFSET = 3;

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'uk' }];
}

export async function generateMetadata({ params }: { params: { lang: Lang } }): Promise<Metadata> {
  const t = translations[params.lang];
  const title = `${t.header.name} — CV`;
  const description = `${t.header.name} — ${t.header.title} — CV`;
  const url = `${CV_URL}/${params.lang}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'profile',
      url,
      locale: params.lang === 'uk' ? 'uk_UA' : 'en_US',
      firstName: 'Olexandr',
      lastName: 'Tantsiura',
    },
    twitter: {
      card: 'summary',
      title,
      description,
    },
    alternates: {
      canonical: url,
      languages: {
        en: `${CV_URL}/en`,
        uk: `${CV_URL}/uk`,
      },
    },
  };
}

function buildJsonLd(lang: Lang) {
  const t = translations[lang];
  const years = new Date().getFullYear() - START_YEAR;
  const feYears = years - FE_YEARS_OFFSET;

  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Tantsiura Olexandr',
    alternateName: 'Olexandr Tantsiura',
    jobTitle: t.header.title,
    description: t.summary.body(years, feYears),
    email: 'parubok.sashko@gmail.com',
    telephone: '+380633884959',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Cherkasy',
      addressCountry: 'UA',
    },
    url: `${CV_URL}/${lang}`,
    sameAs: [
      'https://www.linkedin.com/in/alexandr-tantsiura-49393a166/',
      'https://github.com/Sany18',
      'https://stackoverflow.com/users/12074431/hoxz',
    ],
    knowsAbout: [
      'JavaScript', 'TypeScript', 'Angular', 'React', 'Three.js',
      '3D Web Development', 'GIS', 'LuciadRIA', 'Point Clouds', '3D Tiles',
      'Node.js', 'WebRTC', 'WebSockets', 'Docker', 'Ruby on Rails',
      'React Native', 'CI/CD', 'Git', 'GitLab CI/CD', 'Jest', 'Webpack', 'PWA',
      'Full-Stack Architecture', 'Multi-tenant Architecture',
      'Role-Based Access Control (RBAC)', 'B2B CRM', 'DevOps',
    ],
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: t.education.university,
    },
    worksFor: {
      '@type': 'Organization',
      name: 'Self-employed',
    },
    hasOccupation: {
      '@type': 'Occupation',
      name: t.header.title,
      skills: 'JavaScript, TypeScript, Angular, React, Three.js (3D), LuciadRIA, GIS, Point Clouds, 3D Tiles, Geo-reference Systems, Node.js, WebRTC, Docker, CI/CD, Ruby on Rails, React Native, Git, Full-Stack Architecture, Multi-tenant Architecture, RBAC, B2B CRM, DevOps',
    },
  };
}

export default function Page({ params }: { params: { lang: Lang } }) {
  const jsonLd = buildJsonLd(params.lang);

  return (
    <LanguageProvider initialLang={params.lang}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="p-2 pl-4 pr-4 home d-flex flex-column gap-2">
        <LanguageSwitcher />
        <HeaderSection />
        <Divider />
        <ExperienceSection />
        <Divider />
        <EducationLanguagesSection />
        <Divider />
        <ProjectsSection />
      </main>
    </LanguageProvider>
  );
}
