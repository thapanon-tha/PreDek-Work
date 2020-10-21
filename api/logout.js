const router = require("express").Router();

router.get("/", async(req, res) => {
    req.session.destroy((err) => {
        return res.sendStatus(200)
    })
});

module.exports = router;