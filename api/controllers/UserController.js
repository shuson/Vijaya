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
	console.log(user)
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
    var user = req.body;
	User.update({id: user.id}, user).exec(function(err, updated){
		if (err) {
			return res.json({message: err});
		}else{
			return res.json({message: updated});
		}
		console.log('Updated User to have name '+updated[0].username);		
	});
  },


  /**
   * `UserController.delete()`
   */
  delete: function (req, res) {
    var user = req.body;
	User.destroy({id: user.id}).exec(function afterwards(err){
			if (err) {
				return res.json({message: err});
			}else{
				return res.json({message: "Success"});
			}
	});
  }
};

