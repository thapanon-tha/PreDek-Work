const router = require("express").Router();
const { sql } = require("../database");
const bcrypt = require('bcrypt')

router.post("/status", async(req, res) => {
    try {
        /* Edit you SQL below */
        let Status = req.body.Status;
        let cpass = req.body.cpass;
        const passCheck = bcrypt.compareSync(cpass, req.session.user.u_password)
        if (passCheck) {
            await sql `
                UPDATE predekdetail
                SET status = ${Status}
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


router.post("/nationality", async(req, res) => {
    try {
        /* Edit you SQL below */
        let nationality = req.body.Nationality;
        let cpass = req.body.cpass;
        const passCheck = bcrypt.compareSync(cpass, req.session.user.u_password)
        if (passCheck) {
            await sql `
                UPDATE predekdetail
                SET nationality = ${nationality}
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

router.post("/race", async(req, res) => {
    try {
        /* Edit you SQL below */
        let race = req.body.Race;
        let cpass = req.body.cpass;
        const passCheck = bcrypt.compareSync(cpass, req.session.user.u_password)
        if (passCheck) {
            await sql `
                UPDATE predekdetail
                SET race = ${race}
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

router.post("/religion", async(req, res) => {
    try {
        /* Edit you SQL below */
        let Religion = req.body.Religion;
        let cpass = req.body.cpass;
        const passCheck = bcrypt.compareSync(cpass, req.session.user.u_password)
        if (passCheck) {
            await sql `
                UPDATE predekdetail
                SET religion = ${Religion}
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

router.post("/elevel", async(req, res) => {
    try {
        /* Edit you SQL below */
        let eLevel = req.body.eLevel;
        let cpass = req.body.cpass;
        const passCheck = bcrypt.compareSync(cpass, req.session.user.u_password)
        if (passCheck) {
            await sql `
                UPDATE predekdetail
                SET eLevel = ${eLevel}
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

router.post("/univercity", async(req, res) => {
    try {
        /* Edit you SQL below */
        let Univercity = req.body.Univercity;
        let cpass = req.body.cpass;
        const passCheck = bcrypt.compareSync(cpass, req.session.user.u_password)
        if (passCheck) {
            await sql `
                UPDATE predekdetail
                SET University   = ${Univercity}
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

router.post("/address", async(req, res) => {
    try {
        /* Edit you SQL below */
        let address = req.body.Address;
        let cpass = req.body.cpass;
        const passCheck = bcrypt.compareSync(cpass, req.session.user.u_password)
        if (passCheck) {
            console.log("55555555555555555555555")
            await sql `
                UPDATE predekdetail
                SET address = ${address}
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



router.post("/department", async(req, res) => {
    try {
        /* Edit you SQL below */
        let Department = req.body.Department;
        let cpass = req.body.cpass;
        const passCheck = bcrypt.compareSync(cpass, req.session.user.u_password)
        if (passCheck) {
            await sql `
                UPDATE predekdetail
                SET Department   = ${Department}
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

router.post("/faculty", async(req, res) => {
    try {
        /* Edit you SQL below */
        let Faculty = req.body.Faculty;
        let cpass = req.body.cpass;
        const passCheck = bcrypt.compareSync(cpass, req.session.user.u_password)
        if (passCheck) {
            await sql `
                UPDATE predekdetail
                SET Faculty   = ${Faculty}
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

router.post("/GPAX", async(req, res) => {
    try {
        /* Edit you SQL below */
        let GPAX = req.body.GPAX;
        let cpass = req.body.cpass;
        const passCheck = bcrypt.compareSync(cpass, req.session.user.u_password)
        if (passCheck) {
            await sql `
                UPDATE predekdetail
                SET GPAX   = ${GPAX}
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

router.post("/phone", async(req, res) => {
    try {
        /* Edit you SQL below */
        let phone = req.body.phone;
        let cpass = req.body.cpass;
        const passCheck = bcrypt.compareSync(cpass, req.session.user.u_password)
        if (passCheck) {
            await sql `
                UPDATE predekdetail
                SET phone   = ${phone}
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

router.post("/email", async(req, res) => {
    try {
        /* Edit you SQL below */
        let email = req.body.email;
        let cpass = req.body.cpass;
        const passCheck = bcrypt.compareSync(cpass, req.session.user.u_password)
        if (passCheck) {
            await sql `
                UPDATE user
                SET u_email   = ${email}
                WHERE u_id = ${req.session.user.u_id};
            `
            req.session.user.u_email = email;
            return res.sendStatus(200);
        } else {
            return res.sendStatus(500);
        }
    } catch (err) {
        console.error(err);
        return res.sendStatus(500);
    }
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


router.post("/comphone", async(req, res) => {
    try {
        /* Edit you SQL below */
        let phone = req.body.phone;
        let cpass = req.body.cpass;
        const passCheck = bcrypt.compareSync(cpass, req.session.user.u_password)
        if (passCheck) {
            await sql `
                UPDATE work
                SET com_phone   = ${phone}
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

router.post("/comaddress", async(req, res) => {
    try {
        /* Edit you SQL below */
        let address = req.body.Address;
        let cpass = req.body.cpass;
        const passCheck = bcrypt.compareSync(cpass, req.session.user.u_password)
        if (passCheck) {
            console.log("55555555555555555555555")
            await sql `
                UPDATE work
                SET com_address = ${address}
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

router.post("/comname", async(req, res) => {
    try {
        /* Edit you SQL below */
        let Name = req.body.Name;
        let cpass = req.body.cpass;
        const passCheck = bcrypt.compareSync(cpass, req.session.user.u_password)
        if (passCheck) {
            await sql `
                UPDATE work
                SET com_name = ${Name}
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