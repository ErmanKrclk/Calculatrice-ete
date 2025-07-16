let runningTotal = 0;
let buffer = "0";
let operateurPrecedent;

const screen = document.querySelector('.screen');

function onClick(value){
    if(isNaN(value)){
        handleSymbol(value);
    } else {
        handleNumber(value);
    }

    screen.innerText = buffer;
}

function handleSymbol(value){
    switch(value){
        case 'C':
            buffer = "0";
            runningTotal = 0;
            break;
        case '=':
            if(operateurPrecedent === 0){
                return
            } 
            flush

    }
}