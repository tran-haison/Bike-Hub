const jwt = require('jsonwebtoken');

const SECRET_KEY = 'sample-key-secret';

const generateToken = (payload) => {
    const options = {
        expiresIn: '1h', // Token expiration time
    };

    const token = jwt.sign(payload, SECRET_KEY, options);
    return token;
};

const authenticateJWT = (req, res, next) => {
    // The token is stored in cookies
    const token = req.cookies.token;

    if (token) {
        jwt.verify(token, SECRET_KEY, (err, payload) => {
            if (err) {
                return res.redirect('/login');
            }

            // Assign user to request object
            req.user = payload;
            next();
        });
    } else {
        res.redirect('/login');
    }
};

module.exports = {
    generateToken,
    authenticateJWT
};