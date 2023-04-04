window.addEventListener('load', () => {

    let parameters = new URLSearchParams(window.location.search);
    // calorie = parameters.get("calorie");
    // protein = parameters.get("protein");
    // carbs = parameters.get("carbs");
    // fat = parameters.get("fat");

    var calorieMin = parameters.get("calMin");
    var calorieMax = parameters.get("calMax");
    var proteinMin = parameters.get("proMin");
    var proteinMax = parameters.get("proMax");
    var carbsMin = parameters.get("carMin");
    var carbsMax = parameters.get("carMax");
    var fatMin = parameters.get("fatMin");
    var fatMax = parameters.get("fatMax");

    document.getElementById("calorieMin").value = calorieMin;
    document.getElementById("calorieMax").value = calorieMax;
    document.getElementById("proteinMin").value = proteinMin;
    document.getElementById("proteinMax").value = proteinMax;
    document.getElementById("carbsMin").value = carbsMin;
    document.getElementById("carbsMax").value = carbsMax;
    document.getElementById("fatMin").value = fatMin;
    document.getElementById("fatMax").value = fatMax;

    document.querySelectorAll(".recipesHeaderSearchBoxInputDiv input")[0].dispatchEvent(new Event("input"));
    document.querySelectorAll(".recipesHeaderSearchBoxInputDiv input")[1].dispatchEvent(new Event("input"));
    document.querySelectorAll(".recipesHeaderSearchBoxInputDiv.two input")[0].dispatchEvent(new Event("input"));
    document.querySelectorAll(".recipesHeaderSearchBoxInputDiv.two input")[1].dispatchEvent(new Event("input"));
    document.querySelectorAll(".recipesHeaderSearchBoxInputDiv.three input")[0].dispatchEvent(new Event("input"));
    document.querySelectorAll(".recipesHeaderSearchBoxInputDiv.three input")[1].dispatchEvent(new Event("input"));
    document.querySelectorAll(".recipesHeaderSearchBoxInputDiv.four input")[0].dispatchEvent(new Event("input"));
    document.querySelectorAll(".recipesHeaderSearchBoxInputDiv.four input")[1].dispatchEvent(new Event("input"));
})

fetch('https://script.google.com/macros/s/AKfycbweBXTy56rMSExNExD0RH2kONYYDxHCNGQMOT8xvXCzScRtYXEhzVA9IhU7LN6ErozdCw/exec')
    .then(res => res.json())
    .then(data => {
        let recipelist = [];
        let filteredlist = [];
        let searchrange = 0.2;

        Object.values(data).forEach(val => recipelist.push(val));
        // filteredlist = recipelist[0];

        // if (calorie != "null") {
        //     filteredlist = filteredlist.filter((filteredlist) => {
        //         return (filteredlist[4] >= calorie * (1 - searchrange) && filteredlist[4] <= calorie * (1 + searchrange));
        //     })
        // }
        // if (protein != "null") {
        //     filteredlist = filteredlist.filter((filteredlist) => {
        //         return (filteredlist[5] >= protein * (1 - searchrange) && filteredlist[5] <= protein * (1 + searchrange));
        //     })
        // }
        // if (carbs != "null") {
        //     filteredlist = filteredlist.filter((filteredlist) => {
        //         return (filteredlist[6] >= carbs * (1 - searchrange) && filteredlist[6] <= carbs * (1 + searchrange));
        //     })
        // }
        // if (fat != "null") {
        //     filteredlist = filteredlist.filter((filteredlist) => {
        //         return (filteredlist[7] >= fat * (1 - searchrange) && filteredlist[7] <= fat * (1 + searchrange));
        //     })
        // }


        // document.getElementById("resultsfoundtext").innerHTML = "Results Found: " + filteredlist.length;

        // filteredlist = shuffle(filteredlist);

        // for (var i = 1; i <= filteredlist.length; i++) {
        //     document.getElementById(i + "i").src = filteredlist[i - 1][8];
        //     document.getElementById(i + "t").innerHTML = filteredlist[i - 1][1];
        //     document.getElementById(i + "temp").id = filteredlist[i - 1][0];
        //     document.getElementById(i + "cal").innerHTML = filteredlist[i - 1][4] + " Calories";
        //     document.getElementById(i + "pro").innerHTML = filteredlist[i - 1][5] + "g Protein";
        //     document.getElementById(i + "car").innerHTML = filteredlist[i - 1][6] + "g Carbs";
        //     document.getElementById(i + "fat").innerHTML = filteredlist[i - 1][7] + "g Fat";
        // }


    })


function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}


let recipeCards = document.querySelectorAll(".reciperecentlyaddedslide");
for (let i = 0; i < recipeCards.length; i++) {
    recipeCards[i].addEventListener("click", function () {
        sessionStorage.setItem("recipe", this.id);
        // temploadrecipe.innerHTML = this.id;
        location.href = "recipepage.html?recipe=" + this.id;
    });
}

function searchrecipe() {
    var calorieMin = Math.max(document.getElementById("calorieMin").value, 0);
    var calorieMax = Math.min(document.getElementById("calorieMax").value, 1000);
    var proteinMin = Math.max(document.getElementById("proteinMin").value, 0);
    var proteinMax = Math.min(document.getElementById("proteinMax").value, 500);
    var carbsMin = Math.max(document.getElementById("carbsMin").value, 0);
    var carbsMax = Math.min(document.getElementById("carbsMax").value, 200);
    var fatMin = Math.max(document.getElementById("fatMin").value, 0);
    var fatMax = Math.min(document.getElementById("fatMax").value, 200);


    location.href = "recipesearch.html?calMin=" + calorieMin + "&calMax=" + calorieMax + "&proMin=" + proteinMin + "&proMax=" + proteinMax + "&carMin=" + carbsMin + "&carMax=" + carbsMax + "&fatMin=" + fatMin + "&fatMax=" + fatMax;
}