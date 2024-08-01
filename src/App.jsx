import { useState } from "react";

import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Categories from "./components/categories/Categories";
import RecipesPage from "./components/recipesPage/RecipesPage";
import ChefComponent from "./components/chefComponent/ChefComponent";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Header />
        <Categories />
        <RecipesPage />
        <ChefComponent />
      </div>
    </>
  );
}

export default App;
