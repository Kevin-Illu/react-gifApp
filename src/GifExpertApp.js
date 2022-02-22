import React, {useState} from "react";
import AddCategory from './components/AddCategory';
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Samurai Jack'])

    // const handleAdd = () => {
    //     const new_category = "Hunter x Hunter";
    //
    //     CUANDO NO SE TIENE REFERENCIA AL ARREGLO
    //     setCategories([...categories, new_category])
    // }

    return (
        <>
        <header className="header container">
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={ setCategories } />
        </header>

        <main className="main">
        <ol>
        {
            categories.map( category => (

                <GifGrid 
                key={ category }
                category={ category } 
                />
            ))
        }
        </ol>
        </main>

        </>

    );
};


export default GifExpertApp;
