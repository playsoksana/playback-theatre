import PropTypes from 'prop-types';

import style from './Button.module.scss';

const Button = ({type, children, onClick}) => {
    return (<button className={style.Button} type={type} onClick={onClick}>{children}</button>)
}

Button.propTypes = {
    type: PropTypes.string.isRequired,
    onClick: PropTypes.func
}

export default Button;