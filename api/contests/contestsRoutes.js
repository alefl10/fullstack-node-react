const router = require('express').Router();
const controller = require('./contestsController');

router.route('/')
  .get(controller.get);

module.exports = router;
