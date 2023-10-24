import Style from './css/Vantagens.module.css'
import icon from '../img/icon1.svg'
import icon2 from '../img/icon2.svg'
import icon3 from '../img/icon3.svg'
import icon4 from '../img/money.svg'
import { Link } from 'react-router-dom'


function Vantagem(){
    return(
        <section id='03' className={Style.caixa3}>
            <div className={Style.conteudo1}>
                <div className={Style.c1}>
                    <img src={icon} alt='Mão com dinheiro' />
                    <p>A conta digital By Bank é <bdi>100% segura</bdi> e estamos investindo continuamente em recursos para garantir a segurança dos nossos clientes.</p>
                </div>
                <div className={Style.c1}>
                    <img src={icon2} alt='Mão com dinheiro' />
                    <p>O By Bank oferece todos os serviços <bdi>financeiros</bdi> que você precisa na palma da sua mão</p>
                </div>
                <div className={Style.c1}>
                    <img src={icon3} alt='Mão com dinheiro' />
                    <p>O By Bank é a <bdi>melhor conta digital</bdi> para guardar dinheiro.</p>
                </div>
                <div className={Style.c1}>
                    <img src={icon4} alt='Mão com dinheiro' />
                    <p>Com o <bdi>cartão de crédito</bdi> By Bank,
                        você só paga o que gasta e pode
                        ajustar seu próprio limite.</p>
                </div>
            </div>

            <div className={Style.conteudo2}>
                <h3>Vantagens em ter uma conta <bdi>By Bank</bdi></h3>
                <Link to={'/abrirConta'}>
                    <button className={Style.button3}>Abrir minha conta</button>
                </Link>
            </div>
        </section>
    )
}

export default Vantagem