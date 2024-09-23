import React from "react";
import Categoria from "./Conponetes/Categoria/Categoria";
import Cabecalho from "./Conponetes/Cabecalho/Cabecalho";
import Produtos from "./Conponetes/Produto/Produtos";
import Carrinho from "./Conponetes/Carrinho/Carrinho";

import "./style.css";
const Cardapio = () => {
  return (
    <header>
      <div id="left">
        <Categoria />
        <Cabecalho name="Burgers" />
        <Produtos title="Burgers" />
        <Cabecalho name="Drinks" />
        <Produtos title="Drinks" />
      </div>
      <Carrinho />
    </header>
  );
};

export default Cardapio;
