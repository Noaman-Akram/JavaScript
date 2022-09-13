const display = document.getElementById('display'); 
const input = document.getElementById('userInput'); 
const btn = document.getElementById('main-btn'); 

let data = 'gene highway chapter law administration government desk disease property unit addition boyfriend birthday obligation understanding resource communication homework relationship currency bathroom consequence television blood football initiative map painting responsibility suggestion'; 

const words = data.split(' ');
var selected;
console.log('Hey cheater :D')


const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))


function generator(){
    let random1 = Math.floor(Math.random() * 29);
    selected = words[random1].toUpperCase(); 

    var temp = selected; 
    let displayed = ''; 
    console.log(temp);
    
    while(temp.length != 0){
        let random2 = Math.floor(Math.random() * temp.length )
        var chosen = temp.slice(random2,random2+1)
        temp = temp.replace(chosen, '');
        displayed+=`${chosen} `
     
    }
    display.innerHTML = displayed; 
}

generator()


function trial(input){
    let i = input.toUpperCase();
    if(i != selected){
        alert('Try again!')
    }
    else{
        alert('Correct!');
        generator();
    } 
}

btn.addEventListener('click', () =>{
     trial(input.value)
    })

