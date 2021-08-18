import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import Template from './Template';
import EducationList from './popups/EducationList';
import Education from './popups/Education';
import ProjectsList from './popups/ProjectsList';
import Project from './popups/Project';
import Skills from './popups/Skills';
import SkillsList from './popups/SkillsList';
import WebsitesList from './popups/WebsitesList';
import Websites from './popups/Websites';

const App = () => {
  return (
  <div className = "ui container">
    <BrowserRouter>
      <div>
        <Header />
        <Route path="/" exact component = {Template} />
        <Route path="/education" exact component = {EducationList}/>
        <Route path="/education/details" exact component = {Education}/>
        <Route path="/projects" exact component = {ProjectsList}/>
        <Route path="/projects/details" exact component = {Project}/>
        <Route path="/skills" exact component = {SkillsList}/>
        <Route path="/skills/details" exact component = {Skills}/>
        <Route path="/websites" exact component = {WebsitesList}/>
        <Route path="/websites/details" exact component = {Websites}/>
      </div>
    </BrowserRouter>
  </div>
  );
};

export default App;