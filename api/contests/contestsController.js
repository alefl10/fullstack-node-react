import data from '../../tests/testData.json';

const contestsObj = data.contests.reduce((obj, contest) => {
  obj[contest.id] = contest;
  return obj;
}, {});

exports.get = (req, res) => {
  const contests = contestsObj;
  res.send({
    contests,
  });
};
