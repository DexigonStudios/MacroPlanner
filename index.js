fetch('https://script.google.com/macros/s/AKfycbweBXTy56rMSExNExD0RH2kONYYDxHCNGQMOT8xvXCzScRtYXEhzVA9IhU7LN6ErozdCw/exec')
    .then(res => res.json())
    .then(data => {
        let recipelist = [];

        Object.values(data).forEach(val => recipelist.push(val));

        recipelist = recipelist[0];
        recipelist.shift();

        var recipeCount = recipelist.length;

        var holdNumList = [];

        let homeRecipeScrollerTrack = document.createElement('div');
        homeRecipeScrollerTrack.classList.add('homeRecipeScrollerTrack');
        for (var i = 0; i < 10; i++) {
            let tempRand = getRandomInt(recipeCount);
            holdNumList.push(tempRand);
            let homeRecipeScrollerSlide = document.createElement('div');
            let homeRecipeScrollerSlideImg = document.createElement('img');
            homeRecipeScrollerSlide.classList.add('homeRecipeScrollerSlide');
            homeRecipeScrollerSlide.id = recipelist[tempRand][0];
            homeRecipeScrollerSlideImg.src = recipelist[tempRand][8];
            homeRecipeScrollerSlide.append(homeRecipeScrollerSlideImg);
            homeRecipeScrollerTrack.append(homeRecipeScrollerSlide);
        }
        for (var i = 0; i < 10; i++) {
            tempRand = holdNumList[i];
            let homeRecipeScrollerSlide = document.createElement('div');
            let homeRecipeScrollerSlideImg = document.createElement('img');
            homeRecipeScrollerSlide.classList.add('homeRecipeScrollerSlide');
            homeRecipeScrollerSlide.id = recipelist[tempRand][0];
            homeRecipeScrollerSlideImg.src = recipelist[tempRand][8];
            homeRecipeScrollerSlide.append(homeRecipeScrollerSlideImg);
            homeRecipeScrollerTrack.append(homeRecipeScrollerSlide);
        }
        document.getElementById("homeRecipeScroller").append(homeRecipeScrollerTrack);
        holdNumList = [];


        let homeRecipeScrollerTrack2 = document.createElement('div');
        homeRecipeScrollerTrack2.classList.add('homeRecipeScrollerTrack');
        for (var i = 0; i < 10; i++) {
            let tempRand = getRandomInt(recipeCount);
            holdNumList.push(tempRand);
            let homeRecipeScrollerSlide = document.createElement('div');
            let homeRecipeScrollerSlideImg = document.createElement('img');
            homeRecipeScrollerSlide.classList.add('homeRecipeScrollerSlide');
            homeRecipeScrollerSlide.classList.add('two');
            homeRecipeScrollerSlide.id = recipelist[tempRand][0];
            homeRecipeScrollerSlideImg.src = recipelist[tempRand][8];
            homeRecipeScrollerSlide.append(homeRecipeScrollerSlideImg);
            homeRecipeScrollerTrack2.append(homeRecipeScrollerSlide);
        }
        for (var i = 0; i < 10; i++) {
            tempRand = holdNumList[i];
            let homeRecipeScrollerSlide = document.createElement('div');
            let homeRecipeScrollerSlideImg = document.createElement('img');
            homeRecipeScrollerSlide.classList.add('homeRecipeScrollerSlide');
            homeRecipeScrollerSlide.classList.add('two');
            homeRecipeScrollerSlide.id = recipelist[tempRand][0];
            homeRecipeScrollerSlideImg.src = recipelist[tempRand][8];
            homeRecipeScrollerSlide.append(homeRecipeScrollerSlideImg);
            homeRecipeScrollerTrack2.append(homeRecipeScrollerSlide);
        }
        document.getElementById("homeRecipeScroller").append(homeRecipeScrollerTrack2);
        holdNumList = [];

        let homeRecipeScrollerTrack3 = document.createElement('div');
        homeRecipeScrollerTrack3.classList.add('homeRecipeScrollerTrack');
        for (var i = 0; i < 10; i++) {
            let tempRand = getRandomInt(recipeCount);
            holdNumList.push(tempRand);
            let homeRecipeScrollerSlide = document.createElement('div');
            let homeRecipeScrollerSlideImg = document.createElement('img');
            homeRecipeScrollerSlide.classList.add('homeRecipeScrollerSlide');
            homeRecipeScrollerSlide.classList.add('three');
            homeRecipeScrollerSlide.id = recipelist[tempRand][0];
            homeRecipeScrollerSlideImg.src = recipelist[tempRand][8];
            homeRecipeScrollerSlide.append(homeRecipeScrollerSlideImg);
            homeRecipeScrollerTrack3.append(homeRecipeScrollerSlide);
        }
        for (var i = 0; i < 10; i++) {
            tempRand = holdNumList[i];
            let homeRecipeScrollerSlide = document.createElement('div');
            let homeRecipeScrollerSlideImg = document.createElement('img');
            homeRecipeScrollerSlide.classList.add('homeRecipeScrollerSlide');
            homeRecipeScrollerSlide.classList.add('three');
            homeRecipeScrollerSlide.id = recipelist[tempRand][0];
            homeRecipeScrollerSlideImg.src = recipelist[tempRand][8];
            homeRecipeScrollerSlide.append(homeRecipeScrollerSlideImg);
            homeRecipeScrollerTrack3.append(homeRecipeScrollerSlide);
        }
        document.getElementById("homeRecipeScroller").append(homeRecipeScrollerTrack3);
        holdNumList = [];


        let homeRecipeScrollerTrack4 = document.createElement('div');
        homeRecipeScrollerTrack4.classList.add('homeRecipeScrollerTrack');
        for (var i = 0; i < 10; i++) {
            let tempRand = getRandomInt(recipeCount);
            holdNumList.push(tempRand);
            let homeRecipeScrollerSlide = document.createElement('div');
            let homeRecipeScrollerSlideImg = document.createElement('img');
            homeRecipeScrollerSlide.classList.add('homeRecipeScrollerSlide');
            homeRecipeScrollerSlide.classList.add('four');
            homeRecipeScrollerSlide.id = recipelist[tempRand][0];
            homeRecipeScrollerSlideImg.src = recipelist[tempRand][8];
            homeRecipeScrollerSlide.append(homeRecipeScrollerSlideImg);
            homeRecipeScrollerTrack4.append(homeRecipeScrollerSlide);
        }
        for (var i = 0; i < 10; i++) {
            tempRand = holdNumList[i];
            let homeRecipeScrollerSlide = document.createElement('div');
            let homeRecipeScrollerSlideImg = document.createElement('img');
            homeRecipeScrollerSlide.classList.add('homeRecipeScrollerSlide');
            homeRecipeScrollerSlide.classList.add('four');
            homeRecipeScrollerSlide.id = recipelist[tempRand][0];
            homeRecipeScrollerSlideImg.src = recipelist[tempRand][8];
            homeRecipeScrollerSlide.append(homeRecipeScrollerSlideImg);
            homeRecipeScrollerTrack4.append(homeRecipeScrollerSlide);
        }
        document.getElementById("homeRecipeScroller").append(homeRecipeScrollerTrack4);
        holdNumList = [];


        let homeRecipeScrollerTrack5 = document.createElement('div');
        homeRecipeScrollerTrack5.classList.add('homeRecipeScrollerTrack');
        for (var i = 0; i < 10; i++) {
            let tempRand = getRandomInt(recipeCount);
            holdNumList.push(tempRand);
            let homeRecipeScrollerSlide = document.createElement('div');
            let homeRecipeScrollerSlideImg = document.createElement('img');
            homeRecipeScrollerSlide.classList.add('homeRecipeScrollerSlide');
            homeRecipeScrollerSlide.classList.add('five');
            homeRecipeScrollerSlide.id = recipelist[tempRand][0];
            homeRecipeScrollerSlideImg.src = recipelist[tempRand][8];
            homeRecipeScrollerSlide.append(homeRecipeScrollerSlideImg);
            homeRecipeScrollerTrack5.append(homeRecipeScrollerSlide);
        }
        for (var i = 0; i < 10; i++) {
            tempRand = holdNumList[i];
            let homeRecipeScrollerSlide = document.createElement('div');
            let homeRecipeScrollerSlideImg = document.createElement('img');
            homeRecipeScrollerSlide.classList.add('homeRecipeScrollerSlide');
            homeRecipeScrollerSlide.classList.add('five');
            homeRecipeScrollerSlide.id = recipelist[tempRand][0];
            homeRecipeScrollerSlideImg.src = recipelist[tempRand][8];
            homeRecipeScrollerSlide.append(homeRecipeScrollerSlideImg);
            homeRecipeScrollerTrack5.append(homeRecipeScrollerSlide);
        }
        document.getElementById("homeRecipeScroller").append(homeRecipeScrollerTrack5);
        holdNumList = [];

        let recipeCards = document.querySelectorAll(".homeRecipeScrollerSlide");
        for (let i = 0; i < recipeCards.length; i++) {
            recipeCards[i].addEventListener("click", function () {
                sessionStorage.setItem("recipe", this.id);
                // temploadrecipe.innerHTML = this.id;
                location.href = "recipepage.html?recipe=" + this.id;
            });
        }

    })



function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}