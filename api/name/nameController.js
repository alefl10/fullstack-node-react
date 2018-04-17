const namesModel = require('./nameModel');

exports.params = (req, res, next, ids) => {
  const nameIdsObj = {};
  const nameIds = ids.split(',').map(Number);
  const {
    length,
  } = nameIds;
  let counter = 0;
  nameIds.forEach((nameId) => {
    namesModel.findOne({ id: Number(nameId) })
      .then((name) => {
        if (name === undefined || name === null) {
          next(new Error('No name with that id'));
        } else {
          nameIdsObj[nameId] = name;
          counter += 1;
          if (length === counter) {
            req.names = nameIdsObj;
            next();
          }
        }
      })
      .catch((err) => {
        next(err);
      });
  });
};

exports.get = (req, res) => {
  const {
    names,
  } = req;
  res.send({ names });
};
