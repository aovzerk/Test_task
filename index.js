const API_manager = require("./src");
const main_config = require("./configs/main_config.json");
global.Manager = new API_manager(main_config.host, main_config.port);
global.Manager.init();