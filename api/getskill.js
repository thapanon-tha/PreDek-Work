const router = require("express").Router();
const { sql } = require("../database");
const bcrypt = require('bcrypt')

router.get("/", async(req, res) => {
    try {
        const skill = await sql `SELECT * FROM skill `;
        return res.json(skill);
    } catch (err) {
        console.error(err);
        return res.sendStatus(500);
    }
});

module.exports = router;






router.get("/noskill", async(req, res) => {
    try {
        const skill = await sql `SELECT * FROM skill WHERE skill_id NOT IN (SELECT skill_id FROM user_skill WHERE u_id = ${req.session.user.u_id})`;
        return res.json(skill)
    } catch (err) {
        console.error(err);
        return res.sendStatus(500);
    }
});


router.post("/addSkill", async(req, res) => {
    try {
        let tags = req.body.tags;
        let cpass = req.body.cpass;

        const passCheck = bcrypt.compareSync(cpass, req.session.user.u_password)
        if (passCheck) {
            for (count = 0; count < tags.length; count++) {
                await sql `INSERT INTO user_skill (u_id, skill_id)
                        VALUES (${req.session.user.u_id},${tags[count].skill_id});
                            `
            }
            return res.sendStatus(200);
        } else {
            return res.sendStatus(500);
        }
    } catch (err) {
        console.error(err);
        return res.sendStatus(500);
    }
});