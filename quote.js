document.addEventListener('DOMContentLoaded', function() {
    const residentialRadio = document.getElementById('residential'); // residential radio
    const commercialRadio = document.getElementById('commercial'); // commercial radio
    const industrialRadio = document.getElementById('industrial'); // industrial  radio
    
    const floornumber = document.getElementById('number-of-floors'); // number of floors
    const aptmentsnumber = document.getElementById('number-of-apartments'); // number of aptments
    const occupancy = document.getElementById('max-occupancy'); // max occupancy
    const elevators = document.getElementById('number-of-elevators'); // number of elevators

    const standardRadio = document.getElementById('standard'); // standard radio
    const premiumRadio = document.getElementById('premium'); // premium radio
    const exeliumRadio = document.getElementById('exelium'); // exelium radio

    const elevatorsneeded = document.getElementById('elevators-needed-output'); // elevators needed output
    const unitprice = document.getElementById('unit-price-output'); // unit price output
    const installationfee = document.getElementById('installation-fee-output'); // installation fee output
    const finalcost = document.getElementById('final-cost-output'); // final cost output

    const standardprize = 8000;  //precio x elevador standard
    const premiumprize = 12000; // precio x elevador premium
    const exeliumprize = 15000; // precio x elevador excelium
    
    const elevatorsInput = document.getElementById('elevators-input'); // variable almacen numero elevadores necesita cliente industrial
    elevatorsInput.addEventListener('input', function() {
        console.log( elevatorsInput.value);
    })
    const floorInput = document.getElementById('floors-input'); // variable almacen numero pisos existentes en edificio
    floorInput.addEventListener('input', function() {
        console.log( floorInput.value);
    })
    const apartmentInput = document.getElementById('apartments-input'); // variable almacen numero de apartamentos existentes en edificio
    apartmentInput.addEventListener('input', function() {
        console.log( apartmentInput.value);
    })
    const occupancyInput = document.getElementById('occupancy-input'); // variable almacen maximo de personas por piso
    occupancyInput.addEventListener('input', function() {
        console.log( occupancyInput.value);
    })
    
    function hideAllSections() {  // funcion que oculta todas las secciones
        floornumber.style.display = 'none';
        aptmentsnumber.style.display = 'none';
        occupancy.style.display = 'none';
        elevators.style.display = 'none';
        elevatorsneeded.style.display = 'none';
        unitprice.style.display = 'none';
        installationfee.style.display = 'none';
        finalcost.style.display = 'none';
    }

    function showAllSections() {   // funcion que muestra todas las secciones
        floornumber.style.display = 'block';
        aptmentsnumber.style.display = 'block';
        occupancy.style.display = 'block';
        elevators.style.display = 'block';
        elevatorsneeded.style.display = 'block';
        unitprice.style.display = 'block';
        installationfee.style.display = 'block';
        finalcost.style.display = 'block';
    }
    function calculateIndustrialEle() {   //funcion que calcula elevadores necesitados edificio industrial
        let industrialEle;
        industrialEle = elevatorsInput.value;
        return industrialEle;
    }
    function calculateResidentialEle() { //funcion que calcula elevadores necesitados edificio residential
        let residentialEle;
        if (floorInput.value <= 20){
            const residentialEle = (apartmentInput.value / floorInput.value) / 6;
        } else if (floorInput.value > 20){
            aptxfloor = (apartmentInput.value / floorInput.value) ;
            eachbank = (aptxfloor / 6) ;
            eleadd = ((floorInput.value/20) - 1);
            residentialEle = (eachbank * eleadd) ;
        return residentialEle;
        }  
    }
    function calculateCommercial() {  //funcion que calcula elevadores necesitados edificio comercial
        let commercialEle;
        totalocup = (occupancyInput.value * floorInput.value);
        eachbank = (totaloccup / 200);
        bankrequired = (floorInput.value/ 10);
        commercialEle = bankrequired * (eachbank + 1);
        return commercialEle;
        }
    
    hideAllSections();

    residentialRadio.addEventListener('click', function() { // comportamiento cuando das click en residential radio
       
        if (residentialRadio.checked){
            showAllSections();
            
            occupancy.style.display = 'none';
            elevators.style.display = 'none';
        }
    })
    commercialRadio.addEventListener('click', function() { // comportamiento cuando das click en commercial radio
        
        if (commercialRadio.checked){
            showAllSections();
            
            aptmentsnumber.style.display = 'none';
            elevators.style.display = 'none';
        }
    })
    industrialRadio.addEventListener('click', function() { // comportamiento cuando das click en industrial radio
        
        if (industrialRadio.checked){
            showAllSections();
            
            aptmentsnumber.style.display = 'none';
            occupancy.style.display = 'none';
            floornumber.style.display = 'none';
            
        }
    })
    function getStandardCost() {  //funcion que calcula precio de un elevador standard
        let standardCost;
        switch (true) {
            case (residentialRadio.checked):
                if (apartmentInput.value && floorInput.value)
                calculateResidentialEle();
                standardCost = residentialEle * standardprize;
            break;

            case (commercialRadio.checked):
                if (floorInput.value && occupancyInput.value)
                calculateCommercial();
                standardCost = commercialEle * standardprize;
            break;

            case (industrialRadio.checked):
                if (elevatorsInput.value)
                calculateIndustrialEle();
                standardCost = industrialEle * standardprize;
        return standardCost;
        }
      
              
            }
    
})


