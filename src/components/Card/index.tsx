import React from "react";
import { useEffect, useState } from "react";
import { getCharacterInfo } from "../../services/api";

import "./styles.css";

interface Character {
  name: string;
  id: number;
  recourceURI?: string;
  description?: string;
}

interface Props {
  character: Character;
  children?: JSX.Element;
  key: number;
}

const Card: React.FC<Props> = (props) => {
  const [characterInfo, setCharacterInfo] = useState();
  useEffect(() => {
    getCharacterInfo(props.character.id, (response: any) => {
      setCharacterInfo(response);
      console.log(response);
    });
  }, []);
  return <div>{props.character.name}</div>;
};

export default Card;

// Como estamos mostrando 100 na tela por vez, quando abrimos a home, sao feitas 100 chamadas diferentes para a API. Temos que fazer com que apenas uma chamada seja feita, ja que iremos usar aquele template.
