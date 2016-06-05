$(document).ready(function(){
    $('#btnVisie').click(function(){
       $('#titelJumbo').html($('#titelVisie').html());
    });

    $('#btnWaarden').click(function(){
        $('#titelJumbo').html($('#titelWaarden').html());
    });

    $('#btnDoel').click(function(){
        $('#titelJumbo').html($('#titelDoel').html());
    });

    $('#btnWerkwijze').click(function(){
        $('#titelJumbo').html($('#titelWerkwijze').html());
    });

    $('#btnAanbod').click(function(){
        $('#titelJumbo').html($('#titelAanbod').html());
    });
});