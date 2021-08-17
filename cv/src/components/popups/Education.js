import React from 'react';
import {connect} from 'react-redux';

const Education = ( {education} ) => {
  if(!education){
    return <div>Select a Link</div>;
  }
  return (
    <div>
      <p>
        <b>School Name: {education.schoolName}</b>
        <br />
        Education Type: {education.educationType}
        <br />
        Grade Type: {education.gradeType}
        <br />
        <i>Grade: {education.grade}</i>
      </p>
    </div>
    );
}

const mapStateToProps = (state) => {
  return {education: state.selectedEducation};
}

export default connect(mapStateToProps)(Education);