import React from 'react';
import logo from '../../assets/img/busterflix.png'
import '../Menu/Menu.css'
import Button from '../Button/index'

function Menu(){
    return(
        <nav className="Menu">
            <a href="/">
           <img className='logo' src={logo} alt="musicians flix logo" />
           </a>

           <Button as="a" className="ButtonLink" href="/">
                Novo Vídeo
           </Button>

        </nav>
    );
}

export default Menu;