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
        return res.json(stores);
    });
  },


  /**
   * `StoreController.query()`
   */
  query: function (req, res) {

    var params = req.params.all();

    Store.find({
      or: [
        {name: params.name}
      ]
    }).exec(function(err, store){
      return res.json(store);
    });

  },


  /**
   * `StoreController.create()`
   */
  create: function (req, res) {
    var params = req.params.all();

    var store = {
      name: params.name,
      brand: params.brand,
      address: params.address,
      postcode: params.postcode,
      type: "beverage"
    }

    Store.create(store).exec(function createCB(err, created){
        return res.json({
          notice: 'Created store with name ' + created.name
        });
      }
    );
  },


  /**
   * `StoreController.update()`
   */
  update: function (req, res) {
    return res.json({
      todo: 'update() is not implemented yet!'
    });
  },


  /**
   * `StoreController.delete()`
   */
  delete: function (req, res) {
    return res.json({
      todo: 'delete() is not implemented yet!'
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

