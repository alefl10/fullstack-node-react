import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contest extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Contest"> {this.props.description} </div>
    );
  }
}

Contest.propTypes = {
  description: PropTypes.string.isRequired,
};

export default Contest;
