module.exports = {
	"rout_path": "/edit_post/:id_post",
	"method": "get",
	"run": (request, response) => {
		if (request.session.loggedin) {
			global.Manager.Db_manager.get_user(request.session.username).then(user_db => {
				user_db.get_posts().then(posts => {
					for (const post of posts) {
						if (post.get("Id") == Number(request.params["id_post"])) {
							response.render("edit_post.pug", {
								"username": request.session.username,
								"post_text": post.get("text")
							});
							break;
						}
					}
				});
			});
		} else {
			response.send("Пожалуйста авторизуйтесь");
		}
	}
};