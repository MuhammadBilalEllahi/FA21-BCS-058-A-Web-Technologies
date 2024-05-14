async function checkSessionAuth(req, res, next) {
    if (!req.session.user) {
        req.flash("danger", "You need to login for this route");
        res.locals.authSession = null;
        return res.redirect("/api/user/login");
    } else {
        res.locals.authSession = req.session.user;
    }

    next();
}

module.exports = checkSessionAuth;