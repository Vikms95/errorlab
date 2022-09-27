import { DataTypes } from "sequelize";
import { database } from "../config/database.js";
const Ticket = database.define('ticket', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    }
});
export { Ticket };
