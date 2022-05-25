const router = require('express').Router();
const homeRoutes = require('./home-routes.js');

router.use('/', homeRoutes); // Routes for public files and pages

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;