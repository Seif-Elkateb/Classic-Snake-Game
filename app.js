/*
Start Global Variables
*/
const snake= document.querySelector('.snake');
const box= document.querySelector('.box');
const food =document.createElement('div');
let positionLeft=0;
let positionTop=0;
let direction='right';
/*
End Global Variables
*/

/* 
Start Helper Function
*/

/*
End Helper Function
*/
/*
Start Main Functions
*/



/*
End Main functions
*/

/*
Start Code Execution
*/
document.body.addEventListener('keydown',(e)=>{
  const left=Number((snake.style.left).slice(0,-2));
  const top=Number((snake.style.top).slice(0,-2));
  if(e.key==='ArrowRight')
  {
    direction='right';

  }
  else if(e.key==='ArrowLeft')
  {
    direction='left';
  }
  else if(e.key==='ArrowUp')
  {
    direction='up';

  }
  else if(e.key==='ArrowDown')
  {
    direction='down';

  }
});

setInterval(() => {
  const left=Number((snake.style.left).slice(0,-2));
  const top=Number((snake.style.top).slice(0,-2));

  if(direction==='right')
  {
    if(left===576)
      snake.style.left='0px';
    
    else
      snake.style.left=(left+1).toString()+'px';
    
  }
  else if(direction==='left')
  {
    if(left===0)
      snake.style.left='576px';
    else
      snake.style.left=(left-1).toString()+'px';
  }
  else if(direction==='up')
  {
    if(top===0)
      snake.style.top='576px';
    else 
      snake.style.top=(top-1).toString()+'px';
  }
  else if(direction==='down')
  {
    if(top===576)
      snake.style.top='0px';
    else
      snake.style.top=(top+1).toString()+'px';
  }
}, 4);
/*
End Code Execution
*/
