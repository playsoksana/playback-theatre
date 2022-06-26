import React from "react";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";

import style from "./Modal.module.scss";

import {ReactComponent as Cancel} from '../../Icons/cancel-circle.svg'

const rootModal = document.querySelector('#modal');
const Modal = ( {children, onToggleModal }) => {
  
  return createPortal(<div className={style.Backdrop}>
    <button className={style.Button} type="button" onClick={onToggleModal}><Cancel className={style.Cancel} /></button>
     {children}
    </div>, rootModal)
};

Modal.propTypes = {
  onToggleModal: PropTypes.func.isRequired
};
export default Modal;


