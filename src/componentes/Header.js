import Style from './css/Header.module.css'
import { Link } from 'react-router-dom';
import menu from '../img/menu.svg'
import logo from '../img/logo.svg'
import React, { useState } from 'react';

function Header(){

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);

      };
    return(
        <div className={Style.cabeçalho}>
            <header>
                <div className={Style.caixaE}>
                    <button className={Style.navbar} onClick={toggleMenu}>
                        <img src={menu} alt='menu' className={Style.menu} />
                    </button>
                </div>
                <div className={Style.caixaM}>
                    <img src={logo} alt='logo' className={Style.logo} />
                </div>
                <div className={Style.caixaD}>
                    <Link to={"/conta"}>
                        <button className={Style.entre}>Entre</button>
                    </Link>

                    <Link to={"/abrirConta"}>
                        <button className={Style.conta}>Abrir Conta</button>
                    </Link>
                </div>

            </header>
            <div className={`${Style.mobilemenu} ${isMenuOpen ? Style.open : ''}`}>
                <ul>
                    <li className={Style.navitem}><a href='#01'className={Style.navlink}>Cartão By Bank</a></li> <hr />
                    <li className={Style.navitem}><a href='#02' className={Style.navlink}>Serviços</a></li> <hr />
                    <li className={Style.navitem}><a href='#03' className={Style.navlink}>Vantagens</a></li> <hr />
                    <li className={Style.navitem}><a href='#04' className={Style.navlinks}>Aplicativo</a></li>
                    <Link to={"/conta"}>
                        <button className={Style.conta02}>Entre</button>
                    </Link>
                </ul>        
            </div>
        </div>
    )
}

export default Header