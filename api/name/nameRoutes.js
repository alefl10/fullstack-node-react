const router = require('express').Router();
const controller = require('./nameController');

router.param('ids', controller.params);

router.route('/:ids')
  .get(controller.get);

module.exports = router;
