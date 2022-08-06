$(function(){
    $(".country").select2({
        placeholder: "الدولة",
        allowClear: true
    });
    $(".law").select2({
        placeholder: "نوع القانون",
        allowClear: true
    });
    $(".specialization").select2({
        placeholder: "التخصص",
        allowClear: true
    });
    $(".ShowType").select2({
        placeholder: "النوع",
        allowClear: true
    });
    $(".EmailLogin").click(function (e) { 
      
        $(".divEmailLogin").toggle();
            
        });

        $(".PassLogin").click(function (e) { 
      
            $(".divPassLogin").toggle();
                
            });
    

    $(".inputNameone").click(function (e) { 
      
    $(".divNameone").toggle();
        
    });

    $(".inputNameseconde").click(function (e) { 
      
        $(".divNameseconde").toggle();
            
    });
    $(".inputPass").click(function (e) { 
      
            $(".divinputPass").toggle();
                
    });
  
    $(".divBackIcon .far").click(function (e) { 
        $(this).toggleClass("fas",$(".alertadd").toggle("2000"));
    });
    
    // $(".divBackIcon .fas").click(function (e) { 
    //     $(this).toggleClass("far",$(".alertDelete").toggle("2000"));
    // });
    $(".btnTypeUser").click(function () { 

        $(".btnTypeUser").removeClass("active");

        $(this).addClass("active");

      });
    
     
    
    // $(".btnTabs ").click(function (e) { 
    //    $(".btnTabs").append("<i class='fas fa-check-circle iconCheck'></i>");
        
    // });

    $(".js-example-placeholder-single .DateYear").select2({
        placeholder: "1998",
        allowClear: true
    });
    $(".js-example-placeholder-single .Gender").select2({
        placeholder: "ذكر",
        allowClear: true
    });
  
    
    $(".js-example-placeholder-single .prefixPhone").select2({
        placeholder: "+970",
        allowClear: true
    });
    $(".btnTabs").click(function () { 
        $(".btnTabs").removeClass("active");
        $(this).addClass("active")
        //  $(".nav-link .btnTabs i").css("color", "red");
      });
    //   $(".ImgPortfolio").hover(function () {
    //       (".hoverImgPortfolio").css("display", "block");
           
              
    //       }, function () {
    //         (".hoverImgPortfolio").css("display", "block");
    //       }
    //   );
    $(".BackIconTestimonials").click(function (e) { 
        // $(".secFeedback").fadeToggle("slow", 0.6);
        $(".secFeedback").toggle("slow");
    });
    
    $(".btnToggleProposal").click(function (e) { 
        // $(".secFeedback").fadeToggle("slow", 0.6);
        $(".lawProposal").toggle("slow");
    });
    
    $(".btnToggleOffers").click(function (e) { 
        // $(".secFeedback").fadeToggle("slow", 0.6);
        $(".bodyWaitOffer").toggle("slow");
    });
    $(".aRatesProfile").click(function (e) { 
        $(".contentLawyerSection").css("display", "none");
        $(".contentReviewSection").css("display", "block");
    });
    $(".BackArrowRates").click(function (e) { 
        $(".contentReviewSection").css("display", "none");
        $(".contentLawyerSection").css("display", "block");
    });


    // office
    $(".aRatesProfile").click(function (e) { 
        $(".contentReviewOffice").css("display", "none");
        $(".contentReviewSection").css("display", "block");
    });
    $(".BackArrowRates").click(function (e) { 
        $(".contentReviewSection").css("display", "none");
        $(".contentReviewOffice").css("display", "block");
    });
    // office



    $(".btnServicesHomeMsg").click(function (e) { 
        $(".divContentServices").css("display", "none");
        $(".divContentServicesMsgs").css("display", "block");
        
    });
    $(".ArrowBackHomMsg").click(function (e) { 
        $(".divContentServicesMsgs").css("display", "none");
        $(".divContentServices").css("display", "block");
        
    });
    $(".btnServicesHomeBalance").click(function (e) { 
        $(".divContentServices").css("display", "none");
        $(".divContentServicesBalance").css("display", "block");
    });
    $(".ArrowBackBalanceHome").click(function (e) { 
        $(".divContentServicesBalance").css("display", "none");
        $(".divContentServices").css("display", "block");
        
    });
    $(".UserOffice").click(function (e) { 
        $(".divNameOffice").css("display", "block");
        $(".divNameLawyer").css("display", "none");

    });
    $(".UserLawyer").click(function (e) { 
        $(".divNameLawyer").css("display", "flex");
        $(".divNameOffice").css("display", "none");

    });
    $(".UserEntre").click(function (e) { 
        $(".divNameLawyer").css("display", "flex");
        $(".divNameOffice").css("display", "none");

    });
    $(".iconDisLike").click(function (e) { 
        $(this).css("transform", "rotate(180deg)",$(".alertLike").toggle("2000"));    
    });
  
});