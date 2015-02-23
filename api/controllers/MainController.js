/**
 * MainController
 *
 * @description :: Server-side logic for managing Mains
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	
  /**
   * `MainController.helloworld()`
   */
  helloworld: function (req, res) {
    return res.json({
      todo: 'helloworld() is not implemented yet!'
    });
  },


  /**
   * `UserController.getFavStores()`
   */
  getFavStores: function (req, res) {
	var username = req.param('username');
	
    User.findOne({username: username}).exec(function(err, user){
		if(err){
			return res.json({message: err});
		}

		var favoProds = user.favoProducts;
		var storeNames = [];
		var stores = [];
		favoProds.forEach(function(favProd, index){
			if(favProd.prodId != '0' && storeNames.indexOf(favProd.storeName) < 0){
				storeNames.push(favProd.storeName);
			}			
		});
		
		storeNames.forEach(function(name){
			StoreService.getByName(name, function(err, store){
				if(err){
					return res.json({Message: err});
				}
				
				stores.push(store);
				if(stores.length == storeNames.length){
					return res.json({stores: stores});
				}
			});
		});
	});
  },

    /**
   * `UserController.getFavProducts()`
   */
  getFavProducts: function (req, res) {
	var username = req.param('username');
	var storename = req.param('storename');
	
    User.findOne({username: username}).exec(function(err, user){
		if(err){
			return res.json({message: err});
		}
		var favoProds = user.favoProducts;
		var products = [];
		favoProds.forEach(function(favProd, index){
			if(favProd.prodId != '0' && favProd.storeName == storename){
				products.push(favProd.prodId);
			}
		});
		return res.json({products: products});
	});
  },
};

