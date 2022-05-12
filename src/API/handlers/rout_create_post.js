module.exports = {
	"rout_path": "/create_post",
	"method": "get",
	"run": (request, response) => {
		if (request.session.loggedin) {
			response.render("create_post.pug", {
				"username": request.session.username
			});

		} else {
			response.send("Пожалуйста авторизуйтесь");
		}
	}
};