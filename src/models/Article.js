import { Schema, model, models } from "mongoose";

const articleSchema = new Schema({
  title: String,
  text: String,
});

const Article = models.Article || model("Article", articleSchema);

export default Article;
