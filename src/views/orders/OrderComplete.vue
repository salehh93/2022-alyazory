<template>
  <!-- start content -->
  <div class="container">
    <div class="pagesLinks">
      <a href="index.html">الرئيسية/</a>
      <a href="MyOrders.html">الطلبات/</a>
      <a href="OrderComplete.html">قانوني،شرعي</a>
    </div>
    <h3 class="hTitle">تفاصيل الطلب</h3>

    <div class="contentOfferDetails">
      <div class="row">
        <div class="col-lg-8 col-md-7 col-12 colRightOfferDetails">
          <div class="divpTitleOfferDetails">
            <p class="pTitleOfferDetails pTitleOfferComplete">
              {{ order.title }}
            </p>
            <div class="backcompleteProject pbackcompleteProject">
              <p>مكتمل</p>
            </div>
          </div>
          <div>
            <div>
              <p class="TitleCompleteRate">تقييم العرض</p>
            </div>
            <div class="divRates">
              <p>الخبرة في مجال القانون</p>
              <div class="divStarts divStartsProfile">
                <div>
                  <i class="fas fa-star star"></i>
                </div>
                <div>
                  <i class="fas fa-star star"></i>
                </div>
                <div>
                  <i class="fas fa-star star"></i>
                </div>
                <div>
                  <i class="fas fa-star star"></i>
                </div>
                <div>
                  <i class="fas fa-star star"></i>
                </div>
                <p class="pStarts">5.00</p>
              </div>
            </div>
            <div class="divRates">
              <p>جودة العمل المسلّم</p>
              <div class="divStarts divStartsProfile">
                <div>
                  <i class="fas fa-star star"></i>
                </div>
                <div>
                  <i class="fas fa-star star"></i>
                </div>
                <div>
                  <i class="fas fa-star star"></i>
                </div>
                <div>
                  <i class="fas fa-star star"></i>
                </div>
                <div>
                  <i class="fas fa-star star"></i>
                </div>
                <p class="pStarts">5.00</p>
              </div>
            </div>
            <div class="divRates">
              <p>الإلتزام بالعمل</p>
              <div class="divStarts divStartsProfile">
                <div>
                  <i class="fas fa-star star"></i>
                </div>
                <div>
                  <i class="fas fa-star star"></i>
                </div>
                <div>
                  <i class="fas fa-star star"></i>
                </div>
                <div>
                  <i class="fas fa-star star"></i>
                </div>
                <div>
                  <i class="fas fa-star star"></i>
                </div>
                <p class="pStarts">5.00</p>
              </div>
            </div>
          </div>
          <div class="InfoClientComplete">
            <div class="flexInfoClient">
              <div class="imgProfile imgClientComplete">
                <img src="img/download.jpg" alt="" />
              </div>
              <div class="divNameClient">
                <div>
                  <a href="Entrepreneur.html">
                    <p class="NameClient">علي</p>
                  </a>
                </div>
                <div class="divIconClient">
                  <div class="divClockRate divClockRateClient">
                    <i class="fas fa-user"></i>
                    <label>صاحب المشروع</label>
                  </div>
                  <div class="divClockRate">
                    <i class="far fa-clock"></i>
                    <label>منذ 3 شهور</label>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p class="pFeedbackClient pFeedbackClientComplete">
                هذا النص هو مثال لنص يمكن أن يستبدل في المساحة هذا النص هو مثال
                لنص يمكن أن يستبدل في المساحة هذا النص هو مثال لنص يمكن أن
                يستبدل في المساحة
              </p>
            </div>
          </div>
          <div class="divDescOfferDetails">
            <p class="pTypeOfferDetails">قانوني نظامي</p>
            <p class="pTimeOfferDetails">نشر منذ 5 دقائق</p>
            <p class="pDescOfferDetails">
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
              هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو
              العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها
              التطبيق.<br />
              إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى
              زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء
              لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث
              يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم
              الموقع. ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم
              ليظهر للعميل الشكل كاملاً،دور مولد النص العربى أن يوفر على المصمم
              عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم
              فيظهر بشكل لا يليق.
            </p>
          </div>
          <div class="divSkillsOfferDetails">
            <p class="pSkillsOfferDetails">المهارات والخبرات</p>
            <div class="rowSkillsOfferDetails">
              <div>
                <button class="backSkills">
                  <p>تحليل</p>
                </button>
              </div>
              <div>
                <button class="backSkills">
                  <p>بحث قانوني</p>
                </button>
              </div>
              <div>
                <button class="backSkills">
                  <p>قانون موضعي</p>
                </button>
              </div>
              <div>
                <button class="backSkills">
                  <p>التواصل الشفهي</p>
                </button>
              </div>
            </div>
          </div>
          <div class="divFilesOfferDetails">
            <p class="pFilesOfferDetails">ملفات مرفقة</p>
            <div class="divlblFilesOfferDetials">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16.802"
                height="18"
                viewBox="0 0 16.802 18"
              >
                <g id="_x38_2_attachment" transform="translate(-2.001 -1)">
                  <path
                    id="Path_1875"
                    data-name="Path 1875"
                    d="M18.8,5.8A4.769,4.769,0,0,1,17.4,9.2l-8.647,8.75a3.6,3.6,0,1,1-5.095-5.089L9.9,6.644a2.361,2.361,0,0,1,3.324-.068,2.232,2.232,0,0,1,.649,1.663A2.443,2.443,0,0,1,13.153,9.9L7.225,15.826a.6.6,0,1,1-.849-.849L12.3,9.049a1.244,1.244,0,0,0,.371-.845,1.044,1.044,0,0,0-.3-.78,1.16,1.16,0,0,0-1.629.07L4.5,13.705A2.4,2.4,0,0,0,7.9,17.1l8.647-8.75a3.6,3.6,0,1,0-5.089-5.094L3.023,11.627a.6.6,0,0,1-.846-.852L10.609,2.4A4.8,4.8,0,0,1,18.8,5.8Z"
                    fill="#8e8e93"
                  />
                </g>
              </svg>
              <a href="#">
                <label class="lblFilesOfferDetails"
                  >هذا النص هو مثال لنص
                </label>
              </a>
            </div>
            <div class="divlblFilesOfferDetials">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16.802"
                height="18"
                viewBox="0 0 16.802 18"
              >
                <g id="_x38_2_attachment" transform="translate(-2.001 -1)">
                  <path
                    id="Path_1875"
                    data-name="Path 1875"
                    d="M18.8,5.8A4.769,4.769,0,0,1,17.4,9.2l-8.647,8.75a3.6,3.6,0,1,1-5.095-5.089L9.9,6.644a2.361,2.361,0,0,1,3.324-.068,2.232,2.232,0,0,1,.649,1.663A2.443,2.443,0,0,1,13.153,9.9L7.225,15.826a.6.6,0,1,1-.849-.849L12.3,9.049a1.244,1.244,0,0,0,.371-.845,1.044,1.044,0,0,0-.3-.78,1.16,1.16,0,0,0-1.629.07L4.5,13.705A2.4,2.4,0,0,0,7.9,17.1l8.647-8.75a3.6,3.6,0,1,0-5.089-5.094L3.023,11.627a.6.6,0,0,1-.846-.852L10.609,2.4A4.8,4.8,0,0,1,18.8,5.8Z"
                    fill="#8e8e93"
                  />
                </g>
              </svg>
              <a href="#">
                <label class="lblFilesOfferDetails"
                  >هذا النص هو مثال لنص
                </label>
              </a>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-5 col-12 colLeftOfferDetails">
          <div class="divBtnsOfferDetails">
            <a style="color: #fff">
              <button
                class="btnsOfferDetails btnsOfferDetailsAdd"
                style="width: 100%"
              >
                طلب مماثل
              </button>
            </a>
            <button class="btnsOfferDetails btnsOfferDetailsSave">
              حفظ الطلب
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15.464"
                height="14.07"
                viewBox="0 0 15.464 14.07"
              >
                <g id="heart" transform="translate(0.732 0.5)">
                  <g id="Group_195" data-name="Group 195">
                    <path
                      id="Path_100"
                      data-name="Path 100"
                      d="M12.855,18.119a3.825,3.825,0,0,0-5.607,0L7,18.38l-.247-.261a3.828,3.828,0,0,0-5.41-.2q-.1.1-.2.2a4.293,4.293,0,0,0,0,5.838l5.493,5.793a.5.5,0,0,0,.707.019l.019-.019,5.491-5.793A4.293,4.293,0,0,0,12.855,18.119Zm-.724,5.149h0L7,28.678l-5.13-5.41a3.281,3.281,0,0,1,0-4.461,2.828,2.828,0,0,1,4-.161q.084.077.161.161l.61.643a.515.515,0,0,0,.727,0l.61-.643a2.828,2.828,0,0,1,4-.161q.084.077.161.161A3.251,3.251,0,0,1,12.131,23.268Z"
                      transform="translate(0 -16.896)"
                      fill="#468995"
                      stroke="#468995"
                      stroke-width="1"
                    />
                  </g>
                </g>
              </svg>
            </button>
          </div>
          <div class="divInfoOfferDetails">
            <div class="divlblInfoOfferDetails">
              <div class="container">
                <div class="row">
                  <div class="col-6">
                    <label class="boldLblInfoDetails">حالة الطلب:</label>
                  </div>
                  <div class="col-6">
                    <label class="lblInfoDetails lblCompleteOffer">مكتمل</label>
                  </div>
                </div>
              </div>
            </div>
            <div class="divlblInfoOfferDetails">
              <div class="container">
                <div class="row">
                  <div class="col-6">
                    <label class="boldLblInfoDetails">الميزانية:</label>
                  </div>
                  <div class="col-6">
                    <label class="lblInfoDetails">150-560 ريال سعودي</label>
                  </div>
                </div>
              </div>
            </div>
            <div class="divlblInfoOfferDetails">
              <div class="container">
                <div class="row">
                  <div class="col-6">
                    <label class="boldLblInfoDetails">مدة التنفيذ:</label>
                  </div>
                  <div class="col-6">
                    <label class="lblInfoDetails">20 أيام</label>
                  </div>
                </div>
              </div>
            </div>
            <div class="divlblInfoOfferDetails">
              <div class="container">
                <div class="row">
                  <div class="col-6">
                    <label class="boldLblInfoDetails">بدأ تنفيذه منذ:</label>
                  </div>
                  <div class="col-6">
                    <label class="lblInfoDetails">13 يوم و 3 ساعات</label>
                  </div>
                </div>
              </div>
            </div>
            <div class="divlblInfoOfferDetails">
              <div class="container">
                <div class="row">
                  <div class="col-6">
                    <label class="boldLblInfoDetails">تاريخ الصفقة:</label>
                  </div>
                  <div class="col-6">
                    <label class="lblInfoDetails">16/12/2021</label>
                  </div>
                </div>
              </div>
            </div>
            <div class="divlblInfoOfferDetails">
              <div class="container">
                <div class="row">
                  <div class="col-6">
                    <label class="boldLblInfoDetails">موعد التسليم:</label>
                  </div>
                  <div class="col-6">
                    <label class="lblInfoDetails">23/12/2021</label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="divInfoLawyerOfferDetails divLawOfferDetails">
            <p class="pTitledivInfoOffers">المحامي</p>
            <div class="flexInfoClient">
              <div class="imgProfileOffer imgProfileClientOffer">
                <div class="relaIconVerfiyOffer">
                  <img src="img/lawyer.png" alt="" />
                </div>
                <div class="absoIconVerfiyOffer">
                  <svg
                    id="tick-mark"
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                  >
                    <path
                      id="Path_1914"
                      data-name="Path 1914"
                      d="M12.306,4.012a1.607,1.607,0,0,0-.252-1.857l-.209-.209a1.552,1.552,0,0,0-1.857-.252,1.252,1.252,0,0,1-1.364-.566A1.49,1.49,0,0,0,7.143,0l-.36.018A1.556,1.556,0,0,0,5.306,1.573c.028.359-.588.625-.946.392a1.572,1.572,0,0,0-2.224,0l-.172.172a1.591,1.591,0,0,0-.225,1.94.95.95,0,0,1-.4,1.269A1.606,1.606,0,0,0,0,6.882v.26A1.613,1.613,0,0,0,1.167,8.619c.671.238.618,1.223.55,1.341a1.573,1.573,0,0,0,.247,1.9l.172.172a1.607,1.607,0,0,0,1.894.253,1.141,1.141,0,0,1,1.329.551A1.519,1.519,0,0,0,6.878,14H7.1a1.593,1.593,0,0,0,1.518-1.112,1.09,1.09,0,0,1,1.42-.578,1.689,1.689,0,0,0,1.839-.29l.157-.157a1.572,1.572,0,0,0,0-2.224c-.276-.25.079-.941.392-.946A1.573,1.573,0,0,0,14,7.122V6.853a1.534,1.534,0,0,0-1.156-1.517C12.39,5.236,12.159,4.319,12.306,4.012Z"
                      transform="translate(0)"
                      fill="#1bc703"
                    />
                    <path
                      id="Path_1915"
                      data-name="Path 1915"
                      d="M137.215,172.25l-1.825-1.825a.56.56,0,0,1,.792-.792l1.429,1.429,3.087-3.087a.56.56,0,0,1,.792.792l-3.482,3.483A.64.64,0,0,1,137.215,172.25Z"
                      transform="translate(-131.439 -163.113)"
                      fill="#fff"
                    />
                  </svg>
                </div>
              </div>
              <div class="divNameClient">
                <div>
                  <a href="profile_lawyer.html">
                    <p class="NameClientOffer">محمد عيد</p>
                  </a>
                </div>
                <div class="divIconClient">
                  <div class="divClockRateClient">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="10"
                      viewBox="0 0 12 10"
                    >
                      <g id="suitcase" transform="translate(0 -2)">
                        <path
                          id="Path_1933"
                          data-name="Path 1933"
                          d="M11.5,4.25a.5.5,0,0,1-.5-.5V3H9v.75a.5.5,0,1,1-1,0V3A1,1,0,0,1,9,2h2a1,1,0,0,1,1,1v.75A.5.5,0,0,1,11.5,4.25Z"
                          transform="translate(-4)"
                          fill="#a2a2a6"
                        />
                        <path
                          id="Path_1934"
                          data-name="Path 1934"
                          d="M6.355,13.5A1.03,1.03,0,0,1,6,13.56a1.1,1.1,0,0,1-.385-.07L0,11.62v3.815A1.374,1.374,0,0,0,1.375,16.81h9.25A1.374,1.374,0,0,0,12,15.435V11.62Z"
                          transform="translate(0 -4.81)"
                          fill="#a2a2a6"
                        />
                        <path
                          id="Path_1935"
                          data-name="Path 1935"
                          d="M12,6.375V7.52L6.12,9.48a.37.37,0,0,1-.24,0L0,7.52V6.375A1.374,1.374,0,0,1,1.375,5h9.25A1.374,1.374,0,0,1,12,6.375Z"
                          transform="translate(0 -1.5)"
                          fill="#a2a2a6"
                        />
                      </g>
                    </svg>
                    <label class="lblInfoPosiOffers">خدمات استشارية</label>
                  </div>
                  <div class="divClockRate">
                    <i class="far fa-clock"></i>
                    <label>منذ 4 أيام و 6 ساعات</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="contentAddOffer">
      <div class="headAddOffer">
        <p class="titleHeadAddOffer">نقاش الطلب</p>
      </div>
      <div class="bodyChatOffer">
        <div class="divMsgChatOffer divMsgChatOfferFirst">
          <div class="msgChatOfferDetails">
            <div class="flexInfoClient">
              <div class="imgProfile imgProfileChatOffer imgNofi">
                <img src="img/download.jpg" alt="" />
              </div>
              <div class="divNameClient">
                <div>
                  <a href="Entrepreneur.html">
                    <p class="NameClientOffer">علي</p>
                  </a>
                </div>
                <div class="divIconClient">
                  <div class="divClockOfferDetails">
                    <i class="far fa-clock"></i>
                    <label>منذ 3 أيام و6 ساعات</label>
                  </div>
                </div>
              </div>
            </div>
            <p class="pDescChatOffer">
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
              هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو
              العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها
              التطبيق.
            </p>
          </div>
        </div>
        <div class="divMsgChatOffer">
          <div class="msgChatOfferDetails">
            <div class="flexInfoClient">
              <div class="imgProfile imgProfileChatOffer imgNofi">
                <img src="img/lawyer.png" alt="" />
              </div>
              <div class="divNameClient">
                <div>
                  <a href="profile_lawyer.html">
                    <p class="NameClientOffer">محمد عيد</p>
                  </a>
                </div>
                <div class="divIconClient">
                  <div class="divClockOfferDetails">
                    <i class="far fa-clock"></i>
                    <label>منذ 3 أيام و6 ساعات</label>
                  </div>
                </div>
              </div>
            </div>
            <p class="pDescChatOffer">
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
              هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو
              العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها
              التطبيق.
            </p>
          </div>
        </div>
        <div class="divMsgChatOffer">
          <div class="msgChatOfferDetails">
            <div class="flexInfoClient">
              <div class="imgProfile imgProfileChatOffer imgNofi">
                <img src="img/download.jpg" alt="" />
              </div>
              <div class="divNameClient">
                <div>
                  <a href="Entrepreneur.html">
                    <p class="NameClientOffer">علي</p>
                  </a>
                </div>
                <div class="divIconClient">
                  <div class="divClockOfferDetails">
                    <i class="far fa-clock"></i>
                    <label>منذ 3 أيام و6 ساعات</label>
                  </div>
                </div>
              </div>
            </div>
            <p class="pDescChatOffer">
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
              هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو
              العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها
              التطبيق.
            </p>
          </div>
        </div>
        <div class="divOfferDetails divOfferDetailsChat">
          <div class="textareaDescriptionOfferDetails">
            <textarea class="contentScroll"> </textarea>
            <div class="browseFileDetails">
              <label class="filelabel">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16.802"
                  height="18"
                  viewBox="0 0 16.802 18"
                >
                  <g id="_x38_2_attachment" transform="translate(-2.001 -1)">
                    <path
                      id="Path_1875"
                      data-name="Path 1875"
                      d="M18.8,5.8A4.769,4.769,0,0,1,17.4,9.2l-8.647,8.75a3.6,3.6,0,1,1-5.095-5.089L9.9,6.644a2.361,2.361,0,0,1,3.324-.068,2.232,2.232,0,0,1,.649,1.663A2.443,2.443,0,0,1,13.153,9.9L7.225,15.826a.6.6,0,1,1-.849-.849L12.3,9.049a1.244,1.244,0,0,0,.371-.845,1.044,1.044,0,0,0-.3-.78,1.16,1.16,0,0,0-1.629.07L4.5,13.705A2.4,2.4,0,0,0,7.9,17.1l8.647-8.75a3.6,3.6,0,1,0-5.089-5.094L3.023,11.627a.6.6,0,0,1-.846-.852L10.609,2.4A4.8,4.8,0,0,1,18.8,5.8Z"
                      fill="#8e8e93"
                    />
                  </g>
                </svg>
                <input
                  class="FileUpload1"
                  id="FileInput"
                  name="booking_attachment"
                  type="file"
                />
              </label>
            </div>
          </div>
          <div class="divbtnAddOffer">
            <button class="btnAddOffer">ارسال</button>
          </div>
        </div>
      </div>
    </div>
    <div class="contentAddOffer" id="SecContentAddOffer">
      <div class="headAddOffer headProposalOffes">
        <p class="titleHeadAddOffer">العروض المقدمة</p>
        <button class="btnddlistOffices btnToggleOffers">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="10"
            viewBox="0 0 15 10"
          >
            <g id="play" transform="translate(15) rotate(90)">
              <g
                id="Group_180"
                data-name="Group 180"
                transform="translate(0 0)"
              >
                <path
                  id="Path_99"
                  data-name="Path 99"
                  d="M9.263,6.107,1.867.4A1.683,1.683,0,0,0,.9,0C.342,0,0,.5,0,1.337V13.665C0,14.5.342,15,.893,15a1.67,1.67,0,0,0,.967-.4l7.4-5.7A1.759,1.759,0,0,0,10,7.5,1.753,1.753,0,0,0,9.263,6.107Z"
                  transform="translate(0 0)"
                  fill="#c5c5c5"
                />
              </g>
            </g>
          </svg>
        </button>
      </div>
      <div class="bodyWaitOffer">
        <div class="row">
          <div class="col-lg-10 col-md-8 col-12">
            <div class="flexInfoClient divcontentOffice">
              <div class="imgProfile imgProfileClient imgNofi">
                <img src="img/lawyer.png" alt="" />
                <div class="absoIconVerfiyOffice">
                  <svg
                    id="tick-mark"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                  >
                    <path
                      id="Path_1914"
                      data-name="Path 1914"
                      d="M17.58,5.731a2.3,2.3,0,0,0-.359-2.653l-.3-.3a2.217,2.217,0,0,0-2.653-.359,1.789,1.789,0,0,1-1.949-.809A2.128,2.128,0,0,0,10.2,0L9.69.026a2.223,2.223,0,0,0-2.11,2.22c.04.514-.84.894-1.351.559a2.246,2.246,0,0,0-3.177,0l-.246.246a2.273,2.273,0,0,0-.321,2.772,1.357,1.357,0,0,1-.575,1.813A2.3,2.3,0,0,0,0,9.832V10.2a2.3,2.3,0,0,0,1.668,2.109c.959.34.883,1.747.785,1.916a2.247,2.247,0,0,0,.353,2.719l.246.246a2.3,2.3,0,0,0,2.706.361,1.63,1.63,0,0,1,1.9.787A2.171,2.171,0,0,0,9.826,20h.32a2.275,2.275,0,0,0,2.169-1.588,1.558,1.558,0,0,1,2.028-.826,2.413,2.413,0,0,0,2.627-.414l.224-.224a2.246,2.246,0,0,0,0-3.177c-.394-.358.113-1.344.559-1.351A2.246,2.246,0,0,0,20,10.174V9.789a2.191,2.191,0,0,0-1.651-2.167C17.7,7.48,17.37,6.17,17.58,5.731Z"
                      transform="translate(0)"
                      fill="#1bc703"
                    ></path>
                    <path
                      id="Path_1915"
                      data-name="Path 1915"
                      d="M138.067,174.152l-2.607-2.607a.8.8,0,0,1,1.131-1.131l2.041,2.041,4.409-4.409a.8.8,0,0,1,1.131,1.131l-4.975,4.975A.914.914,0,0,1,138.067,174.152Z"
                      transform="translate(-129.817 -161.099)"
                      fill="#fff"
                    ></path>
                  </svg>
                </div>
              </div>
              <div class="divNameClient">
                <div class="flexHeadNameOffice">
                  <a href="profile_Office.html">
                    <p class="pNameflexHeadNameOffice pNametoggleOffers">
                      مكتب فرسان العدالة
                    </p>
                  </a>
                  <div class="divStarts divStartsProfile">
                    <div>
                      <i class="fas fa-star star"></i>
                    </div>
                    <div>
                      <i class="fas fa-star star"></i>
                    </div>
                    <div>
                      <i class="fas fa-star star"></i>
                    </div>
                    <div>
                      <i class="fas fa-star star"></i>
                    </div>
                    <div>
                      <i class="fas fa-star star"></i>
                    </div>
                  </div>
                </div>
                <div class="divIconClient divIconOffices">
                  <div class="divClockRateClient">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="13.333"
                      viewBox="0 0 16 13.333"
                    >
                      <g id="suitcase" transform="translate(0 -2)">
                        <path
                          id="Path_1933"
                          data-name="Path 1933"
                          d="M12.667,5A.667.667,0,0,1,12,4.333v-1H9.333v1A.667.667,0,1,1,8,4.333v-1A1.335,1.335,0,0,1,9.333,2H12a1.335,1.335,0,0,1,1.333,1.333v1A.667.667,0,0,1,12.667,5Z"
                          transform="translate(-2.667)"
                          fill="#8e8e93"
                        ></path>
                        <path
                          id="Path_1934"
                          data-name="Path 1934"
                          d="M8.473,14.127a1.374,1.374,0,0,1-.473.08,1.461,1.461,0,0,1-.513-.093L0,11.62v5.087A1.832,1.832,0,0,0,1.833,18.54H14.167A1.832,1.832,0,0,0,16,16.707V11.62Z"
                          transform="translate(0 -3.207)"
                          fill="#8e8e93"
                        ></path>
                        <path
                          id="Path_1935"
                          data-name="Path 1935"
                          d="M16,6.833V8.36L8.16,10.973a.493.493,0,0,1-.32,0L0,8.36V6.833A1.832,1.832,0,0,1,1.833,5H14.167A1.832,1.832,0,0,1,16,6.833Z"
                          transform="translate(0 -1)"
                          fill="#8e8e93"
                        ></path>
                      </g>
                    </svg>

                    <label class="lblInfoOffices">خدمات استشارية</label>
                  </div>
                  <div class="divClockRate">
                    <i class="far fa-clock"></i>
                    <label>منذ 4 أيام و 6 ساعات</label>
                  </div>
                </div>
                <div>
                  <p class="txtLastNoti">
                    هذا النص هو مثال لنص يمكن أن يستبدل في المساحةهذا النص هو
                    مثال لنص يمكن أن يستبدل في المساحة
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-2 col-md-8 col-12 colddlistOffices">
            <button class="switchPublic">توظيف</button>
            <div class="divcolddlistOffices">
              <button class="btnddlistOffices btnToggleProposal">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="10"
                  viewBox="0 0 15 10"
                >
                  <g id="play" transform="translate(15) rotate(90)">
                    <g
                      id="Group_180"
                      data-name="Group 180"
                      transform="translate(0 0)"
                    >
                      <path
                        id="Path_99"
                        data-name="Path 99"
                        d="M9.263,6.107,1.867.4A1.683,1.683,0,0,0,.9,0C.342,0,0,.5,0,1.337V13.665C0,14.5.342,15,.893,15a1.67,1.67,0,0,0,.967-.4l7.4-5.7A1.759,1.759,0,0,0,10,7.5,1.753,1.753,0,0,0,9.263,6.107Z"
                        transform="translate(0 0)"
                        fill="#c5c5c5"
                      ></path>
                    </g>
                  </g>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <hr />
        <div class="lawProposal">
          <div class="backInfoChatOffer">
            <div class="row">
              <div class="col-lg-4 col-md-3 col-12">
                <div>
                  <p class="pbackInfoChatOffer">الميزانية:</p>
                  <p class="numbackInfoChatOffer">15 ريال سعودي</p>
                </div>
              </div>
              <div class="col-lg-4 col-md-3 col-12 colDayChatOffer">
                <div>
                  <p class="pbackInfoChatOffer">مدة التنفيذ:</p>
                  <p class="numbackInfoChatOffer">3 أيام</p>
                </div>
              </div>
              <div class="col-lg-4 col-md-3 col-12 colPortfolioChatOffer">
                <div>
                  <p class="pbackInfoChatOffer">معرض أعمالك:</p>
                  <p class="numbackInfoChatOffer">16</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p class="pDescChatofferDetails pDescWaitDetails">
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
              هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو
              العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها
              التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص
              العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي
              أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص،
              حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم
              الموقع. ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم
              ليظهر للعميل الشكل كاملاً،دور مولد النص العربى أن يوفر على المصمم
              عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم
              فيظهر بشكل لا يليق. هذا النص يمكن أن يتم تركيبه على أي تصميم دون
              مشكلة فلن يبدو وكأنه نص منسوخ، غير منظم، غير منسق، أو حتى غير
              مفهوم. لأنه مازال نصاً بديلاً ومؤقتاً. هذا النص هو مثال لنص يمكن
              أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص
              العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى
              إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى
              عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما
              تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى
              مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من
              الأحيان أن يطلع على صورة حقيقية لتصميم الموقع. ومن هنا وجب على
              المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل
              كاملاً،دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص
              بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا
              يليق. هذا النص يمكن أن يتم تركيبه على أي تصميم دون مشكلة فلن يبدو
              وكأنه نص منسوخ، غير منظم، غير منسق، أو حتى غير مفهوم. لأنه مازال
              نصاً بديلاً ومؤقتاً.
            </p>
          </div>
        </div>
        <hr />
        <div class="row">
          <div class="col-lg-10 col-md-8 col-12">
            <div class="flexInfoClient divcontentOffice">
              <div class="imgProfile imgProfileClient imgNofi">
                <img src="img/lawyer.png" alt="" />
                <div class="absoIconVerfiyOffice">
                  <svg
                    id="tick-mark"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                  >
                    <path
                      id="Path_1914"
                      data-name="Path 1914"
                      d="M17.58,5.731a2.3,2.3,0,0,0-.359-2.653l-.3-.3a2.217,2.217,0,0,0-2.653-.359,1.789,1.789,0,0,1-1.949-.809A2.128,2.128,0,0,0,10.2,0L9.69.026a2.223,2.223,0,0,0-2.11,2.22c.04.514-.84.894-1.351.559a2.246,2.246,0,0,0-3.177,0l-.246.246a2.273,2.273,0,0,0-.321,2.772,1.357,1.357,0,0,1-.575,1.813A2.3,2.3,0,0,0,0,9.832V10.2a2.3,2.3,0,0,0,1.668,2.109c.959.34.883,1.747.785,1.916a2.247,2.247,0,0,0,.353,2.719l.246.246a2.3,2.3,0,0,0,2.706.361,1.63,1.63,0,0,1,1.9.787A2.171,2.171,0,0,0,9.826,20h.32a2.275,2.275,0,0,0,2.169-1.588,1.558,1.558,0,0,1,2.028-.826,2.413,2.413,0,0,0,2.627-.414l.224-.224a2.246,2.246,0,0,0,0-3.177c-.394-.358.113-1.344.559-1.351A2.246,2.246,0,0,0,20,10.174V9.789a2.191,2.191,0,0,0-1.651-2.167C17.7,7.48,17.37,6.17,17.58,5.731Z"
                      transform="translate(0)"
                      fill="#1bc703"
                    ></path>
                    <path
                      id="Path_1915"
                      data-name="Path 1915"
                      d="M138.067,174.152l-2.607-2.607a.8.8,0,0,1,1.131-1.131l2.041,2.041,4.409-4.409a.8.8,0,0,1,1.131,1.131l-4.975,4.975A.914.914,0,0,1,138.067,174.152Z"
                      transform="translate(-129.817 -161.099)"
                      fill="#fff"
                    ></path>
                  </svg>
                </div>
              </div>
              <div class="divNameClient">
                <div class="flexHeadNameOffice">
                  <a href="profile_Office.html">
                    <p class="pNameflexHeadNameOffice pNametoggleOffers">
                      مكتب فرسان العدالة
                    </p>
                  </a>
                  <div class="divStarts divStartsProfile">
                    <div>
                      <i class="fas fa-star star"></i>
                    </div>
                    <div>
                      <i class="fas fa-star star"></i>
                    </div>
                    <div>
                      <i class="fas fa-star star"></i>
                    </div>
                    <div>
                      <i class="fas fa-star star"></i>
                    </div>
                    <div>
                      <i class="fas fa-star star"></i>
                    </div>
                  </div>
                </div>
                <div class="divIconClient divIconOffices">
                  <div class="divClockRateClient">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="13.333"
                      viewBox="0 0 16 13.333"
                    >
                      <g id="suitcase" transform="translate(0 -2)">
                        <path
                          id="Path_1933"
                          data-name="Path 1933"
                          d="M12.667,5A.667.667,0,0,1,12,4.333v-1H9.333v1A.667.667,0,1,1,8,4.333v-1A1.335,1.335,0,0,1,9.333,2H12a1.335,1.335,0,0,1,1.333,1.333v1A.667.667,0,0,1,12.667,5Z"
                          transform="translate(-2.667)"
                          fill="#8e8e93"
                        ></path>
                        <path
                          id="Path_1934"
                          data-name="Path 1934"
                          d="M8.473,14.127a1.374,1.374,0,0,1-.473.08,1.461,1.461,0,0,1-.513-.093L0,11.62v5.087A1.832,1.832,0,0,0,1.833,18.54H14.167A1.832,1.832,0,0,0,16,16.707V11.62Z"
                          transform="translate(0 -3.207)"
                          fill="#8e8e93"
                        ></path>
                        <path
                          id="Path_1935"
                          data-name="Path 1935"
                          d="M16,6.833V8.36L8.16,10.973a.493.493,0,0,1-.32,0L0,8.36V6.833A1.832,1.832,0,0,1,1.833,5H14.167A1.832,1.832,0,0,1,16,6.833Z"
                          transform="translate(0 -1)"
                          fill="#8e8e93"
                        ></path>
                      </g>
                    </svg>

                    <label class="lblInfoOffices">خدمات استشارية</label>
                  </div>
                  <div class="divClockRate">
                    <i class="far fa-clock"></i>
                    <label>منذ 4 أيام و 6 ساعات</label>
                  </div>
                </div>
                <div>
                  <p class="txtLastNoti">
                    هذا النص هو مثال لنص يمكن أن يستبدل في المساحةهذا النص هو
                    مثال لنص يمكن أن يستبدل في المساحة
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-2 col-md-8 col-12 colddlistOffices">
            <button class="switchPublic">توظيف</button>
            <div class="divcolddlistOffices">
              <button class="btnddlistOffices btnToggleProposal">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="10"
                  viewBox="0 0 15 10"
                >
                  <g id="play" transform="translate(15) rotate(90)">
                    <g
                      id="Group_180"
                      data-name="Group 180"
                      transform="translate(0 0)"
                    >
                      <path
                        id="Path_99"
                        data-name="Path 99"
                        d="M9.263,6.107,1.867.4A1.683,1.683,0,0,0,.9,0C.342,0,0,.5,0,1.337V13.665C0,14.5.342,15,.893,15a1.67,1.67,0,0,0,.967-.4l7.4-5.7A1.759,1.759,0,0,0,10,7.5,1.753,1.753,0,0,0,9.263,6.107Z"
                        transform="translate(0 0)"
                        fill="#c5c5c5"
                      ></path>
                    </g>
                  </g>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <hr />
        <div class="lawProposal">
          <div class="backInfoChatOffer">
            <div class="row">
              <div class="col-lg-4 col-md-3 col-12">
                <div>
                  <p class="pbackInfoChatOffer">الميزانية:</p>
                  <p class="numbackInfoChatOffer">15 ريال سعودي</p>
                </div>
              </div>
              <div class="col-lg-4 col-md-3 col-12 colDayChatOffer">
                <div>
                  <p class="pbackInfoChatOffer">مدة التنفيذ:</p>
                  <p class="numbackInfoChatOffer">3 أيام</p>
                </div>
              </div>
              <div class="col-lg-4 col-md-3 col-12 colPortfolioChatOffer">
                <div>
                  <p class="pbackInfoChatOffer">معرض أعمالك:</p>
                  <p class="numbackInfoChatOffer">16</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p class="pDescChatofferDetails pDescWaitDetails">
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
              هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو
              العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها
              التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص
              العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي
              أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص،
              حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم
              الموقع. ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم
              ليظهر للعميل الشكل كاملاً،دور مولد النص العربى أن يوفر على المصمم
              عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم
              فيظهر بشكل لا يليق. هذا النص يمكن أن يتم تركيبه على أي تصميم دون
              مشكلة فلن يبدو وكأنه نص منسوخ، غير منظم، غير منسق، أو حتى غير
              مفهوم. لأنه مازال نصاً بديلاً ومؤقتاً. هذا النص هو مثال لنص يمكن
              أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص
              العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى
              إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى
              عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما
              تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى
              مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من
              الأحيان أن يطلع على صورة حقيقية لتصميم الموقع. ومن هنا وجب على
              المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل
              كاملاً،دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص
              بديل لا علاقة له بالموضوع الذى يتحدث عنه التصميم فيظهر بشكل لا
              يليق. هذا النص يمكن أن يتم تركيبه على أي تصميم دون مشكلة فلن يبدو
              وكأنه نص منسوخ، غير منظم، غير منسق، أو حتى غير مفهوم. لأنه مازال
              نصاً بديلاً ومؤقتاً.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- end content -->
</template>

<script>
export default {
  data() {
    return {
      order: {},
      skills: [],
      files: [],
    };
  },
  mounted() {
    this.$http
      .get(`api/auth/client/requets/${this.$route.params.id}`)
      .then((res) => {
        this.order = Object.assign({}, res.data.data.request);
        this.skills = Object.assign({}, res.data.data.skills);
        this.files = Object.assign({}, res.data.data.clientFileRequests);
      });
  },
};
</script>
