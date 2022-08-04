import { ListProvider } from "../contexts/ListProvider";

const Home = () => {
  return (
    <>
      <ListProvider>
        <h1>Hello</h1>
      </ListProvider>
    </>
  );
};

export default Home;
