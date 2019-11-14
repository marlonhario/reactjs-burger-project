import React from 'react';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

export default function Burger(props) {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + 1} type={igKey} />
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el);
        }, []);

        if (transformedIngredients.length === 0) {
            transformedIngredients = <p>Please start adding ingreedients!!</p>
        }
    return (
        <div className="Burger">
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    )
}
