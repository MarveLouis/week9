module.exports = function(app, db){
    const objectID =  require('mongodb').ObjectID;
    app.post('/api/crud/remove', function(req, res){
        db.collection("products").deleteOne({"_id": objectID(req.body._id)}, function(err, result) {
            if (err) throw err;
            console.log("//// Product " + req.body._id + " deleted ////" );
            res.send(true);
        });
    });    
}