import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import ContestList from './ContestList';
import Contest from './Contest';

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
      currentContestId: contestId,
    }, `/contest/${contestId}`);

    this.setState({
      pageHeader: this.state.contests[contestId].contestName,
      currentContestId: contestId,
    });
  }

  currentContest() {
    if (this.state.currentContestId) {
      return <Contest {...this.state.contests[this.state.currentContestId]} />;
    }
    return <ContestList onContestClick={this.fetchContest} contests={this.state.contests} />;
  }

  render() {
    return (
      <div className="App">
        <Header message={this.state.pageHeader} />
        {this.currentContest()}
      </div>
    );
  }
}

App.defaultProps = {
  initialContests: {},
};

App.propTypes = {
  initialContests: PropTypes.shape({
    contestId: PropTypes.shape({
      id: PropTypes.number.isRequired,
      categoryName: PropTypes.string.isRequired,
      contestName: PropTypes.string.isRequired,
    }),
  }),
};

export default App;
