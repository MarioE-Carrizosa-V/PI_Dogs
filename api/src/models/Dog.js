const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    breed:{
      type: DataTypes.STRING
    },
    weigth:{
      type: DataTypes.STRING

    },
    heigth:{
      type: DataTypes.STRING

    },
    image:{
      type: DataTypes.STRING

    }
  });
};