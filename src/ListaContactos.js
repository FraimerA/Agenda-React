import React from 'react';

function ListaContactos({ contactos }) {
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

export default ListaContactos;