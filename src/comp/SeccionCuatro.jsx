import React from 'react';
import Form from 'react-bootstrap/Form';

function SeccionCuatro() {
    return (
        <section className="seccionCuatro py-5 px-2">
            <div className="py-4">
                <div className="col-sm-9 col-md-7 mx-auto px-2">
                <h2 className="text-center pb-2">
                    CONTACTO
                </h2>
                <Form className="pt-4">
                    <div className="row">
                        <Form.Group className="mb-3 col-sm-12 col-md-6" controlId="exampleForm.ControlInput1">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control className="p-3" type="name" placeholder="Nombre" />
                        </Form.Group>
                        <Form.Group className="mb-3 col-sm-12 col-md-6" controlId="exampleForm.ControlInput1">
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control className="p-3" type="sname" placeholder="Apellido" />
                        </Form.Group>
                    </div>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email</Form.Label>
                        <Form.Control className="p-3" type="email" placeholder="Email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Mensaje</Form.Label>
                        <Form.Control className="p-3" as="textarea" placeholder="Tu mensaje..." rows={8} />
                    </Form.Group>
                    <div className="container text-center pt-4">
                        <input className="enviar px-5 py-3" type="submit" name="submit" value="Enviar"/>
                    </div>
                </Form>

            </div>
            </div>
        </section>
    )
}

export default SeccionCuatro
