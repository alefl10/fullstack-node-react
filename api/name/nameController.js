import { ObjectID } from 'mongodb';

const Name = require('./nameModel');
const Contest = require('../contestData/contestDataModel');

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
      Name.findById(nameId)
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

exports.post = (req, res, next) => {
  const {
    name,
    contestId,
  } = req.body;
  const newName = new Name({ name });
  newName.save()
    .then((saved) => {
      Contest.findById(contestId)
        .then((contest) => {
          if (contest === undefined || contest === null) {
            next('No contest with that id');
          } else {
            contest.nameIds.push(saved._id);
            contest.save()
              .then((updatedContest) => {
                res.send({
                  updatedContest,
                  newName: {
                    _id: saved._id,
                    name: saved.name,
                  },
                });
              })
              .catch((err) => {
                next(err);
              });
          }
        })
        .catch((err) => {
          next(err);
        });
    })
    .catch((err) => {
      next(err);
    });
};
