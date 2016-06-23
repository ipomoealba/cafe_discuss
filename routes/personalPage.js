/**
 * Created by chenhuawei on 6/23/16.
 */
var express = require('express');
var router = express.Router();
var User = require('../models/User');
var session = require('session');
var imgur = require('imgur-upload');
var multer = require('multer');
var upload = multer({dest: 'uploads/'});
var unirest = require('unirest');

path = require('path');
router.get('/', function (req, res, next) {
    if (req.session.user) {
        res.redirect('/');
    } else {
        res.render('personalPage')
    }
})

router.post('/', upload.single('image'), function (req, res, next) {
    if (req.session.user) {
        res.redirect('/');
    } else {
        unirest.post("https://imgur-apiv3.p.mashape.com/3/image")
            .header("X-Mashape-Key", "Wz5HxlZrNimshDCLqaImpKikbJOJp1MsnaKjsnw0EFXtOdCD9t")
            .header("Authorization", "Client-ID 18efbc38c75d3fb")
            .header("Content-Type", "multipart/form-data")
            .attach("image", path.resolve("./uploads/" + req.file.filename))
            .end(function (result) {
                console.log(result.status, result.headers, "/////", result.body);
                var user = {
                    id: Date.now()/1000,
                    userName: req.body.username,
                    Email: req.body.email,
                    password: req.body.password,
                    img: result.body.data.link,
                    aboutMe: req.body.aboutMe,
                    counter: 0
                }
                
                User.create(user).then(function (user) {
                    res.locals.user = user;
                    req.session.user = res.locals.user;
                    res.redirect('/')
                })
                // res.render('')
            });
    }
})
module.exports = router;