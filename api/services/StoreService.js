module.exports = {
   /**
   * `StoreService.getByName()`
   */
  getByName: function (storename, cb) {

	Store.findOne({name: storename}).exec(function(err, store){
		if(err){
			return err;
		}
		return cb(store);
	});
  },
};