import PokemonList from "../components/PokemonList";
import { ListProvider } from "../contexts/ListProvider";

export default function List() {
  return (
    <>
      <ListProvider>
        <PokemonList />
      </ListProvider>
    </>
  );
}
