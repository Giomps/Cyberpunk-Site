let title = document.querySelector(".title");
title.textContent = "#ffff";

setInterval(function() {
let container_1 = document.querySelector('.container-1')
let firstDiv = document.getElementsByTagName('div')[0];
let div = document.querySelector('.div')
let life = Math.floor(Math.random() * 98 ) + 1
let pourcentage = document.querySelector('.pourcentage');

// console.log(life)
    // console.log("hello")
    div.style.width = `${life}%`
    firstDiv.style.backgroundColor = "#fff"
    let array = ["a", "b", "c", "d", "e", "f", 1, 2, 3, 4, 5, 6, 7, 8, 9,0];
    let random = ["#"];
    for(let i = 0 ; i < 6 ; i++) {
        random.push(array[Math.floor(Math.random() * array.length)])
        container_1.style.backgroundColor = random.join('')
        title.textContent = random.join('')
        pourcentage.textContent = `${life}%`
    }
}, 4000)








