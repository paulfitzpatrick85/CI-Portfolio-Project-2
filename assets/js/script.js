
//functions to add and subtract users clicked input
function addP() {
    document.getElementById('add-protein').value++;
}

function subP() {
    document.getElementById('add-protein').value--;
}

function addC() {
    document.getElementById('add-carb').value++;
}

function subC() {
    document.getElementById('add-carb').value--;
}

function addF() {
    document.getElementById('add-fat').value++;
}

function subF() {
    document.getElementById('add-fat').value--;
}


// functions to add to totals

function totalProtein() {     
    let proValue = document.getElementById("pro-total")                                    
    let proTotal = parseInt(document.getElementById("pro-total").innerText);
    let addProtein = parseInt(document.getElementById('add-protein').value);
    proValue.innerText = proTotal + addProtein
}

function totalCarb() {     
    let carbValue = document.getElementById("carb-total")                                    
    let carbTotal = parseInt(document.getElementById("carb-total").innerText);
    let addCarb = parseInt(document.getElementById('add-carb').value);
    carbValue.innerText = carbTotal + addCarb
}

function totalFat() {     
    let fatValue = document.getElementById("fat-total")                                    
    let fatTotal = parseInt(document.getElementById("fat-total").innerText);
    let addFat = parseInt(document.getElementById('add-fat').value);
    fatValue.innerText = fatTotal + addFat
}
       

   //function to calculate total calories from users given inputs

   function totalCal() {
    let proTotal = parseInt(document.getElementById("pro-total").innerText);
    let carbTotal = parseInt(document.getElementById("carb-total").innerText);
    let fatTotal = parseInt(document.getElementById("fat-total").innerText);
       let calValue = document.getElementById("cal-total")
       let calTotal = parseInt(document.getElementById("cal-total").innerText);
        calValue.innerText = calTotal + (proTotal * 4) + (carbTotal * 4) + (fatTotal * 9);
   }