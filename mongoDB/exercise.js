var mongo = require("mongodb");
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://10.102.250.99:27017/users";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  console.log(db.serverConfig)
  db.close();
});

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  db.createCollection("qqq", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var myobj = {"_id":2,"product_id":156,"status":1}
//   db.collection("test").insertOne(myobj, function(err, res) {
//     if (err) throw err;
//     console.log(res);
//     db.close();
//   });
// });

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var myobj = [
//     { name: "Egg", age: 10 },
//     { name: "Benson", age: 45 },
//     { name: "Mary", age: 6 },
//     { name: "Faker", age: 24 },
//   ];
//   db.collection("users").insertMany(myobj, function(err, res) {
//     if (err) throw err;
//     console.log("Number of documents inserted: " + res.insertedCount);
//     db.close();
//   });
// });

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   db.collection("position").findOne({"name":"kevin09882016@gmail.com"}, function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// });

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var query = {"age": 24};
//   db.collection("users").find({}).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
//   // db.collection("users").find(query,{"_id": false,"name": true}).toArray(function(err, result) {
//   //   if (err) throw err;
//   //   console.log(result);
//   //   db.close();
//   // });
// });

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var mysort = { name: 1 };
//   db.collection("users").find({ "age": { $gt: 30 } }).sort(mysort).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// });

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var myquery = { "name": "flower" };
//   db.collection("users").deleteOne(myquery, function(err, obj) {
//     if (err) throw err;
//     console.log("1 document deleted");
//     db.close();
//   });
// });

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var myquery = { "name": /^F/ };
//   db.collection("users").deleteMany(myquery, function(err, res) {
//     if (err) throw err;
//     console.log(res.result.n + " document(s) deleted");
//     // console.log(res.deletedCount);
//     db.close();
//   });
// });

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   db.collection("student").drop(function(err, delOK) {
//     if (err) throw err;
//     if (delOK) console.log("Collection deleted");
//     db.close();
//   });
// });

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   db.dropCollection("customers", function(err, delOK) {
//     if (err) throw err;
//     if (delOK) console.log("Collection deleted");
//     db.close();
//   });
// });

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   console.log("DBDBDBDBDB")
//   console.log(db)
//   // var myobj = {"_id":2,"product_id":156,"status":1}
//   var myquery = { "_id": 2};
//   var newvalues = { $set: {"product_id":133}};
//   db.collection("test").updateOne(myquery, newvalues, function(err, res) {
//     if (err) throw err;
//     console.log("RESRESRESRESRESRES")
//     console.log(res);
//     db.close();
//   });
// });

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var myquery = { "name": "Orange" };
//   var newvalues = { $set: { "grade": 1} };
//   db.collection("users").updateOne(myquery, newvalues, function(err, res) {
//     if (err) throw err;
//     console.log(res);
//     db.close();
//   });
// });

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   // var myquery = { "name": /^E/ };
//   var myquery = {"age": {$gt: 10}}
//   // var newvalues = {$set: {"position": {"lat":24,"lng":122}} };
//   var newvalues = {$unset: {"position": 1} };
//   db.collection("users").updateMany(myquery, newvalues, function(err, res) {
//     if (err) throw err;
//     console.log(res.result.nModified + " document(s) updated");
//     db.close();
//   });
// });

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   db.collection("users").find().limit(5).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// });

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var myquery = { "age": { $gt: 8 } }
//   db.collection("users").find(myquery).limit(5).toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
//     db.close();
//   });
// });

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   db.collection('orders').aggregate([
//     { $lookup:
//        {
//          from: 'products',
//          localField: 'product_id',
//          foreignField: '_id',
//          as: 'orderdetails'
//        }
//      }
//     ], function(err, res) {
//     if (err) throw err;
//     console.log(JSON.stringify(res));
//     db.close();
//   });
// });