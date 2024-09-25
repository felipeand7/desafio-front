import Categoria from "./Conponetes/Categoria/Categoria";
import Cabecalho from "./Conponetes/Cabecalho/Cabecalho";
import Produtos from "./Conponetes/Produto/Produtos";
import Carrinho from "./Conponetes/Carrinho/Carrinho";
import "./style.css";

const Cardapio: React.FC = () => {
  return (
    <header>
      <div id="left">
        <Categoria />
        <Cabecalho name="Burgers">
          <Produtos title="Burgers" />
        </Cabecalho>
        <Cabecalho name="Drinks">
          <Produtos title="Drinks" />
        </Cabecalho>
      </div>
      <Carrinho />
    </header>
  );
};

export default Cardapio;
