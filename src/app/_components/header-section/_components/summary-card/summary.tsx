export const SummaryCard = () => {
  const startYear = 2018;
  const getExperienceYears = () => {
    const currentYear = new Date().getFullYear();
    return currentYear - startYear;
  }

  return (
    <div className='flex-1'>
      <h3 className='mb-2 color-gray-2'>Summary</h3>

      <p>
        I`m experienced Web Developer for more then {getExperienceYears()} years. I have knowledge in developing, testing, debugging, optimization,
        deployment and support of web applications. My journey started as full-stack developer but for the last 3 years I have
        preferred only front-end development.
      </p>
    </div>
  );
}
