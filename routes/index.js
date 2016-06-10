var express = require('express');
var router = express.Router();
var cafe = require('../models/cafe');
var Sequelize = require('sequelize')
/* GET home page. */
router.get('/', function (req, res, next) {
    if (!req.session.user) {
        res.redirect("/login");
    } else {
        cafe.find({
            order: [
                Sequelize.fn('RAND')
            ]
            
        }).then(function (cafe) {
            res.render('index', {title: 'Express', cafe: cafe,user:req.session.user.userName})
        })

    }
});

module.exports = router;
