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
          currentContestId: contest.id,
          contests: {
            ...this.state.contests,
            [contest.id]: contest,
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
      return <Contest contestListClick={this.fetchContestList} {...this.currentContest()} />;
    }
    return <ContestList onContestClick={this.fetchContest} contests={this.state.contests} />;
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
