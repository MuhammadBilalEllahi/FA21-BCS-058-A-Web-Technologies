

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


$(document).ready(function () {
    $('#drkbtn').click(
        // $('html').addClass('invert')
        ()=>{
            $('html').toggleClass('invert')
            $('#drkbtn').fadeOut("slow").css("font-size", "45px")
        }
    )

    
    
});

$(document).ready(function(){
    $("#widths").click(function(){
      var txt = "";
      txt += "Document width/height: " + $(document).width();
      txt += "x" + $(document).height() + "\n";
      txt += "Window width/height: " + $(window).width();
      txt += "x" + $(window).height();
      

        $("#widths").text(txt)


      newwidth= $(window).width() + 200;
console.log(newwidth)
      window.resizeTo(newwidth, $(window).height())
console.log($(window).width())

    });
  });



$(window).focus(function() { 
    //called when you switch to your //test tab 
    alert("Once you enter you cant leave or marks will be deducted")
}); 
 
$(window).blur(function() { 
    // called when you switch to another //tab 
    alert("You cant leave this browser, 5 points deducted")
});



// TREE Traversal


$(document).ready(function () {

    $('span').parents().css({
        "border" : "2px solid blue"
    })


    

    $("span").parentsUntil("div").css({"color": "red", "border": "5px solid yellow"});

    $('span').parent().css({
        "border" : "5px solid green"
    })


    $('p').find('span').css({
        "background-color": "yellow"
    })

    $('div').find('*').css({
        "font-size" : "3rem"
    })

    $('#H2').siblings().css({
        "background-color": "yellow",
        "border":"2px dotted blue"
    })
    
});