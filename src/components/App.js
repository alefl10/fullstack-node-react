import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import ContestList from './ContestList';

const pushState = (obj, url) => {
  window.history.pushState(obj, '', url);
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageHeader: 'Naming Contest',
      contests: this.props.initialContests,
    };
    this.fetchContest = this.fetchContest.bind(this);
  }
  componentDidMount() {
  }
  componentWillUnmount() {
    // clean timers, listeners
  }
  fetchContest(contestId) {
    pushState({
      currentContest: contestId,
    }, `/contest/${contestId}`);
  }

  render() {
    return (
      <div className="App">
        <Header message={this.state.pageHeader} />
        <ContestList onContestClick={this.fetchContest}contests={this.state.contests} />
      </div>
    );
  }
}

App.propTypes = {
  initialContests: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    categoryName: PropTypes.string.isRequired,
    contestName: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};

export default App;
