/**
 * Created by chenhuawei on 6/8/16.
 */
/**
 * Created by chenhuawei on 5/17/16.
 */
var express = require('express');
var router = express.Router();
var User = require('../models/User');
var session = require('session');

router.get('/', function (req, res) {
    res.render('login', {
        user: null,
        msg: null
    })
})
router.post('/', function (req, res, next) {

    if (req.body.userName == undefined || req.body.password == undefined) {
        res.render('login', {msg: req.body.password});
        return;
    } else if (req.body.userName == '' || req.body.password == '') {
        res.render('login', {msg: 'No Space'});
    } else {
        User.findOne({
            where: {
                userName: req.body.userName
            }
        }).then(function (user) {
            if (user == null || req.body.password != user.password) {
                res.render('login', {msg:"Login Fail"});
            } else {
                // res.render('login', {msg: " / " + user + "/ fail"});
                res.locals.user = user;
                req.session.user = res.locals.user;
                res.redirect('/');
            }
        })
    }


});

router.get('/logout', function (res,req) {
    res.redirect('/login')
    res.locals.user = null;
})

module.exports = router;
