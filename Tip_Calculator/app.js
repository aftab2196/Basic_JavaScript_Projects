let user_input1 = document.getElementById("user_input-box1");
let user_input2 = document.getElementById("user_input-box2");
let calculate_button = document.getElementById("calculate");
let tip_calculator = document.getElementById("tip-calculator");
let totalAmounttxt = document.getElementById("TotalAmount");
let tipAmounttxt = document.getElementById("TipAmount");
let output = document.getElementById("output");

calculate_button.addEventListener("click", function () {

  let bill = parseFloat(user_input1.value);
  let tip_percent = parseFloat(user_input2.value);
  
  if (!isNaN(bill) && !isNaN(tip_percent)) {
    let tipAmount = (bill * tip_percent) / 100;
    let totalAmount = bill + tipAmount;
    output.innerHTML = `
     Tip Amount : ₹${tipAmount.toFixed(2)} <br>
     Total Amount : ₹${totalAmount.toFixed(2)}`;
    
  } else {
    output.innerHTML = "Please enter a valid input";
    
  }
});


document.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    let bill = parseFloat(user_input1.value);
    let tip_percent = parseFloat(user_input2.value);
    
    if (!isNaN(bill) && !isNaN(tip_percent)) {
      let tipAmount = (bill * tip_percent) / 100;
      let totalAmount = bill + tipAmount;
      output.innerHTML = `
       Tip Amount : ₹${tipAmount.toFixed(2)} <br>
       Total Amount : ₹${totalAmount.toFixed(2)}`;
      
    } else {
      output.innerHTML = "Please enter a valid input";
      
    } 
  }
});
