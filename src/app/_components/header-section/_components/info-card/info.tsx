export const InfoCard = () => {
  return (
    <div className='d-flex gap-2 flex-column-sm flex-column-print'>
      <div className="d-flex flex-column mb-2">
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

      <div className="d-flex flex-column mb-2">
        <div className="d-flex align-items-center">
          <span className="material-symbols-outlined mr-1">
            link
          </span>
          <a href='https://www.linkedin.com/in/alexandr-tantsiura-49393a166/' target='_blank'>
            LinkedIn
          </a>
        </div>

        <div className="d-flex align-items-center">
          <span className="material-symbols-outlined mr-1">
            link
          </span>
          <a href='https://github.com/Sany18' target='_blank'>
            GitHub
          </a>
        </div>

        <div className="d-flex align-items-center">
          <span className="material-symbols-outlined mr-1">
            link
          </span>
          <a href='https://stackoverflow.com/users/12074431/hoxz' target='_blank'>
            Stack Overflow
          </a>
        </div>
      </div>
    </div>
  );
}
