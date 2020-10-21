const router = require("express").Router();
const { sql } = require("../database");


router.get("/", async(req, res) => {
    try {
        // const u_id = req.session.user.u_id;
        const data = await sql `
        SELECT  *
        FROM partner
        `;
        return res.json(data);
    } catch (err) {
        console.error(err);
        return res.sendStatus(500);
    }
});

module.exports = router;