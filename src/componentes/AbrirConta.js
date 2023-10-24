import Style from './css/AbrirConta.module.css'
import mulher from '../img/mulherPreta.svg'
import Logo from '../img/Logo44.svg'
import Logo2 from '../img/logo002.svg'
import seta from '../img/seta.svg'
import { Link } from 'react-router-dom'

function AbrirConta() {
    return (
        <main className={Style.Main}>
        <section className={Style.oConteudo2}>
            <div className={Style.mulherPreta}>
                <Link to={"/"}>
                    <img src={Logo} alr='Logo' className={Style.aLogo} />
                </Link>
            </div>

                <div className={Style.Entrar2}>

                <Link to={"/"}>
                    <img src={Logo2} alr='Logo' className={Style.aLogo1} />
                </Link>

                    <div className={Style.Forms2}>
                        <h3>Acesse sua conta</h3>

                        <form>
                            <label>CPF</label> <br />
                            <input type="text" /><br />

                            <label>Nome e sobrenome</label> <br />
                            <input type="text" /><br />

                            <label>E-mail</label> <br />
                            <input type="email" /><br />

                            <label>Celular</label> <br />
                            <input type="text" /><br />
                        
                            <label>Data de nascimento</label> <br />
                            <input type="date" /><br />
                        </form>

                        <div className={Style.divButton2}>
                            <div className={Style.seta2}>
                                <h6>Continuar</h6>
                                <img src={seta} alt='Seta' />
                            </div>
                        </div>
                    </div>
                    
            </div>
        </section>
    </main>
    )
}

export default AbrirConta;