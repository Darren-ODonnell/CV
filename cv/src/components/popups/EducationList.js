import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectEducation } from '../../actions';
import { Link } from 'react-router-dom';

class EducationList extends Component{
  renderList(){
    return this.props.educations.map((education) => {
      return (
        <div className="item" key={education.schoolName}>
          <div className="right floated content">
            <Link 
            to= '/education/details'
            onClick = {() => this.props.selectEducation(education)}
            >
              Select
            </Link>
          </div>
          <div className = "content"> {education.schoolName}</div>
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


