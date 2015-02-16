/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	


  /**
   * `UserController.index()`
   */
  index: function (req, res) {
    User.find().exec(function(err, users){
        return res.json({users: users});
    });
  },


  /**
   * `UserController.query()`
   */
  query: function (req, res) {
	var username = req.param('username');
	
    User.findOne({username: username}).exec(function(err, user){
		if(err){
			return res.json({message: err});
		}
		return res.json(user);
	});
  },

	/**
	* `UserController.create()`
	*/
  create: function (req, res) {
	var user = req.body;
	
	User.create(user).exec(function(err, user){
		if(err){
			return res.json({message: err});
		}
		return res.json({message:'success'});
	})
  },

  /**
   * `UserController.update()`
   */
  update: function (req, res) {
    return res.json({
      todo: 'update() is not implemented yet!'
    });
  },


  /**
   * `UserController.delete()`
   */
  delete: function (req, res) {
    return res.json({
      todo: 'delete() is not implemented yet!'
    });
  }
};

