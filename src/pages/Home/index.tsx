import React from "react";
import { useEffect, useState } from "react";
import "./styles.css";
import { getAllCharacters } from "../../services/api";

interface Character {
  name: string;
  id: number;
  resourceURI: string;
  description?: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

const Home: React.FC = () => {
  const [character, setCharacter] = useState<[Character]>();
  useEffect(() => {
    getAllCharacters((response: any) => {
      setCharacter(response);
    });
  }, []);

  return (
    <div className="container">
      {character &&
        character.map((character) => {
          return (
            <div className="hero-container">
              <div className="hero-card">
                <img
                  className="hero-card-image"
                  src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                  alt=""
                />
                <h3>{character.name}</h3>
              </div>
              <div className="hero-charts">Charts</div>
              <div className="hero-button"></div>
            </div>
          );
        })}
    </div>
  );
};
export default Home;
