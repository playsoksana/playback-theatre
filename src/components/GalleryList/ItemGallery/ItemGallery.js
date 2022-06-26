import PropTypes from "prop-types";

import style from "./ItemGallery.module.scss";
import { ReactComponent as Chevron } from "../../../Icons/chevron.svg";

const ItemGallery = ({ index, changeIndex }) => {
  return (
    <div className={style.Wrap}>
   
      <div className={style.Photo}>
        <img  src={require(`../gallery/${index}.jpg`)} alt="" />
      </div>
      <button
        className={`${style.Button} ${style.Original} `}
        onClick={() => {
          changeIndex("back");
        }}
      >
        <Chevron className={style.Chevron} />
      </button>
      <button
        className={`${style.Button} ${style.Reverse}`}
        onClick={() => {
          changeIndex("next");
        }}
      >
        <Chevron className={style.Chevron} />
      </button>
    </div>
  );
};

ItemGallery.propTypes = {
  index: PropTypes.number.isRequired,
  changeIndex: PropTypes.func.isRequired,
};

export default ItemGallery;
