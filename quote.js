document.addEventListener("DOMContentLoaded", function () {
  //TYPE OF BUILDING
  const residentialRadio = document.getElementById("residential"); // residential radio
  const commercialRadio = document.getElementById("commercial"); // commercial radio
  const industrialRadio = document.getElementById("industrial"); // industrial  radio

  //INPUTS CONTAINERS
  const floornumber = document.getElementById("number-of-floors"); // number of floors
  const aptmentsnumber = document.getElementById("number-of-apartments"); // number of aptments
  const occupancy = document.getElementById("max-occupancy"); // max occupancy
  const elevators = document.getElementById("number-of-elevators"); // number of elevators
  const allinputs = document.getElementById("all-inputs");

  //INPUTS FIELDS
  const elevatorsInput = document.getElementById("elevators-input"); // variable almacen numero elevadores necesita cliente industrial
  elevatorsInput.addEventListener("input", function () {
    console.log(elevatorsInput.value);
  });
  const floorInput = document.getElementById("floors-input"); // variable almacen numero pisos existentes en edificio
  floorInput.addEventListener("input", function () {
    console.log(floorInput.value);
  });
  const apartmentInput = document.getElementById("apartments-input"); // variable almacen numero de apartamentos existentes en edificio
  apartmentInput.addEventListener("input", function () {
    console.log(apartmentInput.value);
  });
  const occupancyInput = document.getElementById("occupancy-input"); // variable almacen maximo de personas por piso
  occupancyInput.addEventListener("input", function () {
    console.log(occupancyInput.value);
  });

  //QUALITY SELECTION BUTTONS
  const standardRadio = document.getElementById("standard"); // standard radio
  const premiumRadio = document.getElementById("premium"); // premium radio
  const exeliumRadio = document.getElementById("exelium"); // exelium radio
  const qualityContainer = document.getElementById("quality-buttons"); // quality selection buttons container

  //OUTPUTS CONTAINERS
  const elevatorsneeded = document.getElementById("elevators-needed"); // elevators needed output container
  const unitprice = document.getElementById("unit-price"); // unit price output container
  const installationfee = document.getElementById("installation-fee"); // installation fee output container
  const finalcost = document.getElementById("final-cost"); // final cost output container

  //OUTPUTS FIELDS
  const finalcost_output = document.getElementById("final-cost-output"); // placeholder para poner el final cost output
  const installationfee_output = document.getElementById(
    "installation-fee-output"
  ); // placeholder para poner el installation fee output
  const unitprice_output = document.getElementById("unit-price-output"); // placeholder para poner el unit price output
  const elevatorsneeded_output = document.getElementById(
    "elevators-needed-output"
  ); // placeholder para poner el elevators needed output

  
  //  HIDING FIELDS

  function hideInputs() {
    // funcion que oculta todas las secciones input
    floornumber.style.display = "none";
    aptmentsnumber.style.display = "none";
    occupancy.style.display = "none";
    elevators.style.display = "none";
    allinputs.style.display = "none";
  }
  function hideOutputs() {
    //funcion que oculta todas las secciones output
    elevatorsneeded.style.display = "none";
    unitprice.style.display = "none";
    installationfee.style.display = "none";
    finalcost.style.display = "none";
  }
  function hideQualityRadios() {
    //funcion que oculta el quality radio button
    standardRadio.style.display = "none";
    premiumRadio.style.display = "none";
    exeliumRadio.style.display = "none";
    qualityContainer.style.display = "none";
  }

  //SHOWING FIELDS
  function showInputs() {
    // funcion que muestra todas las secciones iniciales
    floornumber.style.display = "block";
    aptmentsnumber.style.display = "block";
    occupancy.style.display = "block";
    elevators.style.display = "block";
    allinputs.style.display = "block";
  };
  function showOutputs() {
    //funcion que muestra las secciones de output
    elevatorsneeded.style.display = "block";
    unitprice.style.display = "block";
    installationfee.style.display = "block";
    finalcost.style.display = "block";
  };
  function showQualityRadios() {
    //funcion que muestra el quality radio button
    standardRadio.style.display = "block";
    premiumRadio.style.display = "block";
    exeliumRadio.style.display = "block";
    qualityContainer.style.display = "block";
  };

  //---->CALCULATIONS<---
  function calculateResidentialEle() {
    const ratioApt = Math.ceil(
      Number(apartmentInput.value) / Math.ceil(Number(floorInput.value))
    );
    const regBanks = Math.ceil(ratioApt / 6);
    const extraBanks = Math.ceil(Number(floorInput.value) / 20);
    elevatorsneeded_output.value = Math.ceil(regBanks * extraBanks);
  };

  function calculateCommercialEle() {
    const ratioOccupancy = Math.ceil(
      Number(occupancyInput.value) * Math.ceil(Number(floorInput.value))
    );
    const regBanks = Math.ceil(ratioOccupancy / 200);
    const bankrequired = Math.ceil(Number(floorInput.value) / 10);
    elevatorsneeded_output.value = Math.ceil((regBanks + 1) * bankrequired);
  };
  function calculateIndustrialEle() {
    elevatorsneeded_output.value = elevatorsInput.value;
  };
  function setStandardValues() {
    unitprice_output.value = "$8000";
    installationfee_output.value = "10%";
  };
  function setPremiumValues() {
    unitprice_output.value = "$12000";
    installationfee_output.value = "15%";
  };
  function setExeliumValues() {
    unitprice_output.value = "$15000";
    installationfee_output.value = "20%";
  };

  function getStandardCost() {
    if (residentialRadio.checked) {
      calculateResidentialEle();
      setStandardValues();
      const installationFeepercent =
        elevatorsneeded_output.value * unitprice_output.value * 0.1;
      finalcost_output.value =
        elevatorsneeded_output.value * unitprice_output.value +
        installationFeepercent;
        
    } else if (commercialRadio.checked) {
      calculateCommercialEle();
      setStandardValues();
      const installationFeepercent =
        elevatorsneeded_output.value * unitprice_output.value * 0.1;
      finalcost_output.value =
        elevatorsneeded_output.value * unitprice_output.value +
        installationFeepercent;
      
    } else if (industrialRadio.checked && elevatorsInput.value) {
      calculateIndustrialEle();
      setStandardValues();
      const installationFeepercent =
        elevatorsneeded_output.value * unitprice_output.value * 0.1;
      finalcost_output.value =
        elevatorsneeded_output.value * unitprice_output.value +
        installationFeepercent;
      
    }
  };

  function getPremiumCost() {
    //funcion que calcula precio de un elevador premium
    if (residentialRadio.checked) {
      calculateResidentialEle();
      setPremiumValues();
      const installationFeepercent =
        elevatorsneeded_output.value * unitprice_output.value * 0.15;
      finalcost_output.value =
        elevatorsneeded_output.value * unitprice_output.value +
        installationFeepercent;
      
    } else if (commercialRadio.checked) {
      calculateCommercialEle();
      setPremiumValues();
      const installationFeepercent =
        elevatorsneeded_output.value * unitprice_output.value * 0.15;
      finalcost_output.value =
        elevatorsneeded_output.value * unitprice_output.value +
        installationFeepercent;
      
    } else if (industrialRadio.checked) {
      calculateIndustrialEle();
      setPremiumValues();
      const installationFeepercent =
        elevatorsneeded_output.value * unitprice_output.value * 0.15;
      finalcost_output.value =
        elevatorsneeded_output.value * unitprice_output.value +
        installationFeepercent;
      
    }
  };
  function getExeliumCost() {
    if (residentialRadio.checked) {
      calculateResidentialEle();
      setExeliumValues();
      const installationFeepercent =
        elevatorsneeded_output.value * unitprice_output.value * 0.2;
      finalcost_output.value =
        elevatorsneeded_output.value * unitprice_output.value +
        installationFeepercent;
      
    } else if (commercialRadio.checked) {
      calculateCommercialEle();
      setExeliumValues();
      const installationFeepercent =
        elevatorsneeded_output.value * unitprice_output.value * 0.2;
      finalcost_output.value =
        elevatorsneeded_output.value * unitprice_output.value +
        installationFeepercent;
      
    } else if (industrialRadio.checked) {
      calculateIndustrialEle();
      setExeliumValues();
      const installationFeepercent =
        elevatorsneeded_output.value * unitprice_output.value * 0.2;
      finalcost_output.value =
        elevatorsneeded_output.value * unitprice_output.value +
        installationFeepercent;
      
    }
  };
  function setFinalPrice() {
    const internalprice = Number(String(unitprice_output.value).replace(/[^0-9.-]+/g, ""));
    const installationfee = Number(String(installationfee_output.value).replace(/[^0-9.-]+/g, ""));
    const internalquote = internalprice * elevatorsneeded_output.value * ((100 + installationfee)/100);
    finalcost_output.value = "$" + internalquote.toLocaleString("en-US");
  };
  
  function resetOutputs() {
    
    finalcost_output.value = "";
    installationfee_output.value = "";
    elevatorsneeded_output.value = "";
    unitprice_output.value = "";
  };

  //---->ACTIONS<---
  hideInputs();
  hideQualityRadios();
  hideOutputs();

  residentialRadio.addEventListener("click", function () {
    // comportamiento cuando das click en residential radio
    console.log("click en residential Radio");

    showInputs();
    occupancy.style.display = "none";
    elevators.style.display = "none";
    showQualityRadios();
    showOutputs();
    calculateResidentialEle();
    resetOutputs();
  });

  commercialRadio.addEventListener("click", function () {
    //     // comportamiento cuando das click en commercial radio
    showInputs();
    aptmentsnumber.style.display = "none";
    elevators.style.display = "none";
    showQualityRadios();
    showOutputs();
    calculateCommercialEle();
    resetOutputs();
  });

  industrialRadio.addEventListener("click", function () {
    // comportamiento cuando das click en industrial radio

    showInputs();
    aptmentsnumber.style.display = "none";
    occupancy.style.display = "none";
    floornumber.style.display = "none";
    showQualityRadios();
    showOutputs();
    calculateIndustrialEle();
    resetOutputs();
  });

  standardRadio.addEventListener("click", function () {
    getStandardCost();
    setFinalPrice();
  });

  premiumRadio.addEventListener("click", function () {
    getPremiumCost();
    setFinalPrice();
  });

  exeliumRadio.addEventListener("click", function () {
    getExeliumCost();
    setFinalPrice();
  });
});
