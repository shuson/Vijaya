/**
 * AddonController
 *
 * @description :: Server-side logic for managing Addons
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	


  /**
   * `AddonController.index()`
   */
  index: function (req, res) {
    Addon.find().exec(function(err, addons){
        return res.json({addons: addons});
    });
  },

  /**
   * `AddonController.create()`
   */
  create: function (req, res) {

    var addon = req.body;
    console.log(addon);
    if(addon && addon.name || addon.price){
      Addon.create(addon).exec(function(err, addon){
          if(err){
            return res.json({message: err});
          }
          return res.json({message: addon});
      });
    }
    if(!addon){
       return res.json({
          message: 'Data is invalid!'
      });
    }  
  },


  /**
   * `AddonController.query()`
   */
  query: function (req, res) {
    return res.json({
      todo: 'query() is not implemented yet!'
    });
  },


  /**
   * `AddonController.update()`
   */
  update: function (req, res) {
    return res.json({
      todo: 'update() is not implemented yet!'
    });
  },


  /**
   * `AddonController.deletete()`
   */
  deletete: function (req, res) {
    return res.json({
      todo: 'deletete() is not implemented yet!'
    });
  }
};

