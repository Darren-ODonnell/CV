import { combineReducers } from 'redux';
import { educationsReducer, selectedEducationReducer } from './EducationReducer';
import { projectsReducer, selectedProjectReducer } from './ProjectReducer';
import { skillsReducer, selectedSkillReducer } from './SkillsReducer';
import { websitesReducer, selectedWebsiteReducer} from './WebsiteReducer';


export default combineReducers({
  educations: educationsReducer,
  selectedEducation: selectedEducationReducer,
  projects: projectsReducer,
  selectedProject: selectedProjectReducer,
  skills: skillsReducer,
  selectedSkill: selectedSkillReducer,
  websites: websitesReducer,
  selectedWebsite: selectedWebsiteReducer
});

