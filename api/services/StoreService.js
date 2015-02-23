module.exports = {
   /**
   * `StoreService.getByName()`
   */
  getByName: function (storename, cb) {

	Store.findOne({name: storename}).exec(function(err, store){
		return cb(err, store);
	});
  },
};