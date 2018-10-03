module.exports = function(app, db){
    app.post('/api/crud/read', function(req, res){
        var resultArray = [];
        var cursor = db.collection('products').find();

        cursor.forEach(function(doc, err) {
            resultArray.push(doc);
        }, function() {
            var json = JSON.stringify(resultArray);
            console.log("//// Read complete ////");
            res.send(json);
        });

        
    });   
}