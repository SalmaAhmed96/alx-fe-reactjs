import React, { useEffect } from 'react';
import useRecipeStore from '../recipeStore';

const RecipeList = () => {
    const recipes = useRecipeStore(state => state.filteredRecipes);
    const filterRecipes = useRecipeStore(state => state.filterRecipes);
    const searchTerm = useRecipeStore(state => state.searchTerm);

    useEffect(() => {
        filterRecipes();
    }, [searchTerm, filterRecipes]);

    return (
        <div>
            {recipes.map((recipe) => (
                <div key={recipe.id}>
                    <h3>{recipe.title}</h3>
                    <p>{recipe.description}</p>
                </div>
            ))}
        </div>
    );
};

export default RecipeList;
