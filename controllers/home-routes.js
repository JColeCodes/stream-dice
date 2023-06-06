const router = require('express').Router();

require('dotenv').config();

router.get(('/'), (req, res) => {
    res.render('login');
});

router.route('/dice').get((req, res) => {
    res.render('dice', { loggedIn: false, candyland: true });
});

router.route('/' + process.env.SECRET_CODE).get((req, res) => {
    res.render('dice', { loggedIn: true, candyland: true });
});

router.route('/life').get((req, res) => {
    res.render('life', { loggedIn: false, life: true });
});

router.route('/' + process.env.LIFE_CODE).get((req, res) => {
    res.render('life', { loggedIn: true, life: true });
});

router.get('*', (req, res) => {
    res.redirect('/');
});

module.exports = router;