/**
 * Created by chenhuawei on 6/23/16.
 */
var express = require('express');
var router = express.Router();
var User = require('../models/User');
var session = require('session');
var cafe = require('../models/cafe');
var Sequelize = require('sequelize');
var Follower = require('../models/follower')
router.get('/:region', function (req, res, next) {
    console.log(req.params.region);
    User.findAll().then(function (usr) {
        console.log(usr)
        if (!req.session.user) {
            if (req.params.region == "N") {
                cafe.findAll({

                    where: Sequelize.or(
                        {address: {$like: '%台北%'}},
                        {address: {$like: '%桃園%'}},
                        {address: {$like: '%新北%'}},
                        {address: {$like: '%新竹%'}},
                        {address: {$like: '%宜蘭%'}},
                        {address: {$like: '%基隆%'}},
                        {address: {$like: '%基隆%'}}),
                    order: [
                        Sequelize.fn('RAND')
                    ]


                }).then(function (cafe) {
                    res.render('district', {user: null, cafe: cafe, usr: usr});
                })
            } else if (req.params.region == "W") {
                cafe.findAll({

                    where: Sequelize.or(
                        {address: {$like: '%台中%'}},
                        {address: {$like: '%南投%'}},
                        {address: {$like: '%苗栗%'}},
                        {address: {$like: '%嘉義%'}},
                        {address: {$like: '%彰化%'}},
                        {address: {$like: '%雲林%'}}
                    ),
                    order: [
                        Sequelize.fn('RAND')
                    ]


                }).then(function (cafe) {
                    res.render('district', {user: null, cafe: cafe, usr: usr});
                })
            } else if (req.params.region == "S") {
                cafe.find({

                    where: Sequelize.or(
                        {address: {$like: '%台南%'}},
                        {address: {$like: '%高雄%'}},
                        {address: {$like: '%屏東%'}}),
                    order: [
                        Sequelize.fn('RAND')
                    ]


                }).then(function (cafe) {
                    res.render('district', {user: null, cafe: cafe, usr: usr});
                })
            } else if (req.params.region == "E") {
                cafe.find({

                    where: Sequelize.or(
                        {address: {$like: '%花蓮%'}},
                        {address: {$like: '%台東%'}}),
                    order: [
                        Sequelize.fn('RAND')
                    ]


                }).then(function (cafe) {
                    res.render('district', {user: null, cafe: cafe, usr: usr});
                })
            }
        } else {
            if (req.params.region == "N") {
                cafe.findAll({

                    where: Sequelize.or(
                        {address: {$like: '%台北%'}},
                        {address: {$like: '%桃園%'}},
                        {address: {$like: '%新北%'}},
                        {address: {$like: '%新竹%'}},
                        {address: {$like: '%宜蘭%'}},
                        {address: {$like: '%基隆%'}},
                        {address: {$like: '%基隆%'}}),
                    order: [
                        Sequelize.fn('RAND')
                    ]


                }).then(function (cafe) {
                    res.render('district', {user: req.session.user, cafe: cafe, usr: usr});
                })
            } else if (req.params.region == "W") {
                cafe.findAll({

                    where: Sequelize.or(
                        {address: {$like: '%台中%'}},
                        {address: {$like: '%南投%'}},
                        {address: {$like: '%苗栗%'}},
                        {address: {$like: '%嘉義%'}},
                        {address: {$like: '%彰化%'}},
                        {address: {$like: '%雲林%'}}
                    ),
                    order: [
                        Sequelize.fn('RAND')
                    ]


                }).then(function (cafe) {
                    res.render('district', {user: req.session.user, cafe: cafe, usr: usr});
                })
            } else if (req.params.region == "S") {
                cafe.find({

                    where: Sequelize.or(
                        {address: {$like: '%台南%'}},
                        {address: {$like: '%高雄%'}},
                        {address: {$like: '%屏東%'}}),
                    order: [
                        Sequelize.fn('RAND')
                    ]


                }).then(function (cafe) {
                    res.render('district', {user: req.session.user, cafe: cafe, usr: usr});
                })
            } else if (req.params.region == "E") {
                cafe.find({

                    where: Sequelize.or(
                        {address: {$like: '%花蓮%'}},
                        {address: {$like: '%台東%'}}),
                    order: [
                        Sequelize.fn('RAND')
                    ]


                }).then(function (cafe) {
                    res.render('district', {user: req.session.user, cafe: cafe, usr: usr});
                })
            }
            // res.render('district', {user: req.session.user})
        }
    })

})


module.exports = router;