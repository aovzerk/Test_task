module.exports = {
	"rout_path": "/",
	"method": "get",
	"run": (request, response) => {
		const response_obj = {
			"username": "Вы не авторизованы",
			"paths": [
				"/",
				"/api?user_name=name",
				"/static/create_user.html",
				"/static/login.html"
			]
		};
		if (request.session.loggedin) {
			response_obj.username = request.session.username;
		}
		response.send(response_obj);
	}
};