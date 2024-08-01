import React from "react";
import style from "./navbar.module.css";

const dummyNavbar = [
  {
    name: "Home",
  },

  { name: "Recipes" },

  { name: "Blog" },

  { name: "Contact" },

  { name: "About us" },
];

const dummyIcons = [
  {
    icon: "/imageFolder/001-facebook@2x.png",
  },
  {
    icon: "/imageFolder/003-twitter.png",
  },
  {
    icon: "/imageFolder/004-instagram.png",
  },
];

const Navbar = () => {
  return (
    <div className={style.mainContainer}>
      <h4 className={style.foodie}>
        <img src="/imageFolder/Foodieland..png" />
      </h4>
      <div className={style.nav}>
        {dummyNavbar.map((items, index) => {
          return (
            <div key={index}>
              <div className={style.dummyNavbar}>{items.name}</div>
            </div>
          );
        })}
      </div>
      <div className={style.dummyIcons}>
        {dummyIcons.map((items, index) => {
          return (
            <div className={style.dummyIcons} key={index}>
              <div>
                <img
                  src={items.icon}
                  alt="social icons"
                  className={style.icons}
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className={style.border}>
        {/* <img src="/src/assets/Vector 2.png" /> */}
      </div>
    </div>
  );
};

export default Navbar;
