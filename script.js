function myFunction(){
    var selectState = ["Arizona", "California", "Nevada", "New York", "West Virgina", "Alaska", "New Mexico", "Colorado", "Texas", "Alabama"];
    var arrArizona = ["Phoenix"];
    var arrCalifonia = ["Sacramento"];
    var arrNevada = ["Carson City"];
    var arrNewYork = ["Albany"];
    var arrWestVirgina = ["Charleston"];
    var arrAlaska = ["Juneau"];
    var arrNewMexico = ["Santa Fe"];
    var arrColorado = ["Denver"];
    var arrTexas = ["Austin"];
    var arrAlabama = ["Montgomery"];

    var selectoptions = (document.getElementById("States").value);
    var displayCountries = document.getElementById("Capitals");

    document.getElementById("Capitals").innerHTML="";

    if (selectoptions =="AZ"){
        for (i=0; i<arrArizona.length; i++){
        var soptions = document.createElement('option');
        console.log(soptions);
        soptions.innerHTML = arrArizona[i];
        console.log(soptions.innerHTML);
        soptions.value = arrArizona[i];
        displayCountries.appendChild(soptions);
        }
    }

    else if(selectoptions =="CA"){
        for (i=0; i<arrCalifonia.length; i++){
        var soptions = document.createElement('option');
        console.log(soptions);
        soptions.innerHTML = arrCalifonia[i];
        console.log(soptions.innerHTML);
        soptions.value = arrCalifonia[i];
        displayCountries.appendChild(soptions);
        }
    }

    else if(selectoptions =="NV"){
        for (i=0; i<arrNevada.length; i++){
        var soptions = document.createElement('option');
        console.log(soptions);
        soptions.innerHTML = arrNevada[i];
        console.log(soptions.innerHTML);
        soptions.value = arrNevada[i];
        displayCountries.appendChild(soptions);
        }
    }

    
    else if(selectoptions =="NY"){
        for (i=0; i<arrNewYork.length; i++){
        var soptions = document.createElement('option');
        console.log(soptions);
        soptions.innerHTML = arrNewYork[i];
        console.log(soptions.innerHTML);
        soptions.value = arrNewYork[i];
        displayCountries.appendChild(soptions);
        }
    }

    
    else if(selectoptions =="WV"){
        for (i=0; i<arrWestVirgina.length; i++){
        var soptions = document.createElement('option');
        console.log(soptions);
        soptions.innerHTML = arrWestVirgina[i];
        console.log(soptions.innerHTML);
        soptions.value = arrWestVirgina[i];
        displayCountries.appendChild(soptions);
        }
    }

    
    else if(selectoptions =="AK"){
        for (i=0; i<arrAlaska.length; i++){
        var soptions = document.createElement('option');
        console.log(soptions);
        soptions.innerHTML = arrAlaska[i];
        console.log(soptions.innerHTML);
        soptions.value = arrAlaska[i];
        displayCountries.appendChild(soptions);
        }
    }

    
    else if(selectoptions =="NM"){
        for (i=0; i<arrNewMexico.length; i++){
        var soptions = document.createElement('option');
        console.log(soptions);
        soptions.innerHTML = arrNewMexico[i];
        console.log(soptions.innerHTML);
        soptions.value = arrNewMexico[i];
        displayCountries.appendChild(soptions);
        }
    }

    
    else if(selectoptions =="CO"){
        for (i=0; i<arrColorado.length; i++){
        var soptions = document.createElement('option');
        console.log(soptions);
        soptions.innerHTML = arrColorado[i];
        console.log(soptions.innerHTML);
        soptions.value = arrColorado[i];
        displayCountries.appendChild(soptions);
        }
    }

    
    else if(selectoptions =="TX"){
        for (i=0; i<arrTexas.length; i++){
        var soptions = document.createElement('option');
        console.log(soptions);
        soptions.innerHTML = arrTexas[i];
        console.log(soptions.innerHTML);
        soptions.value = arrTexas[i];
        displayCountries.appendChild(soptions);
        }
    }
  
    else{
        for (i=0; i<arrAlabama.length; i++){
        var soptions = document.createElement('option');
        console.log(soptions);
        soptions.innerHTML = arrAlabama[i];
        console.log(soptions.innerHTML);
        soptions.value = arrAlabama[i];
        displayCountries.appendChild(soptions);
        }
    }

    



}