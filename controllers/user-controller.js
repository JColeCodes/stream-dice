const { signToken } = require('../utils/auth');

require('dotenv').config();

module.exports = {
    async login({ body }, res) {
        const code = body.secretCode;
        if (code !== process.env.SECRET_CODE) {
            return res.status(400).json({ message: 'Submitted code is not valid' });
        }
        const token = signToken(code);
        res.json({ token, code });
    }
};