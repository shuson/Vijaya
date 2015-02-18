/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': {
    view: 'homepage'
  },
  '/admin/*': {
		policy: 'sessionAuth'
  },
  '/admin': {
		view: 'admin'
   },

  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  *  If a request to a URL doesn't match any of the custom routes above, it  *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/

   /**
  * User RESTful APIs
  *
  **/
 
  'GET /admin/users': {
	view: 'users'
  },
  
  'GET /users': {
    controller: 'User',
    action: 'index'
  },
 
  'POST /User/create': {
    controller: 'User',
    action: 'create'
  },

  'PUT /User/update': {
    controller: 'User',
    action: 'update'
  },
  
  'GET /User/:username': {
    controller: 'User',
    action: 'query'
  },
  
  'DELETE /User/delete': {
    controller: 'User',
    action: 'delete'
  },
  
  /**
  * Store RESTful APIs
  *
  **/
 
  'GET /admin/Stores': {
	view: 'stores'
  },
  
  'GET /Stores': {
    controller: 'Store',
    action: 'index'
  },
 
  'POST /Store/create': {
    controller: 'Store',
    action: 'create'
  },

  'PUT /Store/update': {
    controller: 'Store',
    action: 'update'
  },
  
  'GET /Store/:id': {
    controller: 'Store',
    action: 'query'
  },
  
  'GET /Store/byname/:storename': {
    controller: 'Store',
    action: 'getByName'
  },
  
  'DELETE /Store/delete': {
    controller: 'Store',
    action: 'delete'
  },
  
  /**
  *	Products RESTful APIs and Backend Admin routes
  **/
  
  'GET /admin/Products/:store': {
	view: 'products'
  },
  
  'GET /Products': {
	controller: "Product",
	action: 'index'
  },
  
  'GET /Product/:id': {
	controller: "Product",
	action: 'query'
  },
  
  'GET /Products/:store': {
	controller: "Product",
	action: 'queryByStore'
  },
  
  'POST /Product/create': {
	controller: "Product",
	action: 'create'
  },
  
  'PUT /Product/update': {
	controller: "Product",
	action: 'update'
  },
  
  'DELETE /Product/delete': {
	controller: "Product",
	action: 'delete'
  },
  
  /**
  *	Addons RESTful APIs and Backend Admin routes
  **/
  
  'GET /admin/addons': {
	view: 'addons'
  },
  
  'GET /Addons': {
	   controller: "Addon",
	   action: 'index',	
  },
  
  'GET /Addon/:id': {
	   controller: "Addon",
	   action: 'query',	
  },
  
  'POST /addon/create': {
      controller: "Addon",
      action: 'create'
  },
  
  'PUT /addon/update': {
      controller: "Addon",
      action: 'update'
  },
  
  'DELETE /addon/delete': {
      controller: "Addon",
      action: 'delete'
  },
  
  /**
  * custom url
  */
  
  'GET /favstores/:username' :{
	  controller: 'User',
	  action: 'getFavStores'
  },
  
  'POST /auth/login': {
	  controller: 'Auth',
	  action: 'login'
  }
};
