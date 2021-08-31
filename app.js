const snake= document.querySelector('.snake');
document.body.addEventListener('keydown',(e)=>{
  const left=Number((snake.style.left).slice(0,-2));
  const top=Number((snake.style.top).slice(0,-2));

  if(e.key==='ArrowRight')
  {
    if(left===576)
      snake.style.left='0px';
    
    else
      snake.style.left=(left+12).toString()+'px';
    
  }
  else if(e.key==='ArrowLeft')
  {
    if(left===0)
      snake.style.left='576px';
    else
      snake.style.left=(left-12).toString()+'px';
  }
  else if(e.key==='ArrowUp')
  {
    if(top===0)
      snake.style.top='576px';
    else 
      snake.style.top=(top-12).toString()+'px';
  }
  else if(e.key==='ArrowDown')
  {
    if(top===576)
      snake.style.top='0px';
    else
      snake.style.top=(top+12).toString()+'px';
  }
})