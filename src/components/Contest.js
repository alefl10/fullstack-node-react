import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contest extends Component {
  constructor(props) {
    super(props);
    this.nameInput = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    this.props.fetchNames(this.props.nameIds);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addName(this.nameInput.current.value, this.props._id);
    this.nameInput.current.value = '';
  }

  render() {
    return (
      <div className="Contest">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Contest Description</h3>
          </div>
          <div className="panel-body">
            <div className="contest-description">
              {this.props.description}
            </div>
          </div>
        </div>

        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Proposed Names</h3>
          </div>
          <div className="panel-body">
            <ul className="list-group">
              {this.props.nameIds.map(nameId =>
                <li key={nameId} className="list-group-item">{this.props.lookupName(nameId).name}</li>)}
            </ul>
          </div>
        </div>

        <div className="panel panel-info">
          <div className="panel-heading">
            <h3 className="panel-title">Propose a New Name</h3>
          </div>
          <div className="panel-body">
            <form onSubmit={this.handleSubmit}>
              <div className="input-group">
                <input type="text" placeholder="New Name Here..." ref={this.nameInput} className="form-control" />
                <span className="input-group-btn">
                  <button type="submit" className="btn btn-success">Sumbit</button>
                </span>
              </div>
            </form>
          </div>
        </div>
        <button type="button" className="home-link btn btn-primary" onClick={this.props.contestListClick}>Contact List</button>
      </div>
    );
  }
}

Contest.propTypes = {
  _id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  contestListClick: PropTypes.func.isRequired,
  fetchNames: PropTypes.func.isRequired,
  nameIds: PropTypes.arrayOf(PropTypes.string).isRequired,
  lookupName: PropTypes.func.isRequired,
  addName: PropTypes.func.isRequired,
};

export default Contest;
