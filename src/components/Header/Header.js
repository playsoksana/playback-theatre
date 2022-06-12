import React, { useEffect, useState } from "react";
import Container from "../Container";

import Logo from "../Logo";
import Menu from "../Menu";
import MenuNav from "../MenuNav";
import ModalMenu from "../ModalMenu";

import style from "./Header.module.scss";

import listMenu from "../../file/listMenu";
import { scrollBodyIfOpenModal } from "../../js/scrollBodyIfOpenModal";

function Header() {
  const [classHeader, setClassHeader] = useState("Header");
  const [visible, setVisible] = useState(false);

  scrollBodyIfOpenModal(visible);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setClassHeader(window.scrollY > 10 ? "HeaderScroll" : "Header");
    });
  }, [classHeader]);

  function onToggleModal() {
    setVisible(!visible);
  }

  return (
    <header className={style[classHeader]}>
      <Container>
        <nav className={style.Nav}>
          <Logo />
          <MenuNav />
          <Menu onToggleModal={onToggleModal} />
          {visible && (
            <ModalMenu listMenu={listMenu} onToggleModal={onToggleModal} />
          )}
        </nav>
      </Container>
    </header>
  );
}

export default Header;
