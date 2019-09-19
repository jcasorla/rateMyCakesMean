const mongoose = require('mongoose');
const Cake = mongoose.model('Cake');
const Comment = mongoose.model('Comment');

module.exports = {

	showCakes: function(req,res){
		Cake.find({},function(err,task){
            if (err){
                res.json(err);
            }
            else{
                res.json(task);
            }
        })
    },

	showCakeOne: function(req,res){
		Cake.findOne({_id:req.params.id},function(err,task){
            if (err){
                res.json(err);
            }
            else{
                res.json(task);
            }
		});
	},

	createCake: function(req,res){
       
		Cake.create(req.body, function(err, data){
			if (err){
                res.json(err);
            }
            else{
               res.json(data)
            }
        })
    },

    createComment: function(req,res){
        Comment.create(req.body, function(err, data){
            if (err){
                res.json(err);
            }
            else{
                Cake.findOneAndUpdate({_id:req.params.id}, {$push : {comment: data}}, function(err, data){
                    if (err){
                        res.json(err);
                    }
                    else{
                       res.json(data)
                    }
                })
               
                
            }
        })
    }
    
       

    // update: function(req,res){
    //     var id=req.params.id;

    //     Task.updateOne({_id:id}, {
    //     title: req.body.title,
    //     description: req.body.description,
    //     completed: req.body.completed
        
    // },function(err, data){
    //     if (err){
    //         res.json(err);
    //     }
    //     else{
    //        res.json(data)
    //     }})
       
    // },

	// remove: function(req,res){
	// 	Task.deleteOne({_id:req.params.id},function(err,task){
	// 		if(err){
	// 			res.json(err);
    //         }else{
    //             res.json(task);
    //         }
	// 	})
	// },
}
