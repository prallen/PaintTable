'use strict';

var paintState = false;
var paintColor = '#000000';

$('table').on('mousedown', 'td', function(){
    paintState = true;
    $(this).css('background', paintColor);
});

$('table').on('mouseenter', 'td', function(){
    if (paintState === true){
        $(this).css('background-color', paintColor);
    }
});

$('html').on('mouseup', function(){
    paintState = false;
});



// Function that draws a blank table
function drawTable(){
    var size = 40;
    var tableHtml = '';
    for (var row = 1; row <= size; row++){
        tableHtml += '<tr>';
        for(var col = 1; col <= size; col++){
            tableHtml += '<td></td>';
        }
        tableHtml += '</tr>';
    }
    $('table').html(tableHtml);
}

drawTable();