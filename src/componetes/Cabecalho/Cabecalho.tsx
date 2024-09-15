import "./cabecalho.css";

const cabecalho = () => {
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
    </header>
  );
};

export default cabecalho;
