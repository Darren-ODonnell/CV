export const projectsReducer = () => {
  return [

  {name: 'Maze Game',
  description: 'The objective is to reach the end of the maze without hitting the walls or moving enemies',
  technologies: 'Java',
  repo: 'https://github.com/Darren-ODonnell/Maze-Game'  
  },
  {name: 'Piano Algorithm',
  description: 'The produces a controlled random melody using a midi-synth, which from my understanding of musical theory should sound reasonable with every new melody',
  technologies: 'Java',
  repo: 'https://github.com/Darren-ODonnell/Piano_Algorithm'  
  }, 
  ]
};

export const selectedProjectReducer = (selectedProject = null, action) => {
if(action.type === 'PROJECT_SELECTED'){
  return action.payload;
}
return selectedProject;
};