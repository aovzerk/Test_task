module.exports = {
	"rout_path": "/static/create_user.html",
	"method": "post",
	"run": (request, response) => {
		if (!request.body.user_name || !request.body.user_pass) return response.sendStatus(400);
		global.Manager.Db_manager.get_user(request.body.user_name).then(user_db => {
			if (user_db) return response.sendStatus(400);
			global.Manager.Db_manager.create_user({ "login": request.body.user_name, "password": request.body.user_pass }).then(new_user => {
				response.redirect("/static/login.html");
			});
		});
	}
};