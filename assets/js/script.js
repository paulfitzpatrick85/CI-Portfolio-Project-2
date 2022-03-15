function goal() {
    calGoal = prompt ("Enter the max number of calories you want to consume per day");
    if (isNaN(calGoal))
        {
         alert ("Sorry! " + calGoal + " isn't a number now is it???");
        } else if(calGoal) {
            alert ("Great! let's help keep within " + calGoal + " calories!");
        }
        else {
        return;
    }
}

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


   //pie chart functions

   //onload chart

   function maintenance() {
    // Define the chart to be drawn.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Browser');
    data.addColumn('number', 'Percentage');
    data.addRows([
       ['Protein', 40],
       ['Carbohydrates', 40],
       ['Fat', 20]
       ]);
       
    // Set chart options
    var options = {
       'title':'Recommended macro ratio maintenance',
       'width':550,
       'height':400
    };

    // Instantiate and draw the chart.
    var chart = new google.visualization.PieChart(document.getElementById('chart'));
    chart.draw(data, options);
 }
 google.charts.setOnLoadCallback(maintenance);

 //onclick cut chart 

 function cut() {
    // Define the chart to be drawn.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Browser');
    data.addColumn('number', 'Percentage');
    data.addRows([
       ['Protein', 60],
       ['Carbohydrates', 20],
       ['Firefox', 20]
     ]);
       
    // Set chart options
    var options = {
       'title':'Recommended macro ratio cutting',
       'width':550,
       'height':400
    };

    // Instantiate and draw the chart.
    var chart = new google.visualization.PieChart(document.getElementById('chart'));
    chart.draw(data, options);
 }
 google.charts.Callback(cut);

 //onclick bulk chart

 function bulk() {
    // Define the chart to be drawn.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Browser');
    data.addColumn('number', 'Percentage');
    data.addRows([
       ['Protein', 50],
        ['Carbohydrates', 30], 
       ['Fat', 20],
     ]);
       
    // Set chart options
    var options = {
       'title':'Recommended macro ratio bulking',
       'width':550,
       'height':400
    };

    // Instantiate and draw the chart.
    var chart = new google.visualization.PieChart(document.getElementById('chart'));
    chart.draw(data, options);
 }
 google.charts.Callback(bulk);


//  function welcome() {
//     yourName = prompt ("Enter your name");
//     if ( confirm ("Is your name correct?") == true)
//         {
//         alert ("Welcome, " + yourName);
//     }
// }