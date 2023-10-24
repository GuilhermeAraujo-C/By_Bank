import Style  from './css/Entre.module.css'
import mulher from '../img/mulherPreta.svg'
import Logo from '../img/Logo44.svg'
import Logo2 from '../img/logo002.svg'
import seta from '../img/seta.svg'
import { Link } from 'react-router-dom'

function Entre(){
    return(
        <main className={Style.Main}>
            <section className={Style.oConteudo}>
                <div className={Style.mulherPreta}>
                    <Link to={"/"}>
                        <img src={Logo} alr='Logo' className={Style.aLogo} />
                    </Link>
                </div>

                <div className={Style.container001}>

                <Link to={"/"}>
                    <img src={Logo2} alr='Logo' className={Style.aLogo1} />
                </Link>

                    <div className={Style.Entrar}>

                        <div className={Style.Forms}>
                            <h3>Acesse sua conta</h3>

                            <form>
                                <label>CPF</label> <br />
                                <input type="text" /><br />
                            
                                <label className={Style.label1}>Senha</label> <br />
                                <input type="password" /><br />
                            </form>

                            <div className={Style.divButton}>
                                <div className={Style.seta}>
                                    <h6>Continuar</h6>
                                    <img src={seta} alt='Seta' />
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className={Style.Link}>
                        <p>Esqueci a senha</p>
                        <Link to={'/abrirConta'}>
                            <p>Não tenho conta</p>
                        </Link> 
                    </div>

                </div>
            </section>
        </main>
    )
}

export default Entre