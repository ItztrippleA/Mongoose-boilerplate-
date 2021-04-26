const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const fruitsSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String,
});

const Fruit = mongoose.model("Fruit", fruitsSchema);

const apple = new Fruit({
  name: "Apple",
  rating: 9,
  review: "pretty solid",
});

const orange = new Fruit({ name: "Orange", rating: 10, review: "e try small" });
const mango = new Fruit({ name: "Mango", rating: 7, review: "e no dey" });

Fruit.insertMany([apple, orange, mango], function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("successfully updated the collection");
  }
});

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
  name: "Abdullahi Adam",
  age: 13,
});
person.save();
//fruit.save();

Fruit.find((err, fruits) => {
  if (err) {
    console.log(err);
  } else {
    console.log(fruits);
  }
});

const findDocuments = function (db, callback) {
  // Get the documents collection
  const collection = db.collection("fruits");
  // Find some documents
  collection.find({}).toArray(function (err, fruits) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(fruits);
    callback(fruits);
  });
};
