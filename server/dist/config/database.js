import { Sequelize } from "sequelize";
export const database = new Sequelize('errorlab', 'postgres', 'ustdedt8', {
    host: 'localhost',
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    define: {
        freezeTableName: true
    }
});
