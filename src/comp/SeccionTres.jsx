import React from 'react'

function SeccionTres() {
    return (
        <section className="seccionTres">
        <div className="res">
            <h2>CONTACTO</h2>
            <form action="#">
                <fieldset>
                    <div className="nombreApellido">
                        <div className="espacioInput">
                        <label for="fname">First name:</label>
                        <input type="text" id="fname" name="fname" placeholder="Nombre"/>
                        </div>
                        <div className="espacioInput">
                        <label for="lname">Last name:</label>
                        <input type="text" id="lname" name="lname" placeholder="Apellido"/>
                        </div>
                    </div>
                    <div>
                        <div className="espacioInput">
                        <label for="lname">Last name:</label>
                        <input type="text" id="lname" name="lname" placeholder="Email"/>
                        </div>
                        <div className="espacioInput">
                            <textarea name="mensaje" id="mensaje" rows="10" placeholder="Tu mensaje..."></textarea>
                        </div>
                        <div className="espacioInput">
                            <input type="submit" name="submit" value="Enviar" />
                        </div>
                    </div>
                </fieldset>
            </form>
        </div>
        </section>
    )
}

export default SeccionTres
