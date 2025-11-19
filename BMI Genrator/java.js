const forms = document.querySelector('form');
forms.addEventListener('submit' , function(e){
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');
    let bmi =   (weight/ ((height*height)/10000)).toFixed(2) ;

      if(height === '' || height < 0 || isNaN (height)){
        result.innerHTML = ` Please give a valid height ${height}`;
      } else if(weight === '' || weight < 0 || isNaN (weight)){
        result.innerHTML = ` Please give a valid weight ${weight}`;
      } 
      // else{
      //  let bmi =  (weight/ ((height*height)/10000)).toFixed(2) 
      //  result.innerHTML = bmi;
      // }  
       else if  ( bmi > 24.6){
        result.innerHTML = `over weight ${bmi}`;
      }
      else if ( bmi < 18.6){
        result.innerHTML = `under weight ${bmi}`;
      }
      else{
        result.innerHTML = `normal weight ${bmi}`;
      }
      // else{
      //   let bmi =  (weight/ ((height*height)/10000)).toFixed(2) 
      //   result.innerHTML = bmi;
      //  }  
});