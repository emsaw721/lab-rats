const sequelize = require("../config/connection");
const { Project } = require("../models");

const projectdata = [
  {
    project_name: "Photosynthetic chain",
    user_id: 1
    //manager_id: 1 //If we need manager in this table
  },
  {
    project_name: "Exercise-Induced Benefits for Alzheimer's Disease",
    user_id: 2
  },
  {
    project_name: "CRISPR/Cas9 genetic scissors",
    user_id: 3
  },
  {
    project_name: "Produce biogas from organic waste",
    user_id: 4
  },
];

const seedProjects = () =>
  Project.bulkCreate(projectdata, { individualHooks: true });

module.exports = seedProjects;
