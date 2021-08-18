import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

const Education = ( {education} ) => {
  if(!education){
    return <div>Select a Link</div>;
  }
  return (
    <div  className = "ui blue label">
      <h1>School Name: {education.schoolName}</h1>
        <h2>
          Education Type: {education.educationType}
          <br />
          Grade Type: {education.gradeType}
          <br />
          <i>Grade: {education.grade}</i>
        </h2>
      <Link to= "/education">Back To Education</Link>
    </div>
    );
}

const mapStateToProps = (state) => {
  return {education: state.selectedEducation};
}

export default connect(mapStateToProps)(Education);