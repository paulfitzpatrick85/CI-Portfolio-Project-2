
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

function totalP() {     
    let newValue = document.getElementById("pro-total")                                    
    let proTotal = parseInt(document.getElementById("pro-total").innerText);
    let addProtein = parseInt(document.getElementById('add-protein').value);
    newValue.innerText = proTotal + addProtein
}
       

   function totalC() {
    document.getElementById("carb-total").innerHTML
    += parseFloat(document.getElementById('add-carb').value);
      }

      function totalF() {
        document.getElementById("fat-total").innerHTML
        += parseFloat(document.getElementById('add-fat').value);
          }