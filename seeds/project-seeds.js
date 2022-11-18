const sequelize = require("../config/connection");
const { Project } = require("../models");

const projectdata = [
  {
    project_name: "Photosynthetic chain",
    //manager_id: 1 //If we need manager in this table
  },
  {
    project_name: "Exercise-Induced Benefits for Alzheimer's Disease",
  },
  {
    project_name: "CRISPR/Cas9 genetic scissors",
  },
  {
    project_name: "Produce biogas from organic waste",
  },
];

const seedProjects = () =>
  Project.bulkCreate(projectdata, { individualHooks: true });

module.exports = seedProjects;
