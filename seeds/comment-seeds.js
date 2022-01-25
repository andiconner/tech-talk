const { Comment } = require('../models');

const commentdata = [
    {
        comment_text: 'Awesome!',
        user_id: 2,
        post_id: 1
    },
    {
        comment_text: 'Great job!',
        user_id: 1,
        post_id: 2
    },
    {
        comment_text: 'Love it!',
        user_id: 3,
        post_id: 3
    },
    {
        comment_text: 'Enjoyed your post! Pleawse keep us informed.',
        user_id: 1,
        post_id: 2
    }

];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
