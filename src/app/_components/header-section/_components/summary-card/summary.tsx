'use client';

import { useLanguage } from '@/context/language-context';
import { translations } from '@/i18n/translations';

export const SummaryCard = () => {
  const { lang } = useLanguage();
  const t = translations[lang].summary;

  const startYear = 2018;
  const years = new Date().getFullYear() - startYear;
  const feYears = years - 3;

  return (
    <div className='flex-1'>
      <h3 className='mb-2 color-gray-2'>{t.heading}</h3>
      <p>{t.body(years, feYears)}</p>
    </div>
  );
};
