import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [contactos, setContactos] = useState([]);

  useEffect(() => {
    obtener();
  }, []);

  function obtener() {
    fetch('http://www.raydelto.org/agenda.php')
      .then((datos) => datos.json())
      .then((datos) => {
        setContactos(datos);
      });
  }

  return (
    <div className="listado">
      {contactos.map((contacto) => (
        <div key={contacto.id}>
          {contacto.nombre} {contacto.apellido} {contacto.telefono}
        </div>
      ))}
    </div>
  );
}

export default App;