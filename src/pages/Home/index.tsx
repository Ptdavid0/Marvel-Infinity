import React from "react";
import { useEffect, useState } from "react";
import "./styles.css";
import MarvelApi from "../../services/api";

const Home: React.FC = () => {
  const [comics, setComics] = useState([]);

  useEffect(() => {
    MarvelApi.getAllComics((response: any) => {
      setComics(response.data.data.results);
    });
    console.log(comics);
  }, []);
  return <div>Home Page</div>;
};

export default Home;
