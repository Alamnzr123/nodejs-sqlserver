const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('test2-nodejs', 'root', 'sa', {
    host: 'localhost',
    dialect: 'mssql',
    logging: false,
    port: 1434,
    // pool: {
    //     max: 5,
    //     min: 0,
    //     idle: 10000
    // },
    // dialectOptions: {
    //     instanceName: 'localhost',
    //     domain: 'localhost'
    // },
})

module.exports = sequelize

// const { Sequelize } = require('sequelize')

// const sequelize = new Sequelize('test2-nodejs', null, null, {
//     dialect: 'mssql',
//     pool: {
//         max: 5,
//         min: 0,
//         idle: 10000
//     },
//     dialectOptions: {
//         authentication: {
//             type: 'ntlm',
//             options: {
//                 domain: 'localhost',
//                 userName: 'root',
//                 password: 'sa',
//             },
//         },
//         // options: {
//         //     instanceName: 'SQLEXPRESS',
//         // },
//     },
// });

// module.exports = sequelize