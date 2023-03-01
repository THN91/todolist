import React from 'react';

import './Modal.css';

function Modal(
    {open, setOpen, children}:
        { open: boolean, setOpen: (active: boolean) => void, children: JSX.Element }) {
    return (
        <div className={open ? 'modal active' : 'modal'} onClick={() => setOpen(!open)}>
            <div
                className={open ? 'modal_content active' : 'modal_content'}
                onClick={event => event.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
}

export default Modal;