import "./SearchMenu.css";

const SearchMenu: React.FC = () => {
  return (
    <div className="search">
      <form method="text" action="#">
        <img src="/src/componetes/SearchMenu/img/LeftIcon.png" alt="" />
        <input type="text" name="busca" placeholder="Faça sua Pesquisa" />
      </form>
    </div>
  );
};

export default SearchMenu;
