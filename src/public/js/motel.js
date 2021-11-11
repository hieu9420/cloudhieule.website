let motelChoose = {};



$('body').on('change', '.select-moteljs', function(e){
    let data = e.target.options[e.target.selectedIndex].dataset;
    motelChoose = {};
    motelChoose.id = data.motelid;
    motelChoose.motelName = data.motelname;
    motelChoose.motelBasicCost = parseFloat(data.motelbasiccost);
    motelChoose.trashCost = parseFloat(data.trashcost);
    motelChoose.elecEachCost = parseFloat(data.eleceachcost);
    motelChoose.waterEachCost = parseFloat(data.watereachcost);

    //set basic info

    $('input[spect="motelBasicCost"]').val((motelChoose.motelBasicCost).toLocaleString('it-IT', {style: 'currency',currency: 'VND',}));
    $('input[spect="trashCost"]').val((motelChoose.trashCost).toLocaleString('it-IT', {style: 'currency',currency: 'VND',}));
    $('input[spect="elecEachCost"]').val((motelChoose.elecEachCost).toLocaleString('it-IT', {style: 'currency',currency: 'VND',}));
    $('input[spect="waterEachCost"]').val((motelChoose.waterEachCost).toLocaleString('it-IT', {style: 'currency',currency: 'VND',}));
});

$('.auto-calc').on('click', function(e){

    let $elecNewNumber = $('input[name="elecNewNumber"]');
    let $elecOldNumber = $('input[name="elecOldNumber"]');
    let $elecTotalCost = $('input[name="elecTotalCost"]');

    let $waterNewNumber = $('input[name="waterNewNumber"]');
    let $waterOldNumber = $('input[name="waterOldNumber"]');
    let $waterTotalCost = $('input[name="waterTotalCost"]');

    let $motelTotalCost = $('input[name="motelTotalCost"]');
    
    
    let resulteElecTotalCost = motelChoose.elecEachCost * (parseInt($elecNewNumber.val()) - parseInt($elecOldNumber.val()));
    let resulteWaterTotalCost = motelChoose.waterEachCost * (parseInt($waterNewNumber.val()) - parseInt($waterOldNumber.val()));
    let resultMotelTotalCost = 0;

    

    if(!isNaN(resulteElecTotalCost)){
        $elecTotalCost.val(resulteElecTotalCost);
    }

    if(!isNaN(resulteWaterTotalCost)){
        $waterTotalCost.val(resulteWaterTotalCost);
    }

    if(!isNaN(resulteElecTotalCost) && !isNaN(resulteWaterTotalCost)){
        resultMotelTotalCost = resulteElecTotalCost + resulteWaterTotalCost + motelChoose.trashCost + motelChoose.motelBasicCost;
        $motelTotalCost.val(resultMotelTotalCost);
    }
});