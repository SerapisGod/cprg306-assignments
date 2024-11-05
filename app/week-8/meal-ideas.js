"use client";
import React, { useEffect, useState } from "react";

const fetchMealIdeas = async (ingredient) => {
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.meals || [];
};

const fetchMealDetails = async (mealID) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`;
  const response = await fetch(url);
  const data = await response.json();
  if (!data.meals) return null;

  const meal = data.meals[0];

  // Extract ingredients and measures
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ingredient && ingredient.trim() !== "") {
      ingredients.push(`${ingredient} - ${measure}`);
    }
  }

  return { ...meal, ingredients };
};

function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [selectedMealID, setSelectedMealID] = useState(null);
  const [selectedMealDetails, setSelectedMealDetails] = useState(null);

  useEffect(() => {
    const loadMealIdeas = async () => {
      if (ingredient) {
        const mealIdeas = await fetchMealIdeas(ingredient);
        setMeals(mealIdeas);
        setSelectedMealID(null);
        setSelectedMealDetails(null);
      } else {
        setMeals([]);
      }
    };

    loadMealIdeas();
  }, [ingredient]);

  const handleMealClick = async (mealID) => {
    if (selectedMealID === mealID) {
      setSelectedMealID(null);
      setSelectedMealDetails(null);
    } else {
      setSelectedMealID(mealID);
      const mealDetails = await fetchMealDetails(mealID);
      setSelectedMealDetails(mealDetails);
    }
  };

  return (
    <div>
      <h3 className="text-xl font-bold">Meal Ideas</h3>
      {ingredient ? (
        <div>
          <p>Here are some meal ideas using {ingredient}:</p>
          <ul>
            {meals.map((meal) => (
              <li
                key={meal.idMeal}
                onClick={() => handleMealClick(meal.idMeal)}
                className="p-2 m-1 bg-slate-900 max-2-sm hover:bg-orange-800 cursor-pointer"
              >
                <p>{meal.strMeal}</p>
                {selectedMealID === meal.idMeal && selectedMealDetails && (
                  <div>
                    <img
                      src={selectedMealDetails.strMealThumb}
                      alt={selectedMealDetails.strMeal}
                      className="w-27 h-27 object-cover mb-2"
                    />
                    <h3>Ingredients needed:</h3>
                    <ul className="text-xs text-gray-400 ml-2">
                      {selectedMealDetails.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Select an item to see meal ideas</p>
      )}
    </div>
  );
}

export default MealIdeas;
