import { useState } from "react";
import PropTypes from "prop-types";
import Input from "../../Input";
import Button from "../../Button";
import style from "./Login.module.scss";
import { NavLink } from "react-router-dom";
const Login = ({ onSubmitForm }) => {
  const [state, setState] = useState({ email: "", password: "" });

  function onChangeInput({ currentTarget }) {
    setState({ ...state, [currentTarget.name]: currentTarget.value });
  }

  function onSubmit(e) {
    e.preventDefault();
    onSubmitForm({
      email: state.email,
      password: state.password,
    });
    setState({ email: "", password: "" });
  }

  return (
    <>
    <form className={style.Form} onSubmit={onSubmit}>
      <h2 className={style.Title}>Увійти</h2>
      <Input
        type="email"
        name="email"
        value={state.email}
        onChange={onChangeInput}
        placeholder=" "
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
        title="Введено неправильний формат електронної пошти"
        label="Введіть email"
        required
      />

      <Input
        type="text"
        name="password"
        value={state.password}
        onChange={onChangeInput}
        placeholder=" "
        pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$"
        title="Пароль повинен містити не менше восьми символів, не менше однієї цифри, а також малих та великих літер та спеціальних символів."
        label="Введіть пароль"
        required
      />
      <Button type="submit">Увійти</Button>
    </form>
    <NavLink to='/enter/registration'>Regist</NavLink>
   </>
  );
};

Login.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};

export default Login;
