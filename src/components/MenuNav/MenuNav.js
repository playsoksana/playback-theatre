import { NavLink } from "react-router-dom";

import style from "./MenuNav.module.scss";

const MenuNav = () => (
  <ul className={style.List}>
    <li className={style.Item}>
      <NavLink exact to="/" className='Link'
      activeClassName='Active'>Home</NavLink>
    </li>
    <li className={style.Item}>
    <NavLink exact to='/blog' className='Link'
      activeClassName='ActiveLink'>Блог</NavLink></li>
    <li className={style.Item}><NavLink exact to='/calendar' className='Link'
      activeClassName={style.ActiveLink}>Заплановані вистави</NavLink></li>
    <li className={style.Item}><NavLink exact to='/actors' className='Link'
      activeClassName={style.ActiveLink}>Актори</NavLink></li>
  </ul>
);

export default MenuNav;
