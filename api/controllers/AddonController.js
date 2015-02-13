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
	var addon = req.body;
	Addon.update({id: addon.id},{name: addon.name, price: addon.price}).exec(function afterwards(err,updated){
			if (err) {
				return res.json({message: err});
			}else{
				return res.json({message: updated});
			}
			console.log('Updated addon to have name '+updated[0].name);
	});
  },


  /**
   * `AddonController.deletete()`
   */
  delete: function (req, res) {
	var addon = req.body;
	Addon.destroy({id: addon.id}).exec(function afterwards(err){
			if (err) {
				return res.json({message: err});
			}else{
				return res.json({message: "Success"});
			}
	});
  }
};

