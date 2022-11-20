const Experiment = require("./Experiment"); //lab notes
const User = require("./User");
const Comment = require("./Comment"); // comments
const Project = require("./Project");

User.hasMany(Experiment, {
  foreignKey: "user_id",
});

User.hasMany(Comment, {
  foreignKey: "user_id",
});

User.hasMany(Project, {
  //as manager
  foreignKey: "user_id",
});

Project.hasMany(Experiment, {
    foreignKey: 'experiment_id'
});

Experiment.hasOne(Project, {
    foreignKey: 'project_id'
});

// Experiment.belongsTo(User, {
//   foreignKey: "user_id",
//   onDelete: "SET NULL",
// });

// Experiment.hasMany(Comment, {
//   foreignKey: "experiment_id",
// });

// Experiment.belongsTo(project, {
//   foreignKey: "project_id",
// });

// Comment.belongsTo(Experiment, {
//   foreignKey: "experiment_id",
//   onDelete: "CASCADE",
// });

// Comment.belongsTo(User, {
//   foreignKey: "user_id",
// });

// Project.hasMany(Experimetn, {
//   foreignKey: "project_id",
// });

module.exports = { User, Experiment, Comment, Project };
