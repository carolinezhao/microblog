// Connect to MongoDB
// 适用于 "mongodb": "^3.0.0" 以上版本

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
// Connection URL
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'microblog';

// Use connect method to connect to the server
// MongoClient.connect(url, function (err, client) {
//     assert.equal(null, err);
//     console.log("Connected successfully to server");
//     const db = client.db(dbName);
// });

// db 必须从 .connect 内部获取 client 后定义，不能拿到外面 TypeError: MongoClient.db is not a function

// 通用模块
module.exports = {
    connectToServer(fn) {
        MongoClient.connect(url, (err, client) => {
            assert.equal(null, err);
            console.log("Connected successfully to server (from db.js)");
            const db = client.db(dbName);
            return fn(err, client, db);
        });
    }
}