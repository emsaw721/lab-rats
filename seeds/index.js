const seedExperiments = require('./experiment-seeds');
const seedProjects = require('./project-seeds');
const seedComments = require('./comment-seeds');
const seedUsers = require('./user-seeds');


const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('--------------');
    await seedUsers();
    console.log('--------------');

    await seedProjects();
    console.log('--------------');

    await seedExperiments();
    console.log('--------------');

    await seedComments();
    console.log('--------------');

    process.exit(0);
};

seedAll();