const router = require("express").Router();
const { sql } = require("../database");

router.post('/', async(req, res) => {
    let sta = false;
    if (req.files) {
        console.log(req.files);
        var file = req.files.file;
        var filename = "ownerUserIs_" + req.session.user.u_id + ".jpg";
        // console.log(filename);
        // console.log("user is : " + req.session.user.u_id);
        file.mv('./src/assets/pre-img/' + filename, async function(err) {
            if (err) {
                res.send(err);
            } else {
                console.log("update");

                if (req.session.user.u_role === "pre-dek") {
                    await sql `UPDATE predekdetail
                SET imgName = ${filename}
                WHERE u_id=${req.session.user.u_id};`;
                    return res.redirect('/preDekProfile');
                } else {
                    await sql `UPDATE work
                SET imgName = ${filename}
                WHERE u_id=${req.session.user.u_id};`;
                    return res.redirect('/workProfile');
                }
            }
        })
    }
})

module.exports = router;