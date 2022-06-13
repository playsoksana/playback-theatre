import React from 'react';

import style from './ListMenu.module.scss';

import listMenu from '../../../file/listMenu';

function ListMenu () {
    return (<ul className={style.List}>
    {listMenu.map((item, index) => (
      <li key={index} className={style.Item}>{item}</li>
    ))}
    </ul>);
}

export default ListMenu;
