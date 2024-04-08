import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import  { db } from '../../Firebase/Firebase';

const FormularioContacto = () => {
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [correo, setCorreo] = useState('');
  const [tema, setTema] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [error, setError] = useState('');
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nombre || !telefono || !correo || !tema || !mensaje) {
      setError('Todos los campos son obligatorios');
      return;
    }

    if (!db) {
      console.error('Firestore not initialized yet');
      setError('Error al enviar el mensaje. Inténtalo de nuevo más tarde.');
      return;
    }

    try {
      const mensajeRef = await db.collection('mensajes').add({
        nombre: nombre,
        telefono: telefono,
        correo: correo,
        tema: tema,
        mensaje: mensaje
      });

      console.log('Mensaje enviado con ID: ', mensajeRef.id);

      setNombre('');
      setTelefono('');
      setCorreo('');
      setTema('');
      setMensaje('');
      
      setError('');
      setEnviado(true);

      setTimeout(() => {
        setEnviado(false);
      }, 3000); 
    } catch (error) {
      console.error('Error al enviar el mensaje: ', error);
      setError('Error al enviar el mensaje. Por favor, inténtalo de nuevo.');
    }
  };

  const handleChangeTelefono = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) || value === '') { 
      setTelefono(value);
    }
  };

  const handleChangeCorreo = (e) => {
    const value = e.target.value;
    setCorreo(value);
  };

  return (
    <div className="col">
      <form onSubmit={handleSubmit}>
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Tu Nombre"/>
        <input type="text" value={telefono} onChange={handleChangeTelefono} placeholder="Número telefónico"/>
        <input type="email" value={correo} onChange={handleChangeCorreo} placeholder="Dirección de correo"/>
        <input type="text" value={tema} onChange={(e) => setTema(e.target.value)} placeholder="Tema"/>
        <textarea value={mensaje} onChange={(e) => setMensaje(e.target.value)} cols="30" rows="10" placeholder="Mensaje"></textarea>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {enviado && <p style={{ color: 'green' }}>Su mensaje fue enviado correctamente.</p>}
        <button type="submit">
          Enviar Mensaje<FontAwesomeIcon icon={faPaperPlane} />
          <span className="overlay"></span>
        </button>
      </form>
    </div>
  );
}

export default FormularioContacto;