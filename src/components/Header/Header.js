import React, { useEffect, useState } from 'react';
import Container from '../Container';

import Logo from '../Logo';
import Menu from '../Menu';
import MenuNav from '../MenuNav';

import style from './Header.module.scss';

function Header  ()  {
    const [classHeader, setClassHeader] = useState('Header');
    

    useEffect(() => {
        window.addEventListener('scroll', ()=>{
            setClassHeader(window.scrollY > 10 ? 'HeaderScroll': 'Header');
            console.log(classHeader);
        });
    }, [classHeader]); 

   
    return (<header className={style[classHeader]}>
    <Container>
    <nav className={style.Nav}>
    <Logo />
    <MenuNav/>
    <Menu />
    </nav>
    
    </Container>

    </header>)
}

export default Header;