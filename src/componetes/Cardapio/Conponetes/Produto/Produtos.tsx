import React, { useEffect, useState } from "react";
import defaultImage from "../img/lanche.png";
import "./style.css";
type Props = {};

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

const Produto = (props: Props) => {
  const [menu, setMenu] = useState<ApiResponse | null>(null);

  useEffect(() => {
    fetch("https://cdn-dev.preoday.com/challenge/menu")
      .then((response) => response.json())
      .then((json: ApiResponse) => setMenu(json))
      .catch((error) => console.error("Erro ao buscar menu", error));
  }, []);

  return (
    <div className="cardapiolist left">
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
  );
};

export default Produto;
