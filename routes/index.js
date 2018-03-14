const { Router } = require('express');
const router = Router();

router.use(require('./moviesRoute'));
router.use(require('./directorsRoute'));

module.exports = router;