import {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import axios from "axios";

interface TypesProviderProps {
  children: ReactNode;
}

/*
  export interface ListTypes {
    data: Array<string>;
  }
  */

interface TypesProviderData {
  listTypes: Array<string>;
  loadingTypes: boolean;
  type: string;
  setType: any;
}

const TypesContext = createContext<TypesProviderData>({} as TypesProviderData);

const useTypes = () => {
  const context = useContext(TypesContext);

  return context;
};

const TypesProvider = ({ children }: TypesProviderProps) => {
  const [listTypes, setListTypes] = useState([]);
  const [loadingTypes, setLoadingTypes] = useState(true);
  const [type, setType] = useState("");

  useEffect(() => {
    axios
      .get("https://api.pokemontcg.io/v2/types")
      .then((response) => setListTypes(response.data.data))
      .then(() => setLoadingTypes(false))
      .catch((err) => console.log(err));
  }, []);

  return (
    <TypesContext.Provider
      value={{
        listTypes,
        loadingTypes,
        type,
        setType,
      }}
    >
      {children}
    </TypesContext.Provider>
  );
};

export { TypesProvider, useTypes };
