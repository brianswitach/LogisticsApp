import { Sequelize } from 'sequelize'

const db = new Sequelize ('database_app','root','bsitich1/',{

    host:'localhost',
    dialect: 'mysql'
}) 

export default db