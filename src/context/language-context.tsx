'use client';

import React, { createContext, useContext, useState } from 'react';
import { Lang } from '@/i18n/translations';

type LanguageContextType = {
  lang: Lang;
};

const LanguageContext = createContext<LanguageContextType>({ lang: 'en' });

export const LanguageProvider: React.FC<{ children: React.ReactNode; initialLang: Lang }> = ({ children, initialLang }) => {
  const [lang] = useState<Lang>(initialLang);

  return (
    <LanguageContext.Provider value={{ lang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
