import serverRender from '../../src/js/serverRender';
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
    // console.log(contest);
    req.id = id;
    next();
  }
};

exports.getOne = (req, res) => {
  const {
    id,
  } = req;
  serverRender(id)
    .then(({ initialData, initialMarkup }) => {
      res.render('index', {
        initialMarkup,
        initialData,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
