module.exports = function(app, db){
    const objectID =  require('mongodb').ObjectID;
    app.post('/api/crud/update', function(req, res){


        db.collection("products").updateOne({"_id": objectID(req.body._id)}, {"$set": req.body.product}, function(err, result) {
            if (err) throw err;
            console.log("//// Product updated ////");
            res.send(true);
        });

        
    });
}