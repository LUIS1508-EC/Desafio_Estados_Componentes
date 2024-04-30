import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Registro from './components/Registro';
  
const App = () => {
  const [alerta, setAlerta] = useState({ error: false, mensajes:"", color:""});
  
  return (
<div className="container">
      <Registro setAlerta={setAlerta} alerta={alerta} />
    </div>
  );
};

export default App