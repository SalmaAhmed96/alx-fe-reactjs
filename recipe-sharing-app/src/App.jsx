import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';

function App() {
    return (
        <Router>
            <div>
                <h1>Recipe Sharing Application</h1>
                <Routes>
                    <Route path="/" element={<>
                        <AddRecipeForm />
                        <RecipeList />
                    </>} />
                    <Route path="/recipe/:id" element={<RecipeDetails />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
