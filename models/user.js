/**
 * Created by chenhuawei on 6/8/16.
 */

var db = require('../models/db');
var Sequelize = require('sequelize');
var User = db.define('User', {
    id: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        unique: true
    },
    userName: {
        type: Sequelize.STRING(30),
        allowNull: false
    },
    password: {
        type: Sequelize.STRING(30),
        allowNull: false
    },
    Email: {
        type: Sequelize.STRING(30),
        allowNull: false
    },
    commanderScore:{
        type:Sequelize.INTEGER(4)
    }
}, {
    freezeTableName: true,
    timestamps: false
})

User.sync();
module.exports = User;