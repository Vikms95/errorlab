
import { DataTypes } from "sequelize";
import { database } from "../config/database.js";

const Project = database.define('project', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

export { Project }