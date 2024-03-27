import Image from 'next/image';

import profilePhoto from '@/assets/images/profile-photo.webp';

import './page.scss';
import { Divider } from '@/components/divider/divider';

export default function Home() {
  return (
    <main className="p-2 pl-4 pr-4 home">
      <div className="d-flex gap-1">
        <div className="d-flex flex-2 flex-column">
          <h1 className="bold mb-4">Tantsiura Olexandr</h1>

          <div className="d-flex flex-column">
            <div className="d-flex align-items-center">
              <span className="material-symbols-outlined mr-1">
                mail
              </span>
              parubok.sashko@gmail.com
            </div>

            <div className="d-flex align-items-center">
              <span className="material-symbols-outlined mr-1">
                call
              </span>
              +380633884959
            </div>

            <div className="d-flex align-items-center">
              <span className="material-symbols-outlined mr-1">
                location_on
              </span>
              Ukraine, Cherkasy
            </div>
          </div>
        </div>

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

      <Divider className="mt-1 mb-2" />
    </main>
  );
}
