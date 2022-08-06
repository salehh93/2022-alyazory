// import select2 from "select2";
import "select2/dist/js/select2.full";
import "select2/dist/css/select2.min.css";
import "intl-tel-input/build/js/intlTelInput";
import "intl-tel-input/build/js/intlTelInput-jquery";
import "intl-tel-input/build/js/utils";
import "intl-tel-input/build/css/intlTelInput.css";
import $ from "jquery";
window.$ = $;
let functions =
  // $(document).ready(
  function () {
    $("#Country").select2({
      placeholder: "الدولة",
      allowClear: true,
    });
    $(".law").select2({
      placeholder: "نوع القانون",
      allowClear: true,
    });
    $(".specialization").select2({
      placeholder: "التخصص",
      allowClear: false,
    });
    $(".ShowType").select2({
      placeholder: "النوع",
      allowClear: true,
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
      $(this).toggleClass("fas", $(".alertadd").toggle("2000"));
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
      allowClear: true,
    });
    $(".js-example-placeholder-single.Gender").select2({
      placeholder: "ذكر",
      allowClear: true,
    });
    $(".js-example-placeholder-single.SelectSpecLawyer").select2({
      placeholder: "",
    });

    $(".js-example-placeholder-single .prefixPhone").select2({
      placeholder: "+970",
      allowClear: true,
    });
    $(".btnTabs").click(function () {
      $(".btnTabs").removeClass("active");
      $(".btnTabs").removeClass("active-c-btn");
      $(this).addClass("active");
      $(this).addClass("active-c-btn");
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
      $(".lawProposal").toggle("slow");
    });

    // $(".btnToggleOffers").click(function (e) {
    //   // $(".secFeedback").fadeToggle("slow", 0.6);
    //   $(".bodyWaitOffer").toggle("slow");
    // });
    $(".aRatesProfile").click(function (e) {
      $(".contentLawyerSection").css("display", "none");
      $(".contentReviewSection").css("display", "block");
    });
    $(".BackArrowRates").click(function (e) {
      $(".contentReviewSection").css("display", "none");
      $(".contentLawyerSection").css("display", "block");
    });
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
      $(this).css(
        "transform",
        "rotate(180deg)",
        $(".alertLike").toggle("2000")
      );
    });
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
      $(".radioPayCard").attr("checked", "checked");
    });
    $(".btnradioPayPal").click(function (e) {
      $(".radioPayPal").attr("checked", "checked");
    });
    $(".inputNumCardPay").click(function (e) {
      $(".svgInputNumPay").toggle();
    });
    $(".searchContentMsg").click(function (e) {
      $(".PlaceholderSearchContentMsg").toggle();
    });
    $(".js-example-tokenizer").select2({
      tags: true,
      tokenSeparators: [",", " "],
    });
    $(".js-example-tokenizerskills").select2({
      tags: true,
      tokenSeparators: [",", " "],
      insertTag: () => {},
      createTag: () => {},
    });
    $(".js-example-tokenizerskills-lawyer").select2({
      tags: true,
      tokenSeparators: [",", " "],
      insertTag: () => {},
      createTag: () => {},
    });
    $(".js-example-tokenizerskillsEdit").select2({
      tags: true,
      tokenSeparators: [",", " "],
    });
    $(".js-example-tokenizerEditskills").select2({
      tags: true,
      tokenSeparators: [",", " "],
    });
    $(".btnViewProfile").click(function (e) {
      $(this).hide(3000);
      $(".hideIconEdit").hide(3000);
      $(".btnSetProfile").hide(3000);
      $(".BackEditBtns").css("display", "block");
    });
    $(".colbtnSetProfile").click(function (e) {
      $(".btnViewProfile").show(3000);
      $(".hideIconEdit").show(3000);
      $(".btnSetProfile").show(3000);
      $(".BackEditBtns").css("display", "none");
    });
    $(".btnsOfferDetailsSave").click(function (e) {
      $(this).css("background", "#F1F2F4");
      $(this).css("border", "none", $(".alertLike").toggle("2000"));
    });

    $(".js-example-placeholder-single.country").select2({
      placeholder: "الدولة",
      allowClear: false,
    });
    $(".js-example-placeholder-single.country-laws").select2({
      placeholder: "نوع القانون",
      allowClear: false,
    });
    $(".js-example-placeholder-single .SelectSortMsg").select2({
      placeholder: "عرض الأحدث ",
      allowClear: true,
    });
    $(".txtentermsgdetails").focus(function (e) {
      $(".btnSendMsgChat").css("background-color", "#1D4354");
    });
    $(".txtentermsgdetails").focusout(function (e) {
      $(".btnSendMsgChat").css("background-color", "#D9D9D9");
    });
    var code = "+91"; // Assigning value from model.
    $("#txtPhone").val(code);
    $("#txtPhone").intlTelInput({
      autoHideDialCode: true,
      autoPlaceholder: "ON",
      dropdownContainer: document.body,
      formatOnDisplay: true,
      hiddenInput: "full_number",
      initialCountry: "auto",
      nationalMode: true,
      placeholderNumberType: "MOBILE",
      preferredCountries: ["US"],
      separateDialCode: true,
    });

    $("#btnSubmit").on("click", function () {
      var code = $("#txtPhone").intlTelInput("getSelectedCountryData").dialCode;
      var phoneNumber = $("#txtPhone").val();
      var name = $("#txtPhone").intlTelInput("getSelectedCountryData").name;
      alert(
        "Country Code : " +
          code +
          "\nPhone Number : " +
          phoneNumber +
          "\nCountry Name : " +
          name
      );
    });

    $(".js-example-tokenizerSet").select2({
      tags: true,
      tokenSeparators: [",", " "],
    });
    // });
    document.querySelectorAll(".drop-zone__input").forEach((inputElement) => {
      const dropZoneElement = inputElement.closest(".drop-zone");

      dropZoneElement.addEventListener("click", (e) => {
        inputElement.click();
      });

      inputElement.addEventListener("change", (e) => {
        if (inputElement.files.length) {
          updateThumbnail(dropZoneElement, inputElement.files[0]);
        }
      });

      dropZoneElement.addEventListener("dragover", (e) => {
        e.preventDefault();
        dropZoneElement.classList.add("drop-zone--over");
      });

      ["dragleave", "dragend"].forEach((type) => {
        dropZoneElement.addEventListener(type, (e) => {
          dropZoneElement.classList.remove("drop-zone--over");
        });
      });

      dropZoneElement.addEventListener("drop", (e) => {
        e.preventDefault();

        if (e.dataTransfer.files.length) {
          inputElement.files = e.dataTransfer.files;
          updateThumbnail(dropZoneElement, e.dataTransfer.files[0]);
        }

        dropZoneElement.classList.remove("drop-zone--over");
      });
    });

    /**
     * Updates the thumbnail on a drop zone element.
     *
     * @param {HTMLElement} dropZoneElement
     * @param {File} file
     */
    function updateThumbnail(dropZoneElement, file) {
      let thumbnailElement = dropZoneElement.querySelector(".divsvgDragFiles");

      // First time - remove the prompt
      if (dropZoneElement.querySelector(".drop-zone__prompt")) {
        dropZoneElement.querySelector(".drop-zone__prompt").remove();
      }

      // First time - there is no thumbnail element, so lets create it
      if (!thumbnailElement) {
        thumbnailElement = document.createElement("div");
        thumbnailElement.classList.add("divsvgDragFiles");
        dropZoneElement.appendChild(thumbnailElement);
      }

      thumbnailElement.dataset.label = file.name;

      // Show thumbnail for image files
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();

        reader.readAsDataURL(file);
        reader.onload = () => {
          thumbnailElement.style.backgroundImage = `url('${reader.result}')`;
          $(".divsvgDragFiles .svgSmallImg").css("display", "none");
          $(".divsvgDragFiles").css("width", "15%");
          $(".divsvgDragFiles").css("background-size", "cover");
          $(".divsvgDragFilesSmall").css("padding-right", "100px");

          $(".backIconEditPhotos").css("visibility", "initial");
        };
      } else {
        thumbnailElement.style.backgroundImage = null;
      }
    }

    document
      .querySelectorAll(".drop-zone__inputPhotos")
      .forEach((inputElement) => {
        const dropZoneElementPhotos = inputElement.closest(".drop-zonePhotos");

        dropZoneElementPhotos.addEventListener("click", (e) => {
          inputElement.click();
        });

        inputElement.addEventListener("change", (e) => {
          console.log("in herere");
          if (inputElement.files.length) {
            updateThumbnailPhotos(dropZoneElementPhotos, inputElement.files[0]);
          }
        });

        dropZoneElementPhotos.addEventListener("dragover", (e) => {
          e.preventDefault();
          dropZoneElementPhotos.classList.add("drop-zone--overPhotos");
        });

        ["dragleave", "dragend"].forEach((type) => {
          dropZoneElementPhotos.addEventListener(type, (e) => {
            dropZoneElementPhotos.classList.remove("drop-zone--overPhotos");
          });
        });

        dropZoneElementPhotos.addEventListener("drop", (e) => {
          e.preventDefault();

          if (e.dataTransfer.files.length) {
            inputElement.files = e.dataTransfer.files;
            updateThumbnailPhotos(
              dropZoneElementPhotos,
              e.dataTransfer.files[0]
            );
          }

          dropZoneElementPhotos.classList.remove("drop-zone--overPhotos");
        });
      });

    /**
     * Updates the thumbnail on a drop zone element.
     *
     * @param {HTMLElement} dropZoneElement
     * @param {File} file
     */
    function updateThumbnailPhotos(dropZoneElementPhotos, file) {
      let thumbnailElementPhotos =
        dropZoneElementPhotos.querySelector(".NameFilePhotos");

      // First time - remove the prompt
      if (dropZoneElementPhotos.querySelector(".drop-zone__promptPhotos")) {
        // dropZoneElementPhotos.querySelector(".drop-zone__promptPhotos").remove();
      }

      // First time - there is no thumbnail element, so lets create it

      if (!thumbnailElementPhotos) {
        thumbnailElementPhotos = document.createElement("div");
        thumbnailElementPhotos.classList.add("NameFilePhotos");
        dropZoneElementPhotos.appendChild(thumbnailElementPhotos);
      }

      $(".NameFilePhotos").css("display", "flex");
      $(".NameFilePhotos").css("align-items", "center");

      $(".divsvgDragFilesPhotos svg path").css("fill", "#B9E2EB");

      $(".placeDragFilePhotos").css("width", "100%");
      $(".placeDragFilePhotos").css("text-align", "right");
      $(".placeDragFilePhotos").css("display", "flex");

      // var colorpath = $(".NameFilePhotos").css("background","red");
      $(".pNotetxtDescAddWorkPhotos").css("display", "none");
      $(".drop-zonePhotos .NameFilePhotos").css("background", "transparent");
      $(".drop-zonePhotos .NameFilePhotos").css("border", "transparent");
      thumbnailElementPhotos.dataset.label = file.name;
    }

    $(".search-lawyers-filter .country").select2({
      placeholder: "الدولة",
      allowClear: true,
    });
    $(".search-lawyers-filter .law").select2({
      placeholder: "نوع القانون",
      allowClear: true,
    });
    $(".search-lawyers-filter .specialization").select2({
      placeholder: "التخصص",
      allowClear: true,
    });
    $(".search-lawyers-filter .ShowSkills").select2({
      placeholder: "",
      allowClear: true,
    });
  };
export default functions;
