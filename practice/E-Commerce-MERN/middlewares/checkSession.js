// async function checkSessionAuth(req, res, next) {
//     if (!req.session.user) {
//         req.flash("danger", "You need to login for this route");
//         // res.locals.authSession = null;
//         return res.redirect("/login");
//     } else {
//         // res.locals.authSession = req.session.user;
//     }

//     next();
// }

// module.exports = checkSessionAuth;


const jwt = require('jsonwebtoken');

async function checkSessionAuth(req, res, next) {

    if (req.session.user) {
        return next();
    }

    const token = req.headers['authorization']?.split(' ')[1];

    if (!token) {
        req.flash("danger", "You need to login for this route");

        return res.redirect("/login");
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        req.session.user = decoded;

        next();
    } catch (error) {
        console.error('Token verification failed:', error);
        req.flash("danger", "Invalid token. Please log in again.");
        return res.redirect("/login");
    }
}

module.exports = checkSessionAuth;
