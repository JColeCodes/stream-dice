const jwt = require('jsonwebtoken');

require('dotenv').config();

const secret = process.env.secretjwt;
const expiration = '24h';

module.exports = {
    signToken: function({ secretCode }) {
        const payload = { secretCode };
        return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    }
}