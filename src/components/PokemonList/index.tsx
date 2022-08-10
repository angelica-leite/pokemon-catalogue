import Image from "next/image";
import { Pokemons, useList } from "../../contexts/ListProvider";
import styles from "../../../styles/Home.module.css";
import { LoadingOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useTypes } from "../../contexts/TypesProvider";
import stylesCard from "../../../styles/card.module.css";
import Modal from "../Modal/modal";

export default function PokemonList() {
  const [modalIsOpen, setIsOpen] = useState<boolean>();
  const [pokemon, setPokemon] = useState<Pokemons>({} as Pokemons);

  const { list, loading } = useList();

  const { type } = useTypes();

  const filtered = list.filter((list) => list.types.includes(type));
  const handleCLick = (pokemon: any) => {
    setIsOpen(true);
    setPokemon(pokemon);
  };

  return (
    <>
      {loading ? (
        <div className={styles.loading}>
          <LoadingOutlined />
          <span>Carregando...</span>
        </div>
      ) : (
        <ul className={styles.li}>
          {filtered.map((pokemon) => (
            <li key={pokemon.id} className={stylesCard.key}>
              <p>{pokemon.name}</p>
              <Image
                src={pokemon.images.large}
                alt={pokemon.name}
                width={300}
                height={300}
                onClick={() => handleCLick(pokemon)}
              />
              <p>Subtype: {pokemon.subtypes}</p>
              {pokemon.attacks.map((atack, index) => (
                <p key={atack.name}>Attack: {atack.name}</p>
              ))}

              {pokemon.weaknesses.map((weakness) => (
                <p key={weakness.type}>Weaknesses: {weakness.type}</p>
              ))}
            </li>
          ))}
          {modalIsOpen ? (
            <Modal setIsOpen={setIsOpen} pokemon={pokemon} />
          ) : null}
        </ul>
      )}
    </>
  );
}
