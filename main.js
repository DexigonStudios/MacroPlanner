// let SHEET_ID = '1gUQYJD1asaVBULXlphUWNQLWVUTLc45PGTHed_dP5bw'
// let SHEET_TITLE = 'RecipeList';
// let SHEET_RANGE = 'B3:E50 '

// let FULL_URL = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tq?sheet=' + SHEET_TITLE + '&range=' + SHEET_RANGE);

// fetch(FULL_URL)
//     .then(res => res.text())
//     .then(rep => {
//         let data = JSON.parse(rep.substr(47).slice(0, -2));

//         // let player_Name_title = document.getElementById('player_Name_title');
//         // let player_Shoe_title = document.getElementById('player_Shoe_title');
//         // let player_Name = document.getElementById('player_Name');
//         // let length = data.table.rows.length;

//         // player_Name_title.innerHTML = data.table.rows[0].c[0].v;
//         // player_Shoe_title.innerHTML = data.table.rows[0].c[1].v;

//         // let selectOptionPlayer = document.createElement('select');
//         // player_Name.append(selectOptionPlayer);
//         // let selectOptionShoe = document.createElement('select');
//         // player_Shoe.append(selectOptionShoe);

//         // for(let i = 1; i<length; i++){
//         //     let NewBoxPlayer = document.createElement('option');
//         //     NewBoxPlayer.id = ("box" + i);
//         //     NewBoxPlayer.className = "Some_Style";
//         //     selectOptionPlayer.append(NewBoxPlayer);
//         //     NewBoxPlayer.innerHTML = data.table.rows[i].c[0].v;

//         //     let NewBoxShoe = document.createElement('option');
//         //     NewBoxShoe.id = ("box" + i);
//         //     NewBoxShoe.className = "Some_Style";
//         //     selectOptionShoe.append(NewBoxShoe);
//         //     NewBoxShoe.innerHTML = data.table.rows[i].c[1].v;
//         // }

//         // let test = data.table.rows[1].c[2].v;


//         // document.getElementById("parent").src=test;

//     })


fetch('https://script.google.com/macros/s/AKfycbzRkAKnLE7q4MWaSkVdIJM8p-4Kw4TB_GBDdskS2JcbWmWjJYnW8qKUjKcGmrazcw/exec')
    .then(res => res.json())
    .then(data => {
        let temp = [];

        Object.values(data).forEach(val => temp.push(val));

        for(let i = 1; i<=8; i++){
            document.getElementById(i+"link").id = temp[0][i][0];
            document.getElementById(i+"link2").id = temp[0][i][0];
            document.getElementById(i+"i").src = temp[0][i][8];
            document.getElementById(i+"i2").src = temp[0][i][8];
            document.getElementById(i+"t").innerHTML = temp[0][i][1];
            document.getElementById(i+"t2").innerHTML = temp[0][i][1];
            document.getElementById(i+"cal").innerHTML = temp[0][i][4] + " Calories";
            document.getElementById(i+"pro").innerHTML = temp[0][i][5] + "g Protein";
            document.getElementById(i+"car").innerHTML = temp[0][i][6] + "g Carbs";
            document.getElementById(i+"fat").innerHTML = temp[0][i][7] + "g Fat";
            document.getElementById(i+"cal2").innerHTML = temp[0][i][4] + " Calories";
            document.getElementById(i+"pro2").innerHTML = temp[0][i][5] + "g Protein";
            document.getElementById(i+"car2").innerHTML = temp[0][i][6] + "g Carbs";
            document.getElementById(i+"fat2").innerHTML = temp[0][i][7] + "g Fat";
        }

        for(let i = 1; i<=8; i++){
            document.getElementById(i+"link3").id = temp[0][i+10][0];
            document.getElementById(i+"link4").id = temp[0][i+10][0];
            document.getElementById(i+"i3").src = temp[0][i+10][8];
            document.getElementById(i+"i4").src = temp[0][i+10][8];
            document.getElementById(i+"t3").innerHTML = temp[0][i+10][1];
            document.getElementById(i+"t4").innerHTML = temp[0][i+10][1];
            document.getElementById(i+"cal3").innerHTML = temp[0][i+10][4] + " Calories";
            document.getElementById(i+"pro3").innerHTML = temp[0][i+10][5] + "g Protein";
            document.getElementById(i+"car3").innerHTML = temp[0][i+10][6] + "g Carbs";
            document.getElementById(i+"fat3").innerHTML = temp[0][i+10][7] + "g Fat";
            document.getElementById(i+"cal4").innerHTML = temp[0][i+10][4] + " Calories";
            document.getElementById(i+"pro4").innerHTML = temp[0][i+10][5] + "g Protein";
            document.getElementById(i+"car4").innerHTML = temp[0][i+10][6] + "g Carbs";
            document.getElementById(i+"fat4").innerHTML = temp[0][i+10][7] + "g Fat";
        }
    })


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
    var calorieMax = Math.min(document.getElementById("calorieMax").value, 1000);
    var proteinMin = Math.max(document.getElementById("proteinMin").value, 0);
    var proteinMax = Math.min(document.getElementById("proteinMax").value, 500);
    var carbsMin = Math.max(document.getElementById("carbsMin").value, 0);
    var carbsMax = Math.min(document.getElementById("carbsMax").value, 200);
    var fatMin = Math.max(document.getElementById("fatMin").value, 0);
    var fatMax = Math.min(document.getElementById("fatMax").value, 200);


    location.href = "recipesearch.html?calMin=" + calorieMin + "&calMax=" + calorieMax + "&proMin=" + proteinMin + "&proMax=" + proteinMax + "&carMin=" + carbsMin + "&carMax=" + carbsMax + "&fatMin=" + fatMin + "&fatMax=" + fatMax;
}