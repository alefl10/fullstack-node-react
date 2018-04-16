import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contest extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Contest">
        <div className="contest-description">
          {this.props.description}
        </div>
        <button type="button" className="home-link btn btn-primary" onClick={this.props.contestListClick}>Contact List</button>
      </div>
    );
  }
}

Contest.propTypes = {
  description: PropTypes.string.isRequired,
  contestListClick: PropTypes.func.isRequired,
};

export default Contest;
