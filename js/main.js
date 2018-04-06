

$(function () {
    
/************************************************  Start General Page *****************/


    'use strict';
                                /* When Click On Register Button */
    $("button.newuser").click(function() {
        $(".content-left").fadeOut( function() {
            $(".content-down").fadeIn(100);
        });
    });

                                /* When Click On Next Button */

    $(".content-down button").click(function() {
        $(".content-down form.formOne").fadeOut(function() {
            $(".content-down form.formTwo").fadeIn();
        });
    }); 
                                /* When Click On Back Button */

    $("button.back").click(function() {
        $(".content-down").fadeOut(function () {
            $(".content-left").fadeIn();
        });
    });
    
    
                                 /*   Show Loading Animation */
    
    $("button.start").click(function() {
        $("div.loading").show();
    });
    

    
    /************************************************  Start Courses Page *****************/
    
    //more button
    
    $(".more").click(function() {
        $(".hidden-courses").slideToggle();
        $(".more").hide();
    });

    //popup
    
    $(".join").click(function() {
        $(".popup").fadeToggle();
    });
    
    $(".close").click(function() {
       $(".popup").fadeOut(); 
    });
    
    $(".accept").click(function() {
        $(".popupOne").hide();
        $(".popupTwo").show();
    });
    
    //logOut Button
        $(".logOut").click(function() {
        $(".popup").show(); 
    });
    
        $(".noChoise").click(function() {
        $(".popup").hide(); 
    });
    
        $(".close span").click(function() {
        $(".popup").hide(); 
    });
    
    
});