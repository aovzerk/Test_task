const { Sequelize } = require("sequelize");
const main_config = require("../../../configs/main_config.json");
const connector_db = new Sequelize(main_config.db.db_name, main_config.db.user, main_config.db.password, {
	"host": main_config.db.host,
	"dialect": main_config.db.dialect,
	"define": {
		"timestamps": false
	},
	"logging": false
});
module.exports = connector_db;