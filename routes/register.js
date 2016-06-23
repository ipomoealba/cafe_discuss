/**
 * Created by chenhuawei on 6/16/16.
 */
var express = require('express');
var router = express.Router();
var session = require("express-session");
var imgur = require('imgur-upload');
var multer = require('multer');
var upload = multer({dest: 'uploads/'});
var unirest = require('unirest');

path = require('path');

router.get('/', function (req, res, next) {
    if (!req.session.user) {
        res.render('register')
    } else {
        res.redirect("/");
    }
})


router.post('/add_user', upload.single('image'), function (req, res, next) {
    if (req.body.pwd1 == req.body.pwd2) {

        var user = {
            id: req.body.id,
            userName: req.body.userName,
            password: req.body.pwd1,
            email: req.body.email,
            aboutMe: req.body.aboutMe,
        }
        User.create(user).then(function (user) {
            res.locals.user = user;
            req.session.user = res.locals.user;
            res.redirect('/')
        })

    }

})
module.exports = router;
