module.exports = {
	"rout_path": "/posts",
	"method": "get",
	"run": (request, response) => {
		if (request.session.loggedin) {
			global.Manager.Db_manager.get_user(request.session.username).then(user_db => {
				user_db.get_posts().then(posts => {
					response.render("view_posts.pug", {
						"username": request.session.username,
						"posts": posts
					});
				});

			});

		} else {
			response.send("Пожалуйста авторизуйтесь");
		}
	}
};