/**
 * Created by chenhuawei on 6/8/16.
 */

var db = require('../models/db');
var Sequelize = require('sequelize');
var Cafe = db.define('cafe', {
    id: {
        type: Sequelize.STRING(15),
        primaryKey: true,
        allowNull: false,
        // autoIncrement: true,
        unique: true,
        // initialAutoIncrement:"100"
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
    }
}, {
    freezeTableName: true,
    timestamps: false
})
// db.query("ALTER TABLE cafe AUTO_INCREMENT = 20000");
Cafe.sync(
    // { force: true }
);

module.exports = Cafe;