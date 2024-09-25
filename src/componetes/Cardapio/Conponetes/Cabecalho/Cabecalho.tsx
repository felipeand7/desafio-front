import React, { useState } from "react";
import seta from "../img/icon.png";
import "./style.css";

type Props = {
  name: string;
  children: React.ReactNode; // Os produtos serão passados aqui
};

const Cabecalho = ({ name, children }: Props) => {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar a visibilidade dos produtos

  const handleToggle = () => {
    setIsOpen(!isOpen); // Alterna entre aberto e fechado
  };

  return (
    <div className="cabecalho-container">
      <div className="cabesalhoCardapio" onClick={handleToggle}>
        <h2>{name}</h2>
        <img
          className={`icon ${isOpen ? "rotate" : ""}`} // Rotaciona a seta com base no estado
          src={seta}
          alt="Ícone de seta"
        />
      </div>

      {/* Exibe ou oculta os produtos com base no estado */}
      {isOpen && <div className="conteudoLanches">{children}</div>}
    </div>
  );
};

export default Cabecalho;
