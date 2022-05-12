class Base_Model_manager {
	constructor(db_result) {
		this.Model_db = db_result;
	}
	get(value) {
		return this.Model_db.getDataValue(value);
	}
	set(value, data) {
		this.Model_db.setDataValue(value, data);
	}
	save() {
		return new Promise((resolve, reject) => {
			this.Model_db.save().then((new_Model) => {
				resolve(new_Model);
			}).catch(err => reject(err));
		});
	}
	delete() {
		return this.Model_db.destroy();
	}
}
module.exports = Base_Model_manager;