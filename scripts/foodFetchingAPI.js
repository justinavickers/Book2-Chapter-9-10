fetch("http://localhost:3000/foods")
    .then(response => response.json())
    .then(myParsedFoods => {
        myParsedFoods.forEach(food => {
            console.log(food) // Should have a `barcode` property

            // Now fetch the food from the Food API
            fetch(`https://world.openfoodfacts.org/api/v0/product/${food.barcode}.json`)
                .then(response => response.json())
                .then(productInfo => {
                    food.ingredients = productInfo.product.ingredients_text
                    food.origin = productInfo.product.manufacturing_places
                    food.calories = productInfo.product.nutriments.energy_100g
                    food.fat = productInfo.product.nutriments.fat_value
                    food.sugar = productInfo.product.nutriments.sugars

                    // Produce HTML representation
                    const foodAsHTML = foodFactory(food)

                    // Add representaiton to DOM
                    addFoodToDom(foodAsHTML)
                })
        })
    })

