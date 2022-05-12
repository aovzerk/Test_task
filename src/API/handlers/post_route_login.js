module.exports = {
	"rout_path": "/static/login.html",
	"method": "post",
	"run": (request, response) => {
		if (!request.body.user_name || !request.body.user_pass) return response.sendStatus(400);
		global.Manager.Db_manager.get_user(request.body.user_name).then(user_db => {
			if (!user_db) return response.send("Incorrect Username and/or Password!");
			if (request.body.user_pass == user_db.get("password")) {
				request.session.loggedin = true;
				request.session.username = request.body.user_name;
				response.redirect("/posts");
			} else {
				return response.send("Incorrect Username and/or Password!");
			}
		});
	}
};