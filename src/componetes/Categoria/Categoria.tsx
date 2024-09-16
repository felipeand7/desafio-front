import "./categoria.css";
import lanche from "./img/lanche.png";
import bebidas from "./img/bebidas.png";
import sobremesa from "./img/sobremesa.png";

const Categoria = () => {
  return (
    <header>
      <section>
        <div className="categoria  ativo">
          <img src={lanche} alt="" />
          <span>
            <a href="#">Burgers</a>
          </span>
        </div>
        <div className="categoria">
          <img src={bebidas} alt="" />
          <span>
            <a href="#">Drinks</a>
          </span>
        </div>
        <div className="categoria">
          <img src={sobremesa} alt="" />
          <span>
            <a href="#">Desserts</a>
          </span>
        </div>
      </section>
    </header>
  );
};

export default Categoria;
