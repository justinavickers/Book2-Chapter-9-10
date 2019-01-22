
const foodFactory = displayFoodItem => {
    return `
    <div class="foodList">
        <h2>${displayFoodItem.name}🐱‍💻</h2>
        <p>Category: ${displayFoodItem.category}</p>
        <p>Ethnicity: ${displayFoodItem.ethnicity}</p>
        <p>Ingredients: ${displayFoodItem.ingredients}</p>
        <p>Origin: ${displayFoodItem.origin}</p>
        <p>Calories: ${displayFoodItem.calories}</p>
        <p>Fat: ${displayFoodItem.fat}</p>
        <p>Sugar: ${displayFoodItem.sugar}</p>
    </div>
    `
}

const addFoodToDom = foodHTML => {
  document.querySelector(".foodContainer").innerHTML += foodHTML
}