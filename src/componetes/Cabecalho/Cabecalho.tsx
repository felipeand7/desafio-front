import React, { useState } from "react";
import "./cabecalho.css";

const Cabecalho: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const menu = [
    { name: "MENU", link: "#" },
    { name: "ENTRA", link: "#entra" },
    { name: "CONTATO", link: "#contato" },
  ];

  return (
    <nav className="header-menu">
      <ul>
        {menu.map((item, index) => (
          <li key={index}>
            <a
              className={activeIndex === index ? "ativo" : ""}
              href={item.link}
              onClick={() => setActiveIndex(index)}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Cabecalho;
