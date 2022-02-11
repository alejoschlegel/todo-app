const express = require('express');
const app = express();
const router = express.Router();
//var Sequelize = require('sequelize');
var {Sequelize, DataTypes} = require('sequelize');

var sequelize = new Sequelize('postgres://postgres:12345@localhost:5432/todo', {
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

/* ToDobelongsToMany(Users) */

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

//get home
router.get('/', (req, res)=> {
    res.json()
})

//get users
//get user
//post new user
//delete user

//get todos
//get todo
//post new todo
//delete todo
//put change status

//get todos user

