/**
 * ProductController
 *
 * @description :: Server-side logic for managing Products
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	


  /**
   * `ProductController.index()`
   */
  index: function (req, res) {
	
	Product.find().exec(function(err, products){
        return res.json({stores: products});
    });
  },


  /**
   * `ProductController.create()`
   */
  create: function (req, res) {
	var product = req.body;
	console.log(product);
    Product.create(product).exec(function createCB(err, created){
        return res.json({
          message: created
        });
      }
    );
  },


  /**
   * `ProductController.query()`
   */
  query: function (req, res) {
	var id = req.param('id');
	Product.findOne({id: id}).exec(function(err, addon){
		if(err){
			return res.json({message: err});
		}
		return res.json(addon);
	});
  },


  /**
   * `ProductController.update()`
   */
  update: function (req, res) {
    var product = req.body;
	Product.update({id: product.id},{
		name: product.name,
		price: product.price,
		storeName: product.storeName,
		type: product.type
	}).exec(function(err, updated){
		if (err) {
			return res.json({message: err});
		}else{
			return res.json({message: updated});
		}
		console.log('Updated store to have name '+updated[0].name);		
	});
  },


  /**
   * `ProductController.deletete()`
   */
  delete: function (req, res) {
    var product = req.body;
	Product.destroy({id: product.id}).exec(function afterwards(err){
			if (err) {
				return res.json({message: err});
			}else{
				return res.json({message: "Success"});
			}
	});
  }
};

