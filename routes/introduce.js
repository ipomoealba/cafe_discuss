/**
 * Created by chenhuawei on 6/23/16.
 */
var express = require('express');
var router = express.Router();
var User = require('../models/User');
var session = require('session');
var Cafe = require('../models/cafe');
var Sequelize = require('sequelize');

router.get('/:id', function (req, res) {
    if (!req.session.user) {
        Cafe.find({
            where: {id: req.params.id}
        }).then(function (cafe) {
            res.render('introduce', {cafe: cafe, user: null})
        })
        // res.render('introduce', {cafe: cafe, user: null});
    } else {
        Cafe.find({
            where: {id: req.params.id}
        }).then(function (cafe) {
            res.render('introduce', {cafe: cafe, user: req.session.user})
        })

    }
})
module.exports = router;