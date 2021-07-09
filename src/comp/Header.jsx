import React from 'react';

function Header() {
    return (
        <header>
            <div className="res">
            <nav>
                <h1>
                    <a href="#"><img src="img/logo.svg" alt="Logo"/></a>
                </h1>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Quien Soy</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
                <div className="esconder">
                    <button><i className="bi-list"></i></button>
                </div>
            </nav>
            </div>
        </header>
    )
}

/*te fallé heber, no pude hacer el menu responsive, eso me pasa por no copiarme de los
menus hamburguesas que tengo antes*/

export default Header
