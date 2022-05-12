const importFresh = require("import-fresh");
const User = require("../structures/User");
class Db_manager {
	constructor(API_manager) {
		this.API_manager = API_manager;
		this.M_post = importFresh("../../db/models/M_post.js");
		this.M_user = importFresh("../../db/models/M_user.js");
	}
	init() {
		this.sync_tables();
	}
	create_user(user_data) {
		return new Promise((resolve, reject) => {
			this.M_user.create({ "login": user_data.login, "password": user_data.password }).then((new_user) => resolve(new User(new_user)));
		});
	}
	get_user(login) {
		return new Promise((resolve, reject) => {
			this.M_user.findOne({ "where": { "login": login } }).then(user_db => {
				if (user_db == null || user_db == undefined) {
					resolve(null);
				} else {
					resolve(new User(user_db));
				}
			});
		});
	}
	sync_tables() {
		this.M_user.hasMany(this.M_post, { "onDelete": "cascade" });
		this.M_post.sync({ "alter": true }).then(() => {
			console.log("Синхранизация Таблицы posts успешна");
		});
		this.M_user.sync({ "alter": true }).then(() => {
			console.log("Синхранизация Таблицы users успешна");
		});
	}
}
module.exports = (app) => {
	app.Db_manager = new Db_manager(app);
	app.Db_manager.init();
};