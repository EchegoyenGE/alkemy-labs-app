import Sequelize from 'sequelize';

import OperationModel from '../models/operations';
import UserModel from '../models/users';

import { HOSTNAME, USER, DB_PASSWORD } from '../config';

const sequelize = new Sequelize(HOSTNAME, USER, DB_PASSWORD, {
    host: 'remotemysql.com',
    dialect: 'mysql'
});

export const Operation = OperationModel(sequelize, Sequelize);
export const User = UserModel(sequelize, Sequelize)

sequelize.sync({ force: false })
    .then(() => {
        console.log('Tablas sincronizadas')
    })