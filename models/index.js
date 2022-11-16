//import models
const Experiment = require('./Experiment');
// const User = require('./User');
const Project = require('./Project');
// const Comment = require('/Comment');

//Create associations

// User.hasMany(Project, {
//     foreignkey: 'user_id'
// });

// Project.hasMany(User, {
// foreignKey:'project_id'
// });

// User.hasMany(Experiment, {
//     foreignkey: 'user_id'
// });

Project.hasMany(Experiment, {
    foreignKey: 'experiment_id'
});

Experiment.hasOne(Project, {
    foreignKey: 'project_id'
});

module.exports = { Experiment, Project };