import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import './popups.css';

const Project = ( {project} ) => {
  if(!project){
    return <div>Select a Link</div>;
  }
  return (
    <div  className = "ui blue label">
      <h1>Project Name: {project.name}</h1>
        <h2>
          Project Description: {project.description}
          <br />
          Technologies: {project.technologies}
          <br />
          Link to Repo: <a className = "link" href= {project.repo}>Click Me</a>
        </h2>
      <Link to= "/projects">Back To Projects</Link>
    </div>
    );
}

const mapStateToProps = (state) => {
  return {project: state.selectedProject};
}

export default connect(mapStateToProps)(Project);