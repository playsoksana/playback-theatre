import React from "react";
import PropTypes from "prop-types";

import style from "./ModalMenu.module.scss";

import {ReactComponent as Cancel} from '../../Icons/cancel-circle.svg'

const ModalMenu = ({ listMenu, onToggleModal }) => {
  
  return (
    <div className={style.Backdrop}>
    <button className={style.Button} type="button" onClick={onToggleModal}><Cancel className={style.Cancel} /></button>

      <ul className={style.List}>
        {listMenu.map((item, index) => (
          <li key={index} className={style.Item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

ModalMenu.propTypes = {
  listMenu: PropTypes.arrayOf(PropTypes.string).isRequired,
  onToggleModal: PropTypes.func.isRequired
};
export default ModalMenu;
