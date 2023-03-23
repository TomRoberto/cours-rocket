import axios from "axios";
import Image from "next/image";

const PokemonId = ({ data }) => {
  return (
    <div>
      <p>{data.name}</p>
      <Image
        src={data.sprites.front_default}
        height={100}
        width={100}
        alt="pokemon"
      />
    </div>
  );
};

export default PokemonId;

// export const getServerSideProps = async (context) => {
//   console.log(context.params);
//   let dataToSend = [];
//   try {
//     const { data } = await axios.get(
//       `https://pokeapi.co/api/v2/pokemon/${context.params.id}`
//     );
//     dataToSend = data;
//   } catch (error) {
//     console.log(error.message);
//   }
//   return {
//     props: {
//       data: dataToSend,
//     },
//   };
// };

export const getStaticPaths = async () => {
  try {
    const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon/");

    const paths = data.results.map((pokemon, index) => {
      return { params: { id: String(index + 1) } };
    });
    return {
      paths,
      fallback: "blocking",
    };
  } catch (error) {
    console.log(error.message);
  }
};

export const getStaticProps = async (context) => {
  console.log(context.params);
  let dataToSend = [];
  try {
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${context.params.id}`
    );
    dataToSend = data;
  } catch (error) {
    console.log(error.message);
  }
  return {
    props: {
      data: dataToSend,
    },
  };
};
