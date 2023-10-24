import Style from './css/BaixeApp.module.css'
import celular from '../img/celular.svg'
import download from '../img/download.svg'

function Aplicativo(){
    return(
        <section id='04' className={Style.caixa4}>
            <h3>Nosso Aplicativo</h3>

            <div className={Style.container}>

                <div className={Style.imagem}>
                    <img src={celular} alt='Celular' />
                </div>

                <div className={Style.container01}>
                    <div className={Style.download}>
                        <div className={Style.img1}>
                            <img src={download} alt='icone download' />
                            <h4>Baixe o App By Bank!</h4>
                        </div>
                        <div className={Style.img1}>
                            <img src={download} alt='icone download' />
                            <h4>Abra sua conta</h4>
                        </div>
                        <div className={Style.img1}>
                            <img src={download} alt='icone download' />
                            <h4>Gerencie o seu financeiro</h4>
                        </div>
                    </div>

                    <button className={Style.button5}>Baixe o app</button>
                </div>

            </div>

        </section>
    )
}

export default Aplicativo