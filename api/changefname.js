const router = require("express").Router();
const { sql } = require("../database");
const bcrypt = require('bcrypt')

router.post("/", async(req, res) => {
    try {
        /* Edit you SQL below */
        let Fname = req.body.Fname;
        let cpass = req.body.cpass;
        const passCheck = bcrypt.compareSync(cpass, req.session.user.u_password)
        if (passCheck) {
            await sql `
                UPDATE predekdetail
                SET fname = ${Fname}
                WHERE u_id = ${req.session.user.u_id};
            `
            return res.sendStatus(200);
        } else {
            return res.sendStatus(500);
        }
    } catch (err) {
        console.error(err);
        return res.sendStatus(500);
    }
});

module.exports = router;