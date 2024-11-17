import React, { useEffect } from 'react';
import useRecipeStore from '../recipeStore';

const RecommendationsList = () => {
    const recommendations = useRecipeStore((state) => state.recommendations);
    const generateRecommendations = useRecipeStore((state) => state.generateRecommendations);

    useEffect(() => {
        generateRecommendations();
    }, [generateRecommendations]);

    return (
        <div>
            <h2>Recommended for You</h2>
            {recommendations.map((recipe) => (
                <div key={recipe.id}>
                    <h3>{recipe.title}</h3>
                    <p>{recipe.description}</p>
                </div>
            ))}
        </div>
    );
};

export default RecommendationsList;
