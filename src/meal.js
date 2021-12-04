function nameMenuItem(item) {
return `Delicious ${item}`
}

function createMenuItem(name, price, type) {
  var menuItem = {
    name: name,
    price: price,
    type: type,
  }
  return menuItem;
}

//
// function addIngredients(something, haha) {
// // for (i = 0; i < addIngredients.length; i++)
// haha.push(something)
//
//
//
// return something
// }

function addIngredients(ingredient, ingredients) {
  for (var i = 0; i < ingredients.length; i++) {
  if (ingredient === ingredients[i]) {
  return
  }
}
return ingredients.push(ingredient)
}

function formatPrice(price) {
  return `$${price}`
}

function decreasePrice(price) {
  return (price * .9)
}

function createRecipe(title, ingredients, menuItemType) {
  var recipe = {
  title: title,
  ingredients: ingredients,
  type: menuItemType,

}
return recipe
}



// function nameMenuItem() {
//   return `Delicious ${item}`
//
// }
module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
