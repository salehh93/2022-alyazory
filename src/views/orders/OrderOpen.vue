<template>
  <div>
    <!-- aleart add to favorite -->
    <div class="alert alert-dismissible fade show alertadd" role="alert">
      <strong>تمت الإضافة بنجاح!</strong> لديك طلب جديد في قائمة المفضلة
      <button
        type="button"
        class="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">×</span>
      </button>
    </div>
    <!-- start content -->
    <div class="container">
      <div class="pagesLinks">
        <p style="display: inline-block">
          <router-link to="/">الرئيسية/</router-link>
          <router-link to="/my-orders"> الطلبات/</router-link>
          {{ specialties.length ? specialties[0].name : "" }}
        </p>
      </div>
      <h3 class="hTitle">تفاصيل الطلب</h3>

      <div class="contentOfferDetails">
        <div class="row">
          <div class="col-lg-8 col-md-7 col-12 colRightOfferDetails">
            <div class="divpTitleOfferDetails">
              <p class="pTitleOfferDetails">
                {{ order.title }}
              </p>
              <div
                v-if="order.status === 'complete'"
                class="backcompleteProject pbackcompleteProject"
              >
                <p>مكتمل</p>
              </div>
            </div>
            <!-- TODO: fix this -->
            <div v-if="order.status === 'complete'">
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
            <!-- TODO: fix this -->
            <div v-if="order.status === 'complete'" class="InfoClientComplete">
              <div class="flexInfoClient">
                <div class="imgProfile imgClientComplete">
                  <img
                    :src="
                      (typeof hiredOffer.lawyer_img === 'string' &&
                        hiredOffer.lawyer_img) ||
                      require(`@/assets/img/lawyer.png`)
                    "
                    alt=""
                  />
                </div>
                <div class="divNameClient">
                  <div>
                    <a href="Entrepreneur.html">
                      <p class="NameClient">{{ hiredOffer.lawyer }}</p>
                    </a>
                  </div>
                  <div class="divIconClient">
                    <div class="divClockRate divClockRateClient">
                      <i class="fas fa-user" style="margin-left: 6px"></i>
                      <label>{{ hiredOffer.Speciality || "__" }}</label>
                    </div>
                    <div class="divClockRate">
                      <i class="far fa-clock" style="margin-left: 6px"></i>
                      <label
                        >منذ {{ hiredOffer.created_at | getNumberOfDays }}</label
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <p class="pFeedbackClient pFeedbackClientComplete">
                  {{ hiredOffer.description }}
                </p>
              </div>
            </div>
            <div class="divDescOfferDetails">
              <p class="pTypeOfferDetails">
                {{ specialties.length ? specialties[0].name : "" }}
              </p>
              <p class="pTimeOfferDetails">
                نشر منذ {{ order.created_at | formatDuration }}
              </p>
              <p class="pDescOfferDetails">
                {{ order.description }}
              </p>
            </div>
            <div class="divSkillsOfferDetails">
              <p class="pSkillsOfferDetails">المهارات والخبرات</p>
              <div class="rowSkillsOfferDetails">
                <div v-for="(skill, i) in skills" :key="i">
                  <button class="backSkills">
                    <p>{{ skill.name }}</p>
                  </button>
                </div>
              </div>
            </div>
            <div class="divFilesOfferDetails">
              <p class="pFilesOfferDetails">ملفات مرفقة</p>
              <div
                v-for="(file, i) in files"
                :key="file.id"
                class="divlblFilesOfferDetials"
              >
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
                <a :href="file.file" target="_blank">
                  <label class="lblFilesOfferDetails" style="cursor: pointer"
                    >الملف {{ Number(i) + 1 }}
                  </label>
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-5 col-12 colLeftOfferDetails">
            <div class="divBtnsOfferDetails">
              <button
                ref="toggleSimilarOrderModal"
                class="btnsOfferDetails btnsOfferDetailsAdd"
                style="width: 100%"
                data-toggle="modal"
                data-target="#EditLangmod"
                @click="setNewOrder"
              >
                طلب مماثل
              </button>
              <button
                class="btnsOfferDetails btnsOfferDetailsSave"
                :style="{
                  background: order.is_favorite ? '#f1f2f4' : '',
                  border: order.is_favorite ? 'none' : '',
                }"
                @click="saveToFavorites"
              >
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
                      <label class="lblInfoDetails lblInfoDetailsAccept">{{
                        order.status | translateStatus
                      }}</label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="divlblInfoOfferDetails">
                <div class="container">
                  <div class="row">
                    <div class="col-6">
                      <label class="boldLblInfoDetails">الميزانية</label>
                    </div>
                    <div class="col-6">
                      <label class="lblInfoDetails"
                        >{{ !isNil(order.budget) ? order.budget : "__" }} ريال
                        سعودي</label
                      >
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
                      <label class="lblInfoDetails"
                        >{{
                          order.status === "underway" && hiredOffer
                            ? hiredOffer.delivery_date
                            : !isNil(order.delivery_time_form)
                            ? order.delivery_time_form
                            : "__"
                        }}
                        أيام</label
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div
                v-if="['closed', 'open'].includes(order.status)"
                class="divlblInfoOfferDetails"
              >
                <div class="container">
                  <div class="row">
                    <div class="col-6">
                      <label class="boldLblInfoDetails">متوسط العروض:</label>
                    </div>
                    <div class="col-6">
                      <label class="lblInfoDetails"
                        >{{ !isNil(order.avg) ? order.avg : "0" }} ريال
                        سعودي</label
                      >
                    </div>
                  </div>
                </div>
              </div>
              <div
                v-if="['closed', 'open'].includes(order.status)"
                class="divlblInfoOfferDetails"
              >
                <div class="container">
                  <div class="row">
                    <div class="col-6">
                      <label class="boldLblInfoDetails">عدد العروض:</label>
                    </div>
                    <div class="col-6">
                      <label class="lblInfoDetails">{{ order.count }}</label>
                    </div>
                  </div>
                </div>
              </div>
              <div
                v-if="['underway', 'complete'].includes(order.status)"
                class="divlblInfoOfferDetails"
              >
                <div class="container">
                  <div class="row">
                    <div class="col-6">
                      <label class="boldLblInfoDetails">بدأ تنفيذه منذ:</label>
                    </div>
                    <div class="col-6">
                      <label class="lblInfoDetails">{{
                        hiredOffer.employed_date | formatDuration
                      }}</label>
                    </div>
                  </div>
                </div>
              </div>
              <div
                v-if="['underway', 'complete'].includes(order.status)"
                class="divlblInfoOfferDetails"
              >
                <div class="container">
                  <div class="row">
                    <div class="col-6">
                      <label class="boldLblInfoDetails">تاريخ الصفقة:</label>
                    </div>
                    <div class="col-6">
                      <label class="lblInfoDetails">{{
                        hiredOffer.employed_date | formatDate
                      }}</label>
                    </div>
                  </div>
                </div>
              </div>
              <div
                v-if="['underway', 'complete'].includes(order.status)"
                class="divlblInfoOfferDetails"
              >
                <div class="container">
                  <div class="row">
                    <div class="col-6">
                      <label class="boldLblInfoDetails">موعد التسليم:</label>
                    </div>
                    <div class="col-6">
                      <label class="lblInfoDetails">{{
                        addDays(
                          new Date(hiredOffer.employed_date),
                          hiredOffer.delivery_date
                        ) | formatDate
                      }}</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="divLinkShowOffer">
              <p class="pTitledivLinkOffers">رابط الطلب</p>
              <div class="divtxtinputShowLink">
                <input
                  id="txtLinkOfferDetails"
                  type="text"
                  class="txtinputShowLink"
                  value="www.rewwad/job/sdcsdcfsdfcsdfsadfasdvdfxx"
                />
              </div>
              <p
                class="copyOfferDetails"
                style="cursor: pointer"
                @click="
                  () => copyFunc('www.rewwad/job/sdcsdcfsdfcsdfsadfasdvdfxx')
                "
              >
                نسخ الرابط
              </p>
              <div class="divIconSocialOfferDetails">
                <a href="#">
                  <div class="backSocialIconsOfferDetails">
                    <svg
                      id="Group_157"
                      data-name="Group 157"
                      xmlns="http://www.w3.org/2000/svg"
                      width="8.271"
                      height="16.25"
                      viewBox="0 0 8.271 16.25"
                    >
                      <path
                        id="Path_86"
                        data-name="Path 86"
                        d="M131.666,5.8h-2.976V4.354s-.167-1.379.8-1.379h1.96V0h-3.338a2.726,2.726,0,0,0-2.793,2.793c0,.6,0,1.7-.007,3.011h-1.916V8.2h1.911c-.011,3.808-.024,8.051-.024,8.051h3.409V8.2h2.25Z"
                        transform="translate(-123.395 0)"
                        fill="#00586b"
                      />
                    </svg>
                  </div>
                </a>
                <a href="#">
                  <div class="backSocialIconsOfferDetails">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="12.188"
                      viewBox="0 0 15 12.188"
                    >
                      <path
                        id="twitter_1_"
                        data-name="twitter (1)"
                        d="M13.459,5.289A6.138,6.138,0,0,0,15,3.693h0a6.422,6.422,0,0,1-1.772.486,3.059,3.059,0,0,0,1.353-1.7,6.153,6.153,0,0,1-1.95.744,3.075,3.075,0,0,0-5.319,2.1,3.166,3.166,0,0,0,.071.7A8.706,8.706,0,0,1,1.044,2.81a3.075,3.075,0,0,0,.945,4.11A3.04,3.04,0,0,1,.6,6.541v.034A3.09,3.09,0,0,0,3.064,9.6a3.058,3.058,0,0,1-.806.1,2.714,2.714,0,0,1-.582-.052,3.105,3.105,0,0,0,2.873,2.142A6.181,6.181,0,0,1,.736,13.1,5.816,5.816,0,0,1,0,13.058a8.66,8.66,0,0,0,4.718,1.38,8.693,8.693,0,0,0,8.741-9.148Z"
                        transform="translate(0 -2.25)"
                        fill="#00586b"
                      />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="SecContentAddOffer" class="contentAddOffer">
        <div class="headAddOffer headProposalOffes">
          <p class="titleHeadAddOffer">العروض المقدمة</p>
          <div class="dropdown">
            <button
              id="navbarDropdownSort"
              class="btnddlistOffices btnToggleOffers"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
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
            <div
              class="dropdown-menu"
              aria-labelledby="navbarDropdownSort"
              style="text-align: right"
            >
              <li
                class="dropdown-item"
                style="
                  cursor: text;
                  background: transparent;
                  color: #16181b !important;
                "
              >
                الترتيب حسب:
              </li>
              <div class="dropdown-divider"></div>
              <li class="dropdown-item" @click="() => sortBy('rating')">
                التقييم
              </li>
              <li class="dropdown-item" @click="() => sortBy('budget')">
                الميزانية
              </li>
              <li class="dropdown-item" @click="() => sortBy('date')">
                تاريخ العرض
              </li>
              <li class="dropdown-item" @click="() => sortBy('duration')">
                مدة التنفيذ
              </li>
            </div>
          </div>
        </div>
        <div v-for="(offer, i) in offers" :key="i" class="bodyWaitOffer">
          <div class="row">
            <div class="col-lg-10 col-md-8 col-12">
              <div class="flexInfoClient divcontentOffice">
                <div class="imgProfile imgProfileClient imgNofi">
                  <img
                    :src="
                      offer.lawyer_img && typeof offer.lawyer_img === 'string'
                        ? offer.lawyer_img
                        : require(`@/assets/img/lawyer.png`)
                    "
                    alt=""
                  />
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
                    <router-link :to="`/lawyer/${offer.lawyer_id}`">
                      <p class="pNameflexHeadNameOffice pNametoggleOffers">
                        {{ offer.lawyer }}
                      </p>
                    </router-link>
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
                        style="margin-left: 6px"
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

                      <label class="lblInfoOffices">{{
                        offer.Speciality || "__"
                      }}</label>
                    </div>
                    <div class="divClockRate">
                      <i class="far fa-clock" style="margin-left: 6px"></i>
                      <label
                        >منذ
                        {{ offer.created_at | getNumberOfDays }}
                      </label>
                    </div>
                  </div>
                  <div>
                    <p class="txtLastNoti">
                      {{
                        `${offer.description}`.length > 20
                          ? offer.description.slice(0, 20) + "..."
                          : offer.description
                      }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-2 col-md-8 col-12 colddlistOffices">
              <button
                v-if="order.status === 'open'"
                class="switchPublic"
                @click="hire(offer.lawyer_id)"
              >
                توظيف
              </button>
              <div class="divcolddlistOffices">
                <button
                  class="btnddlistOffices btnToggleProposal"
                  data-toggle="collapse"
                  :data-target="`#collapseOffer${offer.id}`"
                >
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
          <div class="backInfoChatOffer" style="margin: 1.5rem">
            <div class="row">
              <div class="col-lg-4 col-md-3 col-12">
                <div>
                  <p class="pbackInfoChatOffer">الميزانية:</p>
                  <p class="numbackInfoChatOffer">
                    {{ offer.budget }} ريال سعودي
                  </p>
                </div>
              </div>
              <div class="col-lg-4 col-md-3 col-12 colDayChatOffer">
                <div>
                  <p class="pbackInfoChatOffer">مدة التنفيذ:</p>
                  <p class="numbackInfoChatOffer">
                    {{ offer.delivery_date }} أيام
                  </p>
                </div>
              </div>
              <div class="col-lg-4 col-md-3 col-12 colPortfolioChatOffer">
                <div>
                  <p class="pbackInfoChatOffer">معرض أعمالك:</p>
                  <p class="numbackInfoChatOffer">
                    {{ offer.gallery_count || 0 }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div :id="`collapseOffer${offer.id}`" class="lawProposal collapse">
            <div>
              <p class="pDescChatofferDetails pDescWaitDetails">
                {{ offer.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      id="EditLangmod"
      class="modal fade show"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      style="padding-right: 17px"
    >
      <div class="modal-dialog modDialogEditName" role="document">
        <div class="modal-content">
          <div class="modal-header modHead">
            <h5 id="exampleModalLabel" class="modal-title titleModPort">
              إضافة طلب مماثل
            </h5>
            <button
              ref="closeEditLanguageModal"
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div
            class="modal-body"
            style="padding-right: 28px; padding-left: 28px"
          >
            <div class="similar-order-container">
              <div class="bodyTabPay bodyContentAddWork">
                <div class="divtxtsAddWork">
                  <p class="pAddWorksPort">عنوان الطلب</p>
                  <input
                    v-model="newOrder.title"
                    type="text"
                    :class="`txtUserNameSettings ${
                      errors.title ? 'input-error' : ''
                    }`"
                    @input="() => validateForm('title')"
                  />
                </div>
                <div class="divLinkAddWork">
                  <p class="pAddWorksPort">المهارات المطلوبة</p>
                  <div
                    :class="`divddlistskillsport ${
                      errors.skill_id ? 'input-error' : ''
                    }`"
                  >
                    <select
                      class="form-control js-example-tokenizerskills"
                      multiple="multiple"
                    >
                      <option
                        v-for="(skill, i) in allSkills"
                        :key="i"
                        :value="skill.id"
                      >
                        {{ skill.name }}
                      </option>
                    </select>
                  </div>
                </div>

                <div class="divOrderDetailsClient">
                  <p class="pAddWorksPort">تفاصيل الطلب</p>
                  <textarea
                    v-model="newOrder.description"
                    :class="`txtUserNameSettings textareaSettings txtDescAddWork ${
                      errors.description ? 'input-error' : ''
                    }`"
                    cols="30"
                    rows="5"
                    @input="() => validateForm('description')"
                  ></textarea>
                </div>
                <div class="row">
                  <div class="col-md-6 col-12">
                    <div class="colFormAddOffer">
                      <label
                        for="validationCustomUsername"
                        class="lblFormAddOffers"
                        >الميزانية</label
                      >
                      <div class="input-group inputGroupFormAddDetails">
                        <div class="input-group-prepend">
                          <span
                            id="inputGroupPrepend"
                            class="input-group-text spanFromAddDetails"
                            >ريال سعودي</span
                          >
                        </div>
                        <input
                          id="validationCustomUsername"
                          v-model="newOrder.budget"
                          type="text"
                          :class="`form-control txtformAddOfferDetails ${
                            errors.budget ? 'input-error' : ''
                          }`"
                          aria-describedby="inputGroupPrepend"
                          required=""
                          @input="() => validateForm('budget')"
                        />
                        <div class="invalid-feedback">
                          الرجاء تحديد الميزانية
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-6 col-12">
                    <div class="colFormAddOffer colFormAddOrder">
                      <label
                        for="validationCustomUsername"
                        class="lblFormAddOffers"
                        >القيمة الاجمالية</label
                      >
                      <div class="input-group inputGroupFormAddDetails">
                        <div class="input-group-prepend">
                          <span
                            id="inputGroupPrepend"
                            class="input-group-text spanFromAddDetails"
                            >ريال سعودي</span
                          >
                        </div>
                        <input
                          id="validationCustomUsername"
                          v-model="newOrder.total_value"
                          type="text"
                          :class="`form-control txtformAddOfferDetails ${
                            errors.total_value ? 'input-error' : ''
                          }`"
                          aria-describedby="inputGroupPrepend"
                          required=""
                          @input="() => validateForm('total_value')"
                        />
                        <div class="invalid-feedback">
                          الرجاء تحديد القيمة الاجمالية
                        </div>
                      </div>
                      <p class="pNoteFormAddOffer">
                        اضافة الضريبة حسب القانون السعودي( 15% )
                      </p>
                    </div>
                  </div>
                </div>
                <div class="colFormAddOffer colFormAddOrder">
                  <label for="validationCustomUsername" class="lblFormAddOffers"
                    >وقت الاستلام</label
                  >
                  <div class="input-group inputGroupFormAddDetails">
                    <div class="input-group-prepend">
                      <span
                        id="inputGroupPrepend"
                        class="input-group-text spanFromAddDetails"
                        >يوم</span
                      >
                    </div>
                    <input
                      id="validationCustomUsername"
                      v-model="newOrder.delivery_time_form"
                      type="number"
                      :class="`form-control txtformAddOfferDetails order-date-input ${
                        errors.delivery_time_form ? 'input-error' : ''
                      }`"
                      aria-describedby="inputGroupPrepend"
                      required=""
                      @change="() => validateForm('delivery_time_form')"
                    />
                    <div class="invalid-feedback">
                      الرجاء تحديد وقت الاستلام
                    </div>
                  </div>
                </div>
                <div
                  class="divphotoAddWork divallImgAddWork colFormAddOrder order-file-input"
                >
                  <p class="pAddWorksPort">ملفات إضافية</p>
                  <div class="drop-zonePhotos">
                    <div class="divsvgDragFilesPhotos">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="61.606"
                        height="40"
                        viewBox="0 0 61.606 40"
                      >
                        <path
                          id="cloud-computing"
                          d="M47.054,10.557A20,20,0,0,0,9.767,16.282,11.96,11.96,0,0,0,11.96,40H29V24.86l-3.824,3.824a1.805,1.805,0,1,1-2.553-2.553l6.906-6.905a1.8,1.8,0,0,1,2.552,0l6.906,6.905a1.805,1.805,0,1,1-2.553,2.553L32.607,24.86V40H46.883a14.722,14.722,0,0,0,.171-29.443Zm0,0"
                          transform="translate(0.001 0)"
                          fill="#c5c5c5"
                        />
                      </svg>
                    </div>
                    <span class="drop-zone__promptPhotos placeDragFilePhotos"
                      >اسحب الملفات إلى هنا <br />
                      أو إنقر للاختيار يدويا</span
                    >
                    <input
                      id="orderFileInput"
                      ref="orderFileInput"
                      type="file"
                      name="myFile"
                      class="drop-zone__inputPhotos"
                      @change="setFile"
                    />
                  </div>
                  <div class="NameFilePhotos">
                    <div
                      class="backIconEditPhotos"
                      style="
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        width: 100%;
                      "
                    >
                      <div class="drop-zonePhotos__thumb"></div>
                      <div class="divIconHoverPortfolio">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="13.985"
                          viewBox="0 0 14 13.985"
                          style="margin-left: 12px"
                        >
                          <g
                            id="pencil_2_"
                            data-name="pencil (2)"
                            transform="translate(0 -0.247)"
                          >
                            <path
                              id="Path_1910"
                              data-name="Path 1910"
                              d="M8.645,82.473l-7.7,7.7a.307.307,0,0,0-.08.141L.008,93.744a.3.3,0,0,0,.294.377.3.3,0,0,0,.073-.009L3.8,93.258a.3.3,0,0,0,.141-.08l7.7-7.7Zm0,0"
                              transform="translate(0 -79.889)"
                              fill="#848484"
                            />
                            <path
                              id="Path_1911"
                              data-name="Path 1911"
                              d="M338.38,1.534l-.857-.857a1.553,1.553,0,0,0-2.144,0l-1.05,1.05,3,3,1.05-1.05a1.517,1.517,0,0,0,0-2.144Zm0,0"
                              transform="translate(-324.825 0)"
                              fill="#848484"
                            />
                          </g>
                        </svg>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14.718"
                          viewBox="0 0 14 14.718"
                        >
                          <g id="delete" transform="translate(-2.25 -1.75)">
                            <path
                              id="Path_1916"
                              data-name="Path 1916"
                              d="M12.571,17.314H7.057A2.19,2.19,0,0,1,4.9,15.261L4.25,5.324a.546.546,0,0,1,.144-.395.553.553,0,0,1,.395-.179H14.84a.538.538,0,0,1,.538.574l-.625,9.936a2.19,2.19,0,0,1-2.183,2.053ZM5.391,5.827,5.944,15.2a1.113,1.113,0,0,0,1.113,1.041h5.514A1.12,1.12,0,0,0,13.684,15.2l.582-9.333Z"
                              transform="translate(-0.564 -0.846)"
                              fill="#848484"
                            />
                            <path
                              id="Path_1917"
                              data-name="Path 1917"
                              d="M15.712,5.827H2.788a.538.538,0,1,1,0-1.077H15.712a.538.538,0,1,1,0,1.077Z"
                              transform="translate(0 -0.846)"
                              fill="#848484"
                            />
                            <path
                              id="Path_1918"
                              data-name="Path 1918"
                              d="M13.1,4.981H8.788a.546.546,0,0,1-.538-.538V3.15a1.436,1.436,0,0,1,1.4-1.4h2.585a1.436,1.436,0,0,1,1.4,1.436V4.442a.546.546,0,0,1-.538.538ZM9.327,3.9h3.231V3.186a.323.323,0,0,0-.323-.323H9.65a.323.323,0,0,0-.323.323Z"
                              transform="translate(-1.692)"
                              fill="#848484"
                            />
                            <path
                              id="Path_1919"
                              data-name="Path 1919"
                              d="M14.788,15.571a.546.546,0,0,1-.538-.538V9.288a.538.538,0,1,1,1.077,0v5.744A.546.546,0,0,1,14.788,15.571Z"
                              transform="translate(-3.385 -1.974)"
                              fill="#848484"
                            />
                            <path
                              id="Path_1920"
                              data-name="Path 1920"
                              d="M8.788,15.571a.546.546,0,0,1-.538-.538V9.288a.538.538,0,0,1,1.077,0v5.744A.546.546,0,0,1,8.788,15.571Z"
                              transform="translate(-1.692 -1.974)"
                              fill="#848484"
                            />
                            <path
                              id="Path_1921"
                              data-name="Path 1921"
                              d="M11.788,15.571a.546.546,0,0,1-.538-.538V9.288a.538.538,0,1,1,1.077,0v5.744A.546.546,0,0,1,11.788,15.571Z"
                              transform="translate(-2.538 -1.974)"
                              fill="#848484"
                            />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <p class="pAddWorksPort pOrdersConditions">شروط الطلب</p>
                  <label
                    class="numTabs exampleNameSettings"
                    style="margin-right: 4px"
                    >انظر للنصائح الجانبية
                  </label>
                  <div class="row">
                    <div class="col-md-6 col-12">
                      <div class="colFormAddOffer">
                        <div
                          :class="`ddlistClassify ${
                            errors.country_id ? 'input-error' : ''
                          }`"
                        >
                          <select
                            :class="`js-example-placeholder-single js-states form-control country`"
                            @change="() => validateForm('country_id')"
                          >
                            <option></option>
                            <option
                              v-for="(country, i) in countries"
                              :key="i"
                              :value="country.id"
                            >
                              {{ country.name }}
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6 col-12">
                      <div class="colFormAddOffer">
                        <div
                          :class="`specialization-container ddlistClassify ${
                            errors.speciality_id ? 'input-error' : ''
                          }`"
                        >
                          <select
                            class="js-example-placeholder-single js-states form-control specialization"
                            multiple
                          >
                            <option
                              v-for="(speciality, i) in allSpecialties"
                              :key="i"
                              :value="speciality.id"
                            >
                              {{ speciality.name }}
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6 col-12">
                      <div class="colFormAddOffer">
                        <div
                          :class="`ddlistClassify ${
                            errors.countrylaw_id ? 'input-error' : ''
                          }`"
                        >
                          <select
                            class="js-example-placeholder-single js-states form-control country-laws"
                            @change="() => validateForm('countrylaw_id')"
                          >
                            <option></option>
                            <option
                              v-for="(law, i) in countryLaws"
                              :key="i"
                              :value="law.id"
                            >
                              {{ law.name }}
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer footmodEditName">
            <button
              class="btnBackSettings btnBackSettingsModName"
              data-dismiss="modal"
            >
              إلغاء
            </button>
            <button
              class="btnNextSettings btnNextSettingsModName"
              @click="addOrder"
            >
              حفظ
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- end content -->
  </div>
</template>
<script>
import { addOrderSchema } from "@/schema/add-order";
import func from "../../assets/js/functions";
import isNil from "lodash/isNil";
import format from "date-fns/format";
import addDays from "date-fns/addDays";
import intervalToDuration from "date-fns/intervalToDuration";
import { getDurationLabel } from "../../utils";

export default {
  filters: {
    translateStatus(val) {
      const map = {
        open: "مفتوح",
        close: "مغلق",
        underway: "قيد التنفيذ",
        complete: "مكتمل",
      };
      return map[val] || "__";
    },
    formatDuration(val) {
      if (val) {
        const duration = intervalToDuration({
          start: new Date(val),
          end: new Date(),
        });
        if (duration.years > 0) {
          return getDurationLabel("year", duration.years);
        } else if (duration.months > 0) {
          return getDurationLabel("month", duration.months);
        } else if (duration.days > 0) {
          return getDurationLabel("day", duration.days);
        } else if (duration.hours > 0) {
          return getDurationLabel("hour", duration.hours);
        } else if (duration.minutes > 0) {
          return getDurationLabel("minute", duration.minutes);
        } else if (duration.seconds > 0) {
          return getDurationLabel("second", duration.seconds);
        }
      } else {
        return "";
      }
    },
    formatDate(val) {
      return val ? format(new Date(val), "d/M/yyyy") : ``;
    },
    getNumberOfDays(val) {
      const days = Math.abs(
        Number(new Date(val).getDay()) - Number(new Date().getDay())
      );
      return getDurationLabel("day", days || 1);
    },
  },
  data() {
    return {
      order: {},
      newOrder: {},
      skills: [],
      files: [],
      offers: [],
      errors: {},
      countries: [],
      allSkills: [],
      specialties: [],
      allSpecialties: [],
      countryLaws: [],
      toSend: new FormData(),
      sortByConfig: { key: null, direction: false },
    };
  },
  computed: {
    hiredOffer() {
      return this.offers.find((o) => o.is_employed);
    },
  },
  mounted() {
    func();
    Promise.all([
      this.getSkills(),
      this.getSpecialties(),
      this.getCountries(),
      this.getCountryLaws(),
    ]).then(() =>
      this.$http
        .get(`api/auth/client/requets/${this.$route.params.id}`)
        .then((res) => {
          this.order = Object.assign({}, res.data.data.request, {
            delivery_time_to: 10,
          });
          this.skills = res.data.data.skills;
          this.specialties = res.data.data.specialities;
          this.files = res.data.data.clientFileRequests;
          this.offers = res.data.data.lawyerOffers;
          this.setNewOrder();

          $(".js-example-tokenizerskills")
            .val(res.data.data.skills.map((s) => s.id))
            .trigger("change");
          $(".js-example-placeholder-single.js-states.country")
            .val(res.data.data.request.country_id)
            .trigger("change");
          $(".js-example-placeholder-single.country-laws")
            .val(
              this.countryLaws.find(
                (l) => l.name === res.data.data.request.countryLaw
              )?.id
            )
            .trigger("change");
          $(".specialization")
            .val(res.data.data.specialities.map((s) => s.id))
            .trigger("change");
        })
    );
    $(".js-example-placeholder-single.country-laws").on("change", () => {
      this.newOrder.countrylaw_id = $(
        ".js-example-placeholder-single.country-laws"
      ).select2("data")[0]?.id;
      this.validateForm("countrylaw_id");
    });
    $(".js-example-placeholder-single.country").on("change", () => {
      this.newOrder.country_id = $(
        ".js-example-placeholder-single.country"
      ).select2("data")[0]?.id;
      this.validateForm("country_id");
    });
    $(".specialization").on("change", () => {
      this.newOrder.speciality_id = $(".specialization")
        .select2("data")
        .map((e) => e.id);
      this.validateForm("speciality_id");
    });
    $(".js-example-tokenizerskills").on("change", () => {
      this.newOrder.skill_id = $(".js-example-tokenizerskills")
        .select2("data")
        .map((e) => e.id);
      this.validateForm("skill_id");
    });
  },
  methods: {
    isNil,
    addDays,
    sortBy(key) {
      const keysMap = {
        date: (a, b) => new Date(b.created_at) - new Date(a.created_at),
        rating: (a, b) => b.rate - a.rate,
        budget: (a, b) => b.budget - a.budget,
        duration: (a, b) => b.delivery_date - a.delivery_date,
      };
      if (this.sortByConfig.key === key) {
        const sortFunction = this.sortByConfig.direction
          ? (a, b) => keysMap[key](a, b)
          : (a, b) => keysMap[key](b, a);
        this.offers = this.offers.sort(sortFunction);
        this.sortByConfig.key = key;
        this.sortByConfig.direction = !this.sortByConfig.direction;
      } else {
        this.offers = this.offers.sort(keysMap[key]);
        this.sortByConfig.key = key;
        this.sortByConfig.direction = false;
      }
    },
    saveToFavorites() {
      this.$http
        .post(`/api/auth/client/favorite`, {
          client_request_id: Number(this.$route.params.id),
        })
        .then((res) => {
          this.order.is_favorite =
            res.data.process_code === "favorite_delete" ? false : true;
          this.$notify({
            group: "foo",
            type: "success",
            text: res.data.message,
          });
        });
    },
    copyFunc(val) {
      navigator.clipboard.writeText(val);
    },
    hire(id) {
      this.$http
        .post(`api/auth/client/employment-lawyer`, {
          lawyer_id: id,
          client_request_id: Number(this.$route.params.id),
        })
        .then(() => {
          this.$notify({
            group: "foo",
            type: "success",
            text: "تم توظيف المحامي بنجاح",
          });
        });
    },
    getCountries() {
      return this.$http.get("api/country").then((res) => {
        this.countries = res.data.data.country;
      });
    },
    getSkills() {
      return this.$http.get("api/auth/client/Skills").then((res) => {
        this.allSkills = res.data.data.Skill;
        this.$forceUpdate();
      });
    },
    getSpecialties() {
      return this.$http.get("api/auth/client/Speciality").then((res) => {
        this.allSpecialties = res.data.data.Speciality;
      });
    },
    getCountryLaws() {
      return this.$http.get("api/auth/client/country-Law").then((res) => {
        this.countryLaws = res.data.data.countryLaws;
      });
    },
    validateForm(fieldName) {
      try {
        addOrderSchema.validateSync(this.newOrder, {
          abortEarly: false,
        });
        this.errors = {};
        this.$forceUpdate();
        return true;
      } catch (err) {
        if (fieldName) {
          const fieldError = err.inner.find((e) => e.path === fieldName);
          this.errors[fieldName] = fieldError
            ? { message: fieldError.message }
            : null;
        } else {
          this.errors = {};
          err.inner.forEach(
            ({ path, message }) => (this.errors[path] = { message })
          );
        }
        this.$forceUpdate();
        return false;
      }
    },
    setFile(e) {
      this.newOrder["file[0]"] = e.target.files[0];
    },
    async setNewOrder() {
      this.newOrder = Object.assign({}, this.order, {
        skill_id: this.skills.map((s) => s.id),
        speciality_id: this.specialties.map((s) => s.id),
        countrylaw_id: this.countryLaws.find(
          (l) => l.name === this.order.countryLaw
        )?.id,
      });
    },
    addOrder() {
      const isValid = this.validateForm();
      if (!isValid) {
        return;
      }
      Object.entries(this.newOrder).forEach(([key, value]) => {
        if (["speciality_id", "skill_id"].includes(key)) {
          value.forEach((e, i) => this.toSend.append(`${key}[${i}]`, e));
          this.toSend.append;
        } else {
          this.toSend.append(key, value);
        }
      });
      this.$http.post("api/auth/client/requets", this.toSend).then(async () => {
        this.$http.get("api/auth/client/profile").then(async (userInfo) => {
          await this.$store.commit("setUser", userInfo.data.data);
        });
        this.$notify({
          group: "foo",
          type: "success",
          text: "تم إضافة الطلب بنجاح",
        });
        this.newOrder = {
          skill_id: [],
          speciality_id: [],
          delivery_time_to: "1/1/1",
        };
        this.errors = {};
        this.$refs[`toggleSimilarOrderModal`].click();
      });
    },
  },
};
</script>
