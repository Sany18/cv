export const SkillsCard = () => {
  const skills = [
    'JavaScript', 'TypeScript', 'Angular', 'React', 'React Native', 'Expo', 'Three.js (3D)',
    'Node.js', 'Express.js', 'WebRTC/WS', 'NGINX', 'Webpack',
    'jQuery', 'Docker', 'Shell Script', 'RoR', 'Ruby', 'Jekyll', 'Git', 'GitLab CI/CD', 'Jest',
    'Userscript/Tempermonkey/Chrome extensions', 'PWA'
  ];

  return (
    <div className='flex-1'>
      <h3 className='mb-2 color-gray-2'>Skills</h3>

      <p>
        {skills.join(', ')}
      </p>
    </div>
  );
}
