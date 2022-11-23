const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Experiment extends Model { }

Experiment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    purpose_and_hypothesis: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    background: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    protocols_calculations_reagents_equipment: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    observations: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    analysis: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    project_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'project',
        key: 'id'
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'experiment'
  }
);

module.exports = Experiment;