import { Divider } from '@/components/divider/divider';

import { HeaderSection } from './_components/header-section/header-section';
import { ProjectsSection } from './_components/projects-section/projects-section';
import { ExperienceSection } from './_components/experience-section/experience-section';
import { EducationLanguagesSection } from './_components/education-languages-section/education-languages-section';

import './page.scss';

export default function Home() {
  return (
    <main className="p-2 pl-4 pr-4 home d-flex flex-column gap-2">
      <HeaderSection />

      <Divider />

      <ExperienceSection />

      <Divider />

      <EducationLanguagesSection />

      <Divider />

      <ProjectsSection />
    </main>
  );
}
