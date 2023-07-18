import React, { useState } from 'react';

function AgregarContacto() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');

  function agregarContacto() {
    const nuevoContacto = { nombre, apellido, telefono };
    // Aquí puedes realizar alguna acción con el nuevo contacto, como enviarlo al servidor.

    // Limpia los campos después de agregar el contacto.
    setNombre('');
    setApellido('');
    setTelefono('');
  }

  return (
    <div className="agregar">
      <div className="info">
        <div className="columna">Nombre</div>
        <div className="columna1">
          <input
            type="text"
            value={nombre}
            onChange={(event) => setNombre(event.target.value)}
          />
        </div>
      </div>
      <div className="info">
        <div className="columna">Apellido</div>
        <div className="columna1">
          <input
            type="text"
            value={apellido}
            onChange={(event) => setApellido(event.target.value)}
          />
        </div>
      </div>
      <div className="info">
        <div className="columna">Telefono</div>
        <div className="columna1">
          <input
            type="text"
            value={telefono}
            onChange={(event) => setTelefono(event.target.value)}
          />
        </div>
      </div>

      <div className="info">
        <button className="boton" onClick={agregarContacto}>
          Agregar nuevo contacto
        </button>
      </div>
    </div>
  );
}

export default AgregarContacto;