import { useEffect, useState } from "react";
import defaultImage from "../img/lanche.png";
import Popup from "../../../Popup/Popup"; // Importe o Popup
import "./style.css";

type Props = {
  title: string;
};

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

const Produto = ({ title }: Props) => {
  const [menu, setMenu] = useState<ApiResponse | null>(null);
  const [selectedItem, setSelectedItem] = useState<Item | null>(null); // Estado para armazenar o item selecionado
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  useEffect(() => {
    fetch("https://cdn-dev.preoday.com/challenge/menu")
      .then((response) => response.json())
      .then((json: ApiResponse) => setMenu(json))
      .catch((error) => console.error("Erro ao buscar menu", error));
  }, []);

  const openPopup = (item: Item) => {
    setSelectedItem(item);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedItem(null);
  };

  if (title === "Burgers") {
    return (
      <div>
        <div className="cardapiolist ">
          {menu?.sections[0]?.items.map((item) => (
            <div
              key={item.id}
              className="cardapio-item"
              onClick={() => openPopup(item)}
            >
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

        {/* Renderizar o popup se um item for selecionado */}
        {isPopupOpen && selectedItem && (
          <Popup onClose={closePopup} item={selectedItem} />
        )}
      </div>
    );
  } else if (title === "Drinks") {
    return (
      <div className="cardapiolist ">
        {menu?.sections[1]?.items.map((item) => (
          <div
            key={item.id}
            className="cardapio-item"
            onClick={() => openPopup(item)}
          >
            <div className="cardapio-infor " id="drinks">
              <h4>{item.name}</h4>
              <p>{item.description || "Sem descrição disponível"}</p>
              <h5>R$ {item.price.toFixed(2)}</h5>
            </div>
          </div>
        ))}
      </div>
    );
  } else {
    return null;
  }
};

export default Produto;
