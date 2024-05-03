import Image from "next/image";

import profilePhoto from '@/assets/images/profile-photo.webp';

import { Divider } from "@/components/divider/divider";

import { InfoCard } from "./_components/info-card/info";
import { SkillsCard } from "./_components/skills-card/skills";
import { SummaryCard } from "./_components/summary-card/summary";

export const HeaderSection = () => {
  const renderProfilePhoto = () => (
    <div className="profile-photo flex-1 d-flex justify-content-center">
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
  )

  return (
    <>
     <div className="d-flex gap-2 flex-column-sm">
        {/* Name, contacts, summary, skills */}
        <div className="d-flex flex-2 flex-column">
          <h1 className="bold mb-2">Tantsiura Olexandr</h1>

          <h2 className='mb-4'>Software Development Engineer (Front-End)</h2>

          <div className="d-flex justify-content-between">
            <InfoCard />

            <div
              style={{ width: '12rem' }}
              className="hide-sm show-print">
              {renderProfilePhoto()}
            </div>
          </div>

          <Divider className='mb-2' />

          <div className='d-flex gap-2 flex-column-sm flex-column-print'>
            <SummaryCard />

            <SkillsCard />
          </div>
        </div>

        <div className="hide-sm hide-print">
          {renderProfilePhoto()}
        </div>
      </div>
    </>
  );
}
