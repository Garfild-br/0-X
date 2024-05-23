let fild = document.getElementById('game')

for(let i=0; i<9; i++){
    fild.innerHTML += '<div class="block"></div>'
}


let priority = 0


fild.addEventListener('click', function(event){
    
    if (event.target.className == 'block' ){
        if(priority%2==0){
            event.target.innerHTML = "O"
        }
        else{
            event.target.innerHTML = "X"
        }
        priority++;
        checkWinner();
    
    }
})

function checkWinner(){
    let allBlock = document.querySelectorAll('.block');
    
    if( allBlock[0].innerHTML=='X' && 
        allBlock[1].innerHTML=='X' && 
        allBlock[2].innerHTML=='X')
    
        alert("X - winner!!!")

    if( allBlock[3].innerHTML=='X' && 
        allBlock[4].innerHTML=='X' && 
        allBlock[5].innerHTML=='X')

        alert("X - winner!!!")

    if( allBlock[6].innerHTML=='X' && 
        allBlock[7].innerHTML=='X' && 
        allBlock[8].innerHTML=='X')

        alert("X - winner!!!")

    if( allBlock[0].innerHTML=='X' && 
        allBlock[4].innerHTML=='X' && 
        allBlock[8].innerHTML=='X')
    
        alert("X - winner!!!")

    if( allBlock[2].innerHTML=='X' && 
        allBlock[4].innerHTML=='X' && 
        allBlock[6].innerHTML=='X')
    
        alert("X - winner!!!")

    if( allBlock[0].innerHTML=='X' && 
        allBlock[3].innerHTML=='X' && 
        allBlock[6].innerHTML=='X')
    
        alert("X - winner!!!")
    
    if( allBlock[1].innerHTML=='X' && 
        allBlock[4].innerHTML=='X' && 
        allBlock[7].innerHTML=='X')
    
        alert("X - winner!!!")

    if( allBlock[2].innerHTML=='X' && 
        allBlock[5].innerHTML=='X' && 
        allBlock[8].innerHTML=='X')
    
        alert("X - winner!!!")

 //////////////////////////////////////////////////////////////   

    if( allBlock[0].innerHTML=='O' && 
        allBlock[1].innerHTML=='O' && 
        allBlock[2].innerHTML=='O')
    
        alert("O - winner!!!")

    if( allBlock[3].innerHTML=='O' && 
        allBlock[4].innerHTML=='O' && 
        allBlock[5].innerHTML=='O')

        alert("O - winner!!!")

    if( allBlock[6].innerHTML=='O' && 
        allBlock[7].innerHTML=='O' && 
        allBlock[8].innerHTML=='O')

        alert("O - winner!!!")

    if( allBlock[0].innerHTML=='O' && 
        allBlock[4].innerHTML=='O' && 
        allBlock[8].innerHTML=='O')
    
        alert("O - winner!!!")

    if( allBlock[2].innerHTML=='O' && 
        allBlock[4].innerHTML=='O' && 
        allBlock[6].innerHTML=='O')
    
        alert("O - winner!!!")

    if( allBlock[0].innerHTML=='O' && 
        allBlock[3].innerHTML=='O' && 
        allBlock[6].innerHTML=='O')
    
        alert("O - winner!!!")
    
    if( allBlock[1].innerHTML=='O' && 
        allBlock[4].innerHTML=='O' && 
        allBlock[7].innerHTML=='O')
    
        alert("O - winner!!!")

    if( allBlock[2].innerHTML=='O' && 
        allBlock[5].innerHTML=='O' && 
        allBlock[8].innerHTML=='O')
    
        alert("O- winner!!!")

}