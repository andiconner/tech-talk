const sequelize = require('../config/connection');
const { User, Post } = require('../models')

const userdata = [
    {
        username: 'alex123',
        email: 'alex@123.com',
        password: 'password123'
    },
    {
        username: 'frank123',
        email: 'frank@123.com',
        password: 'pass123'
    },
    {
        username: 'john123',
        email: 'john@123.com',
        password: '123 password'
    }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;