const router = require("express").Router();
const { sql } = require("../database");


router.get("/", async(req, res) => {
    try {
        const u_id = req.session.user.u_id;

        const data = await sql `SELECT pd.*, u.u_email FROM predekdetail pd
        RIGHT JOIN user u
        ON u.u_id = pd.u_id
        WHERE u.u_id = ${u_id}`;
        const skill = await sql `SELECT s.skill_id ,s.skill_name FROM user_skill us
        RIGHT JOIN skill s
        ON us.skill_id = s.skill_id
        WHERE us.u_id = ${u_id}`;
        return res.json({ PreData: data, Preskill: skill });
    } catch (err) {
        console.error(err);
        return res.sendStatus(500);
    }
});

module.exports = router;