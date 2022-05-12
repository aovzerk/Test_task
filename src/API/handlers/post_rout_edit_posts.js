module.exports = {
	"rout_path": "/edit_post/:id_post",
	"method": "post",
	"run": (request, response) => {
		if (request.session.loggedin) {
			global.Manager.Db_manager.get_user(request.session.username).then(user_db => {
				user_db.get_posts().then(posts => {
					for (const post of posts) {
						if (post.get("Id") == Number(request.params["id_post"])) {
							post.set("text", request.body.post_text);
							post.save().then(() => null);
							break;
						}
					}
				});
			});
			response.redirect("/posts");
		} else {
			response.send("Пожалуйста авторизуйтесь");
		}
	}
};