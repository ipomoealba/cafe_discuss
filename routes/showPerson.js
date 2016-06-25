/**
 * Created by chenhuawei on 6/23/16.
 */
var express = require('express');
var router = express.Router();
var User = require('../models/User');
var session = require('session');


router.get('/', function (req, res, next) {
    User.find({
        where: {
            id: req.session.user.id
        }
    }).then(function (usr) {
        if (req.session.user) {
            res.render('showPerson', {user: null, usr: usr})
        } else {
            res.render('showPerson', {user: req.session.user, usr: usr})
        }
    })

})


module.exports = router