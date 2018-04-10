import React from 'react';
import PropTypes from 'prop-types';
import ContestPreview from './ContestPreview';


const ContestList = ({ contests, onContestClick }) => (
  <div>
    {contests.map(contest =>
      <ContestPreview key={contest.id} onClick={onContestClick} {...contest} />)
    }
  </div>
);

ContestList.propTypes = {
  contests: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    categoryName: PropTypes.string.isRequired,
    contestName: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  onContestClick: PropTypes.func.isRequired,
};

export default ContestList;
