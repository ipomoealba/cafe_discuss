/**
 * Created by chenhuawei on 6/10/16.
 */
var express = require('express');
var router = express.Router();
var cafe = require('../models/cafe');
var Sequelize = require('sequelize')
/* GET home page. */
router.get('/', function (req, res, next) {
    if (!req.session.user) {
        res.redirect("/login");
    } else {

    }
});

router.post('/newCafe', function (req, res, next) {
    if (!req.session.user) {
        res.redirect("/login");
    } else {
        cafe.create({
            title: req.body.title,
            link:req.body.link,
            img:"hi",
            article:req.body.article
        }).then(function (cafe) {
            res.redirect("index");

        })
    }
})
module.exports = router;
