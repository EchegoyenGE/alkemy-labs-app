module.exports = (sequelize, type) => {
    return sequelize.define('operation', {
        idOperation: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        idUser: type.INTEGER,
        concept: type.STRING,
        amount: type.INTEGER,
        date: type.DATE,
        income: type.BOOLEAN,
        category: type.STRING
    })
}