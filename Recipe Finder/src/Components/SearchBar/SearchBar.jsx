import React, { useState } from "react";

function SearchBar(){

    const [MealName, setMealName] = useState('');
    const [data, setData] = useState([]);

    const fetchInfo=()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${MealName}`)
            .then((res)=>res.json())
            .then((data)=>setData(data))
    }

    console.log(data)
    
    return(
        <>
        <input type="text" placeholder="Search..." value={MealName} onChange={(e) => setMealName(e.target.value)}></input>
        <button onClick={fetchInfo}>Search</button>
        </>
        
        
        
    )
}
export default SearchBar;