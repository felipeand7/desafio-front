import "./cabecalho.css";

const cabecalho = () => {
  const menu = [
    { name: "MENU", link: "/" },
    { name: "ENTRA", link: "/" },
    { name: "CONTATO", link: "/" },
  ];

  return (
    <nav className="header-menu ">
      <ul>
        {menu.map((menu, link) => (
          <li key={link}>
            <a className={link === 0 ? "ativo" : ""} href={menu.link}>
              {menu.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default cabecalho;
