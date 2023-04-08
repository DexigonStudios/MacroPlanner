window.addEventListener('load', () => {
    if (typeof localStorage !== 'undefined') {
        const recipeFile = localStorage.getItem('recipeFile');
        const recipeFileExpDate = localStorage.getItem('recipeFileExpDate');

        const date = new Date().setSeconds(new Date().getSeconds() + 600);

        if (recipeFile) {
            const checkExpire = (new Date()).getTime() > JSON.parse(recipeFileExpDate).expDate;
            if (checkExpire) {
                fetch('https://script.google.com/macros/s/AKfycbweBXTy56rMSExNExD0RH2kONYYDxHCNGQMOT8xvXCzScRtYXEhzVA9IhU7LN6ErozdCw/exec')
                    .then(res => res.json())
                    .then(data => {
                        let recipelist = [];
                        Object.values(data).forEach(val => recipelist.push(val));
                        localStorage.setItem('recipeFile', JSON.stringify(recipelist[0]));
                        localStorage.setItem('recipeFileExpDate', JSON.stringify({
                            expDate: date,
                        }));
                        loadIndexPage(localStorage.getItem('recipeFile'));
                    })
            } else {
                loadIndexPage(localStorage.getItem('recipeFile'));
            }

        } else {
            fetch('https://script.google.com/macros/s/AKfycbweBXTy56rMSExNExD0RH2kONYYDxHCNGQMOT8xvXCzScRtYXEhzVA9IhU7LN6ErozdCw/exec')
                .then(res => res.json())
                .then(data => {
                    let recipelist = [];
                    Object.values(data).forEach(val => recipelist.push(val));
                    localStorage.setItem('recipeFile', JSON.stringify(recipelist[0]));
                    localStorage.setItem('recipeFileExpDate', JSON.stringify({
                        expDate: date,
                    }));
                    loadIndexPage(localStorage.getItem('recipeFile'));
                })
        }
    } else {
        fetch('https://script.google.com/macros/s/AKfycbweBXTy56rMSExNExD0RH2kONYYDxHCNGQMOT8xvXCzScRtYXEhzVA9IhU7LN6ErozdCw/exec')
            .then(res => res.json())
            .then(data => {
                let recipelist = [];
                Object.values(data).forEach(val => recipelist.push(val));
                loadIndexPage(JSON.stringify(recipelist[0]));
            })
    }
})


function loadIndexPage(data) {
    let temp = [];

    temp = JSON.parse(data);


        for(let i = 1; i<=8; i++){
            document.getElementById(i+"link").id = temp[i][0];
            document.getElementById(i+"link2").id = temp[i][0];
            document.getElementById(i+"i").src = temp[i][8];
            document.getElementById(i+"i2").src = temp[i][8];
            document.getElementById(i+"t").innerHTML = temp[i][1];
            document.getElementById(i+"t2").innerHTML = temp[i][1];
            document.getElementById(i+"cal").innerHTML = temp[i][4] + " Calories";
            document.getElementById(i+"pro").innerHTML = temp[i][5] + "g Protein";
            document.getElementById(i+"car").innerHTML = temp[i][6] + "g Carbs";
            document.getElementById(i+"fat").innerHTML = temp[i][7] + "g Fat";
            document.getElementById(i+"cal2").innerHTML = temp[i][4] + " Calories";
            document.getElementById(i+"pro2").innerHTML = temp[i][5] + "g Protein";
            document.getElementById(i+"car2").innerHTML = temp[i][6] + "g Carbs";
            document.getElementById(i+"fat2").innerHTML = temp[i][7] + "g Fat";
        }

        for(let i = 1; i<=8; i++){
            document.getElementById(i+"link3").id = temp[i+10][0];
            document.getElementById(i+"link4").id = temp[i+10][0];
            document.getElementById(i+"i3").src = temp[i+10][8];
            document.getElementById(i+"i4").src = temp[i+10][8];
            document.getElementById(i+"t3").innerHTML = temp[i+10][1];
            document.getElementById(i+"t4").innerHTML = temp[i+10][1];
            document.getElementById(i+"cal3").innerHTML = temp[i+10][4] + " Calories";
            document.getElementById(i+"pro3").innerHTML = temp[i+10][5] + "g Protein";
            document.getElementById(i+"car3").innerHTML = temp[i+10][6] + "g Carbs";
            document.getElementById(i+"fat3").innerHTML = temp[i+10][7] + "g Fat";
            document.getElementById(i+"cal4").innerHTML = temp[i+10][4] + " Calories";
            document.getElementById(i+"pro4").innerHTML = temp[i+10][5] + "g Protein";
            document.getElementById(i+"car4").innerHTML = temp[i+10][6] + "g Carbs";
            document.getElementById(i+"fat4").innerHTML = temp[i+10][7] + "g Fat";
        }
    }


function openRecipe(btn) {
    alert(btn.id);
}

let recipeCards = document.querySelectorAll(".recipeSmallCardContainer");
for (let i = 0; i < recipeCards.length; i++) {
    recipeCards[i].addEventListener("click", function () {
        sessionStorage.setItem("recipe", this.id);
        // temploadrecipe.innerHTML = this.id;
        location.href = "recipepage.html?recipe=" + this.id;
    });
}

function searchrecipe() {
    var calorieMin = Math.max(document.getElementById("calorieMin").value, 0);
    var calorieMax = Math.min(document.getElementById("calorieMax").value, 2000);
    var proteinMin = Math.max(document.getElementById("proteinMin").value, 0);
    var proteinMax = Math.min(document.getElementById("proteinMax").value, 200);
    var carbsMin = Math.max(document.getElementById("carbsMin").value, 0);
    var carbsMax = Math.min(document.getElementById("carbsMax").value, 200);
    var fatMin = Math.max(document.getElementById("fatMin").value, 0);
    var fatMax = Math.min(document.getElementById("fatMax").value, 200);


    location.href = "recipesearch.html?calMin=" + calorieMin + "&calMax=" + calorieMax + "&proMin=" + proteinMin + "&proMax=" + proteinMax + "&carMin=" + carbsMin + "&carMax=" + carbsMax + "&fatMin=" + fatMin + "&fatMax=" + fatMax;
}