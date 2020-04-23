// Category list - 
// Extract names of categories

    // Write a function getCategories() that returns an 
    // an array of the category names from the menu.
    // *** TRY THE "Object.keys() function"


function getCategories(obj){
    return Object.keys(obj);

};

console.log(getCategories(menu));


// Wrap names in <li> elements
// Write a function named "nameToListItem()" that accepts a 
// category name (like 'breakfast') and returns a new <li> DOM
// element with the new category name set as its .textContent
// -------------
// Make sure to return the new element.

function nameToListItem(name) {
    const listItem = document.createElement('li');
    listItem.textContent = name;

    return listItem;

};

console.log(nameToListItem('breakfast'));


// ******* Write a function that transforms an array of category ***** //
// ******* names to an array of <li> items. ***** //

    // Create a new function (named categoriesToListItem()). 
    // It should expect to receive an array of strings.

function categoriesToListItem(arrayOfStrings) {
    const category = [];
    let categoryLink = '';
    for (index = 0; index < arrayOfStrings.length; index++){

        // It should use your nameToListItem() function to do 
        // the transformation.

        categoryLink = nameToListItem(arrayOfStrings[index]);
        category.push(categoryLink);
    }  
    return category;
};

const categoryListItems = categoriesToListItem(getCategories(menu));

    

// ******* Call your getCategories() function 

    // to extract the name of the categories.

    // Take the result and pass it to the categoriesToListItem() function



// for (const element of categoryListItems){
//     console.log(element);
// }


// ******* Render the list items to .js-menu ******** //
// ************************************************** //

// function appendList(catListItem){
//     let elementToAppend = document.querySelector('.js-menu');
//     elementToAppend.appendChild('li');
// }

//     // Write a function that can append a single <li> to the
//     // .js-menu element.

//     // Apply that function to your array of <li> elements using 
//     // (.map)

//     // (Hint: this is the third step in transforming the category 
//     // names into DOM elements the user can see. The first two are 
//     // getCategories() and categoriesToListItem())

// console.log(categoryListItems.map(getCategories()));