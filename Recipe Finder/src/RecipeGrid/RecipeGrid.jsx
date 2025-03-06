import React from "react";
import { useLocation } from "react-router-dom";
import Card from "../Components/Card/Card";
import Styles from "./RecipeGrid.module.css";

function RecipeGrid() {
    const location = useLocation(); // navigation state
    const data = location.state?.data || []; // get passed data

    return (
        <div className={Styles.grid}>
            {data.map((meal) => (
                <Card 
                key={meal.idMeal} 
                img={meal.strMealThumb} 
                title={meal.strMeal} 
                idMeal={meal.idMeal} 
            />
            ))}
        </div>
    );
}

export default RecipeGrid;
