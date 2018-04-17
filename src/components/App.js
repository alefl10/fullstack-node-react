import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import ContestList from './ContestList';
import Contest from './Contest';
import * as api from '../js/api'; // Import everything from api

const pushState = (obj, url) =>
  window.history.pushState(obj, '', url);

const onPopState = (handler) => {
  window.onpopstate = handler;
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.initialData;
    this.fetchContest = this.fetchContest.bind(this);
    this.fetchContestList = this.fetchContestList.bind(this);
    this.fetchNames = this.fetchNames.bind(this);
    this.lookupName = this.lookupName.bind(this);
  }

  componentDidMount() {
    onPopState((event) => {
      this.setState({
        currentContestId: (event.state || {}).currentContestId,
      });
    });
  }

  componentWillUnmount() {
    onPopState(null);
  }

  fetchContest(contestId) {
    pushState({
      currentContestId: contestId,
    }, `/contest/${contestId}`);

    api.fetchContest(contestId)
      .then((contest) => {
        this.setState({
          currentContestId: contest._id,
          contests: {
            ...this.state.contests,
            [contest._id]: contest,
          },
        });
      });
  }

  fetchContestList() {
    pushState({
      currentContestId: undefined,
    }, '/');
    api.fetchContestList()
      .then((contests) => {
        this.setState({
          currentContestId: undefined,
          contests,
        });
      });
  }

  fetchNames(nameIds) {
    if (nameIds.length === 0) {
      return;
    }
    api.fetchNames(nameIds)
      .then((names) => {
        this.setState({
          names,
        });
      });
  }

  lookupName(nameId) {
    if (!this.state.names || !this.state.names[nameId]) {
      return ({
        name: '...',
      });
    }
    return this.state.names[nameId];
  }

  pageHeader() {
    if (this.state.currentContestId) {
      return this.currentContest().contestName;
    }
    return 'Naming Contest';
  }

  currentContest() {
    return this.state.contests[this.state.currentContestId];
  }

  currentContent() {
    if (this.state.currentContestId) {
      return (
        <Contest
          contestListClick={this.fetchContestList}
          fetchNames={this.fetchNames}
          lookupName={this.lookupName}
          {...this.currentContest()}
        />
      );
    }
    return (
      <ContestList
        onContestClick={this.fetchContest}
        contests={this.state.contests}
      />
    );
  }

  render() {
    return (
      <div className="App">
        <Header message={this.pageHeader()} />
        {this.currentContent()}
      </div>
    );
  }
}

App.propTypes = {
  initialData: PropTypes.shape({
    contests: PropTypes.shape({
      contestId: PropTypes.shape({
        id: PropTypes.number.isRequired,
        categoryName: PropTypes.string.isRequired,
        contestName: PropTypes.string.isRequired,
      }),
    }),
  }).isRequired,
};

export default App;
