document.addEventListener('DOMContentLoaded', function() {
    const residentialRadio = document.getElementById('residential'); // residential radio
    const commercialRadio = document.getElementById('commercial'); // commercial radio
    const industrialRadio = document.getElementById('industrial'); // industrial  radio
    
    let residentialEle, commercialEle, totalocup, eachbank, bankrequired, aptxfloor, eleadd;;

    const floornumber = document.getElementById('number-of-floors'); // number of floors
    const aptmentsnumber = document.getElementById('number-of-apartments'); // number of aptments
    const occupancy = document.getElementById('max-occupancy'); // max occupancy
    const elevators = document.getElementById('number-of-elevators'); // number of elevators

    const standardRadio = document.getElementById('standard'); // standard radio
    const premiumRadio = document.getElementById('premium'); // premium radio
    const exeliumRadio = document.getElementById('exelium'); // exelium radio

    const elevatorsneeded = document.getElementById('elevators-needed'); // elevators needed output
    const unitprice = document.getElementById('unit-price'); // unit price output
    const installationfee = document.getElementById('installation-fee'); // installation fee output
    const finalcost = document.getElementById('final-cost'); // final cost output

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
    function calculateResidentialEle() {
        let residentialEle;
        if (floorInput.value <= 20) {
            residentialEle = (apartmentInput.value / floorInput.value) / 6;
        } else if (floorInput.value > 20) {
            aptxfloor = (apartmentInput.value / floorInput.value);
            eachbank = (aptxfloor / 6);
            eleadd = ((floorInput.value / 20) - 1);
            residentialEle = (eachbank * eleadd);
        }
        return residentialEle;
    }
    function calculateCommercial() {  //funcion que calcula elevadores necesitados edificio comercial
        let commercialEle;
        totalocup = (occupancyInput.value * floorInput.value);
        eachbank = (totalocup / 200);
        bankrequired = (floorInput.value/ 10);
        commercialEle = bankrequired * (eachbank + 1);
        return commercialEle;
        }
    
    // hideAllSections();

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
        let elevatorsNeeded;
        let installationFee;
        let finalCost;
        
        if(residentialRadio.checked && apartmentInput.value && floorInput.value){
            calculateResidentialEle();
            standardCost = residentialEle * standardprize;
            elevatorsNeeded = residentialEle;
            installationFee = standardCost / 10;
            finalCost = (elevatorsNeeded * standardprize) + (installationfee);
        } else if (commercialRadio.checked && floorInput.value && occupancyInput.value){
            calculateCommercial();
            standardCost = commercialEle * standardprize;
            elevatorsNeeded = commercialEle;
            installationFee = standardCost / 10;
            finalCost = (elevatorsNeeded * standardprize) + (installationFee);
        } else if (industrialRadio.checked && elevatorsInput.value){
            calculateIndustrialEle();
            standardCost = industrialEle * standardprize;
            elevatorsNeeded = industrialEle;
            installationFee = standardCost / 10;
            finalCost = (elevatorsNeeded * standardprize) + (installationFee);
        }
            
    elevatorsneeded.value = elevatorsNeeded;
    unitprice.value = standardprize;
    installationfee.value = installationFee;
    finalcost.value = finalCost;      
    }
    
    function getPremiumCost() {  //funcion que calcula precio de un elevador premium
        let premiumCost;
        let elevatorsNeeded;
        let installationFee;
        let finalCost;
        
        if(residentialRadio.checked && apartmentInput.value && floorInput.value){
            calculateResidentialEle();
            premiumCost = residentialEle * premiumprize;
            elevatorsNeeded = residentialEle;
            installationFee = premiumCost * 0.15;
            finalCost = (elevatorsNeeded * premiumprize) + (installationFee);
        } else if (commercialRadio.checked && floorInput.value && occupancyInput.value){
            calculateCommercial();
            premiumCost = commercialEle * premiumprize;
            elevatorsNeeded = commercialEle;
            installationFee = premiumCost * 0.15;
            finalCost = (elevatorsNeeded * premiumprize) + (installationFee);
        } else if (industrialRadio.checked && elevatorsInput.value){
            calculateIndustrialEle();
            premiumCost = industrialEle * premiumprize;
            elevatorsNeeded = industrialEle;
            installationFee = premiumCost * 0.15;
            finalCost = (elevatorsNeeded * premiumprize) + (installationFee);
        }
    elevatorsneeded.value = elevatorsNeeded;
    unitprice.value = premiumprize;
    installationfee.value = installationFee;
    finalcost.value = finalCost;
           
    }

    function getExeliumCost() {  //funcion que calcula precio de un elevador exelium
        let exeliumCost;
        let elevatorsNeeded;
        let installationFee;
        let finalCost;
        if (residentialRadio.checked && apartmentInput.value && floorInput.value){
            calculateResidentialEle();
            exeliumCost = residentialEle * exeliumprize;
            elevatorsNeeded = residentialEle;
            installationFee = exeliumCost * 0.20;
            finalCost = (elevatorsNeeded * exeliumprize) + (installationFee);
        } else if (commercialRadio.checked && floorInput.value && occupancyInput.value){
            calculateCommercial();
            exeliumCost = commercialEle * exeliumprize;
            elevatorsNeeded = commercialEle;
            installationFee = exeliumCost * 0.20;
            finalCost = (elevatorsNeeded * exeliumprize) + (installationFee);
        } else if (industrialRadio.checked && elevatorsInput.value){
            calculateIndustrialEle();
            exeliumCost = industrialEle * exeliumprize;
            elevatorsNeeded = industrialEle;
            installationFee = exeliumCost * 0.20;
            finalCost = (elevatorsNeeded * exeliumprize) + (installationFee);
        }
    elevatorsneeded.value = elevatorsNeeded;
    unitprice.value = exeliumprize;
    installationfee.value = installationFee;
    finalcost.value = finalCost;

    }


    // poner evento de click en radio standard y llamar a standard cost
    //getStandardCost();
    //poner evento de click en radio premium y llamar a premium cost
    //getPremiumCost();
    
})


