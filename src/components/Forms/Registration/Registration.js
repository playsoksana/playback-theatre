import { useState } from "react";
import PropTypes from "prop-types";

import style from "./Registration.module.scss";
import Button from "../../Button";
import Input from "../../Input";

import { v4 as uuidv4 } from "uuid";

const Registration = ({ onSubmitForm }) => {
  const [state, setState] = useState({ name: "", email: "", password: "" });
  function onSubmit(e) {
    e.preventDefault();
    onSubmitForm({
      name: e.target.name.value,
      email: e.target.name.value,
      password: e.target.password.value,
      id: uuidv4(),
    });
    setState({ name: "", email: "", password: "" });
  }

  function onChangeInput({ currentTarget }) {
    setState({ ...state, [currentTarget.name]: currentTarget.value });
  }

  return (
    <form className={style.Form} onSubmit={onSubmit}>
      <h2 className={style.Title}>Зареєструватись</h2>
      <Input
        type="text"
        name="name"
        value={state.name}
        onChange={onChangeInput}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Ім'я може складатися тільки з літер, апострофу, тире та пробілів. Наприклад, Степан Андреевич Бандера"
        label="Введіть ім'я"
        required
      />

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

      <Button type="submit">Зареєструватись</Button>
    </form>
  );
};

Registration.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};

export default Registration;
