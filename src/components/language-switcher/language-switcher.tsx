'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/language-context';
import { Lang } from '@/i18n/translations';
import './language-switcher.scss';

export const LanguageSwitcher = () => {
  const { lang } = useLanguage();

  return (
    <div className="language-switcher hide-print">
      {(['en', 'uk'] as Lang[]).map((l) => (
        <Link key={l} href={`/${l}`} className={lang === l ? 'active' : ''}>
          {l.toUpperCase()}
        </Link>
      ))}
    </div>
  );
};
