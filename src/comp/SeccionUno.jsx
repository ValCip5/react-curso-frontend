import React from 'react'

function SeccionUno() {
    return (
        <section className="seccionUno py-5 px-2">
            <div className="container py-4 pt-0">
            <figure>
                <img src="img/yo.png" alt="Valentín"/>
                <figcaption className="pt-3"><h2>SOY VALENTÍN</h2></figcaption>
            </figure>
                <div className="tengoLineas row mx-auto align-items-center">
                    <div className="linea">aaaa</div>
                    <i class="bi-caret-up-square"></i>
                    <div className="linea">aaaa</div>
                </div>
                <p className="pt-3">¡Aguante los bizcochuelos!</p>
            </div>
        </section>
    )
}

export default SeccionUno
