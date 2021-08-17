import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
  <div className = "ui secondary pointing menu">
    <Link to="/" className= "item">
      Darren's CV
    </Link>
    <div className = "right menu">
      <Link to="/" className="item">
        Return to CV 
      </Link>
    </div>
  </div>
  );
};

export default Header;