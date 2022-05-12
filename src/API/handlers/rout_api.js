module.exports = {
	"rout_path": "/api",
	"method": "get",
	"run": (request, response) => {
		global.Manager.Db_manager.get_user(request.query.user_name).then(user_db => {
			if (!user_db) return response.send("Incorrect Username");
			const res_obj = {
				"username": request.query.user_name,
				"posts": []
			};
			user_db.get_posts().then(posts => {
				posts.forEach(post => {
					res_obj.posts.push({ "Id": post.get("Id"), "text": post.get("text") });
				});
				response.send(res_obj);
			});
		});
	}
};