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
            </nav>
            </div>
        </header>
    )
}

export default Header
