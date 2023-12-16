let innerBoxes = document.querySelectorAll(".inner");
let h1 = document.querySelector("h1");
let btn  = document.querySelector('button');
let i = 0;
let movesCount  = 0;
gameOver = true;
btn.addEventListener("click", function(){
    btn.style.backgroundColor = "red";
    btn.style.color = "white";
    btn.innerText = "Reset";
    gameOver = false;
    h1.innerText = "Player Turn";
    i = 0;
    movesCount  = 0;
    for(box of innerBoxes){
        box.innerText = '';
    }
})
for(boxes of innerBoxes){
    boxes.addEventListener("click", function(){
        if(gameOver == false){
        h1.innerText = "Computer Turn";
        if(i%2==0){
            if(this.innerText!=''){
                h1.innerHTML = "Wrong Move";
            }
            else{
                this.innerText = "X";
                i++;
                movesCount++;
                if(movesCount>4)
                check();
            if(gameOver==false){
                setTimeout(compMove,1000);  
            }
                
            }
        }
        
            
        
        }

    })
}
function compMove(){
    let random = Math.floor(Math.random()*10);

    for(let j=0; j<7; j=j+3){
        if((innerBoxes[j].innerText == innerBoxes[j+1].innerText) && innerBoxes[j].innerText == 'X' && innerBoxes[j+2].innerText==''){
            random = j+2;
        }
    }
    for(let j=1; j<8; j=j+3){
        if((innerBoxes[j].innerText == innerBoxes[j+1].innerText) && innerBoxes[j].innerText == 'X' && innerBoxes[j-1].innerText==''){
            random = j-1;
        }
    }
    for(let j=0; j<3; j=j+1){
        if((innerBoxes[j].innerText == innerBoxes[j+3].innerText) && innerBoxes[j].innerText == 'X' && innerBoxes[j+6].innerText==''){
            random = j+6;
        }
    }
    for(let j=3; j<6; j=j+1){
        if((innerBoxes[j].innerText == innerBoxes[j+3].innerText) && innerBoxes[j].innerText == 'X' && innerBoxes[j-3].innerText==''){
            random = j-3;
        }
    }
    for(let j=3; j<6; j=j+1){
        if((innerBoxes[j].innerText == innerBoxes[j+3].innerText) && innerBoxes[j].innerText == 'X' && innerBoxes[j-3].innerText==''){
            random = j-3;
        }
    }
    for(let j=0; j<1; j=j+1){
        if((innerBoxes[j].innerText == innerBoxes[j+4].innerText) && innerBoxes[j].innerText == 'X' && innerBoxes[j+8].innerText==''){
            random = j+8;
        }
    }
    for(let j=4; j<5; j=j+1){
        if((innerBoxes[j].innerText == innerBoxes[j+4].innerText) && innerBoxes[j].innerText == 'X' && innerBoxes[j-4].innerText==''){
            random = j-4;
        }
    }
    for(let j=2; j<3; j=j+1){
        if((innerBoxes[j].innerText == innerBoxes[j+2].innerText) && innerBoxes[j].innerText == 'X' && innerBoxes[j+4].innerText==''){
            random = j+4;
        }
    }
    for(let j=4; j<5; j=j+1){
        if((innerBoxes[j].innerText == innerBoxes[j+2].innerText) && innerBoxes[j].innerText == 'X' && innerBoxes[j-2].innerText==''){
            random = j-2;
        }
    }
    for(let j=0; j<3; j=j+1){
        if((innerBoxes[j].innerText == innerBoxes[j+6].innerText) && innerBoxes[j].innerText == 'X' && innerBoxes[j+3].innerText==''){
            random = j+3;
        }
    }
    for(let j=0; j<7; j=j+3){
        if((innerBoxes[j].innerText == innerBoxes[j+2].innerText) && innerBoxes[j].innerText == 'X' && innerBoxes[j+1].innerText==''){
            random = j+1;
        }
    }
    for(let j=0; j<1; j=j+1){
        if((innerBoxes[0].innerText == innerBoxes[j+8].innerText) && innerBoxes[j].innerText == 'X' && innerBoxes[j+4].innerText==''){
            random = j+4;
        }
    }
    for(let j=2; j<3; j=j+1){
        if((innerBoxes[2].innerText == innerBoxes[j+4].innerText) && innerBoxes[j].innerText == 'X' && innerBoxes[j+2].innerText==''){
            random = j+2;
        }
    }
    for(let j=0; j<7; j=j+3){
        if((innerBoxes[j].innerText == innerBoxes[j+1].innerText) && innerBoxes[j].innerText == 'O' && innerBoxes[j+2].innerText==''){
            random = j+2;
        }
    }
    for(let j=1; j<8; j=j+3){
        if((innerBoxes[j].innerText == innerBoxes[j+1].innerText) && innerBoxes[j].innerText == 'O' && innerBoxes[j-1].innerText==''){
            random = j-1;
        }
    }

    for(let j=0; j<3; j=j+1){
        if((innerBoxes[j].innerText == innerBoxes[j+3].innerText) && innerBoxes[j].innerText == 'O' && innerBoxes[j+6].innerText==''){
            random = j+6;
        }
    }
    for(let j=3; j<6; j=j+1){
        if((innerBoxes[j].innerText == innerBoxes[j+3].innerText) && innerBoxes[j].innerText == 'O' && innerBoxes[j-3].innerText==''){
            random = j-3;
        }
    }
    for(let j=3; j<6; j=j+1){
        if((innerBoxes[j].innerText == innerBoxes[j+3].innerText) && innerBoxes[j].innerText == 'O' && innerBoxes[j-3].innerText==''){
            random = j-3;
        }
    }
    for(let j=0; j<1; j=j+1){
        if((innerBoxes[j].innerText == innerBoxes[j+4].innerText) && innerBoxes[j].innerText == 'O' && innerBoxes[j+8].innerText==''){
            random = j+8;
        }
    }
    for(let j=4; j<5; j=j+1){
        if((innerBoxes[j].innerText == innerBoxes[j+4].innerText) && innerBoxes[j].innerText == 'O' && innerBoxes[j-4].innerText==''){
            random = j-4;
        }
    }
    for(let j=2; j<3; j=j+1){
        if((innerBoxes[j].innerText == innerBoxes[j+2].innerText) && innerBoxes[j].innerText == 'O' && innerBoxes[j+4].innerText==''){
            random = j+4;
        }
    }
    for(let j=4; j<5; j=j+1){
        if((innerBoxes[j].innerText == innerBoxes[j+2].innerText) && innerBoxes[j].innerText == 'O' && innerBoxes[j-2].innerText==''){
            random = j-2;
        }
    }
    for(let j=0; j<3; j=j+1){
        if((innerBoxes[j].innerText == innerBoxes[j+6].innerText) && innerBoxes[j].innerText == 'O' && innerBoxes[j+3].innerText==''){
            random = j+3;
        }
    }
    for(let j=0; j<7; j=j+3){
        if((innerBoxes[j].innerText == innerBoxes[j+2].innerText) && innerBoxes[j].innerText == 'O' && innerBoxes[j+1].innerText==''){
            random = j+1;
        }
    }
    for(let j=0; j<1; j=j+1){
        if((innerBoxes[j].innerText == innerBoxes[j+8].innerText) && innerBoxes[j].innerText == 'O' && innerBoxes[j+4].innerText==''){
            random = j+4;
        }
    }
    for(let j=2; j<3; j=j+1){
        if((innerBoxes[j].innerText == innerBoxes[j+4].innerText) && innerBoxes[j].innerText == 'O' && innerBoxes[j+2].innerText==''){
            random = j+2;
        }
    }
    console.log(random);
            if(innerBoxes[random].innerText == ''){
                innerBoxes[random].innerText = 'O';
                h1.innerText = "Player Turn";
                i++;
                movesCount++;
                if(movesCount>4)
                check();
            }
            else{
                compMove();
                
            }
}

function check(){
    if( (innerBoxes[0].innerText == innerBoxes[1].innerText) && (innerBoxes[1].innerText == innerBoxes[2].innerText) && (innerBoxes[2].innerText!='')  ){
        if(i%2==0){
            h1.innerHTML = "Game Over <br> Computer has won the game <br> Press the button to restart the Game";
            gameOver = true;
        }
        else{
            h1.innerHTML = "Game Over <br> Player has won the game <br> Press the button to restart the Game";
            gameOver = true;
        }
        
    }
    else if( (innerBoxes[3].innerText == innerBoxes[4].innerText) && (innerBoxes[4].innerText == innerBoxes[5].innerText) && (innerBoxes[5].innerText!='')){
        if(i%2==0){
            h1.innerHTML = "Game Over <br> Computer has won the game <br> Press the button to restart the Game";
            gameOver = true;
        }
        else{
            h1.innerHTML = "Game Over <br> Player has won the game <br> Press the button to restart the Game";
            gameOver = true;
        }
        
    }
    else if( (innerBoxes[6].innerText == innerBoxes[7].innerText) && (innerBoxes[7].innerText == innerBoxes[8].innerText) && (innerBoxes[8].innerText!='') ){
        if(i%2==0){
            h1.innerHTML = "Game Over <br> Computer has won the game <br> Press the button to restart the Game";
            gameOver = true;
        }
        else{
            h1.innerHTML = "Game Over <br> Player has won the game <br> Press the button to restart the Game";
            gameOver = true;
        }
        
    }
    else if( (innerBoxes[0].innerText == innerBoxes[3].innerText) && (innerBoxes[3].innerText == innerBoxes[6].innerText) && (innerBoxes[6].innerText!='') ){
        if(i%2==0){
            h1.innerHTML = "Game Over <br> Computer has won the game <br> Press the button to restart the Game";
            gameOver = true;
        }
        else{
            h1.innerHTML = "Game Over <br> Player has won the game <br> Press the button to restart the Game";
            gameOver = true;
        }
        
    }
    else if( (innerBoxes[1].innerText == innerBoxes[4].innerText) && (innerBoxes[4].innerText == innerBoxes[7].innerText) && (innerBoxes[7].innerText!='') ){
        if(i%2==0){
            h1.innerHTML = "Game Over <br> Computer has won the game <br> Press the button to restart the Game";
            gameOver = true;
        }
        else{
            h1.innerHTML = "Game Over <br> Player has won the game <br> Press the button to restart the Game";
            gameOver = true;
        }
        
    }
    else if( (innerBoxes[2].innerText == innerBoxes[5].innerText) && (innerBoxes[5].innerText == innerBoxes[8].innerText) && (innerBoxes[8].innerText!='') ){
        if(i%2==0){
            h1.innerHTML = "Game Over <br> Computer has won the game <br> Press the button to restart the Game";
            gameOver = true;
        }
        else{
            h1.innerHTML = "Game Over <br> Player has won the game <br> Press the button to restart the Game";
            gameOver = true;
        }
        
    }
    else if( (innerBoxes[0].innerText == innerBoxes[4].innerText) && (innerBoxes[4].innerText == innerBoxes[8].innerText) && (innerBoxes[8].innerText!='') ){
        if(i%2==0){
            h1.innerHTML = "Game Over <br> Computer has won the game <br> Press the button to restart the Game";
            gameOver = true;
        }
        else{
            h1.innerHTML = "Game Over <br> Player has won the game <br> Press the button to restart the Game";
            gameOver = true;
        }
        
    }
    else if( (innerBoxes[2].innerText == innerBoxes[4].innerText) && (innerBoxes[4].innerText == innerBoxes[6].innerText) && (innerBoxes[6].innerText!='') ){
        if(i%2==0){
            h1.innerHTML = "Game Over <br> Computer has won the game <br> Press the button to restart the Game";
            gameOver = true;
        }
        else{
            h1.innerHTML = "Game Over <br> Player has won the game <br> Press the button to restart the Game";
            gameOver = true;
        }
    }
    
    else if(movesCount==9){
        h1.innerHTML = "Game Over <br> It's a draw <br> Press the button to restart the Game";
    }
}
