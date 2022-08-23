$(function(){
    // $(".txtentermsgdetails").click(function (e) { 
    //     $(".btnSendMsgChat").css("background-color", "#1D4354");
    //     // $(this).hide();
          
    //   });
      $(".txtentermsgdetails").focus(function (e) { 
        $(".btnSendMsgChat").css("background-color", "#1D4354");
          
      });
      $(".txtentermsgdetails").focusout(function (e) { 
        $(".btnSendMsgChat").css("background-color", "#D9D9D9");
          
      });
})