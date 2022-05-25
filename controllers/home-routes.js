const router = require('express').Router();

require('dotenv').config();

router.get(('/'), (req, res) => {
    res.render('login');
});

router.route('/dice').get((req, res) => {
    res.render('dice', { loggedIn: false });
});

router.route('/' + process.env.SECRET_CODE).get((req, res) => {
    res.render('dice', { loggedIn: true });
});

router.get('*', (req, res) => {
    res.redirect('/');
});

module.exports = router;