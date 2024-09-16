import "./cabecalho.css";

const cabecalho = () => {
  return (
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
  );
};

export default cabecalho;
