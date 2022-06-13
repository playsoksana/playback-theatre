import React from "react";
import PropTypes from "prop-types";

import { ReactComponent as MenuIcon } from "../../Icons/menu.svg";

import style from "./Menu.module.scss";

const Menu = ({ onToggleModal }) => (
  <button type="button" onClick={onToggleModal} className={style.Button}>
    <MenuIcon className={style.MenuIcon} />
  </button>
);

Menu.propTypes = {
  onToggleModal: PropTypes.func.isRequired,
};

export default Menu;