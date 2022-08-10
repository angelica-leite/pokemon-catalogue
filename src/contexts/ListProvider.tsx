import {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import axios from "axios";
import { useTypes } from "./TypesProvider";

interface ListProviderProps {
  children: ReactNode;
}

export interface Pokemons {
  id: string;
  name: string;
  images: {
    small: string;
    large: string;
  };
  subtypes: [];
  types: Array<string>;
  weaknesses: [
    {
      type: string;
      value: string;
    }
  ];
  attacks: [
    {
      name: string;
      text: string;
    }
  ];
}

interface ListProviderData {
  list: Pokemons[];
  setList: any;
  loading: boolean;
}

const ListContext = createContext<ListProviderData>({} as ListProviderData);

const useList = () => {
  const context = useContext(ListContext);

  return context;
};

const ListProvider = ({ children }: ListProviderProps) => {
  const [list, setList] = useState<Pokemons[]>([] as Pokemons[]);
  const [loading, setLoading] = useState(true);

  const { type } = useTypes();

  const required = () => {
    axios
      .get("https://api.pokemontcg.io/v2/cards")
      .then((response) => setList(response.data.data))
      .then(() => setLoading(false))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    required();
  }, []);

  return (
    <ListContext.Provider
      value={{
        list,
        setList,
        loading,
      }}
    >
      {children}
    </ListContext.Provider>
  );
};

export { ListProvider, useList };
