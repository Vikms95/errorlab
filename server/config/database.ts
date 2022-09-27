import dotenv from 'dotenv'
dotenv.config()
import { Sequelize } from "sequelize";

const uri = process.env.DB_URI
export const database = 
  new Sequelize(uri as string, {
    define: {
      freezeTableName: true,
      createdAt: false,
      updatedAt: false,
  }})