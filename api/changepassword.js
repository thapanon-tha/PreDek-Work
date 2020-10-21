const router = require("express").Router();
const { sql } = require("../database");
const bcrypt = require('bcrypt')

router.post("/", async(req, res) => {
    try {
        /* Edit you SQL below */
        let newpass = req.body.newpass;
        let cpass = req.body.cpass;
        const passCheck = bcrypt.compareSync(cpass, req.session.user.u_password)

        if (passCheck) {
            const hashPassword = bcrypt.hashSync(newpass, 10)
            console.log("ggogo")
            await sql `
                UPDATE user
                SET u_password = ${hashPassword}
                WHERE u_id=${req.session.user.u_id};
            `
            req.session.user.u_password = hashPassword;
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