/**
 * AuthController
 *
 * @description :: Server-side logic for managing Auths
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	


  /**
   * `AuthController.login()`
   */
  login: function (req, res) {
	var userInfo = req.body;
	
	if(userInfo.username == 'admin'){
		if(userInfo.password == 'cGFzc3dvcmQ='){
			req.session.authenticated = true;
			return res.json({success:true});
		}
	}
	
    return res.json({
      success: false
    });
  },


  /**
   * `AuthController.logout()`
   */
  logout: function (req, res) {
    return res.json({
      todo: 'logout() is not implemented yet!'
    });
  },


  /**
   * `AuthController.register()`
   */
  register: function (req, res) {
    return res.json({
      todo: 'register() is not implemented yet!'
    });
  }
};

