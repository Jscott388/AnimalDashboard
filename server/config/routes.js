var animals = require('../controllers/animals.js')

module.exports = function(app){
    app.get('/', function(req, res) {
        animals.showAll(req, res);
    })
    app.get('/new', function(req, res){
        res.render('new');
    })
    app.post('/animal', function(req, res){
        animals.create(req, res);
    })
    app.get('/:id', function(req, res){
        animals.showOne(req, res);
    })
    app.get('/:id/edit', function(req, animal){
        animals.edit(req, animal);
    })
    app.post('/:id/delete', function(req, res){
        animals.delete(req, res);
    })
    app.post('/:id', function(req,res){
        animals.update(req, res)
    })
}
