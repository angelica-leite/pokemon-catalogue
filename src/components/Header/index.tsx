import Image from "next/image";
import Link from "next/link";
import LogoPokemon from "../../../public/assets/logoPokemon.png";
import Pokebola from "../../../public/assets/pokebola.png";

export default function Header() {
  return (
    <header>
      <nav>
        <div>
          <Image
            src={Pokebola}
            alt="Bola pokebola do Pokemon"
            width={100}
            height={50}
          />

          <Image
            src={LogoPokemon}
            alt="Logomarca Pokemon"
            width={200}
            height={100}
          />
        </div>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>Sobre</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
