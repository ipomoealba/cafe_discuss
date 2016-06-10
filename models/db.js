/**
 * Created by chenhuawei on 5/11/16.
 */
var Sequelize = require('sequelize');


var db = new Sequelize(
    'Cafe',
    'root',
    'admin',

    {
        'dialect': 'mysql',
        'host': 'localhost',
        'port': 3306,
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        }

    }
);

module.exports = db;