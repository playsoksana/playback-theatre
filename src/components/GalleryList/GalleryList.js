import style from "./GalleryList.module.scss";
import { useState } from "react";

import Modal from "../Modal";
import ItemGallery from "./ItemGallery/ItemGallery";

const Gallery = () => {
  const [visible, setVisible] = useState(false);
  const [index, setIndex] = useState(null);
  let lengthArr = 45;
  const arr = new Array(lengthArr).fill(1);

  function onToggleModal(i) {
    setIndex(i);
    setVisible(!visible);
  }

    function changeIndex(action) {
    switch (action) {
      case 'back':
        if (index === 0) {
          setIndex(lengthArr - 1);
        } else {
          setIndex(index - 1);
        }

        break;
      case 'next':
        if (index === lengthArr-1) {
          setIndex(0);
        } else {
          setIndex(index + 1);
        }

        break;
      default: setIndex(index);
    }

  }

  return (
    
    <section>
  
    <ul className={style.List}>
        {arr.map((e, i) => (
          <li
            onClick={() => {
              onToggleModal(i);
            }}
            className={style.Item}
            key={i}
          >
            <img src={require(`./gallery/${i}.jpg`)} alt='' />
          </li>
        ))}
      </ul>

 
      {visible && (
        <Modal onToggleModal={onToggleModal}>
          <ItemGallery index={index} changeIndex={changeIndex}></ItemGallery>
        </Modal>
      )}
  </section>
   
  );
};
export default Gallery;
