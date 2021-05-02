const jwt = require('jsonwebtoken');

ROLES = {
    'ADMIN': "admin",
    'PC': "coordinator",
    'STUDENT': "student"
}

PERMISSIONS = {
    'LOW': new Set([ROLES.STUDENT, ROLES.PC, ROLES.ADMIN]),
    'MED': new Set([ROLES.PC, ROLES.ADMIN]),
    'HIGH': new Set([ROLES.ADMIN])
}

function authUser(permission) {
    return (req, res, next) => {
        const token = req.cookies.jwt;
        if (token == null) return res.status(403).json({ message: "Not Authorised" });

        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, account) => {
            if (err) return res.status(403).send({ message: err.message });
            if (!permission.has(account.role)) return res.status(401).json({ message: "You do not have permissions" });
            next();
        });
    }
}

module.exports = {
    authUser,
    PERMISSIONS,
    ROLES,
};