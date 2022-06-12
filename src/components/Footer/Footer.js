import React from "react";

import Container from "../Container";
// import PropTypes from 'prop-types';
import Logo from "../Logo";
import SocialNetworks from "../SocialNetworks";

import style from "./Footer.module.scss";

import listMenu from "../../file/listMenu";

const Footer = ({ test }) => (
  <footer>
    <Container>
      <div className={style.Wrap}>
        <Logo />
        <ul className={style.List}>
         {listMenu.map((item, index)=><li key={index}>{item}</li>)}
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
