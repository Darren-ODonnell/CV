export const selectEducation = (education) => {
  return {
    type: 'EDUCATION_SELECTED',
    payload: education
  };
};