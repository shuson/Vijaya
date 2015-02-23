/**
* Product.js
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
	
	shortName: {
		type: 'string',
		required: true
	},
	
	description: {
		type: 'string',
		required: true
	},
	
    type : { 
    	type: 'string',
    	enum: ['Coffee', 'Juice', 'Chocolate'],
    	defaultsTo: 'Coffee'
    },
    price : { 
    	type: 'array',
    	required: true
    },
	storeName: {
		type: 'string',
		required: true
	},
    addons : { 
    	type: 'array'
    }
  }
};

