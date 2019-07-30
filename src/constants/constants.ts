import { Environment, environment } from '../environment/environment';

// tslint:disable-next-line:variable-name
export const Books_Repository = 'BOOKS_REPOSITORY';
// tslint:disable-next-line:variable-name
export const Users_Repository = 'USERS_REPOSITORY';
// tslint:disable-next-line:variable-name
export const Authors_Repository = 'AUTHORS_REPOSITORY';
// tslint:disable-next-line:variable-name
export const AuthorsBooks_Repository = 'AUTHORS_BOOKS_REPOSITORY';
const env: Environment = environment();

export const dataBaseInfoConnect = {
  operatorsAliases: env.operatorsAliases,
                dialect: env.dialect,
                host: env.host,
                port: env.port,
                username: env.username,
                password: env.password,
                database: env.database,
  };
