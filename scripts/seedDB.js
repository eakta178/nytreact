const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/nyreact",
  {
    useMongoClient: true
  }
);

const articleSeed = [
  {
    title: "The New News",
    url: "https://www.google.com",
    date: new Date(Date.now())
  },
  
];

db.Article
  .remove({})
  .then(() => db.Artcile.collection.insertMany(articleSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
