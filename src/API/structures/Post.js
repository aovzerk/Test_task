const Base = require("./Base");
class Post extends Base {
	constructor(db_result) {
		super(db_result);
	}
}
module.exports = Post;