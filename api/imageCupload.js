const router = require("express").Router();
const { sql } = require("../database");

router.post('/', async(req, res) => {
    let sta = false;
    if (req.files) {
        console.log(req.files);
        var file = req.files.file;
        var filename = "confirm_pic_" + req.session.user.u_id + ".jpg";
        // console.log(filename);
        // console.log("user is : " + req.session.user.u_id);
        file.mv('./src/assets/CM/' + filename, async function(err) {
            if (err) {
                res.send(err);
            } else {
                console.log("update");
                await sql `UPDATE predekdetail
                SET confirm_status = ${filename}
                WHERE u_id=${req.session.user.u_id};`;
                return res.redirect('/preDekProfile');
            }
        })
    } else {

    }

})

module.exports = router;