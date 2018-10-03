module.exports = function(app, db){
    app.post('/api/crud/add', function(req, res){
       
        db.collection('products').insertOne(req.body.product, function(err, result){
            console.log('//// Products inserted ////');
            res.send(true);
        });
    });
}