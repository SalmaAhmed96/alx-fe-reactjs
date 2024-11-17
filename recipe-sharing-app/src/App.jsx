import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';

function App() {
    return (
        <Router>
            <div>
                <h1>Recipe Sharing Application</h1>
                <SearchBar />
                <Routes>
                    <Route path="/" element={<>
                        <AddRecipeForm />
                        <RecipeList />
                        <FavoritesList />
                        <RecommendationsList />
                    </>} />
                    <Route path="/recipe/:id" element={<RecipeDetails />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
