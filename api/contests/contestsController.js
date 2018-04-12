import data from '../../tests/testData.json';

const contestsObj = data.contests.reduce((obj, contest) => {
  obj[contest.id] = contest;
  return obj;
}, {});

exports.params = (req, res, next, id) => {
  const contest = contestsObj[id];
  if (contest === undefined || contest === null) {
    res.send(`No contest was found with id:${id}`);
  } else {
    console.log(contest);
    req.contest = contest;
    next();
  }
};

exports.getOne = (req, res) => {
  const {
    contest,
  } = req;
  contest.description = 'Alejandro Ferrero Ligorred Alejandro Ferrero Ligorred Alejandro Ferrero Ligorred Alejandro Ferrero Ligorred Alejandro Ferrero Ligorred Alejandro Ferrero Ligorred Alejandro Ferrero Ligorred Alejandro Ferrero Ligorred Alejandro Ferrero Ligorred Alejandro Ferrero Ligorred Alejandro Ferrero Ligorred Alejandro Ferrero Ligorred Alejandro Ferrero Ligorred Alejandro Ferrero Ligorred Alejandro Ferrero Ligorred Alejandro Ferrero Ligorred ';
  res.json(contest);
};

exports.get = (req, res) => {
  const contests = contestsObj;
  res.send({
    contests,
  });
};
