const db = require('../config/db.config.js');
const Customer = db.customers;
 

exports.create = (req, res) => {	

	Customer.create({  
	  firstname: req.body.firstname,
	  lastname: req.body.lastname,
	  age: req.body.age
	}).then(customer => {		
		
		res.send(customer);
	});
};
 

exports.findAll = (req, res) => {
	Customer.findAll().then(customers => {
	  
	  res.send(customers);
	});
};
 

exports.findById = (req, res) => {	
	Customer.findById(req.params.customerId).then(customer => {
		res.send(customer);
	})
};
 

exports.update = (req, res) => {
	const id = req.params.customerId;
	Customer.update( { firstname: req.body.firstname, lastname: req.body.lastname, age: req.body.age }, 
					 { where: {id: req.params.customerId} }
				   ).then(() => {
					 res.status(200).send("updated successfully a customer with id = " + id);
				   });
};
 

exports.delete = (req, res) => {
	const id = req.params.customerId;
	Customer.destroy({
	  where: { id: id }
	}).then(() => {
	  res.status(200).send('deleted successfully a customer with id = ' + id);
	});
};