module.exports = function(app, db){
    app.post('/api/crud/create', function(req, res){

        db.createCollection("products", function(err, result) {
            if (err) throw err;
            console.log("//// Collection created ////");
            
            var products = 
            [   
                {
                    prodId: "1",
                    name: "mouse",
                    type: "peripheral",
                    desc: "pointing device for pc"
                },

                {
                    prodId: "2",
                    name: "screen",
                    type: "peripheral",
                    desc: "display device for pc"
                },

                {
                    prodId: "3",
                    name: "keyboard",
                    type: "peripheral",
                    desc: "typing device for pc"
                },
            ];

            db.collection('products').insertMany(products, function(err, result){
                console.log('//// Products inserted ////');
                res.send(true);
            });
            
        });

       
    });
}