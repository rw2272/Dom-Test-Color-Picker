

function box1function() {
    console.log("Purple was clicked");
    document.querySelector('#container').style.backgroundColor = '#673AB7'
}

function box2function() {
    console.log("Blue was clicked");
    document.querySelector('#container').style.backgroundColor = '#2196F3'
}

function box3function() {
    console.log("Grey was clicked");
    document.querySelector('#container').style.backgroundColor = '#9E9E9E'
}


document.querySelector("#box1").addEventListener("click", box1function);
document.querySelector("#box2").addEventListener("click", box2function);
document.querySelector("#box3").addEventListener("click", box3function);


// change the below to

// #container{
// 	background-color: #FFFFFF;
// }


// #box1{
// 	background-color: #673AB7;
// }

// #box2{
// 	background-color: #2196F3;
// }

// #box3{
// 	background-color: #9E9E9E;
// }
