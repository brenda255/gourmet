const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Instruction extends Model { }

Instruction.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    instruction: {
        type: DataTypes.JSON,
        allowNull: false,
    },
    recipe_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'recipe',
            key: 'id',
            unique: false
        }
    },
},
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'instruction',
    })

module.exports = Instruction;
