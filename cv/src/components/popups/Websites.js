import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

const Websites = ( {website} ) => {
  if(!website){
    return <div>Select a Link</div>;
  }
  return (
    <div  className = "ui blue label">
      <h1>{website.title}:</h1> 
      <h2>
        <a className = "link" href= {website.link}>Click Me</a>
      </h2>
      <Link to= "/Websites">Back To Websites</Link>
    </div>
    );
}

const mapStateToProps = (state) => {
  return {website: state.selectedWebsite};
}

export default connect(mapStateToProps)(Websites);