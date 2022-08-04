import {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import axios from "axios";

interface ListProviderProps {
  children: ReactNode;
}

export interface Pokemons {
  id: string;
  name: string;
  image: string;
  subtypes: [];
  types: [];
  weaknesses: [];
  attacks: [];
}

interface ListProviderData {
  list: Pokemons[];
}

const ListContext = createContext<ListProviderData>({} as ListProviderData);

const useList = () => {
  const context = useContext(ListContext);

  return context;
};

const ListProvider = ({ children }: ListProviderProps) => {
  const [list, setList] = useState<Pokemons[]>([] as Pokemons[]);

  useEffect(() => {
    axios
      .get("https://api.pokemontcg.io/v2/cards")
      .then((response) => setList(response.data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <ListContext.Provider
      value={{
        list,
      }}
    >
      {children}
    </ListContext.Provider>
  );
};

export { ListProvider, useList };
