const namesModel = require('./nameModel');

exports.params = (req, res, next, ids) => {
  const nameIdsObj = {};
  const nameIds = ids.split(',').map(Number);
  nameIds.forEach((nameId, index) => {
    namesModel.findOne({ id: Number(nameId) })
      .then((name) => {
        if (name === undefined || name === null) {
          next(new Error('No name with that id'));
        } else {
          nameIdsObj[nameId] = name;
          if (index === 0) {
            req.nameIds = nameIdsObj;
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
    nameIds,
  } = req;
  res.send({ nameIds });
};
