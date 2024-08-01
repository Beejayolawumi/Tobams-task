import React from "react";
import style from "./chefcomponent.module.css";
// import style from "./recipespage.module.css";

const ChefComponent = () => {
  return (
    <div className={style.mainContainer}>
      <div className={style.heading}>
        <h2 className={style.chef}>
          Everyone can be a <nav>chef in their own kitchen</nav>
        </h2>
        <div>
          <p className={style.chef_para}>
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
            <nav>
              eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad
              minim
            </nav>
          </p>
        </div>

        <div className={style.button_container}>
          <button className={style.mainButton}>Learn More</button>
        </div>
      </div>
      <div className={style.container}>
        <img src="/imageFolder/portrait-happy-male-chef-dressed-uniform 1.png" />
        <img src="/imageFolder/image 21.png" className={style.red_meat} />
        <img src="/imageFolder/Group 879.png" className={style.vagan} />
        <img src="/imageFolder/image 28.png" className={style.onion} />
        <img src="/imageFolder/image 27.png" className={style.apple} />
      </div>
    </div>
  );
};

export default ChefComponent;
