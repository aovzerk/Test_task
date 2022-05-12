const Base = require("./Base");
const Post = require("./Post");
class User extends Base {
	constructor(db_result) {
		super(db_result);
	}
	get_posts() {
		return new Promise((resolve, reject) => {
			this.Model_db.getM_posts().then(posts => {
				const parse_posts = [];
				posts.forEach(post => {
					parse_posts.push(new Post(post));
				});
				resolve(parse_posts);
			});
		});
	}
	create_post(post_data) {
		return new Promise((resolve, reject) => {
			this.Model_db.createM_post({ "text": post_data.text }).then(() => resolve(true));
		});
	}
}
module.exports = User;