const config = require("../config/db.config");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(
    config.DB,
    config.USER,
    config.PASSWORD,{
        host : config.HOST,
        dialect : config.DIALECT
    }
);

const db = {};
db.Sequelize= Sequelize;
db.sequelize=sequelize;

db.user =require("../models/user.model")(sequelize,Sequelize);
db.role = require("../models/role.model")(sequelize,Sequelize);

db.role.belongsToMany(db.user,{through:"user_roles"});
db.user.belongsToMany(db.role,{through:"user_roles"});

db.ROLES = ["user","admin","moderator"];
module.exports = db;