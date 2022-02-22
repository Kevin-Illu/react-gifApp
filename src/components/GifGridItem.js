import React from 'react';

export const GifGridItem = ({ url, title}) => {
    
    return (
        <div className="card animate__animated animate__fadeInDown">
        <img className="card-img" src={ url } alt={ title } />           
        <p className="card-title">{ title }</p>
        </div>
    )

}

