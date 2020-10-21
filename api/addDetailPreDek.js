const router = require("express").Router();
const { sql } = require("../database");

router.post("/", async(req, res) => {







    try {
        let fname = req.body.fname;
        let lname = req.body.lname;
        let bDay = req.body.bDay;
        let status = req.body.status;
        let address = req.body.address;
        let phone = req.body.phone;
        let sex = req.body.sex;
        let nationality = req.body.nationality;
        let race = req.body.race;
        let religion = req.body.religion;
        let elevel = req.body.elevel;
        let Faculty = req.body.Faculty;
        let Department = req.body.Department;
        let University = req.body.University;
        let GPAX = parseFloat(req.body.GPAX);
        let tags = req.body.tags;
        // console.log(fname)
        // console.log(lname)
        // console.log(bDay)
        // console.log(status)
        // console.log(address)
        // console.log(phone)
        // console.log(sex)
        // console.log(nationality)
        // console.log(race)
        // console.log(religion)
        // console.log(elevel)
        // console.log(Faculty)
        // console.log(Department)
        // console.log(University)
        // console.log(GPAX)
        // console.log(tags)
        // console.log(req.session.user.u_id)
        ////////////////////////////////       add user detail      /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        await sql `INSERT INTO 
        predekdetail  (bday, fname, lname, status, nationality, race, religion, sex, phone, address, eLevel, Faculty, Department, GPAX, University, u_id) 
        VALUES (${bDay}, ${fname}, ${lname}, ${status}, ${nationality}, ${race}, ${religion}, ${sex}, ${phone}, ${address}, ${elevel}, ${Faculty}, ${Department}, ${GPAX}, ${University}, ${req.session.user.u_id})`;

        ////////////////////////////////       add user skill      /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        for (count = 0; count < tags.length; count++) {
            await sql `INSERT INTO user_skill (u_id, skill_id)
         VALUES (${req.session.user.u_id},${tags[count].skill_id});
         `
        }

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