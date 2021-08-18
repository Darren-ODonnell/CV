import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectSkill } from '../../actions';
import { Link } from 'react-router-dom';

class SkillsList extends Component{
  renderList(){
    return this.props.skills.map((skill) => {
      return (
          <div className = "ui center aligned container">
            <h1>
              <Link 
              to= '/skills/details'
              onClick = {() => this.props.selectSkill(skill)}
              >
                {skill.title}
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
  return {skills: state.skills};
}

export default connect(mapStateToProps, {selectSkill} )(SkillsList);


