import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import * as selectors from "../../Redux/auth/selector";
import { ReactComponent as UserSvg } from "../../Icons/user.svg";
import {
  operationLogout,
  operationGetCurrent,
} from "../../Redux/auth/operation";

import style from "./User.module.scss";

const User = () => {
  const dispatch = useDispatch();

  const name = useSelector(selectors.getName);

  useEffect(() => {
    dispatch(operationGetCurrent());
  }, [dispatch]);

  function onClickButton() {
    dispatch(operationLogout());
  }

  return (
    <div className={style.Wrap}>
      {name ? (
        <>
          <UserSvg className={style.IsLogin}></UserSvg>
          {{ name } && <p className={style.Name}>Вітаю {name}</p>}
          <button className={style.Button} onClick={onClickButton}>
            Вийти
          </button>
        </>
      ) : (
        <>
          <UserSvg className={style.User}></UserSvg>
          <NavLink className={style.Enter} to="/enter/login">
            Увійти
          </NavLink>
        </>
      )}
    </div>
  );
};

export default User;
