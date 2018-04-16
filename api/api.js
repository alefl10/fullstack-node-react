const router = require('express').Router();
const contestData = require('./contestData/contestDataRoutes');
const names = require('./name/nameRoutes');

router.use('/contestData', contestData);
router.use('/names', names);

module.exports = router;
