import styles from "../../../styles/List.module.css";
import { Pokemons } from "../../contexts/ListProvider";

interface Props {
  setIsOpen: any;
  pokemon: Pokemons;
}

const Modal: React.FC<Props> = (props) => {
  return (
    <div className={styles.customStyles}>
      <div className={styles.modal}>
        <button className={styles.close} onClick={() => props.setIsOpen(false)}>
          &times;
        </button>
        {props.pokemon.attacks.map((atack) => (
          <div key={atack.name} className={styles.container}>
            <h3 className={styles.p}>Attack: {atack.name}</h3>
            <p key={atack.text} className={styles.p}>
              Description: {atack.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Modal;
