
import { DataTypes } from "sequelize";
import { database } from "../config/database.js";

const User = database.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  projects: {
    type: DataTypes.STRING,
    allowNull: false
  }
},{
  freezeTableName: true
})

export { User }