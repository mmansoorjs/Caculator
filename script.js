var screen = document.querySelector('input');



function calculater(num){
    screen.value = screen.value + num;
}
    
function clearNumber(){
    screen.value =  null;
}

function calculate(){
    screen.value =  eval(screen.value).toFixed(2);
}

function deletElement(){
    screen.value= screen.value.slice(0,-1)
}

function root(){
    screen.value = Math.sqrt(screen.value).toFixed(2);
}




// check slice method

// var str = "abcdefgh";
// var str2 = str.slice(0,-1);
// console.log(str2);

