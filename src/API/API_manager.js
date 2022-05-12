const express = require("express");
const fs = require("fs");
const importFresh = require("import-fresh");
const session = require("express-session");
class API_manager {
	constructor(host, port) {
		this.host = host;
		this.port = port;
		this.application_rout = express();
		this.tokens = ["token1", "token2"];
	}
	init() {
		this.set_folder_view();
		this.set_view_engine();
		this.set_static_html();
		this.set_middleware_one();
		this.set_usrldecoder();
		this.set_session_settings();
		this.load_libs();
		this.run();
	}
	set_folder_view() {
		this.application_rout.set("views", "./src/html_files");
	}
	set_view_engine(engine = "pug") {
		this.application_rout.set("view engine", engine);
	}
	set_session_settings() {
		this.application_rout.use(session({
			"secret": "secret",
			"resave": true,
			"saveUninitialized": true
		}));
	}
	set_usrldecoder() {
		const urlencodedParser = express.urlencoded({ "extended": false });
		this.application_rout.use(urlencodedParser);
	}
	set_middleware_one() {
		this.application_rout.use("/api", (request, response, next) => {
			if (!request.headers.authorization) return response.status(401).send("invalid token...");
			const token = request.headers.authorization.split(" ")[1];
			if (!this.tokens.includes(token)) return response.status(401).send("invalid token...");
			next();
		});
	}
	set_static_html() {
		this.application_rout.use("/static", express.static("./src/static_html"));
	}
	load_libs() {
		const libs_files = fs.readdirSync("./src/API/libs").filter(file => file.endsWith(".js"));
		console.log("Загрузка Библиотек");
		for (const file of libs_files) {
			const lib = importFresh(`./libs/${file}`);
			lib(this);
			console.log(`LIB ${file} Загружен`);
		}
	}
	run() {
		this.application_rout.listen(this.port, this.host, () => {
			console.log(`Server started ${this.host}:${this.port}`);
		});
	}
}
module.exports = API_manager;