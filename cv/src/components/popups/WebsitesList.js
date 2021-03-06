import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectWebsite } from '../../actions';
import { Link } from 'react-router-dom';

class WebsiteList extends Component{
  renderList(){
    return this.props.websites.map((website) => {
      return (
          <div className = "ui center aligned container">
            <h1>
              <Link 
              to= '/websites/details'
              onClick = {() => this.props.selectWebsite(website)}
              >
                {website.title}
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
  return {websites: state.websites};
}

export default connect(mapStateToProps, {selectWebsite} )(WebsiteList);


