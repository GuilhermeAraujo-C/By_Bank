import Style from './css/Home.module.css'
import Aplicativo from "./BaixeApp";
import Cartão from "./Cartão";
import Destaque from "./Destaque";
import Serviços from "./Serviços";
import Vantagem from "./Vantagens";


function App() {
  return (
      <main>
        <Destaque /> 
        <Cartão />
        <Serviços />
        <Vantagem />
        <Aplicativo />  
      </main>
      
  );
}

export default App;
