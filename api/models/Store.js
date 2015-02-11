/**
* Store.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

   attributes: {

    name : { 
    	type: 'string',
    	required: true,
    	unique: true
    },

    brand : { 
    	type: 'string',
    	required: true 
    },

    address : { type: 'string' },

    postcode : { type: 'string' },

    type : { 
    	type: 'string',
    	enum: ['Beverage', 'Food', 'Desert'],
    	defaultsTo: 'Beverage'
	},

	products: {
		type: 'array'
	}
  }
};
