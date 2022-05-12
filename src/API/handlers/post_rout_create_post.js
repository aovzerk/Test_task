module.exports = {
	"rout_path": "/create_post",
	"method": "post",
	"run": (request, response) => {
		if (request.session.loggedin) {
			if (!request.body.user_text) return response.sendStatus(400);

			global.Manager.Db_manager.get_user(request.session.username).then(user_db => {
				if (!user_db) return response.send("Incorrect Username and/or Password!");
				user_db.create_post({ "text": request.body.user_text }).then(() => response.redirect("/posts"));
			});

		} else {
			response.send("Пожалуйста авторизуйтесь");
		}
	}
};