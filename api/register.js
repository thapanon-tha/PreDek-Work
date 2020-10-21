const router = require("express").Router();
const { sql } = require("../database");
const bcrypt = require('bcrypt')

router.post("/", async(req, res) => {
    try {
        /* Edit you SQL below */
        let password = req.body.password;
        let email = req.body.email;
        let role = req.body.role;
        if (role === 'Pre-Dek') role = 'pre-dek'
        else role = 'work'
        const hashPassword = bcrypt.hashSync(password, 10)
        const emailInbase = await sql `SELECT u_email FROM user WHERE u_email = ${email}`;
        if (emailInbase[0] === undefined) {
            await sql `INSERT INTO user (u_email, u_password, u_role) 
                VALUES (${email},${hashPassword},${role} )`;
            const user_data = await sql `SELECT * FROM user WHERE u_email = ${email}`;
            req.session.user = user_data[0];
            res.sendStatus(200);
        } else { res.sendStatus(500); }
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
});

module.exports = router;