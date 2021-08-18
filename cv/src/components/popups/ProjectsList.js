import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectProject } from '../../actions';
import { Link } from 'react-router-dom';

class ProjectList extends Component{
  renderList(){
    return this.props.projects.map((project) => {
      return (
        <div className = "ui center aligned container">
          <h1>
            <Link 
            to= '/projects/details'
            onClick = {() => this.props.selectProject(project)}>
              {project.name}
            </Link>
          </h1>
        </div>
      );
    });
  }

  render(){
    return <div className = "ui divided list">{this.renderList()}</div>
  }
}

const mapStateToProps = (state) => {
  return {projects: state.projects};
}

export default connect(mapStateToProps, {selectProject} )(ProjectList);


