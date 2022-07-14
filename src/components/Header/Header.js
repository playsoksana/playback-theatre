import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import style from "./Header.module.scss";

import Container from "../Container";
import Menu from "../Menu";
import MenuNav from "../MenuNav";

import Modal from "../Modal";
import ListMenu from "../Menu/ListMenu";
import Logo from '../Logo';
import User from '../User';


import { scrollBodyIfOpenModal} from "../../js/scrollBodyIfOpenModal";

function Header() {
  const [classHeader, setClassHeader] = useState("Header");
  const [visible, setVisible] = useState(false);


  scrollBodyIfOpenModal(visible);

  function setClass() {
    setClassHeader(window.scrollY > 10 ? "HeaderScroll" : "Header");
  }

  useEffect(()=>{
  
    window.addEventListener('scroll', setClass);

    return ()=>{
      window.removeEventListener('scroll', setClass);
    }
  }, [])

  function onToggleModal() {
    setVisible(!visible);
  }

  return (
    <>
    <header className={style[classHeader]}>
      <Container>
        <nav className={style.Nav}>
        <NavLink to='/'>
        <Logo />
        </NavLink>
       
          <MenuNav />
          
          <Menu onToggleModal={onToggleModal} />
         <User className={style.User}></User>
        </nav>
      </Container>
    </header>
    {visible && (
            <Modal  onToggleModal={onToggleModal}><ListMenu/></Modal>
          )}
    </>
  );
}

export default Header;
