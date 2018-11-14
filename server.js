var express = require('express');
var app = express();
var db = require('./database')

var cors = require('cors');
app.use(cors())



var bodyParser = require('body-parser');

app.use(bodyParser.json()); //รับ json เข้ามา
app.use(bodyParser.urlencoded({
    extended: true
}));

// Add routing
// index page



app.get('/', function (req, res) {
    res.send('Express is running');
});



var output = {
    status: 'success',
    message: 'REST API is working'
}

app.get('/api/json' , function (req, res) {
        res.status(500).json(output);
    });
//products
app.get('/api/products/',db.getAllProducts);
app.get('/api/products/:id', db.getProductByID);
app.post('/api/products/', db.insertProduct);
app.put('/api/products/:id', db.updateProduct);
app.delete('/api/products/:id', db.deleteProduct);


//Users
app.get('/api/users/', db.getUser);
app.get('/api/users/:id', db.getUserByID);
app.post('/api/users', db.insertUsers);
app.put('/api/users/:id', db.updateUsers);
app.delete('/api/users/:id', db.deleteUsers);

//purchases
app.get('/api/purchases/', db.getAllPurchases);
app.get('/api/purchases/:id', db.getPurchasesByID);
app.post('/api/purchases', db.insertPurchases);
app.put('/api/purchases/:id', db.updatePurchases);
app.delete('/api/purchases/:id', db.deletePurchases);

//purchase_items
app.get('/api/purchase_items/', db.getAllPurchase_items);
app.get('/api/purchase_items/:id', db.getPurchase_itemsByID);
app.post('/api/purchase_items', db.insertPurchase_items);
app.put('/api/purchase_items/:id', db.updatePurchase_items);
app.delete('/api/purchase_items/:id', db.deletePurchase_items);


var port = process.env.PORT || 8080;
app.listen(port, function () {
    console.log('App is running on http://localhost:' + port);
});