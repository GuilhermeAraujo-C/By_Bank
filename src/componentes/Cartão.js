import Style from './css/Cartão.module.css'
import cartao from '../img/cartão.svg'

function Cartão(){
    return(
        <section id='01' className={Style.caixa1}>
            <div className={Style.cartao}>
                <img src={cartao} alt='cartão azul degrade'/>
            </div>
            <div className={Style.text}>
                <h3>Peça seu cartão By Bank e juntos a gente descomplica o crédito</h3>
                <p>O cartão de crédito By Bank é sem anuidade, você <br/> só paga o que gasta e pode ajustar seu limite <br/> direito pelo aplicativo.</p>
                <button className={Style.button2}>Pedir meu cartão</button>
            </div>
        </section>
    )
}

export default Cartão
