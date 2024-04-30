/* eslint-disable react/prop-types */
import Alerta from "react-bootstrap/Alert";

function Alert(props){
return(
<Alerta key={props.change} change={props.change}>
{props.mensaje}
</Alerta>
);
};
export default Alert