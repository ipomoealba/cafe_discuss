/**
 * Created by chenhuawei on 6/10/16.
 */
var express = require('express');
var router = express.Router();
var cafe = require('../models/cafe');
var encode = require('hashcode').hashCode;
var imgur = require('imgur-upload');
var multer = require('multer');
var upload = multer({dest: 'uploads/'});
var unirest = require('unirest');


path = require('path');
// imgur.setClientID('18efbc38c75d3fb18efbc38c75d3fb');

router.get('/', function (req, res, next) {
    if (!req.session.user) {
        res.redirect("/login");
    } else {
        res.render("article", {user: req.session.user.userName, test: null});
    }
});

router.post('/newCafe', upload.single('image'), function (req, res, next) {
    if (!req.session.user) {
        res.redirect("/login");
    } else {
        // var hash =
        // imgur.upload(path.resolve("./uploads/" + req.file.filename), function (err, res) {
        //     if(res.data.link){
        //         res.render("article", {user: req.session.user.userName, test:res.data.link });
        //     }else {
        //         res.render("article", {user: req.session.user.userName, test: "null"});
        //     }
        // });
        // var newCafe = {
        //     id: encode().value(req.body.title + req.body.link + req.body.article),
        //     title: req.body.title,
        //     link: req.body.link,
        //     img: path.resolve("./uploads/" + req.file.filename),
        //     article: req.body.article
        // }
        unirest.post("https://imgur-apiv3.p.mashape.com/3/image")
            .header("X-Mashape-Key", "Wz5HxlZrNimshDCLqaImpKikbJOJp1MsnaKjsnw0EFXtOdCD9t")
            .header("Authorization", "Client-ID 18efbc38c75d3fb")
            .header("Content-Type", "multipart/form-data")
            .attach("image", path.resolve("./uploads/" + req.file.filename))
            .end(function (result) {
                console.log(result.status, result.headers, "/////", result.body);
                var newCafe = {
                    id: encode().value(req.body.title + req.body.link + req.body.article),
                    title: req.body.title,
                    link: req.body.link,
                    img: result.body.data.link,
                    article: req.body.article
                }
                cafe.create(newCafe).then(function (cafe) {
                    //     console.log(cafe);
                    res.redirect("/");
                })
            });
        //-----------test req.files--------------------
        // if (x) {
        //     res.render("article", {user: req.session.user.userName, test: x});
        // } else {
        //     res.render("article", {user: req.session.user.userName, test: "null"});
        // }
        //---------------------------------------------
        // cafe.create(newCafe).then(function (cafe) {
        // //     console.log(cafe);
        //     res.redirect("/");
        // })

    }
})
module.exports = router;
