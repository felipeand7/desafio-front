import React, { useState } from "react";
import lanche from "../img/lanche.png";
import bebidas from "../img/bebidas.png";
import sobremesa from "../img/sobremesa.png";
import "./style.css";

const Categoria: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const categoria = [
    { name: "Burgers", img: lanche },
    { name: "Drinks", img: bebidas },
    { name: "Desserts", img: sobremesa },
  ];

  return (
    <section className="categorialist">
      {categoria.map((item, index) => (
        <div
          className={`categoria ${activeIndex === index ? "ativo" : ""}`}
          key={index}
          onClick={() => setActiveIndex(index)}
        >
          <img src={item.img} alt={item.name} />
          <span>
            <a href={`#${item.name.toLowerCase()}`}>{item.name}</a>
          </span>
        </div>
      ))}
    </section>
  );
};

export default Categoria;
