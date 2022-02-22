import React from "react";
import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

const GifGrid = ({ category }) => {

    const { data:images, loading } = useFetchGifs( category );

    return (
        <div className="container">
        <h3 className="category animate__animated animate__fadeInDown">{category}</h3>
        <div className="grid-container">
        { loading && <p className="loading animate_animated animate__flash"> Loading </p> }
        {
            images.map( img => (
                <GifGridItem 
                key={ img.id }
                { ...img }
                />
            )
            )}
        </div>
        </div>
    )
}

export default GifGrid
