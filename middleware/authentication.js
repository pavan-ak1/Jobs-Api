const User = require('../models/User');
const jwt = require('jsonwebtoken');
const { UnauthenticatedError } = require('../errors'); 

const auth = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: "Authentication invalid" });
    }

    const token = authHeader.split(' ')[1];

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        console.log(payload);

        req.user = { userId: payload.userId, name: payload.name };

        next(); 
    } catch (error) {
        return res.status(403).json({ error: "Authorization error" }); 
    }
};

module.exports = auth;
