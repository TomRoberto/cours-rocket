import axios from "axios";
import Link from "next/link";

const Pokemon = ({ data }) => {
  return (
    <div>
      {data.map((pokemon, index) => {
        return (
          <div key={index}>
            <Link href={`/pokemon/${index + 1}`}>
              <p>{pokemon.name}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Pokemon;

// export const getServerSideProps = async () => {
//   let dataToSend = [];
//   try {
//     const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon");
//     console.log(data);
//     dataToSend = data.results;
//   } catch (error) {
//     console.log(error.message);
//   }
//   return {
//     props: {
//       data: dataToSend,
//     },
//   };
// };

export const getStaticProps = async () => {
  let dataToSend = [];
  try {
    const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon");
    console.log(data);
    dataToSend = data.results;
  } catch (error) {
    console.log(error.message);
  }
  return {
    props: {
      data: dataToSend,
    },
    // revalidate: 10,
  };
};
