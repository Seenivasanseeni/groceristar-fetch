const ingredients3 = require('../../data/Ingredients/ingredients3.json');
const menus        = require('../../data/Menu/menu.json');
const recipes      = require('../../data/Recipe4/recipe.json');
const nutritions1  = require('../../data/Nutrition/nutritions1.json');
const nutritions2  = require('../../data/Nutrition/nutritions2.json');


const parser = function ( filename ){

	return JSON.parse( JSON.stringify(filename) )
}

module.getIngredients3 = function(){
	return parser(ingredients3)
}

module.getMenu = function() {
	return parser(menus)
}

module.getRecipe = function(){
	return parser(recipes)
}

/**
 * Fetches one recipe by title
 * @param  {string} title title of the recipe
 * @return {object}       recipe object
 */
module.getRecipeByTitle = title => {
  let recipe, parsedRecipes = parser(recipes);
  recipe = parsedRecipes.filter(recipe => recipe.title === title)
  return recipe[0];
}

/**
 * Fetches random recipe
 * @return {object} recipe object
 */
module.getRandomRecipe = () => {
	let parsedRecipes = parser(recipes);
	const randomInt = Math.floor(Math.random() * (parsedRecipes.length - 1) );
	return parsedRecipes[randomInt];
}

module.getNutritions1 = function(){
	return parser(nutritions1)
}

module.getNutritions2 = function() {
	return parser(nutritions2)
}

module.exports = module;