import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectEducation } from '../../actions';
import { Link } from 'react-router-dom';

class EducationList extends Component{
  renderList(){
    return this.props.educations.map((education) => {
      return (
        <div className = "ui center aligned container">
          <h1>
            <Link 
            to= '/education/details'
            onClick = {() => this.props.selectEducation(education)}
            >
              {education.schoolName}
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
  return {educations: state.educations};
}

export default connect(mapStateToProps, {selectEducation} )(EducationList);


