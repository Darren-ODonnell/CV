export const skillsReducer = () => {
  return [

  {title: 'Programming Languages',
  contents: ['Java', 'JavaScript', 'SQL', 'Python', 'C#'],
  },
  {title: 'Back-end FrameWorks',
  contents: ['SpringBoot', 'Spring',],
  },
  {title: 'IDEs',
  contents: ['IntelliJ', 'VS Code', 'Eclipse', 'PyCharm', 'CLion'],
  },
  {title: 'Agile Collaborative Tools',
  contents: ['MS Teams', 'Slack'],
  },
  {title: 'Version Control',
  contents: ['Git'],
  },
  {title: 'Front-End Development',
  contents: ['React', 'HTML', 'CSS'],
  },
  {title: 'Server/Content Hosting',
  contents: ['Vercel', 'Amazon Web Services'],}
]
};

export const selectedSkillReducer = (selectedSkill = null, action) => {
if(action.type === 'SKILL_SELECTED'){
  return action.payload;
}
return selectedSkill;
};