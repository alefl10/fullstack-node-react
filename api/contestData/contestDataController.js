const contestData = require('./contestDataModel');

const reduceContest = (contest) => {
  return (
    {
      id: contest.id,
      categoryName: contest.categoryName,
      contestName: contest.contestName,
    }
  );
};

exports.params = (req, res, next, id) => {
  contestData.findOne({ id: Number(id) })
    .then((contest) => {
      if (contest === undefined || contest === null) {
        next(new Error('No contest with that id'));
      } else {
        req.contest = contest;
        next();
      }
    })
    .catch((err) => {
      next(err);
    });
};

exports.getOne = (req, res) => {
  const {
    contest,
  } = req;
  res.json(contest);
};

exports.get = (req, res, next) => {
  const contestsObj = {};
  contestData.find({})
    .then((contests) => {
      contests.forEach((contest) => {
        const reducedContest = reduceContest({ contest });
        contestsObj[contest.id] = reducedContest;
      });
      res.send(contestsObj);
    })
    .catch((err) => {
      next(err);
    });
};