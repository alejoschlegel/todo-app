/*
const express = require('express');
const app = express();
const router = express.Router();
//var Sequelize = require('sequelize');
var {Sequelize, DataTypes} = require('sequelize');

var sequelize = new Sequelize('postgres://postgres:password@localhost:5432/todo', {
    logging: false,
});

const ToDo = sequelize.define('todo', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    mail: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM('incomplete', 'doing', 'completed')
    },
})

const User = sequelize.define('user', {
    mail: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING
    },
})

//User 1 --> * ToDo
User.hasMany(ToDo);
//ToDo * --> 1 User
ToDo.belongsTo(User)

sequelize.sync({
    force: true
})
.then(() =>
    app.listen(3001, () =>
      console.log('Server is listening on port 3001!')
    )
)

//--------------------------------middleware--------------------------------//
app.use(express.json());

//--------------------------------routes--------------------------------//

/* //get home
router.get('/', (req, res)=> {
    res.json()
}) */




//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});