import React from 'react'

function Footer() {
    return (
        <footer>
            <div className="res">
                <ul>
                    <li>
                        <h3>LOCALIDAD</h3>
                        <p>Calle Falsa 123</p>
                    </li>
                    <li>
                        <h3>REDES SOCIALES</h3>
                        <a href="#"><i className="bi-facebook"></i></a>
                        <a href="#"><i className="bi-twitter"></i></a>
                        <a href="#"><i className="bi-instagram"></i></a>
                        <a href="#"><i className="bi-linkedin"></i></a>
                    </li>
                    <li>
                        <h3>SOBRE EL SITIO</h3>
                        <p>Me gustaron esos autos</p>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
