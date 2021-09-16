/*
Start Global Variables
*/
const snake= document.querySelector('.snake');
const box= document.querySelector('.box');
const food =document.createElement('div');
const newGameButton=document.querySelector('#new-game-btn');
const newGameBox=document.querySelector('.new-game');
const buttonSound=new Audio('./audio/button.wav');
const goodMoveSound= new Audio('./audio/goodmove.wav');
const gameOverSound= new Audio('./audio/lose.wav');
let score=0;
let snakeBody=[];
let positionLeft;
let positionTop;
let positionTailLeft=0;
let positionTailTop=0;
let direction='right';
let newDirection=[];
/*
End Global Variables
*/
/* 
Start Helper Function
*/
const addDirections=(left,top)=>{
  const obj={direction,left,top};
  for (let block of snakeBody){
      block.directions.push(obj);
     }

}
const hideFood=()=>{
  positionLeft=100000;
  positionTop=100000;
}

/*
End Helper Function
*/
/*
Start Main Functions
*/
const setDirection=()=>{
  const left=Number((snake.style.left).slice(0,-2));
  const top=Number((snake.style.top).slice(0,-2));
 
  if(direction==='up'&&newDirection[0]=='left'&&left%20===0&&top%20===0)
  {
    direction=newDirection[0];
    newDirection.shift();
    addDirections(left,top);
    
  }
  else if(direction==='up'&&newDirection[0]==='right'&&left%20===0&&top%20===0)
  {
    direction=newDirection[0];
    newDirection.shift();
    addDirections(left,top);

  }
  else if(direction==='up'&&newDirection[0]==='down')
  {
    newDirection.shift();
  }
  else if(direction==='up'&&newDirection[0]==='up')
  {
    newDirection.shift();
  }
 
  else if(direction==='down'&&newDirection[0]==='left'&&left%20===0&&top%20===0)
  {
    direction=newDirection[0];
    newDirection.shift();
    addDirections(left,top);

  }
  else if(direction==='down'&&newDirection[0]==='right'&&left%20===0&&top%20===0)
  {
    direction=newDirection[0];
    newDirection.shift();
    addDirections(left,top);

  }
  else if(direction==='down'&&newDirection[0]==='down')
  {
    newDirection.shift();
  }
  else if(direction==='down'&&newDirection[0]==='up')
  {
    newDirection.shift();
  }
 
  else if(direction==='left'&&newDirection[0]==='up'&&left%20===0&&top%20===0)
  {
    direction=newDirection[0];
    newDirection.shift();
    addDirections(left,top);

  }
  else if(direction==='left'&&newDirection[0]=='down'&&left%20===0&&top%20===0)
  {
    direction=newDirection[0];
    newDirection.shift();
    addDirections(left,top);

  }
  else if(direction==='left'&&newDirection[0]==='left')
  {
    newDirection.shift();
  }
  else if(direction==='left'&&newDirection[0]==='right')
  {
    newDirection.shift();
  }
 
  else if(direction==='right'&&newDirection[0]=='up'&&left%20===0&&top%20===0)
  {
    direction=newDirection[0];
    newDirection.shift();
    addDirections(left,top);

  }
  else if(direction==='right'&&newDirection[0]==='down'&&left%20===0&&top%20===0)
  {
    direction=newDirection[0];
    newDirection.shift();
    addDirections(left,top);

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
const createBlocks=()=>{
  for (let i=0;i<729;i++){
    const block= document.createElement('div');
    block.classList.add('block');
    box.appendChild(block);
  }
}
const createFood=()=>{
  food.classList.add('food');
  positionLeft=Math.floor((Math.floor(Math.random()*520)+1)/20)*20;
  positionTop=Math.floor((Math.floor(Math.random()*520)+1)/20)*20;
  food.style.left=positionLeft.toString()+'px';
  food.style.top=positionTop.toString()+'px';
  box.appendChild(food);
}
const createBodyBlock=()=>{
  const block = document.createElement('div');
  block.classList.add('snake-body');
  block.classList.add('transition');
  if(snakeBody.length===0){
  block.direction=direction;
  block.directions=[];
  }
  else if(snakeBody.length!==0){
    const tailBlock=snakeBody[snakeBody.length-1];
    block.direction=tailBlock.direction;
    block.directions=[...tailBlock.directions]
  }

  block.style.left=positionTailLeft.toString()+'px';
  block.style.top=positionTailTop.toString()+'px';
  snakeBody.push(block);
  box.appendChild(block);
}
const autoMove=(element,direction)=>{
  const left=Number((element.style.left).slice(0,-2));
  const top=Number((element.style.top).slice(0,-2));
  if(direction==='right')
  {
     if(left>=520){
      element.classList.remove('transition');
      element.style.left='0px';
      setTimeout(() => {
        element.classList.add('transition')
        
      }, 60);     }
     
    else 
      element.style.left=(left+20).toString()+'px';
  }
  else if(direction==='left')
  {
    if(left<=0){
      element.classList.remove('transition');
      element.style.left='520px';
      setTimeout(() => {
        element.classList.add('transition')
        
      }, 60);

    }
    else
      element.style.left=(left-20).toString()+'px';
  }
  else if(direction==='up')
  {
    if(top<=0){
      element.classList.remove('transition');
      element.style.top='520px';
      setTimeout(() => {
        element.classList.add('transition')
        
      }, 60);    }
    else 
      element.style.top=(top-20).toString()+'px';
  }
  else if(direction==='down')
  {
    if(top>=520){
      element.classList.remove('transition');
      element.style.top='0px';
      setTimeout(() => {
        element.classList.add('transition')
        
      }, 60);    }
    else
      element.style.top=(top+20).toString()+'px';
  }}
  const changeBlockDirection=(element)=>{
    const left=Number((element.style.left).slice(0,-2));
    const top=Number((element.style.top).slice(0,-2));
    if(element.directions.length!==0&&element.directions[0].left===left&&element.directions[0].top===top)
    {
      element.direction=element.directions[0].direction;
      element.directions.shift();
    }
      
  }
    const setTailPosition=(left,top,tailLeft,tailTop)=>{
      if(left%20===0&&top%20===0&&snakeBody.length===0)
      {
        positionTailTop=top;
        positionTailLeft=left;
      }
      else if(snakeBody.length!==0&&tailLeft%20===0&&tailTop%20===0)
      {
        positionTailLeft=tailLeft;
        positionTailTop=tailTop
      }
  }
  const checkConflict=()=>{
    const left=Number((snake.style.left).slice(0,-2));
    const top=Number((snake.style.top).slice(0,-2));
    for (let block of snakeBody){
      const leftBlock=Number((block.style.left).slice(0,-2));
      const topBlock=Number((block.style.top).slice(0,-2));
      if(left===leftBlock&&top===topBlock)
      {
        gameOverSound.play();
        alert(`game over\n your score is ${score}`);
        box.style.display='none';
        score=0;
        hideFood();
        newGameBox.style.display='flex';
        for (let block of snakeBody){
          block.remove();
        }
        snakeBody=[];
      }
    }
  }
  


/*
End Main functions
*/

/*
Start Code Execution
*/
createBlocks();
createFood();
newGameButton.addEventListener('click',()=>{
  buttonSound.play();
  newGameBox.style.display='none';
  box.style.display='grid';
  box.style.cursor='none';
  createFood();
  
})
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
  const left=Number((snake.style.left).slice(0,-2));
  const top=Number((snake.style.top).slice(0,-2));
  checkConflict();
  let tailLeft;
  let tailTop;
  if(snakeBody.length!==0)
  {
    const block = snakeBody[snakeBody.length-1];
    tailLeft=Number((block.style.left).slice(0,-2));
    tailTop=Number((block.style.top).slice(0,-2));
  }
  if(left===positionLeft&&top===positionTop){
    score+=5;
    goodMoveSound.pause();
    goodMoveSound.currentTime=0;
    goodMoveSound.play();
    createFood();
    createBodyBlock();
  }
  setDirection(direction,newDirection);
  autoMove(snake,direction);
  
  for(let block of snakeBody){
    changeBlockDirection(block);
    autoMove(block,block.direction);

  }
   setTailPosition(left,top,tailLeft,tailTop);

},60);
/*
End Code Execution
*/
