import React, { useEffect, useState } from "react";
import Card from "../Components/Card/Card";
import Styles from "./Grid.module.css";
import { Link, useLocation } from 'react-router-dom';
import SearchBar from "../Components/SearchBar/SearchBar";

function Grid({ index }) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const location = useLocation();
    const isSpecificPage = location.pathname === '/Recipe';

    useEffect(() => {
        const fetchData = async () => {
            try {
                const requests = Array.from({ length: index }).map(() =>
                    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
                        .then((res) => res.json())
                        .then((data) => ({
                            image: data.meals[0].strMealThumb, // Get the meal image
                            title: data.meals[0].strMeal,     // Get the meal title
                            id: data.meals[0].idMeal,         // Get the meal ID
                        }))
                );

                const results = await Promise.all(requests);
                setData(results);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching meals:", error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div className={Styles.container}>
            {!isSpecificPage &&(
            <div className={Styles.section_container}>
                <div className={Styles.text_content}>
                    <h1>Discover, Create, Share</h1>
                    <p>Check our most popular recipes of this week.</p>
                </div>
                <Link to="/Recipe"><button className={Styles.btn}>See All</button></Link>
            </div>)}
            {isSpecificPage &&(
                <SearchBar/>
            )}
            <div className={Styles.grid}>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    data.map((item, i) => (
                        <div key={i} className={Styles.card}>
                            <Card img={item.image} title={item.title} idMeal={item.id} />
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default Grid;
