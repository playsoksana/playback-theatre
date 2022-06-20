import PropTypes from 'prop-types'


import style from "./Input.module.scss";

const Input = ({ onChangeInput, label, name, value, ...allProps }) => {
  return (
    <label className={style.Label}>
      <input
        className={style.Input}
        value={value}
        onChange={onChangeInput}
        placeholder=" "
        name={name}
        {...allProps}
        required
      ></input>
      <p className={style.Text}>{label}</p>
    </label>
  );
};

Input.propTypes = {
    onChangeInput: PropTypes.func,
     label: PropTypes.string.isRequired, 
     name: PropTypes.string.isRequired, 
     value: PropTypes.string.isRequired
}

export default Input;
