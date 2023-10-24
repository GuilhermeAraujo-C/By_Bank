import Style from './css/Footer.module.css'
import logo from '../img/logo2.svg'

function Footer(){
    return(
        <footer>
            <div className={Style.logotipo}>
                <img src={logo} alt='Logo By Bank' />
                <hr />
                <h6>© Guilherme Araújo - 2023</h6>
            </div>
        </footer>
    )
}

export default Footer