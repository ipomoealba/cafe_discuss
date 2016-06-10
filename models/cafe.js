/**
 * Created by chenhuawei on 6/8/16.
 */

var db = require('../models/db');
var Sequelize = require('sequelize');
var Cafe = db.define('cafe', {
    id: {
        type: Sequelize.INTEGER(3),
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        unique: true
    },
    link: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    title: {
        type: Sequelize.STRING(20),
        allowNull: false
    },
    img: {
        type: Sequelize.STRING(150),
        allowNull: false
    },
    command: {
        type: Sequelize.STRING(500),
        allowNull: false
    }
}, {
    freezeTableName: true,
    timestamps: false
})

Cafe.sync();
module.exports = Cafe;