import React from "react";
import { ReactComponent as Facebook } from "../../Icons/facebook.svg";
import style from "./SocialNetworks.module.scss";

const SocialNetworks = () => {
  return (
    <ul className={style.List}>
      <li className={style.Item}>
        <a
          className={style.Link}
          href="https://www.facebook.com/playbackplus"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          <Facebook className={style.Img} />
        </a>
      </li>
    </ul>
  );
};

export default SocialNetworks;
