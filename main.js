let SHEET_ID = '1cDMAc8bdb56xS35ONMKZV_I5ywcgHZzGmtHdzpOXy1I'
let SHEET_TITLE = 'Recipes';
let SHEET_RANGE = 'B3:C50 '

let FULL_URL = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tq?sheet=' + SHEET_TITLE + '&range=' + SHEET_RANGE);

fetch(FULL_URL)
    .then(res => res.text())
    .then(rep => {
        let data = JSON.parse(rep.substr(47).slice(0, -2));

        let player_Name_title = document.getElementById('player_Name_title');
        let player_Shoe_title = document.getElementById('player_Shoe_title');
        let player_Name = document.getElementById('player_Name');
        let player_Shoe = document.getElementById('player_Shoe');
        let Grid2 = document.getElementById('Grid2');
        let length = data.table.rows.length;

        player_Name_title.innerHTML = data.table.rows[0].c[0].v;
        player_Shoe_title.innerHTML = data.table.rows[0].c[1].v;

        let selectOptionPlayer = document.createElement('select');
        player_Name.append(selectOptionPlayer);
        let selectOptionShoe = document.createElement('select');
        player_Shoe.append(selectOptionShoe);

        for(let i = 1; i<length; i++){
            let NewBoxPlayer = document.createElement('option');
            NewBoxPlayer.id = ("box" + i);
            NewBoxPlayer.className = "Some_Style";
            selectOptionPlayer.append(NewBoxPlayer);
            NewBoxPlayer.innerHTML = data.table.rows[i].c[0].v;

            let NewBoxShoe = document.createElement('option');
            NewBoxShoe.id = ("box" + i);
            NewBoxShoe.className = "Some_Style";
            selectOptionShoe.append(NewBoxShoe);
            NewBoxShoe.innerHTML = data.table.rows[i].c[1].v;
        }
    })