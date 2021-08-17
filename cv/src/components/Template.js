import React from 'react';
import { Link } from 'react-router-dom';



class Template extends React.Component{
  renderList(){
    return(
      <div>
      <Link to= "/Education">Education</Link><br />
      <Link to= "/Projects">Projects</Link><br />
      <Link to= "/Technologies">Technologies</Link><br />
      <Link to= "/Websites">Websites</Link>
      </div>
    );
  };
  
  render(){
    return <div className= "ui relaxed divided list large">{this.renderList()}</div>
  }
}

export default Template;