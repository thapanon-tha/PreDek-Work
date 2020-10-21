const router = require("express").Router();
const { sql } = require("../database");

router.post("/", async(req, res) => {
    try {
        const dateNow = new Date();
        let date_create = +new Date(dateNow);

        let elevel = req.body.elevel;
        let tags = req.body.tags;
        let sex = req.body.sex;
        let workname = req.body.workname;
        let time = req.body.time;
        let countmax = parseInt(req.body.countmax);
        let price = parseInt(req.body.price);
        let timework = req.body.timework;
        let freeday = req.body.freeday;
        let agemax = parseInt(req.body.agemax);
        let agemin = parseInt(req.body.agemin);
        let interviewDay = req.body.interviewDay;

        let com_id = await sql ` SELECT com_id FROM work WHERE u_id = ${req.session.user.u_id}`;
        console.log(com_id);
        await sql `INSERT INTO work_list ( workname, time, countmax, price, timework, freeday, agemax, agemin, sex, eLevel, com_id, interviewDay,daykey) 
        VALUES ( ${workname},${time},${countmax},${price},${timework},${freeday},${agemax},${agemin},${sex},${elevel},${com_id[0].com_id},${interviewDay},${date_create} )`;



        ////////////////////////////////       add user skill      /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        let work_id = await sql ` SELECT work_id FROM work_list WHERE com_id = ${com_id[0].com_id} AND daykey = ${date_create}`;
        for (count = 0; count < tags.length; count++) {
            await sql `INSERT INTO skill_req (work_id, skill_id)
         VALUES (${work_id[0].work_id},${tags[count].skill_id});
         `
        }
        res.sendStatus(200);
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
});

module.exports = router;