import Link from "next/link";
import styles from "../../../styles/Home.module.css";
import { LoadingOutlined } from "@ant-design/icons";
import Image from "next/image";
import { useTypes } from "../../contexts/TypesProvider";

export default function FilterTypes(): JSX.Element {
  const { listTypes, loadingTypes, setType } = useTypes();

  return (
    <section className={styles.main}>
      <h1 className={styles.title}>Escolha o tipo de Pokémon:</h1>
      {loadingTypes ? (
        <div className={styles.loading}>
          <LoadingOutlined width="5em" height="5em" />
          <span>Carregando...</span>
        </div>
      ) : (
        <ul className={styles.li}>
          {listTypes.map((type, index) => (
            <li className={styles.types} key={index}>
              <Image
                src={require(`../../../public/assets/${type}.png`)}
                width={150}
                height={120}
                alt={`ìcone do tipo do Pokémon ${type}`}
              />
              <Link href="/list">
                <button className={styles.button} onClick={() => setType(type)}>
                  {type}
                </button>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
