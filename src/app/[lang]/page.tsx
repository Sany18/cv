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

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'uk' }];
}

export async function generateMetadata({ params }: { params: { lang: Lang } }): Promise<Metadata> {
  const t = translations[params.lang];
  return {
    title: `${t.header.name} — CV`,
    description: `${t.header.name} — ${t.header.title} — CV`,
  };
}

export default function Page({ params }: { params: { lang: Lang } }) {
  return (
    <LanguageProvider initialLang={params.lang}>
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
