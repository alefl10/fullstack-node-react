const router = require('express').Router();
const controller = require('./nameController');

router.param('ids', controller.params);

router.route('/')
  .post(controller.post);

router.route('/:ids')
  .get(controller.get);

module.exports = router;
