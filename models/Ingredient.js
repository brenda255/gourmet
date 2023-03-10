const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Ingredient extends Model { }

Ingredient.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    ingredient: {
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
        modelName: 'ingredient',
    })

module.exports = Ingredient;
