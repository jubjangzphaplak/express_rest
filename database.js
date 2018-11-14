const pgp = require('pg-promise')();
var db = pgp('postgres://lalsbkqxiqldvm:aebb8c07d42d0aacfef5a02069165d73072a39d7ac23a3aaad1aa949bd65f3da@ec2-23-21-171-249.compute-1.amazonaws.com:5432/d982h3jv1i41pv?ssl=true');

// Add queries here
function getAllProducts(req, res) {
    db.any('select * from products')
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ALL products'
                });
        })

        .catch(function (error) {
            console.log('ERROR:', error)
        })
}


function getProductByID(req, res) {
    db.any('select * from products where id =' + req.params.id)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved products id:' +
                        req.params.id
                });
        })
        .catch(function (error) {
            res.status(500)
                .json({
                    status: 'failed',
                    message: 'Failed to retrieved products id:' + req.params.id
                });
            console.log('ERROR:', error)
        })
}


function insertProduct(req, res) {
    db.none('insert into products(id, title, price, created_at, tags)' +
        'values(${id}, ${title}, ${price}, ${created_at}, ${tags})',
        req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Inserted one product'
                });
        })
        .catch(function (error) {
            res.status(500)
                .json({
                    status: 'failed',
                    message: 'Failed to retrieved products id:' + req.params.id
                });
            console.log('ERROR:', error)
        })
}


function updateProduct(req, res) {
    db.none('update products set id=${id},title=${title},price=${price},tags=${tags} ' +
        'where id=' + req.params.id, req.body)

        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'update one product'
                });
        })
        .catch(function (error) {
            res.status(500)
                .json({
                    status: 'failed',
                    message: 'Failed to retrieved products id:' + req.params.id
                });
            console.log('ERROR:', error)
        })
}

function deleteProduct(req, res) {
    db.none('delete from products where id=' + req.params.id)

        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'DELETE one product'
                });
        })
        .catch(function (error) {
            res.status(500)
                .json({
                    status: 'failed',
                    message: 'Failed to retrieved products id:' + req.params.id
                });
            console.log('ERROR:', error)
        })
}



//USER
function getUser(req, res) {
    db.any('select * from users')
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ALL User'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}

function getUserByID(req, res) {
    db.any('select * from users where id =' + req.params.id)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved Purchase_items id:' + req.params.id
                });
        })
        .catch(function (error) {
            res.status(500)
                .json({ status: "fail", message: "Fail" })
            console.log('ERROR:', error)
        })
}

function insertUsers(req, res) {
    db.none('insert into users(id, email, password, created_at)' +
        'values(${id}, ${email}, ${password}, ${created_at})',
        req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Inserted one users'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}
function updateUsers(req, res) {
    db.none('update users set id=${id} ,email= ${email},password= ${password},created_at= ${created_at}' + 'where id=' + req.params.id, req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Update one users'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}
function deleteUsers(req, res) {
    db.none('delete from users' + 'where id=' + req.params.id)

        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Delete one users'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}

//purchases
function getAllPurchases(req, res) {
    db.any('select * from purchases')
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ALL purchases'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}

function getPurchasesByID(req, res) {
    db.any('select * from purchases where id =' + req.params.id)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved purchases id:' +
                        req.params.id
                });
        })
        .catch(function (error) {
            res.status(500)
                .json({
                    status: 'failed',
                    message: 'Failed to retrieved purchases id:' + req.params.id
                });
            console.log('ERROR:', error)
        })
}
function insertPurchases(req, res) {
    db.none('insert into purchases(id, created_at, name, address, zipcode)' +
        'values(${id}, ${created_at}, ${name}, ${address}, ${zipcode})',
        req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Inserted one purchases'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}
function updatePurchases(req, res) {
    db.none('update purchases set id=${id} ,created_at= ${created_at},name= ${name}, address= ${address}, zipcode= ${zipcode}' + 'where id=' + req.params.id, req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Update one purchases'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}
function deletePurchases(req, res) {
    db.none('delete from purchases' + 'where id=' + req.params.id)

        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Delete one purchases'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}

function getAllPurchase_items(req, res) {
    db.any('select * from purchase_items')
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ALL purchase_items'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}
function getPurchase_itemsByID(req, res) {
    db.any('select * from purchase_items where id =' + req.params.id)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved purchase_items id:' +
                        req.params.id
                });
        })
        .catch(function (error) {
            res.status(500)
                .json({
                    status: 'failed',
                    message: 'Failed to retrieved purchase_items id:' + req.params.id
                });
            console.log('ERROR:', error)
        })
}
function insertPurchase_items(req, res) {
    db.none('insert into purchase_items(id, purchase_id, product_id, price, quantity)' +
        'values(${id}, ${purchase_id}, ${product_id}, ${price}, ${quantity})',
        req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Inserted one Purchase_items'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}
function updatePurchase_items(req, res) {
    db.none('update purchase_items set id=${id} ,purchase_id= ${purchase_id},product_id= ${product_id}, price= ${price}, quantity= ${quantity}' + 'where id=' + req.params.id, req.body)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Update one purchase_items'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}
function deletePurchase_items(req, res) {
    db.none('delete from purchase_items' + 'where id=' + req.params.id)

        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Delete one purchase_items'
                });
        })
        .catch(function (error) {
            console.log('ERROR:', error)
        })
}






module.exports = {
    getAllProducts,
    getProductByID,
    insertProduct,
    updateProduct,
    deleteProduct,
    getUser,
    getUserByID,
    insertUsers,
    updateUsers,
    deleteUsers,
    getAllPurchases,
    getPurchasesByID,
    insertPurchases,
    updatePurchases,
    deletePurchases,

     getAllPurchase_items,
     getPurchase_itemsByID,
     insertPurchase_items,
     updatePurchase_items,
     deletePurchase_items



};