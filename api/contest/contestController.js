import serverRender from '../../src/js/serverRender';

const contestData = require('../contestData/contestDataModel');

exports.params = (req, res, next, id) => {
  contestData.findOne({ id: Number(id) })
    .then((contest) => {
      if (contest === undefined || contest === null) {
        next(new Error('No contest with that id'));
      } else {
        req.id = id;
        next();
      }
    })
    .catch((err) => {
      next(err);
    });
};

exports.getOne = (req, res, next) => {
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
      next(err);
    });
};
