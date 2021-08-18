import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

const Skills = ( {skill} ) => {
  if(!skill){
    return <div>Select a Link</div>;
  }
  return (
    <div  className = "ui blue label">
      <h1>{skill.title}:</h1> 
      <h2>
        {skill.contents.join(', ')}
      </h2>
      <Link to= "/Skills">Back To Skills</Link>
    </div>
    );
}

const mapStateToProps = (state) => {
  return {skill: state.selectedSkill};
}

export default connect(mapStateToProps)(Skills);