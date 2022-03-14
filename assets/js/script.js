
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
 document.getElementById("pro-total").innerHTML
 += parseFloat(document.getElementById('add-protein').value);
   }
       

   function totalC() {
    document.getElementById("carb-total").innerHTML
    += parseFloat(document.getElementById('add-carb').value);
      }

      function totalF() {
        document.getElementById("fat-total").innerHTML
        += parseFloat(document.getElementById('add-fat').value);
          }