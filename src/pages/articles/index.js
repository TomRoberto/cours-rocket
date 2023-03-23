import axios from "axios";
import Article from "@/models/Article";
import connectPageToDB from "@/middlewares/connectPageToDB";

const ArticlePage = ({ data }) => {
  return (
    <div>
      {data.map((article, index) => {
        return (
          <div key={index}>
            <p>{article.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ArticlePage;

// export const getServerSideProps = async () => {
//   //   const { data } = await axios.get("http://localhost:3000/api/article");
//   await connectPageToDB();
//   const articles = await Article.find();
//   return {
//     props: {
//       data: JSON.parse(JSON.stringify(articles)),
//     },
//   };
// };

export const getStaticProps = async () => {
  //   const { data } = await axios.get("http://localhost:3000/api/article");
  await connectPageToDB();
  const articles = await Article.find();
  return {
    props: {
      data: JSON.parse(JSON.stringify(articles)),
    },
  };
};
