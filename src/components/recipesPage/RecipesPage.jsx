import React from "react";
import style from "./recipespage.module.css";

const dummyRecipes = [
  {
    index: 1,
    food: "Big and Juicy Wagyu Beef Cheeseburger",
    images: "/imageFolder/Mask Group.png",
    minutes: "/imageFolder/Group 829.png",
    categories: "/imageFolder/Group 830.png",
    icon: "/imageFolder/Group 852.png",
  },
  {
    index: 2,
    food: "Fresh Lime Roasted Salmon with Ginger Sauce",
    images: "/imageFolder/Mask Group (1).png",
    minutes: "/imageFolder/Group 829.png",
    categories: "/imageFolder/Group 830.png",
    icon: "/imageFolder/Group 852.png",
  },
  {
    index: 3,
    food: "Strawberry Oatmeal Pancake",
    images: "/imageFolder/Mask Group (2).png",
    minutes: "/imageFolder/Group 829.png",
    categories: "/imageFolder/Group 830.png",
    icon: "/imageFolder/Group 852.png",
  },
  {
    index: 4,
    food: "Fresh and Healthy Mixed Mayonnaise Salad",
    images: "/imageFolder/Mask Group (3).png",
    minutes: "/imageFolder/Group 829.png",
    categories: "/imageFolder/Group 830.png",
    icon: "/imageFolder/Group 852.png",
  },
  {
    index: 5,
    food: "Chicken Meatballs with Cream Cheese",
    images: "/imageFolder/Mask Group (4).png",
    minutes: "/imageFolder/Group 829.png",
    categories: "/imageFolder/Group 830.png",
    icon: "/imageFolder/Group 852.png",
  },
  {
    index: 6,
    images: "/imageFolder/Ads.png",
    minutes: "/imageFolder/Group 829.png",
    categories: "/imageFolder/Group 830.png",
  },
  {
    index: 7,
    food: "Fruity Pancake with Orange & Blueberry",
    images: "/imageFolder/Mask Group (5).png",
    minutes: "/imageFolder/Group 829.png",
    categories: "/imageFolder/Group 830.png",
    icon: "/imageFolder/Group 852.png",
  },
  {
    index: 8,
    food: "The Best Easy One Pot Chicken",
    images: "/imageFolder/Mask Group (6).png",
    minutes: "/imageFolder/Group 829.png",
    categories: "/imageFolder/Group 830.png",
    icon: "/imageFolder/Group 852.png",
  },
  {
    index: 9,
    food: "The Creamiest Creamy Chicken and Bacon Pasta",
    images: "/imageFolder/Mask Group (7).png",
    minutes: "/imageFolder/Group 829.png",
    categories: "/imageFolder/Group 830.png",
    icon: "/imageFolder/Group 852.png",
  },
];

const RecipesPage = () => {
  return (
    <div className={style.recipesContainer}>
      <div className={style.simple}>
        <h3 className={style.simple_h3}>Simple and tasty recipes</h3>
        <div className={style.para_container}>
          <p className={style.simple_para}>
            Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
            tempor incididunt ut
            <nav>labore et dolore magna aliqut enim ad minim</nav>
          </p>
        </div>
      </div>
      <div className={style.dummyRecipes}>
        {dummyRecipes.map((items, index) => {
          return (
            <div key={index}>
              <div className={style.images}>
                <img className={style.images_grid} src={items.images} />
              </div>
              <div
                className={`${
                  index === 5
                    ? style.background_image_six
                    : style.background_image
                }`}
              >
                <div className={style.food}>{items.food}</div>
                <div
                  className={`${
                    index === 5 ? style.minutes_six : style.minutes
                  }`}
                >
                  <img src={items.minutes} />
                  <img src={items.categories} />
                </div>

                <div className={style.icon}>
                  <img src={items.icon} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecipesPage;
