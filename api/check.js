const router = require("express").Router();
const { sql } = require("../database");

const isLoggedIn = (req, res, next) => {
    // console.log("User is :" + req.session.user)
    if (!req.session.user) {
        return res.sendStatus(401)
    }
    next()
}

router.post("/", isLoggedIn, (req, res) => {
    return res.json(req.session.user)
});

module.exports = router;