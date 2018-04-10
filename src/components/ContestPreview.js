import React from 'react';
import PropTypes from 'prop-types';

class ContestPreview extends React.Component {
  constructor(props) {
    super(props);
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.onClick(this.props.id);
  }
  render() {
    return (
      <div className="ContestPreview" onClick={this.handleClick}>
        <div className="category-name">
          {this.props.categoryName}
        </div>
        <div className="contetst-name">
          {this.props.contestName}
        </div>
      </div>
    );
  }
}

ContestPreview.propTypes = {
  id: PropTypes.number.isRequired,
  categoryName: PropTypes.string.isRequired,
  contestName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ContestPreview;
