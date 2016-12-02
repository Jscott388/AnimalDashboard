var mongoose = require('mongoose');
var Animal = mongoose.model('Animal');

module.exports = {
    showAll: function(req, res){
        Animal.find({}, function(err, animals){
            console.log(animals);
            res.render('index', {animals: animals});
        });
    },
    showOne: function(req, res){
        Animal.find({_id: req.params.id}, function(err, animal){
            if (err) {console.log(err);}
            res.render('show', {animals: animal[0]});
        });
    },
    create: function(req, res){
        var animal = new Animal({
            name: req.body.name, weight: req.body.weight, lifespan: req.body.lifespan, habbitat: req.body.habbitat
        });
        animal.save(function(err){
            if(err){
                console.log('something went wrong');
            }else{
                console.log('successfully added a animal!');
                res.redirect('/');
            }
        });
    },
    edit: function(req, res){
        Animal.find({_id: req.params.id}, function(err, animal){
            if (err) {console.log(err);}
            res.render('edit', {animals: animal[0]});
        });
    },
    delete: function(req, res){
        Animal.remove({ _id: req.params.id }, function(err){
            if (err) { console.log(err);}
            res.redirect('/');
        });
    },
    update: function(req, res){
        Animal.update({_id: req.params.id}, {$set: req.body}, function(err){
            if (err) {console.log(err);}
            res.redirect('/');
        });
    }

};
