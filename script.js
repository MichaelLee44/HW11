/*
Michael Kellems
9/25/24
CIT 215
Prof. Kane
*/


const entree1 = {

    starter : "Bacon Cheese Fries",

    main: "Beef Burger and Coleslaw",

    dessert: "Deep Fried Ice-Cream"

};



const entree2 = {

    starter : "Smoked Salmon On Rye",

    main: "Vegetarian Couscous Rolls",

    dessert: "Fruit Plate"

};



const entree3 = {

    starter : "Chips and Hummus",

    main: "Grilled Chicken in Hot Sauce",

    dessert: "Chocolate Ganache Cake"

};

const entree4 = {
    starter: "Rye Bread with Honey Butter",
    main: "Twice Baked Potatoes",
    dessert: "Strawberry Pie"
}

const entree5 = {
    starter: "Irish Nachos",
    main: "Honey Baked Ham",
    dessert: "French Silk Pie"
}

// ... add more meal objects

// Add more choices and update the array

const meals = [entree1, entree2, entree3, entree4, entree5];

const showMeal = (mealNumber)=> {

    let str = `Start with ${meals[mealNumber].starter}, 
    followed by ${meals[mealNumber].main}, 
    and finish off your meal with ${meals[mealNumber].dessert}`;

    let area = document.querySelector('.randommeal');
    area.innerHTML = str

}

const randomMeal = function(mealsarray) {

    // Get a random number between 0 and the length of the array, meals
    let mealNumber = Math.floor(Math.random()*mealsarray.length); 
    
    showMeal(mealNumber)
    
}
    
    