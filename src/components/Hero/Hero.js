import React from "react";

import style from "./Hero.module.scss";
import HeroImg from "../../images/hero-img.jpg";

const Hero = () => {
  return (

      <section
        className={style.Hero}
        style={{ backgroundImage: `url(${HeroImg})` }}
      >
      <div className={style.Wrap}>
      <p className={style.Text}>
          Плейбек-театр – театр оповідань та імпровізації реальних історій
          глядачів.
        </p>
        <h1 className={style.Title}>Kyiv Playback Theatre</h1>
      </div>
        
      </section>

  );
};

export default Hero;
