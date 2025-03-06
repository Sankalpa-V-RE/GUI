import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../Components/SearchBar/SearchBar";


function Parent() {
    const [data, setData] = useState([]);
    const navigate = useNavigate(); 

    const handleSearch = (MealName) => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${MealName}`)
            .then((res) => res.json())
            .then((data) => {
                setData(data.meals || []);
                navigate("/recipes", { state: { data: data.meals || [] } }); // Navigate to RecipeGrid with data
            });
    };

    return (
        <div>
            <SearchBar onSearch={handleSearch} />
        </div>
    );
}

export default Parent;
