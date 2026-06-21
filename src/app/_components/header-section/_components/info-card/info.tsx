'use client';

import { useLanguage } from '@/context/language-context';
import { translations } from '@/i18n/translations';

export const InfoCard = () => {
  const { lang } = useLanguage();
  const t = translations[lang].header;

  return (
    <address className='d-flex gap-2 flex-column-sm flex-column-print' style={{ fontStyle: 'normal' }}>
      <div className="d-flex flex-column mb-2">
        <div className="d-flex align-items-center">
          <span className="material-symbols-outlined mr-1" aria-hidden="true">mail</span>
          <a href='mailto:parubok.sashko@gmail.com' aria-label="Email">parubok.sashko@gmail.com</a>
        </div>

        <div className="d-flex align-items-center">
          <span className="material-symbols-outlined mr-1" aria-hidden="true">call</span>
          <a href='tel:+380633884959' aria-label="Phone">+380633884959</a>
        </div>

        <div className="d-flex align-items-center">
          <span className="material-symbols-outlined mr-1" aria-hidden="true">location_on</span>
          {t.location}
        </div>
      </div>

      <div className="d-flex flex-column mb-2">
        <div className="d-flex align-items-center">
          <span className="material-symbols-outlined mr-1" aria-hidden="true">link</span>
          <a href='https://www.linkedin.com/in/alexandr-tantsiura-49393a166/' target='_blank' rel='me noopener' aria-label="LinkedIn profile">LinkedIn</a>
        </div>

        <div className="d-flex align-items-center">
          <span className="material-symbols-outlined mr-1" aria-hidden="true">link</span>
          <a href='https://github.com/Sany18' target='_blank' rel='me noopener' aria-label="GitHub profile">GitHub</a>
        </div>

        <div className="d-flex align-items-center">
          <span className="material-symbols-outlined mr-1" aria-hidden="true">link</span>
          <a href='https://stackoverflow.com/users/12074431/hoxz' target='_blank' rel='noopener' aria-label="Stack Overflow profile">Stack Overflow</a>
        </div>

        <div className="d-flex align-items-center">
          <span className="material-symbols-outlined mr-1" aria-hidden="true">link</span>
          <a href='https://hoxzy.blogspot.com/' target='_blank' rel='noopener' aria-label="Blog">Blog</a>
        </div>
      </div>
    </address>
  );
};
