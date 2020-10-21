const router = require("express").Router();
const { sql } = require("../database");

router.post("/", async(req, res) => {
    try {

        let fname = req.body.fname;
        let lname = req.body.lname;
        let com_address = req.body.com_address;
        let com_name = req.body.com_name;
        let com_phone = req.body.com_phone;
        console.log(fname)
        console.log(lname)
        console.log(com_name)
        console.log(com_phone)
        console.log(com_address)
        console.log(req.session.user.u_id)
            ////////////////////////////////       add user detail      /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        await sql `INSERT INTO 
        work  (com_name, com_address, com_phone, fname, lname, u_id) 
        VALUES (${com_name}, ${com_address}, ${com_phone}, ${fname}, ${lname},${req.session.user.u_id})`;

        ////////////////////////////////////////update status//////////////////////////////////////////////////////////////////////////////////////////
        await sql `UPDATE user
                SET activate_status = "success"
                WHERE u_id = ${req.session.user.u_id}`;

        req.session.user.activate_status = "success";
        res.sendStatus(200);
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
});

module.exports = router;