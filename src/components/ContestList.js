import React from 'react';
import PropTypes from 'prop-types';
import ContestPreview from './ContestPreview';


const ContestList = ({ contests }) => (
  <div>
    {contests.map(contest =>
      <ContestPreview key={contest.id} {...contest} />)
    }
  </div>
);

ContestList.propTypes = {
  contests: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    categoryName: PropTypes.string.isRequired,
    contestName: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};

export default ContestList;
