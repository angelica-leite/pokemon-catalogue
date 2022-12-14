import Image from "next/image";
import Header from "../components/Header";
import Pikachu from "../../public/assets/pikachu.png";
import Charmander from "../../public/assets/charmander.png";
import Squirtle from "../../public/assets/squirtle.png";
import styles from "./../../styles/About.module.css";

export default function About() {
  return (
    <>
      <Header />
      <section className={styles.container}>
        <div className={styles.div}>
          <h2> Objetivo</h2>

          <p className={styles.p}>
            O objetivo deste desafio é treinar competências técnicas e criar uma
            interface adequada envolvendo o ambiente de desenvolvimento React.Ts
            com Next, Less, Axios e Ant.Design.
          </p>
          <Image
            src={Pikachu}
            alt="Imagem do pokemon Pikachu"
            width={158}
            height={234}
          />
        </div>

        <div className={styles.div}>
          <h2>Proposta</h2>

          <p className={styles.p}>
            A proposta do desafio é criar um catálogo do card game de Pokémon.
          </p>
          <Image
            src={Charmander}
            alt="Imagem do pokemon Charmander"
            width={158}
            height={234}
          />
        </div>

        <div className={styles.div}>
          <h2>Requisitos</h2>

          <p className={styles.p}>
            Todas as interações serão feitas com a API do pokemonTCG.io.
          </p>
          <Image
            src={Squirtle}
            alt="Imagem do pokemon Squirtle"
            width={158}
            height={234}
          />
        </div>
      </section>
    </>
  );
}
