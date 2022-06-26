import { NavLink } from "react-router-dom";

import style from "./MenuNav.module.scss";

const MenuNav = () => (
  <ul className={style.List}>
    <li className={style.Item}>
      <NavLink  to="/" className='Link'
      activeclassname='Active'>Home</NavLink>
    </li>
    <li className={style.Item}>
    <NavLink to='/blog' className='Link'
      activeclassname='Active'>Блог</NavLink></li>
    <li className={style.Item}><NavLink  to='/calendar' className='Link'
     activeclassname='Active'>Заплановані вистави</NavLink></li>
    <li className={style.Item}><NavLink to='/actors' className='Link'
     activeclassname='Active'>Актори</NavLink></li>
  </ul>
);

export default MenuNav;
