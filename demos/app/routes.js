var Product = require('./models/Product');

module.exports = function(app) {
    app.get('/api/products', function(req, res) {
        Product.find(function(err, items){
            if(err)
                res.send(err);

            res.json(items);
        });
    });

    app.get('/api/products/:id', function(req, res) {
        var id = req.param.id;

        Product.findOne({ id: id }, function(err, item){
            if(err)
                res.send(err);

            if(item)
                res.json(item);
            else
                res.json({ message: 'Produto não encontrado' });
        });
    });

    app.post('/api/products/', function(req, res) {
        var product = new Product();
        product.title = req.body.title;
        product.price = req.body.price;
        product.purchaseDate = req.body.purchaseDate || Date.Now();

        product.save(function(err, item){
            if(err)
                res.send(err);

            res.json(item);
        });
    });

    app.put('/api/products/:id', function(req, res) {
        var id = req.param.id;

        Product.findOne({ id: id }, function(err, product){
            if(err)
                res.send(err);

            product.title = req.body.title;
            product.price = req.body.price;
            product.purchaseDate = req.body.purchaseDate || Date.Now();

            product.save(function(err, item){
                if(err)
                    res.send(err);

                res.json(item);
            });
        });
    });

    app.delete('/api/products/:id', function(req, res) {
        var id = req.param.id;

        Product.findOne({ id: id }, function(err, product){
            if(err)
                res.send(err);

            product.remove(function(err){
                if(err)
                    res.send(err);

                res.json({ message: 'Produto excluído com sucesso!' });
            });
        });
    });
};