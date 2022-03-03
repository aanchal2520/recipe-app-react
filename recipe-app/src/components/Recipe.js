import React from 'react';
import style from '../recipe.module.css'

const Recipe = (props) => {
    const { title, calories, image, ingredients } = props;
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ol>
                {ingredients.map((ingredient) => {
                    return <li key={ingredient.text}>{ingredient.text}</li>
                })}
            </ol>
            <p>{calories}</p>
            <img className={style.image} src={image} alt="" />
        </div>
    );
}

export default Recipe;