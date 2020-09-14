import React from "react";
import { useEffect, useState } from "react";
import "./styles.css";
import { getAllCharacters } from "../../services/api";
import Card from "../../components/Card";

interface Character {
  name: string;
  id: number;
  recourceURI: string;
  description?: string;
}

const Home: React.FC = () => {
  const [character, setCharacter] = useState<[Character]>();
  useEffect(() => {
    getAllCharacters((response: any) => {
      setCharacter(response.data.data.results);
    });
    console.log(character);
  }, []);

  return (
    <div>
      {character &&
        character.map((character) => {
          return <Card character={character} key={character.id} />;
        })}
    </div>
  );
};
export default Home;
