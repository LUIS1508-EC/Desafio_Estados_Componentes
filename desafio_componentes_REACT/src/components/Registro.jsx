/* eslint-disable react/prop-types */

import Boton from "./Boton";
import Formulario from "./Formulario";
import Alert from "./Alertas";
import "./Registro.css";
import Container from "react-bootstrap/Container";


const Registro = (props) => {
  const iconosImg = [
    {
      id: 1,
      value: "fa-brands fa-facebook",
    },
    {
      id: 2,
      value: "fa-brands fa-github",
    },
    {
      id: 3,
      value: "fa-brands fa-linkedin-in",
    },
  ];
  return (
    <>
      <Container className="pt-5 pl-2 pr-2 mb-5 pb-5 bg-success text-center rounded-5">
        <h1>REGISTRATE</h1>
        <div className="pb-0" id="seccionIconos">
          {iconosImg.map(({ id, value }) => (
            <Boton key={id} iconos={value} />
          ))}
        </div>
        <Formulario setAlerta={props.setAlerta} alerta={props.alerta} />
        {props.alerta.mensajes ? (
          <Alert
            className="rounded-3"
            variant={props.alerta.color}
            mensaje={props.alerta.mensajes}
          />
        ) : null}
      </Container>
    </>
  );
};

export default Registro;
