// let SHEET_ID = '1gUQYJD1asaVBULXlphUWNQLWVUTLc45PGTHed_dP5bw';
// let SHEET_TITLE = 'RecipeList';
// let SHEET_RANGE = 'B3:C5';

// let FULL_URL = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tq?sheet=' + SHEET_TITLE + '&range=' + SHEET_RANGE);

// let currentrecipe = 0;

// window.addEventListener('load', () => {

//     let parameters= new URLSearchParams( window.location.search );
//     recipe = parameters.get( "recipe");
//     currentrecipe = recipe;
// })

// fetch(FULL_URL)
//     .then(res => res.text())
//     .then(rep => {
//         let data = JSON.parse(rep.substr(47).slice(0, -2));
//         document.getElementById('recipename').innerHTML =  data.table.rows[0].c[0].v;


//         // for(let i = 1; i<length; i++){
//         //     for(let j = 1; j<width; j++){
//         //         console.log(data.table.rows[i].c[j].v);
//         //     }
//         // }

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

window.addEventListener('load', () => {

    let parameters= new URLSearchParams( window.location.search );
    recipe = parameters.get( "recipe");
    currentrecipe = recipe;
})

fetch('https://script.google.com/macros/s/AKfycbweBXTy56rMSExNExD0RH2kONYYDxHCNGQMOT8xvXCzScRtYXEhzVA9IhU7LN6ErozdCw/exec')
    .then(res => res.json())
    .then(data => {
        let temp = [];

        Object.values(data).forEach(val => temp.push(val));

        document.getElementById("recipename").innerHTML = temp[0][recipe][1];
        document.getElementById("imagetest").src= temp[0][recipe][8];
    })

