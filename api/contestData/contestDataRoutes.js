const router = require('express').Router();
const controller = require('./contestDataController');

router.param('id', controller.params);

router.route('/')
  .get(controller.get);

router.route('/:id')
  .get(controller.getOne);

module.exports = router;
