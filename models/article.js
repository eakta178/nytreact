const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: { type: String, required: true },
  date: { type: Date, default: Date.now },
  url: {type: String},
  note: {type: Schema.Types.ObjectId,ref: "Note"}
});


const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
