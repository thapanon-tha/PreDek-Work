const router = require("express").Router();
const { sql } = require("../database");
const { json } = require("express");

router.get("/", async(req, res) => {
    try {

        const u_id = req.session.user.u_id;
        // const u_id = 3;
        let temp = [];
        const date = +new Date();
        const result2 = await
        sql `SELECT 
        i.work_id,
        w.com_name,
        w.com_address,
        w.com_phone,
        w.imgName,
        w.fname,
        w.lname,
        wl.time,
        wl.workname,
        wl.countmax,
        wl.price,
        wl.timework,
        wl.freeday,
        wl.agemax,
        wl.agemin,
        wl.sex,
        wl.eLevel,
        wl.interviewDay,
        u.u_email
    FROM invite i 
    RIGHT JOIN work_list wl 
    ON wl.work_id = i.work_id 
    RIGHT JOIN work w 
    ON wl.com_id = w.com_id 
    RIGHT JOIN user u 
    ON w.u_id = u.u_id
    WHERE i.u_id = ${u_id} AND ${date}<wl.interviewDay`;

        for (count = 0; count < result2.length; count++) {
            result = await sql `
            SELECT sq.skill_id ,s.skill_name FROM skill_req sq
            RIGHT JOIN skill s
            ON sq.skill_id = s.skill_id
            WHERE work_id = ${result2[count].work_id} 
            GROUP BY skill_id
            ;
         `
            temp.push(result);
        }
        res.json({ Detail: result2, skillList: temp });
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
});

module.exports = router;