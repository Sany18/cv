'use client';

import { useEffect } from 'react';
import { Lang } from '@/i18n/translations';

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Lang };
}) {
  useEffect(() => {
    document.documentElement.lang = params.lang;
  }, [params.lang]);

  return <>{children}</>;
}
