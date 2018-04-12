const router = require('express').Router();
const contestData = require('./contestData/contestDataRoutes');

router.use('/contestData', contestData);

module.exports = router;
