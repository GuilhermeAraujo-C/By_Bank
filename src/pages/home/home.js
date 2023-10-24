import Style from './home.module.css'
import Aplicativo from '../../componentes/BaixeApp';
import Cartão from '../../componentes/Cartão';
import Destaque from '../../componentes/Destaque';
import Footer from '../../componentes/Footer';
import Header from '../../componentes/Header';
import Serviços from '../../componentes/Serviços';
import Vantagem from '../../componentes/Vantagens';


function Home() {
    return (
        <div className={Style.homer}>
            <Header />
            <Destaque />
            <Cartão />
            <Serviços />
            <Vantagem />
            <Aplicativo />
            <Footer />
        </div>
    );
}

export default Home;
