$(document).ready(function(){
    // $('p.para1').css('color', 'red');                      //change the color of paragraph 1 to red
    // $('p.para1').css({color: 'red', background: '#ccc'}); // use the curly brackets/ : to have mulitple css changes
    // // $('p.para2').addClass('myClass');                 //add a class from CSS file
    // // $('p.para2').removeClass('myClass');             // remove a class from CSS file
    // $('#btn1').click(function(){
    //     $('p.para2').toggleClass('myClass');       // using a click function: toggle from CSS class back and forth
    // });

    // $('#myDiv').text('Hello World');            //add text to an ID
    // $('#myDiv').html('<h4>Hello World</h4>');  // use HTML to add specific tags for styling (h4, h1, ect)
    
    // // APPENDING ELEMENTS:
    // $('ul').append('<li>Append List Item</li>');  // appending an li tag with some text inside
    // $('ul').prepend('<li>Prepend List Item</li>'); // prepends li tag with text to the top of the list
    // $('.para1').appendTo('.para2')       // Take one element and combine them
    // $('.para1').prependTo('.para2')     // Reverse 
    // $('ul').empty();                   // Removes all the inner elements out
    // $('a').attr('target', '_blank');  //manipulate A tags (_blank opens link in a new page)
    // $('a').removeAttr('target');     // remove attributes
    
    // CREATE AN ARRAY
    var myArr = ['Brennan', 'Luke', 'Matt', 'Ethan']

    // CREATE A FOR EACH LOOP TO ADD MULTIPLE ITEMS TO THE DOM
    $.each(myArr, function(i, val){
        $('#users').append('<li> ' + val + '</li>');
    });
}); 