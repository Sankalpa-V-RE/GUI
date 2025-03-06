import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./Display.module.css";

function Display() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const idMeal = queryParams.get("id");

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
                const result = await response.json();

                if (result.meals) {
                    setData(result.meals[0]); // specific meal.
                } else {
                    setError("No recipe found!");
                }
            } catch (err) {
                setError("Failed to fetch recipe.");
            } finally {
                setLoading(false);
            }
        };

        if (idMeal) {
            fetchRecipe();
        }
    }, [idMeal]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{data.strMeal}</h1>
            <div className={styles.part}>
            <img
                className={styles.image}
                src={data.strMealThumb}
                alt={data.strMeal}
            />
            <ul className={styles.ingredients}>
            <p className={styles.text}>Ingredients</p><br></br>
                {Object.keys(data)
                    .filter((key) => key.startsWith("strIngredient") && data[key]) // ingredients
                    .map((ingredientKey, index) => {
                        const measureKey = `strMeasure${ingredientKey.slice(13)}`; // measurement key
                        return (
                            <li key={index}>
                                {data[ingredientKey]} - {data[measureKey]} 
                            </li>
                    );
                })}
            </ul>
            </div>
            <p className={styles.instructions}>{data.strInstructions}</p>
            
            

        </div>
    );
}

export default Display;
