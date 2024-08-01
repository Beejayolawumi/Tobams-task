import React from "react";
import style from "./categories.module.css";

const dummyCategories = [
  {
    categories: "Breakfast",
    image: "/imageFolder/image 25.png",
    background: "/imageFolder/Rectangle 7.png",
  },
  {
    categories: "Vagan",
    image: "/imageFolder/Group 879.png",
    background: "/imageFolder/Rectangle 7 (1).png",
  },
  {
    categories: "Meat",
    image: "/imageFolder/image 21.png",
    background: "/imageFolder/Rectangle 7 (2).png",
  },
  {
    categories: "Desert",
    image: "/imageFolder/image 22.png",
    background: "/imageFolder/Rectangle 7 (3).png",
  },
  {
    categories: "Lunch",
    image: "/imageFolder/image 23.png",
    background: "/imageFolder/Rectangle 7.png",
  },
  {
    categories: "Chocolate",
    image: "/imageFolder/image 24.png",
    background: "/imageFolder/Rectangle 7.png",
  },
];

const Categories = () => {
  return (
    <div className={style.mainContainer}>
      <div>
        <h3 className={style.categories}>Categories</h3>
      </div>
      <div className={style.buttonContainer}>
        <button className={style.categories_view}>View All Categories</button>
      </div>
      <div className={style.dummyCategories}>
        {dummyCategories.map((items, index) => {
          return (
            <div key={index}>
              <div className={style.images}>
                <img src={items.image} />
              </div>
              <div>
                <img src={items.background} />
              </div>
              <div className={style.div_categories}>{items.categories}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
