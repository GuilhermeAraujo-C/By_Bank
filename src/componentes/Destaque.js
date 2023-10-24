import Style from './css/Destaque.module.css'
import Pessoa from '../img/destaque.svg'
import { Link } from 'react-router-dom'

function Destaque(){
    return(
        <section className={Style.caixa}>
            <div className={Style.esquerda}>
                <h1>By Bank</h1>
                <h2>O caminho para o seu Sucesso financeiro.</h2>
                <Link to={'/abrirConta'}>
                    <button className={Style.Button1}>Abrir minha conta</button>
                </Link>
            </div>
            <div className={Style.direita}>
                <img src={Pessoa} alt='Pessoa preta' />
            </div>
        </section>
    )
}

export default Destaque