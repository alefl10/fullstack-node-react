const router = require('express').Router();
const controller = require('./contestController');

router.param('id', controller.params);

router.route('/:id')
  .get(controller.getOne);

module.exports = router;
