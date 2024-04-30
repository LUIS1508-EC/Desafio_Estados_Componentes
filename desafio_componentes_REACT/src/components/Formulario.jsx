import { useState } from "react"
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./formulario.css";

function Formulario(props) {
    const [nombre, setNombre] = useState("")
    const [correo, setCorreo] = useState("")
    const [clave, setClave] = useState("")
    const [confirmaClave, setConfirmaClave] = useState("")

    const handleSubmit = (e) => {

        e.preventDefault();
        if (nombre === "" || correo === "" || clave === "" || confirmaClave === "") {
            props.setAlerta({
                error: true,
                mensajes: "Debes completar todos los campos",
                color: "danger",
            });

    } else if (clave != confirmaClave) {
        props.setAlerta({
            error: true,
            mensajes: "Las Claves deben coincidir",
            color: "danger",
        });

    } else {

        props.setAlerta({
            error: true,
            mensajes: "Registro Correcto",
            color: "success"
        });
        setNombre("");
        setCorreo("");
        setClave("");
        setConfirmaClave("");

    }
}
return(
<>

<Form className="formu" onSubmit={handleSubmit}>

                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control
                        placeholder="Nombre"
                        type="text"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                        placeholder="registro@ejemplo.com"
                        type="email"
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control
                        placeholder="Contraseña"
                        type="password"
                        value={clave}
                        onChange={(e) => setClave(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control
                        placeholder="Confirma tu contraseña"
                        type="password"
                        value={confirmaClave}
                        onChange={(e) => setConfirmaClave(e.target.value)}
                    />
                </Form.Group>
                <Button className="w-100" change="primary" type="submit">
                    Registrarse
                </Button>
            </Form>
</>
)
}
export default Formulario