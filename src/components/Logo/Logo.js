import React from "react";

import style from './Logo.module.scss';
import {ReactComponent as LogoIcon} from '../../Icons/logo.svg';

const Logo = () => <div className={style.Logo}>
<LogoIcon className={style.LogoIcon}/>
<p className={style.Text}>déjà vu +</p>
<p className={style.Text}>playback</p>
</div>;

export default Logo;