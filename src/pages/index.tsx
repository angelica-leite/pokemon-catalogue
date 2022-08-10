import { NextPage } from "next";
import FilterTypes from "../components/FilterTypes";
import Header from "../components/Header";
import styles from "./../../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />
      <FilterTypes />
    </div>
  );
};

export default Home;
