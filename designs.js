// Select color input
let color;

// Select size input
let h, w;

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function (grid){
grid.preventDefault();
h= $('#inputHeight').val();
w= $('#inputWeight').val();
makeGrid(h, w);
});

// Your code goes here! //create grid with entered dimensions and clear space for next one
function makeGrid(h,w) {
$('#pixelCanvas > tr').remove();
for (n=1; n<=h; n++){
   $('#pixelCanvas').append('<tr id=table'+n+'></tr>');
for (m=1; m<=w; m++){
    $('tr:last').append('<td></td>');
}
}

// add colors to the cells
$('td').click(function addColor(){
   color = $('#colorPicker').val();
   if ($(this).attr('style')) {
       $(this).removeAttr('style')
   } else {
       $(this).css('background-color',color);
   }
})
}

//clear grid and reset form
$('#toggleBtn').click('.pixel_canvas',function (){
    $('#pixelCanvas > tr').remove();
    $('td').toggleClass('grid_Toggle');
});
