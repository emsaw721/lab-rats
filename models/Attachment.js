const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Attachment extends Model { }

Attachment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        file_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        file_path: {
            type: DataTypes.STRING,
            allowNull: false

        },
        experiment_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "experiment",
                key: "id",
            },
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: "attachment",
    }
);

module.exports = Attachment;
