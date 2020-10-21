const router = require("express").Router();
const { sql } = require("../database");

router.post("/", async(req, res) => {
    try {


        let work_id = req.body.work_id;
        temp = [];
        result = await sql `
        SELECT pd.* , u.u_email
        FROM invite i 
        RIGHT JOIN  user u
        ON  u.u_id = i.u_id
        RIGHT JOIN  predekdetail pd
        ON  pd.u_id = i.u_id
        WHERE i.work_id = ${work_id}
        GROUP BY u.u_id
        `;

        for (count = 0; count < result.length; count++) {
            result2 = await sql `
            SELECT us.skill_id,s.skill_name FROM  user_skill us
            RIGHT JOIN skill s
            ON us.skill_id = s.skill_id
            WHERE u_id = ${result[count].u_id}
            GROUP BY us.skill_id `;
            temp.push(result2);
        }


        res.json({ user_Detail: result, user_skill: temp });
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
});

module.exports = router;