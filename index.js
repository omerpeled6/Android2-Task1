document.getElementById('fetchData').addEventListener('click', async () => {
  const foodName = document.getElementById('foodInput').value;
  try {
    const response = await fetch(
      `http://localhost:3000/api/recipes/${foodName}`
    );
    const data = await response.json();
    displayRecipes(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});

function displayRecipes(recipes) {
  const recipeContainer = document.getElementById('recipeContainer');
  recipeContainer.innerHTML = '';
  let row = document.createElement('div');
  row.classList.add('row');
  let count = 0;
  recipes.forEach((recipe, index) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
                <h2>${recipe.title}</h2>
                <img src="${recipe.image}" alt="${recipe.title}">
        
            `;
    row.appendChild(card);
    count++;
    // Start a new row after every 3 cards or if it's the last card
    if (count === 3 || index === recipes.length - 1) {
      recipeContainer.appendChild(row);
      row = document.createElement('div');
      row.classList.add('row');
      count = 0;
    }
  });
}
