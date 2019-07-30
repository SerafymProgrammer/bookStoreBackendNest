import fs = require('fs');
import { Environment } from './environment';

// tslint:disable-next-line:one-variable-per-declaration
export const environmentProduction: Environment = {
    provide: 'SEQUELIZE',
    operatorsAliases: false,
    dialect: 'mysql',
    host: process.env.DB_HOST || 'localhost',
    port: 3306,
    username: 'root',
    password: 'MySQLSerafym19',
    database: 'users',
    tokenExpireTime: 60 * 60 * 24,
};
