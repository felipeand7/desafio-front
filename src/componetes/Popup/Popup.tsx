import React from "react";
import defaultImage from "../Cardapio/Conponetes/img/lanche.png"; // Importe a imagem padrão
import "./style.css";

type Props = {
  onClose: () => void;
  item: {
    name: string;
    description: string;
    price: number;
    images: { image: string }[];
  };
};

const Popup: React.FC<Props> = ({ onClose, item }) => {
  return (
    <div id="popup-overlay" onClick={onClose}>
      <div id="popup" onClick={(e) => e.stopPropagation()}>
        {item.images && item.images.length > 0 ? (
          <img src={item.images[0].image} alt={item.name} />
        ) : (
          <img src={defaultImage} alt="Imagem padrão" />
        )}
        <h2>{item.name}</h2>
        <p>{item.description}</p>

        <div>
          <button>Add to Order {` • R$ ${item.price.toFixed(2)}`}</button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
