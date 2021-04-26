const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const fruitsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
  },
  review: String,
});

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruits: fruitsSchema,
});

//create a model of the schema or collection
const Fruit = mongoose.model("Fruit", fruitsSchema);

const Person = mongoose.model("Person", personSchema);

// creating multiple objects in the collections
const banana = new Fruit({
  name: "banana",
  rating: 10,
  review: "pretty solid",
});

const person = new Person({
  name: "Abdullahi Adam",
  age: 13,
  favouriteFruits: banana,
});

banana.save();
person.save();

// const orange = new Fruit({ name: "Orange", rating: 10, review: "e try small" });
// const mango = new Fruit({ name: "Mango", rating: 7, review: "e no dey" });

// to insert into a collection many item

// Fruit.insertMany([apple, orange, mango], function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("successfully updated the collection");
//   }
// });

//update an object in a collection
//takes in a condition then a the parameter to update, and a callback function

// Fruit.updateOne(
//   { _id: "6086c1c70eebca2d4fddaebe" },
//   { name: "Peach" },
//   function (err) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("Succesfully updated");
//     }
//   }
// );

//delete an object in a collection
// Fruit.deleteOne({ name: "Peach" }, function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Succesfully deleted");
//   }
// });

//delete multiple objects in a collection
// Person.deleteMany({ name: "Abdullahi Adam" }, function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("successfully deleted");
//   }
// });

//retrieve data from a collection in database fruitsDB
// Fruit.find((err, fruits) => {
//   if (err) {
//     console.log(err);
//   } else {
//     mongoose.connection.close();
//     console.log(fruits);
//   }
// });
