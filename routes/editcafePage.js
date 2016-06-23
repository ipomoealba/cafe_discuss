/**
 * Created by chenhuawei on 6/24/16.
 */
var express = require('express');
var router = express.Router();
var User = require('../models/User');
var session = require('session');
var cafe = require('../models/cafe');
var Sequelize = require('sequelize');
var imgur = require('imgur-upload');
var multer = require('multer');
var upload = multer({dest: 'uploads/'});
var unirest = require('unirest');
var Cafe = require('../models/cafe')
path = require('path');
router.get('/', function (req, res, next) {
    if (!req.session.user) {
        // res.redirect("/login");
        res.redirect('../login');
    } else {
        res.render('editcafePage', {user: req.session.user})
    }
})


router.post('/', upload.single('image'), function (req, res, next) {
    unirest.post("https://imgur-apiv3.p.mashape.com/3/image")
        .header("X-Mashape-Key", "Wz5HxlZrNimshDCLqaImpKikbJOJp1MsnaKjsnw0EFXtOdCD9t")
        .header("Authorization", "Client-ID 18efbc38c75d3fb")
        .header("Content-Type", "multipart/form-data")
        .attach("image", path.resolve("./uploads/" + req.file.filename))
        .end(function (result) {
            var cafe = {
                id: Date.now() / 1000,
                title: req.body.title,
                address: req.body.address,
                phone: req.body.phone,
                wifi: 0,
                img: result.body.data.link,
                content: result.body.content
            }

            Cafe.create(cafe).then(function () {
                if (!req.session.user) {
                    res.render('index', {user: null});
                } else {
                    res.render('index', {user: req.session.user})
                }
            })

        })
})

module.exports = router;