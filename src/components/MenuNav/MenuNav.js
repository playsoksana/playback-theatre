import React from "react";

import style from "./MenuNav.module.scss";

const MenuNav = () => (
  <ul className={style.List}>
    <li className={style.Item}>Блог</li>
    <li className={style.Item}>Заплановані вистави</li>
    <li className={style.Item}>Актори</li>
  </ul>
);

export default MenuNav;
