const buttons = document.querySelectorAll('.button');
 const body = document.querySelector('body');
 const blacks = document.querySelector('#black');
 const heading =  document.querySelector('h1');
 const heading2 =  document.querySelector('h2');
buttons.forEach(function(button){
    console.log(button);
    
  button.addEventListener('click', function(e){
    console.log(e);
    console.log(e.target)
    if(e.target.id === 'grey'){
        body.style.backgroundColor = e.target.id;
    }
    if(button.id === 'blue'){
        body.style.backgroundColor = e.target.id;
    }
    if(button.id === 'yellow'){
        body.style.backgroundColor = e.target.id;
    }
    if(button.id === 'peru'){
        body.style.backgroundColor = e.target.id;
        
    }
    if(button.id === 'black'){
        body.style.backgroundColor = e.target.id;
        blacks.style.borderColor = "white";
         heading.style.color = "white"
         heading2.style.color = "white"
    }else{blacks.style.borderColor = "black",heading.style.color = "black",
heading2.style.color = "black"
    };
            
    if(button.id === 'green'){
        body.style.backgroundColor = e.target.id;
    }
  });
});