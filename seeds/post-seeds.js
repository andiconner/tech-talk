const { Post } = require('../models');

const postdata = [
    {
        title: 'What MVC is and Why is so important',
        post_content: 'MVC is an architectural pattern consisting of three parts: Model, View, Controller. Model: Handles data logic. View: It displays the information from the model to the user. Controller: It controls the data flow into a model object and updates the view whenever data changes.',
        user_id: 1
    },
    {
        title: 'Know everything about JavaScript ',
        post_content: 'JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. Over 97% of websites use JavaScript on the client side for web page behavior, often incorporating third-party libraries.',
        user_id: 2
    },
    {
        title: 'Handlebars - Minimal templating on steroids',
        post_content: 'Handlebars is a simple templating language. It uses a template and an input object to generate HTML or other text formats. Handlebars templates look like regular text with embedded Handlebars expressions.',
        user_id: 1
    },
    {
        title: 'Sequelize - New dagtabases versus existing databases',
        post_content: 'If you are starting a project from scratch, and your database is still empty, Sequelize can be used since the beginning in order to automate the creation of every table in your database. Also, if you want to use Sequelize to connect to a database that is already filled with tables and data, that works as well! Sequelize has got you covered in both cases.',
        user_id: 2
    },
    {
        title: 'History and Why MySQL2',
        post_content: 'MySQL2 project is a continuation of MySQL-Native. Protocol parser code was rewritten from scratch and api changed to match popular mysqljs/mysql. MySQL2 team is working together with mysqljs/mysql team to factor out shared code and move it under mysqljs organisation. MySQL2 is mostly API compatible with mysqljs and supports majority of features.',
        user_id: 3
    },
    {
        title: 'dotenv',
        post_content: 'Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology.',
        user_id: 2
    },
    {
        title: 'Node.js',
        post_content: 'Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;