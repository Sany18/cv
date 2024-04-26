import Image from "next/image";

import profilePhoto from '@/assets/images/profile-photo.webp';

import { Divider } from "@/components/divider/divider";

import { InfoCard } from "./_components/info-card/info";
import { SkillsCard } from "./_components/skills-card/skills";
import { SummaryCard } from "./_components/summary-card/summary";

export const HeaderSection = () => {
  return (
    <>
     <div className="d-flex gap-2">
        {/* Name, contacts, summary, skills */}
        <div className="d-flex flex-2 flex-column">
          <h1 className="bold mb-2">Tantsiura Olexandr</h1>

          <h2 className='mb-4'>Software Development Engineer (Front-End)</h2>

          <InfoCard />

          <Divider className='mb-2' />

          <div className='d-flex gap-2 flex-column-sm'>
            <SummaryCard />

            <SkillsCard />
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
    </>
  );
}
