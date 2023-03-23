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


fetch('https://script.google.com/macros/s/AKfycbweBXTy56rMSExNExD0RH2kONYYDxHCNGQMOT8xvXCzScRtYXEhzVA9IhU7LN6ErozdCw/exec')
    .then(res => res.json())
    .then(data => {
        let temp = [];

        Object.values(data).forEach(val => temp.push(val));

        
        document.getElementById("1i").src= temp[0][1][8];
        document.getElementById("2i").src= temp[0][2][8];
        document.getElementById("3i").src= temp[0][3][8];
        document.getElementById("4i").src= temp[0][4][8];
        document.getElementById("5i").src= temp[0][5][8];
        document.getElementById("6i").src= temp[0][6][8];
        document.getElementById("7i").src= temp[0][7][8];
        document.getElementById("8i").src= temp[0][8][8];

        document.getElementById("1t").innerHTML= temp[0][1][1];
        document.getElementById("2t").innerHTML= temp[0][2][1];
        document.getElementById("3t").innerHTML= temp[0][3][1];
        document.getElementById("4t").innerHTML= temp[0][4][1];
        document.getElementById("5t").innerHTML= temp[0][5][1];
        document.getElementById("6t").innerHTML= temp[0][6][1];
        document.getElementById("7t").innerHTML= temp[0][7][1];
        document.getElementById("8t").innerHTML= temp[0][8][1];

        document.getElementById("1i2").src= temp[0][1][8];
        document.getElementById("2i2").src= temp[0][2][8];
        document.getElementById("3i2").src= temp[0][3][8];
        document.getElementById("4i2").src= temp[0][4][8];
        document.getElementById("5i2").src= temp[0][5][8];
        document.getElementById("6i2").src= temp[0][6][8];
        document.getElementById("7i2").src= temp[0][7][8];
        document.getElementById("8i2").src= temp[0][8][8];

        document.getElementById("1t2").innerHTML= temp[0][1][1];
        document.getElementById("2t2").innerHTML= temp[0][2][1];
        document.getElementById("3t2").innerHTML= temp[0][3][1];
        document.getElementById("4t2").innerHTML= temp[0][4][1];
        document.getElementById("5t2").innerHTML= temp[0][5][1];
        document.getElementById("6t2").innerHTML= temp[0][6][1];
        document.getElementById("7t2").innerHTML= temp[0][7][1];
        document.getElementById("8t2").innerHTML= temp[0][8][1];
    })


function openRecipe(btn){
    alert(btn.id);
}

let recipeCards = document.querySelectorAll(".reciperecentlyaddedslide");
for(let i = 0; i< recipeCards.length; i++) {
    recipeCards[i].addEventListener("click", function(){
        sessionStorage.setItem("recipe", this.id);
        // temploadrecipe.innerHTML = this.id;
        location.href = "recipepage.html?recipe=" + this.id;
    });
}