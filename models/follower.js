/**
 * Created by chenhuawei on 6/24/16.
 */
var db = require('../models/db');
var Sequelize = require('sequelize');
var Follower = db.define('follower', {
    id: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        unique: true
    },
    follower: {
        type: Sequelize.INTEGER(11),
        // primaryKey: true,
        allowNull: false,
        // autoIncrement: true,
        // unique: true   
    },
    follow: {
        type: Sequelize.INTEGER(11),
        // primaryKey: true,
        allowNull: false,
        // autoIncrement: true,
        // unique: true 
    }
}, {
    freezeTableName: true,
    timestamps: false
})

Follower.sync(
    // { force: true }
);
module.exports = Follower;