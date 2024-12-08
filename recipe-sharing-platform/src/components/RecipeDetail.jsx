import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch('/src/data.json')
      .then(response => response.json())
      .then(data => {
        const recipeData = data.find(recipe => recipe.id === parseInt(id));
        setRecipe(recipeData);
      });
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover rounded-lg mb-4" />
      <p className="text-gray-700 mb-4">{recipe.summary}</p>
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
        <ul className="list-disc list-inside">
          {/* Example ingredients, update as needed */}
          <li>Ingredient 1</li>
          <li>Ingredient 2</li>
        </ul>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-lg mt-4">
        <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
        <ol className="list-decimal list-inside">
          {/* Example steps, update as needed */}
          <li>Step 1</li>
          <li>Step 2</li>
        </ol>
      </div>
    </div>
  );
};

export default RecipeDetail;
