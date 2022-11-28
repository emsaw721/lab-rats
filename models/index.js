const Experiment = require("./Experiment"); //lab notes
const User = require("./User");
const Comment = require("./Comment"); // comments
const Project = require("./Project");
const Attachment= require('./Attachment')

User.hasMany(Experiment, {  
  foreignKey: "user_id",
});

User.hasMany(Comment, {
  foreignKey: "user_id",
});

User.hasMany(Project, {  
  foreignKey: "user_id",
});

Project.hasMany(Experiment, {
  foreignKey: "project_id"
});

Experiment.belongsTo(Project, {
  foreignKey: "project_id",
});

Experiment.hasMany(Comment, {
  foreignKey: "experiment_id",
});

Experiment.hasMany(Attachment, {
  foreignKey: "experiment_id",
});

Experiment.belongsTo(User,{
  foreignKey:"user_id",
})

Attachment.belongsTo(Experiment, {
  foreignKey:"experiment_id"
});

Comment.belongsTo(Experiment, {
  foreignKey: "experiment_id",
  onDelete: "CASCADE",
});

Comment.belongsTo(User, {
  foreignKey: "user_id"
});



module.exports = { User, Experiment, Comment, Project, Attachment };
