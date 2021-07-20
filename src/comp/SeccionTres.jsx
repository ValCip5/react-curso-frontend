import React from 'react'

function SeccionTres() {
    return (
        <section className="seccionTres px-2 py-5">
            <div className="container pt-4">
                <h2 className="text-center">PORTFOLIO</h2>
                <div className="pt-5 text-center">
                    <ul className="row">
                        <li className="col-sm-12 col-md-6 col-lg-4 p-4 pt-0">
                        <figure className="pt-3 pb-0">
                                <img src="img/mercedes.png" alt="Sauber Mercedes C9"/>
                                <figcaption className="pt-3"><h3 className="py-3">Sauber Mercedes C9</h3></figcaption>
                            </figure>
                        </li>
                        <li className="col-sm-12 col-md-6 col-lg-4 p-4 pt-0">
                        <figure className="pt-3 pb-0">
                                <img src="img/nissan.png" alt="Nissan R92C"/>
                                <figcaption className="pt-3"><h3 className="py-3">Nissan R92C</h3></figcaption>
                            </figure>
                        </li>
                        <li className="col-sm-12 col-md-6 col-lg-4 p-4 pt-0">
                        <figure className="pt-3 pb-0">
                                <img src="img/mazda.png" alt="Mazda Renown"/>
                                <figcaption className="pt-3"><h3 className="py-3">Mazda Renown</h3></figcaption>
                            </figure>
                        </li>
                        <li className="col-sm-12 col-md-6 col-lg-4 p-4 pt-0">
                        <figure className="pt-3 pb-0">
                                <img src="img/toyota.png" alt="Toyota 88CV"/>
                                <figcaption className="pt-3"><h3 className="py-3">Toyota 88CV</h3></figcaption>
                            </figure>
                        </li>
                        <li className="col-sm-12 col-md-6 col-lg-4 p-4 pt-0">
                        <figure className="pt-3 pb-0">
                                <img src="img/peugeot.png" alt="Peugeot 905"/>
                                <figcaption className="pt-3"><h3 className="py-3">Peugeot 905</h3></figcaption>
                            </figure>
                        </li>
                        <li className="col-sm-12 col-md-6 col-lg-4 p-4 pt-0">
                        <figure className="pt-3 pb-0">
                                <img src="img/jaguar.png" alt="Jaguar XJR-9"/>
                                <figcaption className="pt-3"><h3 className="py-3">Jaguar XJR-9</h3></figcaption>
                            </figure>
                        </li>
                    </ul>
                </div>
            </div> 
        </section>
    )
}

export default SeccionTres
