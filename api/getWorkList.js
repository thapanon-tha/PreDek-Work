const router = require("express").Router();
const { sql } = require("../database");
const { json } = require("express");

router.get("/", async(req, res) => {
    try {

        const u_id = req.session.user.u_id;
        // const u_id = 4;
        let temp = [];
        const date = +new Date();
        console.log(date);
        const result2 = await
        sql `SELECT wl.* FROM work_list wl ,work w WHERE wl.com_id = w.com_id AND w.u_id = ${u_id} AND ${date}<interviewDay`;
        console.log(result2.length)

        for (count = 0; count < result2.length; count++) {
            result = await sql `
            SELECT sq.skill_id ,s.skill_name,sq.work_id FROM skill_req sq
            RIGHT JOIN skill s
            ON sq.skill_id = s.skill_id
            WHERE work_id = ${result2[count].work_id} ;
         `


            temp.push(result);
        }







        res.json({ worklist: result2, skill_req: temp });
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
});

module.exports = router;