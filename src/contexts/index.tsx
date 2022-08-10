import { ListProvider } from "./ListProvider";
import { TypesProvider } from "./TypesProvider";

function Providers({ children }: any) {
  return (
    <>
      <TypesProvider>
        <ListProvider>{children} </ListProvider>
      </TypesProvider>
    </>
  );
}

export default Providers;
