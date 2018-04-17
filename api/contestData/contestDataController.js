const contestData = require('./contestDataModel');

const reduceContest = (contest) => {
  return (
    {
      _id: contest._id,
      categoryName: contest.categoryName,
      contestName: contest.contestName,
    }
  );
};

exports.params = (req, res, next, id) => {
  contestData.findById(id)
    .then((contest) => {
      if (contest === undefined || contest === null) {
        next('No contest with that id');
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
  const contests = {};
  contestData.find({})
    .then((foundContests) => {
      foundContests.forEach((contest) => {
        const reducedContest = reduceContest(contest);
        contests[contest._id] = reducedContest;
      });
      res.send({ contests });
    })
    .catch((err) => {
      next(err);
    });
};
