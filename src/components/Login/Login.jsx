import React, { useState, useEffect } from 'react';
import './Login.css';
import Modal from 'react-modal';

export const Login = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [password, setPassword] = useState(''); 

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const modalStyles = {
    content: {
      width: '500px',
      height: '350px',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      padding: '0px'
    }
  };

  useEffect(() => {
    openModal(); 
  }, []); 

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  return (
    <React.Fragment>
      <Modal 
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={modalStyles}
        ariaHideApp={false}
      >
        <div className='d-flex flex-column justify-content-between h-100'>
            <div className='modal-title'>
                <h2>Login</h2>
            </div>

            <div className='modal-content d-flex justify-content-between pt-2'>
                <div className='modal-item'>
                    <label>Usuario</label>
                    <input 
                    className='form-control'
                    type="text"
                    onChange={handlePasswordChange} 
                    />
                    <label>Contraseña</label>
                    <input 
                    className='form-control'
                    type="password"
                    onChange={handlePasswordChange} 
                    />
                </div>

                <div className='modal-item d-flex justify-content-end align-items-end'>
                    <button className='modal-btn btn btn-danger' onClick={closeModal}>Cancelar</button>
                    <button className='modal-btn btn btn-primary' onClick={closeModal}>Guardar</button>
                </div>

            </div>
        </div>
      </Modal>
    </React.Fragment>
  );
}

export default Login;

