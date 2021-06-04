var config = require('config.json');
var _ = require('lodash');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var Q = require('q');
var mongo = require('mongoskin');

var db = mongo.db(config.connectionString, { native_parser: true });

var service = {};

service.authenticate = authenticate;
service.getAll = getAll;
service.getByCustomer = getByCustomer;
service.create = create;
service.update = update;
service.delete = _delete;
service.getByCafe = getByCafe;
module.exports = service;

function authenticate(username, password) {
    var deferred = Q.defer();
    // db.bind('users');
    db.collection('users').findOne({ username: username }, function(err, user) {
        if (err) deferred.reject(err.name + ': ' + err.message);

        if (user && bcrypt.compareSync(password, user.hash)) {
            // authentication successful
            deferred.resolve({
                _id: user._id,
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
                role: user.role,
                token: jwt.sign({ sub: user._id }, config.secret)
            });
        } else {
            // authentication failed
            deferred.resolve();
        }
    });

    return deferred.promise;
}

function getAll() {
    var deferred = Q.defer();
    // db.bind('users');
    db.collection('users').find().toArray(function(err, users) {
        if (err) deferred.reject(err.name + ': ' + err.message);

        // return users (without hashed passwords)
        users = _.map(users, function(user) {
            // console.log(user);
            // console.log('========== get all ========');
            return _.omit(user, 'hash');
        });

        deferred.resolve(users);
    });

    return deferred.promise;
}

function getByCafe(uid) {
    var deferred = Q.defer();
    //db.bind('users');
    db.collection('users').findOne({ _id: mongo.helper.toObjectID(uid) },
        function(err, user) {
            if (err) deferred.reject(err.name + ': ' + err.message);

            if (user) {
                deferred.resolve([{
                    _id: user._id,
                    username: user.username,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    cafeName: user.cafeName,
                    password: user.password,
                    address: user.address,
                    phone: user.phone,
                    totalSales: user.totalSales,
                    totalOfYear: user.totalOfYear,
                    totalOrders: user.totalOrders,
                    totalCustomers: user.totalCustomers,
                    img: user.img,
                    role: user.role,
                }]);
            } else {
                deferred.resolve();
            }
        });

    return deferred.promise;
}

function getByCustomer() {
    var deferred = Q.defer();
    console.log('here is getbyCustomer');
    db.collection('customer').find().toArray(function(err, customers) {
        if (err) deferred.reject(err.name + ': ' + err.message);

        // return users (without hashed passwords)
        customers = _.map(customers, function(customer) {
            // console.log(user);
            // console.log('========== get all ========');
            return _.omit(customer, 'hash');
        });

        deferred.resolve(customers);
    });

    /*
    db.customerDB.findOne({ _id: mongo.helper.toObjectID(uid) },
        function(err, user) {
            if (err) deferred.reject(err.name + ': ' + err.message);

            if (user) {
                deferred.resolve([{
                    _id: user._id,
                    username: user.username,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    cafeName: user.cafeName,
                    password: user.password,
                    address: user.address,
                    phone: user.phone,
                    totalSales: user.totalSales,
                    totalOfYear: user.totalOfYear,
                    totalOrders: user.totalOrders,
                    totalCustomers: user.totalCustomers,
                    img: user.img,
                    role: user.role,
                }]);

            } else {
                deferred.resolve();
            }
        });
*/
    return deferred.promise;
}

function create(userParam) {
    var deferred = Q.defer();
    // db.bind('users');

    // validation
    db.collection('users').findOne({ username: userParam.username },
        function(err, user) {
            if (err) deferred.reject(err.name + ': ' + err.message);

            if (user) {
                // username already exists
                deferred.reject('Username "' + userParam.username + '" is already taken');
            } else {
                createUser();
            }
        });

    function createUser() {
        // set user object to userParam without the cleartext password
        var user = _.omit(userParam, 'password');

        // add hashed password to user object
        user.hash = bcrypt.hashSync(userParam.password, 10);

        db.collection('users').insert(
            user,
            function(err, doc) {
                if (err) deferred.reject(err.name + ': ' + err.message);

                deferred.resolve();
            });
    }

    return deferred.promise;
}

function update(_id, userParam) {
    var deferred = Q.defer();
    // db.bind('users');
    // validation
    db.collection('users').findById(_id, function(err, user) {
        if (err) deferred.reject(err.name + ': ' + err.message);

        if (user.username !== userParam.username) {
            // username has changed so check if the new username is already taken
            db.users.findOne({ username: userParam.username },
                function(err, user) {
                    if (err) deferred.reject(err.name + ': ' + err.message);

                    if (user) {
                        // username already exists
                        deferred.reject('Username "' + req.body.username + '" is already taken')
                    } else {
                        updateUser();
                    }
                });
        } else {
            updateUser();
        }
    });

    function updateUser() {
        // fields to update
        var set = {
            firstName: userParam.firstName,
            lastName: userParam.lastName,
            username: userParam.username,
        };

        // update password if it was entered
        if (userParam.password) {
            set.hash = bcrypt.hashSync(userParam.password, 10);
        }

        db.users.update({ _id: mongo.helper.toObjectID(_id) }, { $set: set },
            function(err, doc) {
                if (err) deferred.reject(err.name + ': ' + err.message);

                deferred.resolve();
            });
    }

    return deferred.promise;
}

function _delete(_id) {
    var deferred = Q.defer();
    //  db.bind('users');
    db.collection('users').remove({ _id: mongo.helper.toObjectID(_id) },
        function(err) {
            if (err) deferred.reject(err.name + ': ' + err.message);

            deferred.resolve();
        });

    return deferred.promise;
}