document.addEventListener('DOMContentLoaded', function() {
    const residentialRadio = document.getElementById('residential'); // residential radio
    const commercialRadio = document.getElementById('commercial'); // commercial radio
    const industrialRadio = document.getElementById('industrial'); // industrial  radio
    
    var floornumber = document.getElementById('number-of-floors');
    var aptmentsnumber = document.getElementById('number-of-apartments');
    var occupancy = document.getElementById('max-occupancy');
    var elevators = document.getElementById('number-of-elevators');
    
    function hideAllSections() {
        floornumber.style.display = 'none';
        aptmentsnumber.style.display = 'none';
        occupancy.style.display = 'none';
        elevators.style.display = 'none';
    }

    // Inicialmente, ocultar todas las secciones
    hideAllSections();

    residentialRadio.addEventListener('click', function() {
       
        if (residentialRadio.checked){
            hideAllSections();
            // commercialRadio.checked = false;
            // industrialRadio.checked = false;
            floornumber.style.display = 'block';
            aptmentsnumber.style.display = 'block';
        }
    })
    commercialRadio.addEventListener('click', function() {
        
        if (commercialRadio.checked){
            hideAllSections();
            // residentialRadio.checked = false;
            // industrialRadio.checked = false;
            floornumber.style.display = 'block';
            occupancy.style.display = 'block';
        }
    })
    industrialRadio.addEventListener('click', function() {
        
        if (industrialRadio.checked){
            hideAllSections();
            // residentialRadio.checked = false;
            // commercialRadio.checked = false;
            elevators.style.display = 'block';
        }
    })
})


