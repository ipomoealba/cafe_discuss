/**
 * Created by chenhuawei on 6/23/16.
 */
var express = require('express');
var router = express.Router();
var User = require('../models/User');
var session = require('session');

router.get('/',function (req,res,next) {
    res.render('personalPage')
})

module.exports = router;