import React from "react";
import style from "./header.module.css";

const Header = () => {
  return (
    <div className={style.mainContainer}>
      <div className={style.rectangle_five}>
        <img src="/src/assets/Rectangle 5.png" />
      </div>

      <div className={style.headerContainer}>
        <div className={style.recipes}>
          <img src="/src/assets/Group 828.png" />
        </div>

        <div className={style.spicy}>
          <img src="/src/assets/Spicy delicious chicken wings.png" />
        </div>

        <div className={style.lorem_ipsum}>
          <img src="/src/assets/Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim.png" />
        </div>

        <div className={style.chicken_container}>
          <div className={style.minutes}>
            <img
              className={style.minutes_image}
              src="/src/assets/Group 829.png"
            />
          </div>
          <div className={style.chicken}>
            <img
              className={style.chicken_image}
              src="/src/assets/Group 830.png"
            />
          </div>
        </div>

        <div className={style.group_container}>
          <div className={style.group_one}>
            <img src="/src/assets/Group 825.png" />
          </div>
          <div>
            <img src="/src/assets/Group 826.png" />
          </div>
        </div>
      </div>

      <div className={style.baked_chicken}>
        <div className={style.handpicked_recipes}>
          <img src="/src/assets/Badge.png" />
        </div>
        <img src="/src/assets/baked-chicken-wings-asian-style-tomatoes-sauce-plate 1.png" />
      </div>
      <div className={style.rectangle_six}>
        <img src="/src/assets/Rectangle 6.png" />
      </div>
    </div>
  );
};

export default Header;
