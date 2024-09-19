import lanche from "./img/lanche.png";
import bebidas from "./img/bebidas.png";
import sobremesa from "./img/sobremesa.png";
import seta from "./img/icon.png";
import { useEffect, useState } from "react";
import "./cardapio.css";

interface ItemImage {
  id: number;
  image: string;
}

interface Item {
  id: number;
  name: string;
  description: string;
  price: number;
  images: ItemImage[];
}

interface Section {
  id: number;
  name: string;
  items: Item[];
}

interface ApiResponse {
  sections: Section[];
}

const defaultImage = "caminho/para/imagem/padrao.png"; // Defina uma imagem padrão

const Cardapio = () => {
  const [menu, setMenu] = useState<ApiResponse | null>(null);

  const categoria = [
    { name: "Burgers", img: lanche },
    { name: "Drinks", img: bebidas },
    { name: "Desserts", img: sobremesa },
  ];

  useEffect(() => {
    fetch("https://cdn-dev.preoday.com/challenge/menu")
      .then((response) => response.json())
      .then((json: ApiResponse) => setMenu(json))
      .catch((error) => console.error("Erro ao buscar menu", error));
  }, []);

  return (
    <header>
      <div id="left">
        <section className="categorialist">
          {categoria.map((item, index) => (
            <div
              className={`categoria ${index === 0 ? "ativo" : ""}`}
              key={index}
            >
              <img src={item.img} alt={item.name} />
              <span>
                <a href={`#${item.name.toLowerCase()}`}>{item.name}</a>
              </span>
            </div>
          ))}
        </section>

        <section className="cardapio">
          <div className="cabesalhoCardapio">
            <h2>Burgers</h2>
            <img className="icon" src={seta} alt="Ícone de seta" />
          </div>

          <div className="cardapiolist">
            {menu?.sections
              .find((section) => section.name === "Burgers")
              ?.items.map((item) => (
                <div key={item.id} className="cardapio-item">
                  <div className="cardapio-infor">
                    <h4>{item.name}</h4>
                    <p>
                      {item.description.length > 58
                        ? item.description.slice(0, 58) + "..."
                        : item.description}
                    </p>
                    <h5>R$ {item.price.toFixed(2)}</h5>
                  </div>
                  {item.images && item.images.length > 0 ? (
                    <img src={item.images[0].image} alt={item.name} />
                  ) : (
                    <img src={defaultImage} alt="Imagem padrão" />
                  )}
                </div>
              ))}
          </div>
        </section>
        <section>
          <div className="cabesalhoCardapio">
            <h2>Drinks</h2>
            <img className="icon" src={seta} alt="Ícone de seta" />
          </div>
        </section>
      </div>

      <div id="right">
        <section>
          <h1>oi</h1>
        </section>
      </div>
    </header>
  );
};

export default Cardapio;
