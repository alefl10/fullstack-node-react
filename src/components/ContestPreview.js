import React from 'react';

const ContestPreview = ({ categoryName, contestName }) => (
  <div className="ContestPreview">
    <div className="category-name">
      {categoryName}
    </div>
    <div className="contetst-name">
      {contestName}
    </div>
  </div>
);

export default ContestPreview;
