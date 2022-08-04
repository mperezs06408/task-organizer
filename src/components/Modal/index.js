import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

function Modal({ openModal, children }) {
    return ReactDOM.createPortal(
        <section 
            id='modal-card'
        >
            {children}
        </section>
        ,
        document.getElementById('modal')
    );
}

export { Modal };