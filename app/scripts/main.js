'use strict';

var palArray = [
    '#000000',
    '#B21F35',
    '#D82735',
    '#FF7435',
    '#FFA135',
    '#FFCB35',
    '#FFF735',
    '#00753A',
    '#009E47',
    '#16DD36',
    '#0052A5',
    '#0079E7',
    '#06A9FC',
    '#681E7E',
    '#7D3CB5',
    '#BD7AF6'
];

var paintState = false;
var paintColor = '#000000';

// Bind mouse events for painting 
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

// Bind mouse events for palette
$('ul').on('click', 'li', function(){
    var $this = $(this);
    $this.parent().find("li").filter('.active-palette').removeClass('active-palette');
    $this.addClass('active-palette');
    paintColor = $this.data('color');
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

// Function that creates the color palette
function createPalette(palArray){
    var paletteHTML = '';

    for (var x=0; x < palArray.length; x++){
        paletteHTML += '<li data-color = '+ palArray[x] + '></li>';
    }
    $('ul').html(paletteHTML);
    $('li').each(function(){
        var $this = $(this);
        var $color = $this.data('color');
        $this.css('background-color', $color);
    });
    $('li').first().addClass('active-palette');
}


drawTable();
createPalette(palArray);