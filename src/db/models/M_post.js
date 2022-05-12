const { DataTypes, Model } = require("sequelize");
const sequelize = require("../connector/connector");
class M_post extends Model {}

M_post.init({
	"Id": {
		"type": DataTypes.INTEGER,
		"autoIncrement": true,
		"primaryKey": true,
		"allowNull": false
	},
	"text": {
		"type": DataTypes.TEXT,
		"allowNull": false
	}
}, {
	sequelize,
	"tableName": "posts"
});
module.exports = M_post;