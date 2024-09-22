import React from "react";
import seta from "../img/icon.png";
import "./style.css";

type Props = {
  name: string;
};

const Cabecalho = ({ name }: Props) => {
  return (
    <div className="cabesalhoCardapio left">
      <h2>{name}</h2>
      <img className="icon" src={seta} alt="Ícone de seta" />
    </div>
  );
};

export default Cabecalho;
