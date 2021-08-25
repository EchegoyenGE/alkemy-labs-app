module.exports = (sequelize, type) => {
    return sequelize.define('user', {
        idUser: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: type.STRING,
            unique: true
        },
        email: {
            type: type.STRING,
            unique: true
        },
        name: type.STRING,
        password: type.STRING(150)
    })
}