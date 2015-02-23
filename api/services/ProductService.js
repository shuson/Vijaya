module.exports = {
   /**
   * `ProductService.getById()`
   */
  getById: function (prodId, cb) {
	Product.findOne({id: prodId}).exec(function(err, product){
		return cb(err, product);
	});
  },
};