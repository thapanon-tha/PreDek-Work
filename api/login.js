const router = require("express").Router();
const { sql } = require("../database");
const bcrypt = require('bcrypt')

router.post("/", async(req, res) => {
    try {
        /* Edit you SQL below */
        let email = req.body.email;
        let password = req.body.password;
        const base_email = await sql `SELECT * FROM user WHERE u_email = ${email}`;
        // console.log("Database : " + JSON.stringify(base_email));
        /*console.log("email : " + email + "password : " + password);*/
        if (email === base_email[0].u_email) {
            const passCheck = bcrypt.compareSync(password, base_email[0].u_password)
            const result = base_email[0];
            if (passCheck) {
                req.session.user = result;
                // console.log(req.user);
                console.log(result)
                return res.json(result);
            } else {
                return res.sendStatus(500);
            }
        }
    } catch (err) {
        console.error(err);
        return res.sendStatus(500);
    }
});

module.exports = router;