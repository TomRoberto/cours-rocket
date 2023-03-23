import { useRouter } from "next/router";

const ArticleId = ({ id }) => {
  return <div>ArticleId {id}</div>;
};

export default ArticleId;

export const getServerSideProps = (context) => {};
