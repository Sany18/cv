'use client';

import React from 'react';
import { useLanguage } from '@/context/language-context';
import { translations } from '@/i18n/translations';

type Props = {
  time?: string;
} & React.HTMLProps<HTMLHRElement>;

export const Time: React.FC<Props> = ({ ...props }) => {
  const { lang } = useLanguage();
  const dateNow = new Date().toISOString().split('T')[0];

  const renderTime = (date?: string) => {
    if (!date) return <time dateTime={dateNow}>{translations[lang].present}</time>;

    const [year, month] = date.split('-');
    return <time dateTime={date}>{`${month}/${year}`}</time>;
  };

  return renderTime(props.time);
};
