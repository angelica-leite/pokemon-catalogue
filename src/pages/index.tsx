import FilterTypes from "../components/FilterTypes";
import Header from "../components/Header";
import PokemonList from "../components/PokemonList";
import { ListProvider } from "../contexts/ListProvider";

const Home = () => {
  return (
    <>
      <Header />
      <ListProvider>
        <FilterTypes />
      </ListProvider>
    </>
  );
};

export default Home;
