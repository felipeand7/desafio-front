import React from "react";
import "./style.css";

type Props = {};

const Carrinho = (props: Props) => {
  return (
    <div id="carrinho">
      <div className="item">
        <h3>Carrinho</h3>
      </div>
      <p>Seu carrinho está vazio</p>
    </div>
  );
};

export default Carrinho;
