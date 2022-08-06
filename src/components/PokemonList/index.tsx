import Image from "next/image";
import { useList } from "../../contexts/ListProvider";

export default function PokemonList() {
  const { list, loading } = useList();

  console.log(list);
  //FRAQUEZAS
  //<p>{pokemon.weaknesses.map((el) => el.type).toString()}</p>

  //ATAQUES
  //<p>{pokemon.attacks.map((el) => el.name).toString()}</p>

  return (
    <>
      {loading ? (
        <h1>Carregando...</h1>
      ) : (
        <ul>
          <li>
            {list.map((pokemon) => (
              <div key={pokemon.id}>
                <p>{pokemon.name}</p>
                <Image
                  src={pokemon.images.large}
                  alt={pokemon.name}
                  width="200px"
                  height="200px"
                />
                <p>{pokemon.subtypes}</p>
              </div>
            ))}
          </li>
        </ul>
      )}
    </>
  );
}
