const router = require('express').Router();
const { login } = require('./user-controller');

router.get(('/'), (req, res) => {
    res.render('login');
});

router.post('/api/login', login);

router.route('/dice').get((req, res) => {
    res.render('dice');
});

router.get('*', (req, res) => {
    res.redirect('/');
});

module.exports = router;