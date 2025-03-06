import React, { useState } from "react";
import Styles from "./SearchBar.module.css"

function SearchBar({ onSearch }) {
    const [MealName, setMealName] = useState("");

    const handleSearchClick = () => {
        if (MealName.trim()) {
            onSearch(MealName);
        }
    };

    return (
        <div className={Styles.container}>
            <input className={Styles.search}
                type="text"
                placeholder="Search..."
                value={MealName}
                onChange={(e) => setMealName(e.target.value)}
            />
            <button className={Styles.btn} onClick={handleSearchClick}>Search</button>
        </div>
    );
}

export default SearchBar;
