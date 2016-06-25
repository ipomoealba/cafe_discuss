var express = require('express');
var router = express.Router();
var cafe = require('../models/cafe');
var Sequelize = require('sequelize')

/* GET home page. */
router.get('/', function (req, res, next) {
    if (!req.session.user) {
        res.render('index', {cafe: cafe, user: null});
    } else {
        cafe.find({
            where: Sequelize.or(
                {title: {$like: '%台北%'}},
                {title: {$like: '%桃園%'}},
                {title: {$like: '%臺北%'}},
                {title: {$like: '%新竹%'}},
                {title: {$like: '%宜蘭%'}},
                {title: {$like: '%基隆%'}},
                {title: {$like: '%基隆%'}}),
            order: [
                Sequelize.fn('RAND')
            ]

        }).then(function (cafe) {
            res.render('index', {cafe: cafe, user: req.session.user})
        })

    }
});

module.exports = router;
