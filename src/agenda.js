import React, { useState, useEffect } from 'react';
import AgregarContacto from './AgregarContacto';
import ListaContactos from './ListaContactos';

function Agends() {
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
    <div className="principal">
      <AgregarContacto />
      <div className="titulo">Listado</div>
      <ListaContactos contactos={contactos} />
    </div>
  );
}

export default Agends;



