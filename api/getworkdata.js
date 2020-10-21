const router = require("express").Router();
const { sql } = require("../database");


router.get("/", async(req, res) => {
    try {
        const u_id = req.session.user.u_id;
        const data = await sql `
        SELECT w.*, u.u_email 
        FROM work w
        RIGHT JOIN user u
        ON u.u_id = w.u_id
        WHERE u.u_id = ${u_id}`;
        return res.json(data);
    } catch (err) {
        console.error(err);
        return res.sendStatus(500);
    }
});

module.exports = router;