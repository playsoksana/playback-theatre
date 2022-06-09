import React from "react";
import PropTypes from 'prop-types';
import style from './Container.module.scss'

const Container = ({children}) => (<div className={style.Container}>{children}</div>);


Container.protoTypes = {
    children: PropTypes.element.isRequired
}
export default Container;