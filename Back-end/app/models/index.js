const dbConfig = require("../config/config-db");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const db = {};
db.mongoose = mongoose
db.url = dbConfig.url;
db.roles = require ("./roles")(mongoose);
db.cours = require ("./cours")(mongoose);

module.exports = db;