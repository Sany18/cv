'use client';

import { useLanguage } from '@/context/language-context';
import { translations } from '@/i18n/translations';
import { Time } from "@/components/time/time";

export const EducationLanguagesSection = () => {
  const { lang } = useLanguage();
  const te = translations[lang].education;
  const tl = translations[lang].languages;

  return (
    <>
      <div className='d-flex grid-2'>
        <div className='d-flex flex-column gap-1'>
          <h3 className='color-gray-2'>{te.heading}</h3>
          <h4>{te.degree}</h4>
          {te.university}
          <p>
            <Time time='2011-09' /> - <Time time='2015-07' />
          </p>
          {te.level}
        </div>

        <div className='d-flex flex-column gap-1'>
          <h3 className='color-gray-2'>{tl.heading}</h3>
          {tl.items.map((item, i) => (
            <p key={i}>{item}</p>
          ))}
        </div>
      </div>
    </>
  );
};
