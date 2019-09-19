const mongoose = require('mongoose');
const Cake = mongoose.model('Cake');
const Comment = mongoose.model('Comment');


const cake = require('../controllers/cake.js');

module.exports = function(app){

	app.get('/cakes', function(req, res) {
	    cake.showCakes(req,res);
	});

	app.get('/cakes/:id', function(req, res) {
	    cake.showCakeOne(req,res);
	});

	app.post('/cakes/create', function(req, res) {
	    cake.createCake(req,res);
	});

	app.post('/cakes/:id/comment', function(req, res) {
	    cake.createComment(req,res);
	});

	// app.delete('/tasks/delete/:id', function(req, res) {
	//     task.remove(req,res);
	// });
};