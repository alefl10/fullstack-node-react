import { ObjectID } from 'mongodb';

const namesModel = require('./nameModel');

const verifyIds = (ids) => {
  const nameIds = ids.split(',').map(String);
  let validIds = true;
  nameIds.forEach((id) => {
    if (id.length !== 24) {
      validIds = false;
    }
  });
  return validIds;
};

exports.params = (req, res, next, ids) => {
  if (!verifyIds(ids)) {
    next('Invalid id or list of ids');
  } else {
    const nameIdsObj = {};
    const nameIds = ids.split(',').map(ObjectID);
    const {
      length,
    } = nameIds;
    let counter = 0;
    nameIds.forEach((nameId) => {
      namesModel.findById(nameId)
        .then((name) => {
          if (name === undefined || name === null) {
            next('No name with that id');
          } else {
            nameIdsObj[name._id] = name;
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
  }
};

exports.get = (req, res) => {
  const {
    names,
  } = req;
  res.send({ names });
};
