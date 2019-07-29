import React from 'react'
import style from './App.css'
const Reciepe = ({title, calories, img,ingredients}) => {
    return (
        <div className="reciepe">
            <h1>
                {title}
            </h1>
            {/* <ol>
                {ingredients.map(ingredient => {
                    <li>{ingredient.text}</li>
                })}
            </ol> */}

            <ol>
                {ingredients.map(ingredient => (
                    
                    <li>
                       { ingredient.text}
                    </li>
                    )
                )}
            </ol>
            <p>
                {calories}
            </p>
            <img src={img} alt =""/>
        </div>
    )
}
export default Reciepe;
