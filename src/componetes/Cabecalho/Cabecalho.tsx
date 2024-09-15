import "./cabecalho.css";
import { useEffect, useState } from "react";

interface ApiResponse {
  webSettings: {
    bannerImage: string;
  };
}

const cabecalho = () => {
  const [banner, setBanner] = useState<ApiResponse | null>(null);

  useEffect(() => {
    fetch("https://cdn-dev.preoday.com/challenge/venue/9")
      .then((response) => response.json())
      .then((json) => setBanner(json))
      .catch((error) => console.error("Erro ao buscar banner", error));
  }, []);

  return (
    <header>
      <nav className="header-menu ">
        <ul>
          <li>
            <a href="" className="ativo">
              MENU
            </a>
          </li>
          <li>
            <a href="">ENTRA</a>
          </li>
          <li>
            <a href="">CONTATO</a>
          </li>
        </ul>
      </nav>
      <div className="banner">
        <img src={banner?.webSettings.bannerImage} alt="Banner" />
      </div>
    </header>
  );
};

export default cabecalho;
