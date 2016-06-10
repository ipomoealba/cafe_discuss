/**
 * Created by chenhuawei on 6/10/16.
 */
/**
 * Created by chenhuawei on 6/8/16.
 */

var db = require('../models/db');
var Sequelize = require('sequelize');
var Command = db.define('Command', {
    id: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        unique: true
    },
    commamder:{
        type:Sequelize.STRING(15),
        allowNull:false
    },
    command:{
        type:Sequelize.STRING(15),
        allowNull:false
    }
}, {
    freezeTableName: true,
    timestamps: false
})

Command.sync();
module.exports = User;