import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import Template from './Template';
import EducationList from './popups/EducationList';
import Education from './popups/Education';

const App = () => {
  return (
  <div className = "ui container">
    <BrowserRouter>
      <div>
        <Header />
        <Route path="/" exact component = {Template} />
        <Route path="/education" exact component = {EducationList}/>
        <Route path="/education/details" exact component = {Education}/>
      </div>
    </BrowserRouter>
  </div>
  );
};

export default App;