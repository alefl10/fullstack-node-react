import data from '../../tests/testData.json';

exports.get = (req, res) => {
  res.json({ contests: data.contests });
};
