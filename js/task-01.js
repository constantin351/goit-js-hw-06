const categories = document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`);

// console.log(categories)

for (const category of categories) { 
    console.log(`Category: ${category.querySelector('h2').textContent}`)
    console.log(`Elements: ${category.querySelectorAll('li').length}`)
}