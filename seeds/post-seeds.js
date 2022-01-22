const { Post } = require('../models');

const postdata = [
    {
        title: 'La vida es bella',
        post_url: 'https://fjdkasdjkde.com',
        user_id: 1
    },
    {
        title: 'Jkdjaeie dkfd ',
        post_url: 'https://fjdkasdjkdefjdjf.com',
        user_id: 2
    },
    {
        title: 'Welcome to the world',
        post_url: 'https://worldfjdkasdjkde.com',
        user_id: 1
    },
    {
        title: 'How to be happy',
        post_url: 'https://happyfjdkasdjkde.com',
        user_id: 2
    },
    {
        title: 'Tech for beginners',
        post_url: 'https://techfjdkasdjkde.com',
        user_id: 3
    },
    {
        title: 'Nulla tellus.',
        post_url: 'https://lycos.com/natoque/penatibus/et.html',
        user_id: 2
    },
    {
        title: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
        post_url: 'https://gmpg.org/lorem.jpg',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;