import React from 'react';
import PropTypes from 'prop-types';
import ContestPreview from './ContestPreview';

const ContestList = ({ contests, onContestClick }) => (
  <div>
    {Object.keys(contests).map(contestId =>
      <ContestPreview key={contestId} onClick={onContestClick} {...contests[contestId]} />)
    }
  </div>
);

ContestList.propTypes = {
  contests: PropTypes.shape({
    contestId: PropTypes.shape({
      id: PropTypes.number.isRequired,
      categoryName: PropTypes.string.isRequired,
      contestName: PropTypes.string.isRequired,
    }),
  }).isRequired,
  onContestClick: PropTypes.func.isRequired,
};

export default ContestList;
