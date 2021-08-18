import React from 'react';
import { Link } from 'react-router-dom';

class Template extends React.Component{
  renderList(){
    return(
      <div>
      <Link to= "/education">Education</Link><br />
      <Link to= "/projects">Projects</Link><br />
      <Link to= "/skills">Skills</Link><br />
      <Link to= "/websites">Websites</Link>
      </div>
    );
  };
  
  render(){
    return <div className= "ui relaxed divided list large">{this.renderList()}</div>
  }
}

export default Template;