
export const educationsReducer = () => {
  return [
  {schoolName: 'St. Mac Dara\'s Community College',
  educationType: 'Leaving Certificate',
  gradeType: 'Points',
  grade: '445'},
  {schoolName: 'Technological University of Dublin',
  educationType: 'Bacholers of Science - Business Computing',
  gradeType: 'GPA',
  grade: '82%'},
  ]
};

export const selectedEducationReducer = (selectedEducation = null, action) => {
if(action.type === 'EDUCATION_SELECTED'){
  return action.payload;
}
return selectedEducation;
};