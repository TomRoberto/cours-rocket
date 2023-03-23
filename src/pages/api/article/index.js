import Article from "@/models/Article";
import connectDB from "@/middlewares/connectDB";

const handler = async (req, res) => {
  const method = req.method;
  switch (method) {
    case "GET":
      const articles = await Article.find();
      res.json(articles);
  }
};

export default connectDB(handler);
