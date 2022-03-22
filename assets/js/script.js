//onload alert

function goal() {
    var calGoal = prompt ("Enter the number of calories you want to set as a target for each day.");
    if (isNaN(calGoal))
        {
         alert ("Sorry! " + calGoal + " isn't a number! Please refresh the page and try again!" );
         document.getElementById("tar-cals").innerText = "Target Not Set!";
        } else if(calGoal) {
            alert ("Great! let's help keep within " + calGoal + " calories!");
            document.getElementById("tar-cals").innerText = calGoal;
        }
        else {
            document.getElementById("tar-cals").innerText = "Target Not Set!";
        return;
    }
    
}

//functions for add and subtract buttons 

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



// functions to add input field figures to totals

function totalProtein() {     
    let proValue = document.getElementById("pro-total");                                    
    let proTotal = parseInt(document.getElementById("pro-total").innerText);
    let addProtein = parseInt(document.getElementById('add-protein').value);
    proValue.innerText = proTotal + addProtein;
}

function totalCarb() {     
    let carbValue = document.getElementById("carb-total");                                    
    let carbTotal = parseInt(document.getElementById("carb-total").innerText);
    let addCarb = parseInt(document.getElementById('add-carb').value);
    carbValue.innerText = carbTotal + addCarb;
}

function totalFat() {     
    let fatValue = document.getElementById("fat-total");                                    
    let fatTotal = parseInt(document.getElementById("fat-total").innerText);
    let addFat = parseInt(document.getElementById('add-fat').value);
    fatValue.innerText = fatTotal + addFat;
}
   

   function totalCal() {
    let addProtein = parseInt(document.getElementById('add-protein').value);
    let addCarb = parseInt(document.getElementById('add-carb').value);
    let addFat = parseInt(document.getElementById('add-fat').value);

    if ((addProtein >= 1) && (addCarb >= 1) && (addFat >= 1)) {
    let proTotal = parseInt(document.getElementById("pro-total").innerText);
    let carbTotal = parseInt(document.getElementById("carb-total").innerText);
    let fatTotal = parseInt(document.getElementById("fat-total").innerText);
       let calValue = document.getElementById("cal-total");
       let calTotal = parseInt(document.getElementById("cal-total").innerText);
        calValue.innerText = calTotal + (proTotal * 4) + (carbTotal * 4) + (fatTotal * 9);
         
        //if all three inputs fields not are input with the '+' or '-' buttons, the calculate total calories will not work, but inputs are still added to 'totals', the code below prevents this
    } else {
        alert("You need to add inputs for Protein, Carbs and Fat!!");
        document.getElementById("pro-total").innerText = parseInt(document.getElementById("pro-total").innerText) - parseInt(document.getElementById('add-protein').value);
        document.getElementById("carb-total").innerText = parseInt(document.getElementById("carb-total").innerText) - parseInt(document.getElementById('add-carb').value);
        document.getElementById("fat-total").innerText = parseInt(document.getElementById("fat-total").innerText) - parseInt(document.getElementById('add-fat').value);
    }
} 

    

   //clear inputs on clicking calculate Total Calories
   function clearInput() {
     document.getElementById("add-protein").value = "0";
     document.getElementById("add-carb").value = "0";
     document.getElementById("add-fat").value = "0";

   }

   //subtract total calories from target calories, if target alert is not answered correctly, equation is not done
   function calsLeft() {

    if (isNaN(document.getElementById("tar-cals").innerText)) {
        document.getElementById("rem-cals").innerText = "Target Not Set!";
    } else {
    let remValue = document.getElementById("rem-cals");
    let targetCals = parseInt(document.getElementById("tar-cals").innerText);  
    let calTotal = parseInt(document.getElementById("cal-total").innerText);
    remValue.innerText = targetCals - calTotal;
    }                          
    
    
    
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
       'title':'Popular maintenance macro ratio',
       backgroundColor: '#7E77DB',
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
       ['Fat', 20]
     ]);
       
    // Set chart options
    var options = {
       'title':'Popular cutting macro ratio',
        backgroundColor: '#7E77DB',
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
       'title':'Popular bulking macro ratio',
       backgroundColor: '#7E77DB',
    };

    // Instantiate and draw the chart.
    var chart = new google.visualization.PieChart(document.getElementById('chart'));
    chart.draw(data, options);
 }
 google.charts.Callback(bulk);


