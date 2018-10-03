module.exports = function(app, db){
    app.post('/api/crud/search', function(req, res){
        
        
        var resultArray = [];
        var cursor = db.collection('products').find();

        cursor.forEach(function(doc, err) {
            if (doc.name.includes(req.body.searchProduct) || doc.desc.includes(req.body.searchProduct)){
                resultArray.push(doc);
            }
        }, function() {
            var json = JSON.stringify(resultArray);
            console.log("//// Read complete ////");
            res.send(json);
        });

    });   
}