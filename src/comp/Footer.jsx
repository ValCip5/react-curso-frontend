import React from 'react'

function Footer() {
    return (
        <footer className="px-2 py-5">
            <div class="container mx-auto py-4">
                <ul className="row text-center">
                    <li className="col-sm-12 col-md-4 pb-5"><h3 className="pb-2">LOCALIDAD</h3><p>Calle Falsa 123</p></li>
                    <li className="col-sm-12 col-md-4 pb-5"><h3 className="pb-2">REDES SOCIALES</h3><a href="#"><i class="bi-facebook"></i></a>
                    <a href="#"><i class="bi-twitter"></i></a><a href="#"><i class="bi-instagram"></i></a><a href="#"><i class="bi-linkedin"></i></a></li>
                    <li className="col-sm-12 col-md-4 pb-0"><h3 className="pb-2">SOBRE EL SITIO</h3><p>Me gustaron esos autos</p></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
