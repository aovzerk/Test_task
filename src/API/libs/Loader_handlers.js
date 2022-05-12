const fs = require("fs");
const importFresh = require("import-fresh");
class Loader_handlers {
	constructor(API_manager) {
		this.API_manager = API_manager;
	}
	init() {
		this.set_handlers();
	}
	set_handlers() {
		const handlers_files = fs.readdirSync("./src/API/handlers").filter(file => file.endsWith(".js"));
		console.log("Загрузка хендлеров");
		for (const file of handlers_files) {
			const handler = importFresh(`../handlers/${file}`);
			const callback = (...args) => handler.run(...args);
			console.log(`HANDLER ${file} Загружен`);
			switch (handler.method) {
				case "get":
					this.API_manager.application_rout.get(handler.rout_path, callback);
					break;
				case "post":
					this.API_manager.application_rout.post(handler.rout_path, callback);
					break;
				default:
					break;
			}
		}

	}
}
module.exports = (app) => {
	app.Loader_handlers = new Loader_handlers(app);
	app.Loader_handlers.init();
};