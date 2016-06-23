/**
 * Created by chenhuawei on 6/23/16.
 */
// var cafe = require('../models/cafe')
var express = require('express');
var router = express.Router();
var User = require('../models/User');
var session = require('session');

router.get('/', function (req, res, next) {
    if (!req.session.user) {
        res.render('knowledge', {user: null});
    } else {
        res.render('knowledge', {user: req.session.user})
    }
})


module.exports = router