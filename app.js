/*
Start Global Variables
*/
const snake= document.querySelector('.snake');
const box= document.querySelector('.box');
const food =document.createElement('div');
const snakeBody=[];
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

/*
End Helper Function
*/
/*
Start Main Functions
*/
const setDirection=()=>{
  const left=Number((snake.style.left).slice(0,-2));
  const top=Number((snake.style.top).slice(0,-2));
 
  if(direction==='up'&&newDirection[0]=='left'&&left%30===0&&top%30===0)
  {
    direction=newDirection[0];
    newDirection.shift();
    addDirections(left,top);
    
  }
  else if(direction==='up'&&newDirection[0]==='right'&&left%30===0&&top%30===0)
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
 
  else if(direction==='down'&&newDirection[0]==='left'&&left%30===0&&top%30===0)
  {
    direction=newDirection[0];
    newDirection.shift();
    addDirections(left,top);

  }
  else if(direction==='down'&&newDirection[0]==='right'&&left%30===0&&top%30===0)
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
 
  else if(direction==='left'&&newDirection[0]==='up'&&left%30===0&&top%30===0)
  {
    direction=newDirection[0];
    newDirection.shift();
    addDirections(left,top);

  }
  else if(direction==='left'&&newDirection[0]=='down'&&left%30===0&&top%30===0)
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
 
  else if(direction==='right'&&newDirection[0]=='up'&&left%30===0&&top%30===0)
  {
    direction=newDirection[0];
    newDirection.shift();
    addDirections(left,top);

  }
  else if(direction==='right'&&newDirection[0]==='down'&&left%30===0&&top%30===0)
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
const createBodyBlock=()=>{
  const block = document.createElement('div');
  block.classList.add('snake-body');
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
     if(left>=600)
      element.style.left='0px';
    
    else 
      element.style.left=(left+1.5).toString()+'px';
  }
  else if(direction==='left')
  {
    if(left<=0)
      element.style.left='600px';
    else
      element.style.left=(left-1.5).toString()+'px';
  }
  else if(direction==='up')
  {
    if(top<=0)
      element.style.top='600px';
    else 
      element.style.top=(top-1.5).toString()+'px';
  }
  else if(direction==='down')
  {
    if(top>=600)
      element.style.top='0px';
    else
      element.style.top=(top+1.5).toString()+'px';
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
      if(left%30===0&&top%30===0&&snakeBody.length===0)
      {
        positionTailTop=top;
        positionTailLeft=left;
      }
      else if(snakeBody.length!==0&&tailLeft%30===0&&tailTop%30===0)
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
        alert('game over');
      }
    }
    for (block of snakeBody){
      for (anotherBlock of snakeBody){
      const leftBlock=Number((block.style.left).slice(0,-2));
      const topBlock=Number((block.style.top).slice(0,-2));
      const leftBlock2=Number((anotherBlock.style.left).slice(0,-2));
      const topBlock2=Number((anotherBlock.style.top).slice(0,-2));
      if(leftBlock===leftBlock2&&topBlock===topBlock2&&block!==anotherBlock)
      {
        alert('lozer');
      }
        
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

},1);
/*
End Code Execution
*/
