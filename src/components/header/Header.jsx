import React from "react";
import style from "./header.module.css";

const Header = () => {
  return (
    <div className={style.mainContainer}>
      <div className={style.rectangle_five}>
        <img src="/imageFolder/Rectangle 5.png" />
      </div>

      <div className={style.headerContainer}>
        <div className={style.recipes}>
          <img src="/imageFolder/Group 828.png" />
        </div>

        <div className={style.spicy}>
          <img src="/imageFolder/Spicy delicious chicken wings.png" />
        </div>

        <div className={style.lorem_ipsum}>
          <img src="/imageFolder/Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim.png" />
        </div>

        <div className={style.chicken_container}>
          <div className={style.minutes}>
            <img
              className={style.minutes_image}
              src="/imageFolder/Group 829.png"
            />
          </div>
          <div className={style.chicken}>
            <img
              className={style.chicken_image}
              src="/imageFolder/Group 830.png"
            />
          </div>
        </div>

        <div className={style.group_container}>
          <div className={style.group_one}>
            <img src="/imageFolder/Group 825.png" />
          </div>
          <div>
            <img src="/imageFolder/Group 826.png" />
          </div>
        </div>
      </div>

      <div className={style.baked_chicken}>
        <div className={style.handpicked_recipes}>
          <img src="/imageFolder/Badge.png" />
        </div>
        <img src="/imageFolder/baked-chicken-wings-asian-style-tomatoes-sauce-plate 1.png" />
      </div>
      <div className={style.rectangle_six}>
        <img src="/imageFolder/Rectangle 6.png" />
      </div>
    </div>
  );
};

export default Header;
