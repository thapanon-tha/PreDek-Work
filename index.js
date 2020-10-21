require("dotenv").config({ silent: process.env.NODE_ENV === "production" });
const express = require("express");
const cors = require("cors");
const api = require("./api");
const app = express();
const api_path = express.Router();
const port = process.env.PORT || 8000;
const session = require('express-session')
const cookieParser = require('cookie-parser')
const upload = require('express-fileupload');
app.use(express.json());
app.use(cors());
app.use(upload());

const isLoggedIn = (req, res, next) => {
    console.log("index.js caonsole.log User is :" + req.session.user)
    if (!req.session.user) {
        res.redirect('/');
    }
    next()
}

app.use(cookieParser())
app.use(
    session({
        secret: 'my_super_secret',
        resave: false,
        saveUninitialized: false
    })
)

//////////////////////////////////////////////Frontend///////////////////////////////////////

app.get('/loginUser', (req, res) => {
    return res.sendFile(__dirname + '/src/login.html')
})

app.get('/Register', (req, res) => {
    return res.sendFile(__dirname + '/src/register.html')
})

app.get('/upLoadProFile', isLoggedIn, (req, res) => {
    return res.sendFile(__dirname + '/src/uploadprofile.html')
})



//////////////////////////////////////////predek////////////////////////////////////////

app.get('/preDekDetail', isLoggedIn, (req, res) => {
    if (req.session.user.u_role !== "work" && req.session.user.activate_status !== "success") { return res.sendFile(__dirname + '/src/regis-pre.html') } else
        return res.redirect('/');
})

app.get('/preDekHome', isLoggedIn, (req, res) => {
    if (req.session.user.u_role !== "work") { return res.sendFile(__dirname + '/src/pre-home.html') } else
        return res.redirect('/');
})

app.get('/preDekResponse', isLoggedIn, (req, res) => {
    if (req.session.user.u_role !== "work") { return res.sendFile(__dirname + '/src/pre-response.html') } else
        return res.redirect('/');
})

app.get('/prePartner', isLoggedIn, (req, res) => {
    if (req.session.user.u_role !== "work") { return res.sendFile(__dirname + '/src/pre-partner.html') } else
        return res.redirect('/');
})

app.get('/preSolfSkill', isLoggedIn, (req, res) => {
    if (req.session.user.u_role !== "work") { return res.sendFile(__dirname + '/src/pre-solfskill.html') } else
        return res.redirect('/');
})


app.get('/preDekProfile', isLoggedIn, (req, res) => {
    if (req.session.user.u_role !== "work") { return res.sendFile(__dirname + '/src/preDekProfile.html') } else
        return res.redirect('/');
})



/////////////////////////////////////work////////////////////////////////////////////

app.get('/workDetail', isLoggedIn, (req, res) => {
    if (req.session.user.u_role !== "pre-dek" && req.session.user.activate_status !== "success") { return res.sendFile(__dirname + '/src/regis-work.html') } else
        return res.redirect('/');
})

app.get('/workHome', isLoggedIn, (req, res) => {
    if (req.session.user.u_role !== "pre-dek") { return res.sendFile(__dirname + '/src/work-home.html') } else
        return res.redirect('/');
})

app.get('/workCreate', isLoggedIn, (req, res) => {
    if (req.session.user.u_role !== "pre-dek") { return res.sendFile(__dirname + '/src/work-create.html') } else
        return res.redirect('/');
})


app.get('/workProfile', isLoggedIn, (req, res) => {
    if (req.session.user.u_role !== "pre-dek") { return res.sendFile(__dirname + '/src/workProfile.html') } else
        return res.redirect('/');
})

//////////////////////////////////////Frontend test//////////////////////////////////////////
app.get('/test', isLoggedIn, (req, res) => {
    return res.sendFile(__dirname + '/src/testup.html')
})

app.get('/WorkHome', isLoggedIn, (req, res) => {
    return res.sendFile(__dirname + '/src/work-home.html')
})

app.get('/PreDekFind', isLoggedIn, (req, res) => {
    return res.sendFile(__dirname + '/src/pre-find.html')
})

////////////////////////^^^^^^^^^^^^^^^Frontend^^^^^^^^^^^^^^^^^//////////////////////////

//////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////

/* --- แก้ API ในนี้ --- */

// api_path.use("[path]", api.[api]);

api_path.use("/login", api.login);
api_path.use("/register", api.register);
api_path.use("/check", api.check);
api_path.use("/logout", api.logout);
api_path.use("/getskill", api.getskill);
api_path.use("/addDetailPreDek", api.addDetailPreDek);
api_path.use("/uploadfile", api.uploadfile);
api_path.use("/addDetailWork", api.addDetailWork);
api_path.use("/createWork", api.createWork);
api_path.use("/getWorkList", api.getWorkList);
api_path.use("/matchPredek", api.matchPredek);
api_path.use("/Invite", api.Invite);
api_path.use("/workInterested", api.workInterested);
api_path.use("/getpredekdata", api.getpredekdata);
api_path.use("/imageCupload", api.imageCupload);
api_path.use("/selectList", api.selectList);
api_path.use("/getworkdata", api.getworkdata);
api_path.use("/Partnerlist", api.Partnerlist);

api_path.use("/changepassword", api.changepassword);
api_path.use("/changefname", api.changefname);
api_path.use("/changelname", api.changelname);
api_path.use("/changePre", api.changePre);




/* --- อย่าแก้อะไรหลังจากนี้ --- */

api_path.use((req, res) => {
    res.sendStatus(501);
});

app.use("/api", api_path);
app.use(express.static("src"));
// app.use((req, res) => {
//     res.sendStatus(404);
// });
app.listen(port, () =>
    console.log(`Server is running on http://localhost:${port}`)
);