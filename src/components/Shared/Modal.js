import { Fragment } from 'react';
import ReactDOM from 'react-dom';

import styles from './Modal.module.css';

const overlaysElement = document.getElementById('overlays');

const Modal = props => {
    return ReactDOM
        .createPortal(
            (<Fragment>
                <div className={styles.backdrop} />

                <div className={styles.modal}>
                    <div className={styles.content}>
                        {props.children}
                    </div>
                </div>
            </Fragment>),
            overlaysElement
        );
};

export default Modal;
