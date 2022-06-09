import React from "react";

import Container from "../Container";
// import PropTypes from 'prop-types';
import Logo from "../Logo";
import SocialNetworks from "../SocialNetworks";

import style from "./Footer.module.scss";

const Footer = ({ test }) => (
  <footer>
    <Container>
      <div className={style.Wrap}>
        <Logo />
        <ul className={style.List}>
          <li>Блог</li>
          <li>Галерея</li>
          <li>Актори</li>
          <li>Заплановані вистави</li>
          <li>Допомогти проекту</li>
          <li>Прийняти участь у проекті</li>
          <li>Замовити виставу</li>
          <li>Контакти</li>
        </ul>
        <div className={style.SocialWrap}>
          <p className={style.Join}>Приєднуйтесь до спільноти</p>
          <SocialNetworks />
        </div>
      </div>
      <p className={style.Signature}>
        З гордістю та любов'ю створено у 2022 році
      </p>
    </Container>
  </footer>
);

// Footer.propTypes = {
//     test: PropTypes.string.isRequired };

Footer.defaultProps = {
  test: "6874522",
};

export default Footer;
