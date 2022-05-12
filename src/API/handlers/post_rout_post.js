module.exports = {
	"rout_path": "/posts",
	"method": "post",
	"run": (request, response) => {
		if (request.session.loggedin) {
			response.redirect(`edit_post/${request.body.id_post}`);
		} else {
			response.send("Пожалуйста авторизуйтесь");
		}
	}
};