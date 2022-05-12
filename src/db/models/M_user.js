const { DataTypes, Model } = require("sequelize");
const sequelize = require("../connector/connector");
class M_user extends Model {}

M_user.init({
	"Id": {
		"type": DataTypes.INTEGER,
		"autoIncrement": true,
		"primaryKey": true,
		"allowNull": false
	},
	"login": {
		"type": DataTypes.STRING,
		"allowNull": false
	},
	"password": {
		"type": DataTypes.STRING,
		"allowNull": false
	}
}, {
	sequelize,
	"tableName": "users"
});
module.exports = M_user;