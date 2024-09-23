import Banner from "./componetes/Banner/Banner";
import Cabecalho from "./componetes/Cabecalho/Cabecalho";
import SearchMenu from "./componetes/SearchMenu/SearchMenu";
import Cardapio from "./componetes/Cardapio/Cardapio";
import Popup from "./componetes/Popup/Popup";
function App() {
  return (
    <div>
      <Cabecalho />
      <Banner />
      <SearchMenu />
      <Cardapio />
    </div>
  );
}

export default App;
