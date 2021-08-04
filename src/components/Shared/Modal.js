import { Fragment } from 'react';
import ReactDOM from 'react-dom';

import styles from './Modal.module.css';

const overlaysElement = document.getElementById('overlays');

const Modal = ({ onClose, children }) => {
    return ReactDOM
        .createPortal(
            (<Fragment>
                <div className={styles.backdrop} onClick={onClose} />

                <div className={styles.modal}>
                    <div className={styles.content}>
                        {children}
                    </div>
                </div>
            </Fragment>),
            overlaysElement
        );
};

export default Modal;
