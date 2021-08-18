export const selectEducation = (education) => {
  return {
    type: 'EDUCATION_SELECTED',
    payload: education
  };
};

export const selectProject = (project) => {
  return {
    type: 'PROJECT_SELECTED',
    payload: project
  };
};

export const selectSkill = (skill) => {
  return {
    type: 'SKILL_SELECTED',
    payload: skill
  };
};

export const selectWebsite = (website) => {
  return {
    type: 'WEBSITE_SELECTED',
    payload: website
  };
};