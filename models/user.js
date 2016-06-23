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
        // autoIncrement: true,
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
    aboutMe:{
        type: Sequelize.STRING(300),
        allowNull: true
    },
    img:{
        type:Sequelize.STRING(50),
        allowNull:false
    },
    counter:{
        type:Sequelize.INTEGER(10),
        allowNull:false
    }
}, {
    freezeTableName: true,
    timestamps: false
})

User.sync(
    // { force: true }
);
module.exports = User;