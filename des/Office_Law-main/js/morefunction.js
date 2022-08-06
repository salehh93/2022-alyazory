$(function(){
    $(".linkEditFiledsInfo").click(function (e) { 
        $(".tabContentDisableFileds").css("display", "none");
        $(".tabContentEditFileds").css("display", "block");
    });
    $(".divBtnsEditsInfoSett .btnNextEditSettings").click(function (e) { 
        $(".tabContentEditFileds").css("display", "none");
        $(".tabContentDisableFileds").css("display", "block");
    });
    $(".linkEditFiledsAddress").click(function (e) { 
        $(".tabContentDisableAddress").css("display", "none");
        $(".tabContentEditAddress").css("display", "block");
    });
    
    $(".divBtnsEditsInfoSett .btnNextEditAddress").click(function (e) { 
        $(".tabContentEditAddress").css("display", "none");
        $(".tabContentDisableAddress").css("display", "block");
    });
   
    $(".btnHeadTabAddPay").click(function (e) { 
        $(".tabContentsAddPay").css("display", "none");
        $(".tabContentsMethodPay").css("display", "block");
    });
    $(".btnMethodPay").click(function (e) { 
        $(".tabContentsMethodPay").css("display", "none");
        $(".tabContentsAddPay").css("display", "block");
    });
    $(".btnradioPayCard").click(function (e) { 
        $(".radioPayCard").attr('checked', 'checked');
    });
    $(".btnradioPayPal").click(function (e) { 
        $(".radioPayPal").attr('checked', 'checked');
    });
    $(".inputNumCardPay").click(function (e) { 
      
        $(".svgInputNumPay").toggle();
            
        });
        $(".searchContentMsg").click(function (e) { 
      
            $(".PlaceholderSearchContentMsg").toggle();
                
        });
            $(".js-example-tokenizer").select2({
                tags: true,
                tokenSeparators: [',', ' ']
            });
            $(".js-example-tokenizerskills").select2({
                tags: true,
                tokenSeparators: [',', ' ']
            });
            $(".js-example-tokenizerskillsEdit").select2({
                tags: true,
                tokenSeparators: [',', ' ']
            });
            $(".js-example-tokenizerEditskills").select2({
                tags: true,
                tokenSeparators: [',', ' ']
            });
            $(".btnViewProfile").click(function (e) { 
                $(this).hide(3000);
                $(".hideIconEdit").hide(3000);
                $(".btnSetProfile").hide(3000);
                $(".BackEditBtns").css("display","block")
                
            });
            $(".colbtnSetProfile").click(function (e) { 
                $(".btnViewProfile").show(3000);
                $(".hideIconEdit").show(3000);
                $(".btnSetProfile").show(3000);
                $(".BackEditBtns").css("display","none");
                
            });
            $(".btnsOfferDetailsSave").click(function (e) { 
                $(this).css("background","#F1F2F4");
                $(this).css( "border","none",$(".alertLike").toggle("2000"));
                  
              });
          
            // $(".likeOutline").click(function (e) { 
            //     $(this).css("display", "none");  
            //     $(".likeSolid").css("display", "block",$(".alertadd").toggle("2000"));  
            //   });
            // $(".deleletSkill").click(function (e) { 
            //   $(this).hide();
            // });
        // $(".searchContent").click(function (e) { 
    
        //     $(".PlaceholderSearchContent .divPlaceSearch").toggle();
                
        //     });
        $(".js-example-placeholder-single .SelectSortMsg").select2({
            placeholder: "عرض الأحدث ",
            allowClear: true
        });
});