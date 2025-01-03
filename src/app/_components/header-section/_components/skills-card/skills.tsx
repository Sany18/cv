export const SkillsCard = () => {
  const mainSkills = [
    'JavaScript', 'TypeScript', 'Angular', 'React', 'Three.js (3D)',
  ];

  const skills = [
    'Node.js', 'Express.js', 'WebRTC/WS', 'NGINX', 'Webpack', 'React Native', 'Expo',
    'jQuery', 'Docker', 'Shell Script', 'RoR', 'Ruby', 'Jekyll', 'Git', 'GitLab CI/CD', 'Jest',
    'Userscript/Tempermonkey/Chrome extensions', 'PWA'
  ];

  return (
    <div className='flex-1'>
      <h3 className='mb-2 color-gray-2'>Skills</h3>

      <h4>Main Skills</h4>
      <p className="mb-2">
        {mainSkills.join(', ')}
      </p>

      <h4>Other Skills</h4>
      <p>
        {skills.join(', ')}
      </p>
    </div>
  );
}
