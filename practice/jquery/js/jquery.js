

$(document).ready(function () {

    $('button').click(function () { 
        // e.preventDefault();
        $('#p1').fadeIn();
        
    });
});

$(document).ready(function () {
    $('#menu').click(function (e) { 
        e.preventDefault();
        $('#extend').slideDown();
        
    });

  
});


$(document).ready(function () {
    $('#extend').click(function (e) { 
        e.preventDefault();
        $('#extend').slideUp();
        
    });
});


$(document).ready(function () {
    $('#menu1').click(function (e) { 
        e.preventDefault();
        $('#extend1').slideToggle();
        
    });
});


$(document).ready(function () {
    $('#animate').click(function () { 
        
        $('#animate-div').animate({
            left: "+=100px"
        })
    });
});

$(document).ready(function () {
    $("#height-btn").click(function (e) { 
        e.preventDefault();
        $('#height').animate({
            height: "toggle"
        })
    });
});


$(document).ready(function(){
    $("button").click(function(){
      var div = $("div");
      div.animate({height: '200px', opacity: '0.4'}, "slow");
      div.animate({width: '200px', opacity: '0.8'}, "slow");
      div.animate({height: '100px', opacity: '0.4'}, "slow");
      div.animate({width: '100px', opacity: '0.8'}, "slow");
    });
  });

//   works like interpreter, similar to js , jquery is extendee fro js anyway