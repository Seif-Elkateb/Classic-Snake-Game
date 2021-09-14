/*
Start Global Variables
*/
const snake= document.querySelector('.snake');
const box= document.querySelector('.box');
const food =document.createElement('div');
const snakeBody=[snake];
let positionLeft;
let positionTop;
let direction='right';
let newDirection=[];
/*
End Global Variables
*/

/* 
Start Helper Function
*/
const setDirection=()=>{
  const left=Number((snake.style.left).slice(0,-2));
  const top=Number((snake.style.top).slice(0,-2));
  if(direction==='up'&&newDirection[0]=='left'&&left%30===0&&top%30===0)
  {
    direction=newDirection[0];
    newDirection.shift();
  }
  else if(direction==='up'&&newDirection[0]==='right'&&left%30===0&&top%30===0)
  {
    direction=newDirection[0];
    newDirection.shift();

  }
  else if(direction==='up'&&newDirection[0]==='down')
  {
    newDirection.shift();
  }
  else if(direction==='up'&&newDirection[0]==='up')
  {
    newDirection.shift();
  }
 
  else if(direction==='down'&&newDirection[0]==='left'&&left%30===0&&top%30===0)
  {
    direction=newDirection[0];
    newDirection.shift();

  }
  else if(direction==='down'&&newDirection[0]==='right'&&left%30===0&&top%30===0)
  {
    direction=newDirection[0];
    newDirection.shift();

  }
  else if(direction==='down'&&newDirection[0]==='down')
  {
    newDirection.shift();
  }
  else if(direction==='down'&&newDirection[0]==='up')
  {
    newDirection.shift();
  }
 
  else if(direction==='left'&&newDirection[0]==='up'&&left%30===0&&top%30===0)
  {
    direction=newDirection[0];
    newDirection.shift();

  }
  else if(direction==='left'&&newDirection[0]=='down'&&left%30===0&&top%30===0)
  {
    direction=newDirection[0];
    newDirection.shift();

  }
  else if(direction==='left'&&newDirection[0]==='left')
  {
    newDirection.shift();
  }
  else if(direction==='left'&&newDirection[0]==='right')
  {
    newDirection.shift();
  }
 
  else if(direction==='right'&&newDirection[0]=='up'&&left%30===0&&top%30===0)
  {
    direction=newDirection[0];
    newDirection.shift();

  }
  else if(direction==='right'&&newDirection[0]==='down'&&left%30===0&&top%30===0)
  {
    direction=newDirection[0];
    newDirection.shift();

  }
  else if(direction==='right'&&newDirection[0]==='right')
  {
    newDirection.shift();
  }
  else if(direction==='right'&&newDirection[0]==='left')
  {
    newDirection.shift();
  }
}
/*
End Helper Function
*/
/*
Start Main Functions
*/
const createBlocks=()=>{
  for (let i=0;i<441;i++){
    const block= document.createElement('div');
    block.classList.add('block');
    box.appendChild(block);


  }
}
const createFood=()=>{
  food.classList.add('food');
  positionLeft=Math.floor((Math.floor(Math.random()*600)+1)/30)*30;
  positionTop=Math.floor((Math.floor(Math.random()*600)+1)/30)*30;
  food.style.left=positionLeft.toString()+'px';
  food.style.top=positionTop.toString()+'px';
  box.appendChild(food);
}

/*
End Main functions
*/

/*
Start Code Execution
*/

createBlocks();
createFood();
document.body.addEventListener('keydown',(e)=>{
  if(e.key==='ArrowRight')
  {
    newDirection.push('right');
  }
  else if(e.key==='ArrowLeft')
  {
    newDirection.push('left');
  }
  else if(e.key==='ArrowUp')
  {
    newDirection.push('up');

  }
  else if(e.key==='ArrowDown')
  {
    newDirection.push('down')
  }
});

setInterval(()=>{
  setDirection(direction,newDirection);
  for (let snake of snakeBody){
  const left=Number((snake.style.left).slice(0,-2));
  const top=Number((snake.style.top).slice(0,-2));
  if(direction==='right')
  {
     if(left>=600)
      snake.style.left='0px';
    
    else 
      snake.style.left=(left+1.25).toString()+'px';
  }
  else if(direction==='left')
  {
    if(left<=0)
      snake.style.left='600px';
    else
      snake.style.left=(left-1.25).toString()+'px';
  }
  else if(direction==='up')
  {
    if(top<=0)
      snake.style.top='600px';
    else 
      snake.style.top=(top-1.25).toString()+'px';
  }
  else if(direction==='down')
  {
    if(top>=600)
      snake.style.top='0px';
    else
      snake.style.top=(top+1.25).toString()+'px';
  }
}},1);
/*
End Code Execution
*/
