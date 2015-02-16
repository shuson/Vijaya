/**
 * StoreController
 *
 * @description :: Server-side logic for managing Stores
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	


  /**
   * `StoreController.index()`
   */
  index: function (req, res) {

    Store.find().exec(function(err, stores){
        return res.json({stores: stores});
    });
  },


  /**
   * `StoreController.query()`
   */
  query: function (req, res) {
	var id = req.param('id');
	Store.findOne({id: id}).exec(function(err, store){
		if(err){
			return res.json({message: err});
		}
		return res.json(store);
	});
  },


  /**
   * `StoreController.create()`
   */
  create: function (req, res) {
    var store = req.body;

    Store.create(store).exec(function createCB(err, created){
        return res.json({
          message: created
        });
      }
    );
  },


  /**
   * `StoreController.update()`
   */
  update: function (req, res) {
	var store = req.body;
	Store.update({id: store.id},{
		name: store.name,
		brand: store.brand,
		address: store.address,
		type: store.type
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
   * `StoreController.delete()`
   */
  delete: function (req, res) {
	var store = req.body;
	Store.destroy({id: store.id}).exec(function afterwards(err){
			if (err) {
				return res.json({message: err});
			}else{
				return res.json({message: "Success"});
			}
	});
  },

  /**
   * `StoreController.test()`
   */
  test: function (req, res) {
    return res.json({
      todo: 'test() is not implemented yet!'
    });
  },
};

