const router = require('express').Router();
const contests = require('./contests/contestsRoutes');

router.use('/contests', contests);

module.exports = router;
