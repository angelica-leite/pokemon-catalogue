import Image from "next/image";
import Link from "next/link";
import LogoPokemon from "../../../public/assets/logoPokemon.png";
import Pokebola from "../../../public/assets/pokebola.png";
import styles from "../../../styles/Home.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div>
        <Image
          src={Pokebola}
          alt="Bola pokebola do Pokemon"
          width={110}
          height={60}
        />

        <Image
          src={LogoPokemon}
          alt="Logomarca Pokemon"
          width={200}
          height={100}
        />
      </div>
      <div>
        <ul className={styles.links}>
          <li className={styles.item}>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className={styles.item}>
            <Link href="/about">
              <a>Sobre</a>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
