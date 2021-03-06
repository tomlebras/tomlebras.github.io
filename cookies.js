var cookieData = { // portions for 1x, that is, 8 cookies
    cookies: 8,
    butter_g: 240,
    lightbrown_sugar: 135,
    sugar_g: 100,
    eggs: 2,
    cakeFlour_g: 120,
    flour_g: 180,
    bakingPowder_tsp: 1,
    bakingSoda_tsp: 1,
    salt_tsp: 0.5,
    walnuts_g: 250,
    chocolate_g: 350,
    cakeFlouder_g: 120,
    flour_tsp: 2,
    maizena_tsp: 2,
    cookies2: 8,
};
var proportion = 1;
const radios = document.getElementsByName("proportions");
const coll = document.getElementsByClassName("dynamic");



function updateRecipe() {

    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) { // attention c'est .checked et pas .checked()
            proportion = radios[i].value;
        }    
    }
    
    // this is not very good practice : as objects are not ordered, there is no guarantee that the for loop should iterate in the correct order. But it works. 
    var i = 0;
    for (element in cookieData) {
        coll[i].innerHTML = cookieData[element]*proportion;
        i += 1; 
    }
};


for (let i = 0; i < radios.length; i++) {
    radios[i].addEventListener("click", updateRecipe);   
}

