const router = require("express").Router();
const { sql } = require("../database");

router.post("/", async(req, res) => {
    try {
        let work_id = req.body.work_id;
        let u_id = req.body.u_id;
        console.log(work_id + "    " + u_id)
        await sql `
            INSERT INTO invite (u_id, work_id) VALUES (${u_id}, ${work_id})
            `;
        res.status(200)
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
});

module.exports = router;