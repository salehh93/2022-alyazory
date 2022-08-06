<template>
  <!-- Start Content -->
  <div class="container contentReviewOffice">
    <div class="contentProfile">
      <div class="headProfile">
        <div class="row">
          <div class="col-lg-7 col-md-6 col-12">
            <div class="InfoProfile">
              <div class="divImgProfile">
                <div class="imgProfile">
                  <img
                    :src="
                      $store.state.user.image
                        ? $store.state.user.image
                        : require('../../../assets/img/PersonalImg.png')
                    "
                    alt=""
                  />
                </div>
                <div class="absoIconProfile">
                  <router-link to="/edit-lawyer-profile">
                    <div class="absoIconEdit hideIconEdit">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="11.987"
                        viewBox="0 0 12 11.987"
                      >
                        <g
                          id="pencil_2_"
                          data-name="pencil (2)"
                          transform="translate(0 -0.246)"
                        >
                          <path
                            id="Path_1910"
                            data-name="Path 1910"
                            d="M7.41,82.473l-6.6,6.6a.263.263,0,0,0-.069.121L.007,92.134a.26.26,0,0,0,.252.323.258.258,0,0,0,.063-.008l2.937-.732a.26.26,0,0,0,.121-.069l6.6-6.6Zm0,0"
                            transform="translate(0 -80.223)"
                            fill="#848484"
                          />
                          <path
                            id="Path_1911"
                            data-name="Path 1911"
                            d="M337.8,1.35l-.735-.735a1.331,1.331,0,0,0-1.838,0l-.9.9L336.9,4.088l.9-.9a1.3,1.3,0,0,0,0-1.838Zm0,0"
                            transform="translate(-326.182)"
                            fill="#848484"
                          />
                        </g>
                      </svg>
                      <!-- Modal -->
                      <!-- <div class="modal fade" id="editTitlePortOfficd" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div class="modal-dialog modDialogEditName" role="document">
                                            <div class="modal-content">
                                                <div class="modal-header modHead">
                                                <h5 class="modal-title titleModPort" id="exampleModalLabel">تعديل العنوان الشخصي</h5>
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                                </div>
                                                <div class="modal-body">
                                                <p class="pBodyEdiNameMod">عنوانك</p>
                                                <p class="NoteBodyEdiNameMod">أدخل وصفًا لجملة واحدة لمهاراتك / خبرتك المهنية </p>
                                                <input type="text" value="مكتب فرسان العدالة" class="txtUserNameSettings txtUserNameEditmod">
                                                </div>
                                                <div class="modal-footer footmodEditName">
                                                        <button class="btnBackSettings btnBackSettingsModName"  data-dismiss="modal">إلغاء</button>
                                                        <button class="btnNextSettings btnNextSettingsModName">حفظ</button>
                                                </div>
                                            </div>
                                            </div>
                                        </div> -->
                    </div>
                  </router-link>
                  <div class="absoIconVerfiy">
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
                      />
                      <path
                        id="Path_1915"
                        data-name="Path 1915"
                        d="M138.067,174.152l-2.607-2.607a.8.8,0,0,1,1.131-1.131l2.041,2.041,4.409-4.409a.8.8,0,0,1,1.131,1.131l-4.975,4.975A.914.914,0,0,1,138.067,174.152Z"
                        transform="translate(-129.817 -161.099)"
                        fill="#fff"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div>
                <p class="NameProfile">{{ $store.state.user.name }}</p>
                <div class="online"></div>
                <p class="pPositionProfile">
                  مكتب محاماة نظامي قانوني- قانون سعودي
                </p>
                <div class="divGps">
                  <i class="fas fa-map-marker-alt gpsIcon"></i>
                  <p class="pLocationProfile">
                    المملكة العربية السعودية - جدة - 1:00 pm التوقيت المحلي
                  </p>
                </div>
                <div>
                  <p class="numProgress">88%</p>
                  <div class="progress progressProjects">
                    <div
                      class="progress-bar barProgress"
                      role="progressbar"
                      style="width: 25%"
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <p class="pProgress">معدل اكمال المشاريع</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-5 col-md-6 col-12">
            <div class="divBtnsProfile row">
              <div
                class="col-lg-6 col-12 colbtnSetProfile colBtnsProfile d-flex justify-content-around"
              >
                <button class="btnProfile btnSetProfile">
                  <a href="Edit_Profile.html"> إعدادات الملف الشخصي </a>
                </button>
                <div class="colbtnSetProfile BackEditBtns">
                  <button class="btnProfile btnViewEntre">
                    <a href="#"> عرض كما يظهر للعام </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bodyProfile">
        <div class="row">
          <div class="col-lg-4 col-md-5 col-12 rightColProfile">
            <div class="divShowProfile">
              <div class="flexHeadSHow">
                <p class="pShowProfile TitletabsShowProfile">
                  عرض الملف الشخصي
                </p>
                <div
                  class="backIconShowProfile hideIconEdit"
                  data-toggle="modal"
                  data-target="#AddBioTitleOffice"
                >
                  <i class="fas fa-plus"></i>
                </div>

                <!-- <div class="backIconShowProfile hideIconEdit">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13.985" viewBox="0 0 14 13.985">
                                        <g id="pencil_2_" data-name="pencil (2)" transform="translate(0 -0.246)">
                                          <path id="Path_1910" data-name="Path 1910" d="M8.645,82.473l-7.7,7.7a.307.307,0,0,0-.08.141L.008,93.744a.3.3,0,0,0,.294.377.3.3,0,0,0,.073-.009L3.8,93.258a.3.3,0,0,0,.141-.08l7.7-7.7Zm0,0" transform="translate(0 -79.889)" fill="#848484"/>
                                          <path id="Path_1911" data-name="Path 1911" d="M338.38,1.534l-.857-.857a1.553,1.553,0,0,0-2.144,0l-1.05,1.05,3,3,1.05-1.05a1.517,1.517,0,0,0,0-2.144Zm0,0" transform="translate(-324.825 0)" fill="#848484"/>
                                        </g>
                                      </svg>
                                      
                                </div> -->
              </div>
              <div
                class="btnsShowProfile showProfileTabs nav flex-column nav-pills"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <button
                  class="btnTypeLawProfile nav-link"
                  id="v-pills-regular-tab"
                  data-bs-toggle="pill"
                  :data-bs-target="`#${job.job_title}`"
                  type="button"
                  role="tab"
                  :aria-controls="job.job_title"
                  aria-selected="false"
                  v-for="job in $store.state.user.jobs"
                  :key="job.id"
                >
                  <p>{{ job.job_title }}</p>
                </button>
              </div>
            </div>
            <div class="divShowProfile">
              <div class="flexHeadSHow flexvideoProfile">
                <p class="pShowProfile">فيديو تعريفي</p>
                <!-- add language button -->
                <div
                  class="backIconShowProfile hideIconEdit"
                  data-toggle="modal"
                  data-target="#AddVideoModOffice"
                >
                  <i class="fas fa-plus"></i>
                </div>

                <div
                  class="backIconShowProfile hideIconEdit"
                  data-toggle="modal"
                  data-target="#EditVideoModOffice"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="13.985"
                    viewBox="0 0 14 13.985"
                  >
                    <g
                      id="pencil_2_"
                      data-name="pencil (2)"
                      transform="translate(0 -0.246)"
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
                </div>
              </div>
              <div class="DivVideoProfile">
                <video
                  poster="img/posterVideoProfile.png"
                  src="img/ولقدنعلم انك يضيق صدرك.mp4"
                  controls
                ></video>
              </div>
              <div class="flexHeadSHow flexLang">
                <p class="pShowProfile">اللغات</p>

                <div
                  class="backIconShowProfile hideIconEdit"
                  data-target="#AddLangmodOffice"
                  data-toggle="modal"
                >
                  <i class="fas fa-plus"></i>
                </div>
              </div>
              <div
                class="divPLang"
                v-for="(lang, i) in $store.state.user.language"
                :key="lang.id"
              >
                <p class="pLangProfile">{{ lang.name }}:</p>
                <p class="pLevelLang">{{ lang.degree }}</p>
                <div
                  class="backIconShowProfile hideIconEdit"
                  data-target="#EditLangmodOffice"
                  data-toggle="modal"
                  @click="editLanguage(i)"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="13.985"
                    viewBox="0 0 14 13.985"
                  >
                    <g
                      id="pencil_2_"
                      data-name="pencil (2)"
                      transform="translate(0 -0.246)"
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
                </div>
              </div>
              <div class="divVerfiyProfile">
                <p class="pLangProfile pVerfiyProfile">التوثيقات</p>
                <div class="row">
                  <div class="col-lg-5 col-12">
                    <div class="verfiyThings">
                      <i
                        class="fas fa-check verfiyCheckProfile"
                        v-if="$store.state.user.id_number == true"
                      ></i>
                      <p>الهوية</p>
                    </div>
                    <div class="verfiyThings">
                      <i
                        class="fas fa-check verfiyCheckProfile"
                        v-if="$store.state.user.mobile == true"
                      ></i>
                      <p>رقم الجوال</p>
                    </div>
                  </div>
                  <div class="col-lg-7 col-12">
                    <div class="verfiyThings">
                      <i
                        class="fas fa-check verfiyCheckProfile"
                        v-if="$store.state.user.email == true"
                      ></i>
                      <p>البريد الالكتروني</p>
                    </div>
                    <div class="verfiyThings">
                      <i class="fas fa-check verfiyCheckProfile"></i>
                      <p>مزاولة المهنة</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="divDecorations">
                <p class="pShowProfile pDecorations">الأوسمة</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="37.024"
                  viewBox="0 0 34 37.024"
                >
                  <g id="medal" transform="translate(-20.75)">
                    <circle
                      id="Ellipse_38"
                      data-name="Ellipse 38"
                      cx="14.7"
                      cy="14.7"
                      r="14.7"
                      transform="translate(23.017 0)"
                      fill="#ffd15c"
                    />
                    <g
                      id="Group_10046"
                      data-name="Group 10046"
                      transform="translate(20.75 23.257)"
                    >
                      <path
                        id="Path_1928"
                        data-name="Path 1928"
                        d="M25.808,319.7l-5.058,8.768,5.9-.313,2.682,5.269,4.679-8.112A14.684,14.684,0,0,1,25.808,319.7Z"
                        transform="translate(-20.75 -319.656)"
                        fill="#40596b"
                      />
                      <path
                        id="Path_1929"
                        data-name="Path 1929"
                        d="M313.235,319.1a14.691,14.691,0,0,1-8.185,5.641l4.694,8.126,2.682-5.269,5.9.314Z"
                        transform="translate(-284.329 -319.1)"
                        fill="#40596b"
                      />
                    </g>
                    <circle
                      id="Ellipse_39"
                      data-name="Ellipse 39"
                      cx="10.655"
                      cy="10.655"
                      r="10.655"
                      transform="translate(27.062 4.045)"
                      fill="#f8b64c"
                    />
                    <path
                      id="Path_1930"
                      data-name="Path 1930"
                      d="M165.829,109.714a.557.557,0,0,0-.306-.947l-4.205-.612a.548.548,0,0,1-.415-.306l-1.881-3.812a.556.556,0,0,0-1,0l-1.873,3.812a.578.578,0,0,1-.415.306l-4.205.612a.557.557,0,0,0-.306.947l3.039,2.966a.561.561,0,0,1,.16.488l-.714,4.183a.555.555,0,0,0,.809.583l3.761-1.975a.543.543,0,0,1,.517,0l3.761,1.975a.558.558,0,0,0,.809-.583l-.721-4.183a.548.548,0,0,1,.16-.488Z"
                      transform="translate(-120.809 -96.165)"
                      fill="#fff"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div class="col-lg-8 col-md-7 col-12 LeftColProfile">
            <div class="tab-content" id="v-pills-tabContent">
              <div
                class="tab-pane fade"
                :id="job.job_title"
                role="tabpanel"
                aria-labelledby="v-pills-regular-tab"
                v-for="(job, i) in $store.state.user.jobs"
                :key="job.id"
              >
                <div class="row divrowbio">
                  <div class="col-md-10 col-8">
                    <div class="flexHeadBio">
                      <div class="flexHeadSHow">
                        <p class="pShowProfile">{{ job.job_title }}</p>
                        <div
                          class="backIconShowProfile hideIconEdit"
                          data-toggle="modal"
                          data-target="#editBioPortOfficeOne"
                          @click="editJob(i)"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="13.985"
                            viewBox="0 0 14 13.985"
                          >
                            <g
                              id="pencil_2_"
                              data-name="pencil (2)"
                              transform="translate(0 -0.246)"
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
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-2 col-4 colCopyUrl">
                    <div>
                      <div class="backIconShowProfile divColCopyUrl">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="21"
                          height="12.667"
                          viewBox="0 0 21 12.667"
                        >
                          <g
                            id="url_1_"
                            data-name="url (1)"
                            transform="translate(0.5 0.5)"
                          >
                            <path
                              id="Path_1922"
                              data-name="Path 1922"
                              d="M301.168,11.667H299.5a.833.833,0,0,1,0-1.667h1.667a4.167,4.167,0,0,0,0-8.333H299.5A.833.833,0,0,1,299.5,0h1.667a5.833,5.833,0,0,1,0,11.667Zm0,0"
                              transform="translate(-287.001 0)"
                              fill="#848484"
                              stroke="#848484"
                              stroke-width="1"
                            />
                            <path
                              id="Path_1923"
                              data-name="Path 1923"
                              d="M7.5,11.667H5.833A5.833,5.833,0,0,1,5.833,0H7.5a.833.833,0,0,1,0,1.667H5.833a4.167,4.167,0,0,0,0,8.333H7.5a.833.833,0,0,1,0,1.667Zm0,0"
                              transform="translate(0 0)"
                              fill="#848484"
                              stroke="#848484"
                              stroke-width="1"
                            />
                            <path
                              id="Path_1924"
                              data-name="Path 1924"
                              d="M176.5,129.667h-5a.833.833,0,0,1,0-1.667h5a.833.833,0,0,1,0,1.667Zm0,0"
                              transform="translate(-164.001 -123)"
                              fill="#848484"
                              stroke="#848484"
                              stroke-width="1"
                            />
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="divBio">
                  <p>
                    {{ job.bio }}
                  </p>
                  <button class="aBio" onclick="functionMore()" id="btnMoreBio">
                    المزيد
                  </button>
                </div>
              </div>
            </div>
            <div class="divWorksProfile">
              <p class="TitleWorksProfile">سجل الأعمال</p>
              <ul class="nav nav-tabs ulProfile" id="myTab" role="tablist">
                <li class="nav-item">
                  <a
                    class="nav-link active aProgressTab activeComplete"
                    id="home-tab"
                    data-toggle="tab"
                    href="#complete"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                    >مكتمل</a
                  >
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link aProgressTab activeProgress"
                    id="profile-tab"
                    data-toggle="tab"
                    href="#progress"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                    >قيد التنفيذ</a
                  >
                </li>
              </ul>
              <div class="tab-content tabcontentProfile" id="myTabContent">
                <div
                  class="tab-pane fade show active"
                  id="complete"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div v-for="req in complete_requests" :key="req.id">
                    <a href="OrderComplete.html">
                      <p class="pTitleWorksProfile">
                        {{ req.title }}
                      </p>
                    </a>
                    <p class="pWorksProfile">
                      {{ req.description }}
                    </p>
                    <div class="StarsAndTime">
                      <div class="divStarts">
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
                      <div class="timeProfile">
                        <i class="far fa-clock"></i>
                        <p>
                          {{ req.delivery_time_form }} -
                          {{ req.delivery_time_to }}
                        </p>
                      </div>
                    </div>
                  </div>
                  <hr class="hrProfile" />
                </div>
                <div
                  class="tab-pane fade"
                  id="progress"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <div v-for="req in underway_requests" :key="req.id">
                    <a href="OrderChat.html">
                      <p class="pTitleWorksProfile">
                        {{ req.title }}
                      </p>
                    </a>
                    <p class="pWorksProfile">
                      {{ req.description }}
                    </p>
                    <div class="StarsAndTime">
                      <div class="divStarts">
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
                      <div class="timeProfile">
                        <i class="far fa-clock"></i>
                        <p>
                          {{ req.delivery_time_form }} -
                          {{ req.delivery_time_to }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="divLinkRate">
                  <a href="#" class="aRatesProfile">
                    <p>التقييمات</p>
                    <i class="fas fa-chevron-left"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="secWorksFile">
              <div class="flexHeadSHow">
                <p class="pShowProfile">
                  ملف الأعمال ({{ paginate.last_page_id * paginate.count }})
                </p>
                <router-link to="/addPortfolio">
                  <div class="backIconShowProfile hideIconEdit">
                    <i class="fas fa-plus"></i>
                  </div>
                </router-link>
                <div class="backIconShowProfile hideIconEdit">
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
                <div
                  class="backIconShowProfile hideIconEdit sortAblebtn"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="إضغط هنا لتتمكن من ترتيب أعمالك"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10.5"
                    height="14"
                    viewBox="0 0 10.5 14"
                  >
                    <g id="sort" transform="translate(-14 -8)">
                      <path
                        id="Path_1931"
                        data-name="Path 1931"
                        d="M19.079,10.213,17.038,8.171a.583.583,0,0,0-.825,0l-2.042,2.042a.583.583,0,0,0,.825.825l1.046-1.046V21.417a.583.583,0,1,0,1.167,0V9.992l1.046,1.046a.583.583,0,1,0,.825-.825Z"
                        transform="translate(0 0)"
                        fill="#848484"
                      />
                      <path
                        id="Path_1932"
                        data-name="Path 1932"
                        d="M37.079,18.963a.583.583,0,0,0-.825,0l-1.046,1.046V8.583a.583.583,0,0,0-1.167,0V20.008L33,18.963a.583.583,0,0,0-.825.825l2.042,2.042a.583.583,0,0,0,.825,0l2.042-2.042A.583.583,0,0,0,37.079,18.963Z"
                        transform="translate(-12.75)"
                        fill="#848484"
                      />
                    </g>
                  </svg>
                </div>
              </div>
              <div class="row secFileWorks contentGride">
                <div
                  class="col-md-4 col-12 colImgFileWorks draggable"
                  draggable="true"
                  v-for="work in my_works"
                  :key="work.id"
                >
                  <div style="position: relative" class="big">
                    <img :src="work.image" class="ImgPortfolio" alt="" />
                    <div class="hoverImgPortfolio">
                      <div class="divIconHoverPortfolio">
                        <div
                          class="backIconShowProfile"
                          style="width: 30px; height: 30px"
                          data-toggle="modal"
                          data-target=".modalDetailsPort"
                          @click="editWork(work)"
                          v-if="!$route.params.id"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="13.985"
                            viewBox="0 0 14 13.985"
                          >
                            <g
                              id="pencil_2_"
                              data-name="pencil (2)"
                              transform="translate(0 -0.246)"
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
                        </div>

                        <div
                          class="backIconShowProfile"
                          style="width: 30px; height: 30px"
                        >
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
                  <p class="pTitleImgProfile">
                    {{ work.title }}
                  </p>
                </div>
              </div>

              <div class="divLinkRatePortfolio divPaginationProfile">
                <a href="#">
                  <nav aria-label="...">
                    <ul class="pagination">
                      <li
                        v-if="paginate.previousPageUrl"
                        class="page-item"
                        @click="getGallary(paginate.currentPage - 1)"
                      >
                        <span class="page-link pageLinlPortfolio">
                          <i class="fas fa-chevron-right"></i>
                          السابق
                        </span>
                      </li>
                      <li class="page-item">
                        <span class="page-link pageLinlPortfolio">
                          {{ paginate.currentPage }}
                        </span>
                      </li>
                      <li
                        v-if="paginate.nextPageUrl"
                        class="page-item"
                        @click="getGallary(paginate.currentPage + 1)"
                      >
                        <a class="page-link pageLinlPortfolio" href="#"
                          >التالي
                          <i class="fas fa-chevron-left"></i>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </a>
              </div>
            </div>
            <div class="secSkillsProfile">
              <div class="flexHeadSHow">
                <p class="pShowProfile">المهارات</p>
              </div>
              <div
                class="rowSkillsProfile"
                v-if="
                  $store.state.user.experience &&
                  $store.state.user.experience.length > 0
                "
              >
                <div
                  v-for="(skill, i) in $store.state.user.experience"
                  :key="skill.id"
                  class="row"
                >
                  <button class="backSkills">
                    <p class="mt-3">{{ skill.skill }}</p>
                    <!-- edit skill button -->
                    <div
                      class="backIconShowProfile hideIconEdit"
                      data-toggle="modal"
                      data-target="#editSkillsmodOffice"
                      @click="editExp(i)"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="13.985"
                        viewBox="0 0 14 13.985"
                      >
                        <g
                          id="pencil_2_"
                          data-name="pencil (2)"
                          transform="translate(0 -0.246)"
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
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- modals -->
    <!-- add job data modal -->
    <div
      class="modal fade show"
      id="AddBioTitleOffice"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      style="padding-right: 17px"
    >
      <div class="modal-dialog modDialogEditName" role="document">
        <div class="modal-content">
          <div class="modal-header modHead">
            <h5 class="modal-title titleModPort" id="exampleModalLabel">
              إضافة مسمى وظيفي جديد
            </h5>
            <button
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
            <h6 class="pBio">ما هو المسمى الوظيفي الذي تود أن يمثلك</h6>
            <input
              type="text"
              class="txtUserNameSettings txtBio"
              v-model="job_data.job_title"
            />
            <h6 class="pBio">اكتب نبذة شخصية عنك تظهر في حسابك</h6>
            <textarea
              class="txtUserNameSettings textareaSettings"
              style="height: 169px !important"
              cols="30"
              rows="10"
              v-model="job_data.bio"
            ></textarea>
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
              data-dismiss="modal"
              @click="saveJob()"
            >
              حفظ
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- ----------- edit skill modal------------ -->
    <div
      class="modal fade show"
      id="editSkillsmodOffice"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      style="padding-right: 17px"
    >
      <div class="modal-dialog modDialogEditName" role="document">
        <div class="modal-content">
          <div class="modal-header modHead">
            <h5 class="modal-title titleModPort" id="exampleModalLabel">
              تعديل مهاراتك
            </h5>
            <button
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
            <p class="pBodyEdiNameMod">مهاراتك</p>
            <p class="NoteBodyEdiNameMod">
              يساعدك تحديث مهاراتك في الحصول على الوظائف التي تريدها.
            </p>
            <!-- <div class="contentScroll contentScrolmodEditBio"> -->
            <div class="divddlistskilsmod">
              <select class="form-control" v-model="exp_data.skill_id">
                <option
                  v-for="skill in skills"
                  :key="skill.id"
                  :value="skill.id"
                >
                  {{ skill.name }}
                </option>
              </select>
              <!-- <div class="rowSkillsProfile rowSkillsPortfolio">
                                                <div>
                                                    <button class="backSkills">
                                                        <p class="pDeleteSkill">تحليل</p>
                                                        
                                                        <i class="fas fa-times deleletSkill"></i>
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
                                            </div> -->
            </div>
            <!-- </div> -->
            <!-- <input type="text" value="محامي نظامي قانوني" class="txtUserNameSettings txtUserNameEditmod"> -->
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
              data-dismiss="modal"
              @click="saveExperience(exp_data.id)"
            >
              حفظ
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- ---------- edit work modal ---------- -->
    <div
      class="modal fade bd-example-modal-lg modalDetailsPort"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myLargeModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header modHead">
            <h5 class="modal-title titleModPort" id="exampleModalLabel">
              {{ work.title }}
            </h5>
            <div style="display: flex">
              <button
                type="button"
                class="btn btn-outlined-primary"
                data-dismiss="modal"
                aria-label="Close"
                @click="$router.push(`/editPortfolio/${work.id}`)"
              >
                <i class="fas fa-edit"></i>
              </button>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
          </div>
          <div class="modal-body modBody">
            <div class="divmodImg">
              <img
                class="modImg"
                :src="work.image"
                alt=""
                style="max-height: 400px"
              />
            </div>
            <div class="divPPortmod">
              <p></p>
              <div class="divSee divSeePort">
                <i class="fas fa-eye"></i>
                <label>155</label>
              </div>
            </div>
            <div>
              <div class="rowSkillsProfile rowSkillsPortfolio">
                <div v-if="work.skills">
                  <button
                    class="backSkills"
                    v-for="(skill, i) in work.skills"
                    :key="i"
                  >
                    <p>{{ skill.name }}</p>
                  </button>
                </div>
              </div>
            </div>
            <div class="divPPortmod">
              <p class="pTitleDescMod">وصف المشروع</p>
              <p class="pDescMod">
                {{ work.description }}
              </p>
            </div>
            <div class="divPPortmod">
              <p class="pTitleDescMod">صور إضافية للمشروع</p>
              <div
                id="carouselExampleIndicators"
                class="carousel slide"
                data-ride="carousel"
              >
                <ol class="carousel-indicators">
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="0"
                    class="active"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="1"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="2"
                  ></li>
                </ol>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      class="d-block w-100"
                      src="img/lawPortfolio1.jpg"
                      alt="First slide"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      class="d-block w-100"
                      src="img/lawPortfolio1.jpg"
                      alt="Second slide"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      class="d-block w-100"
                      src="img/lawPortfolio1.jpg"
                      alt="Third slide"
                    />
                  </div>
                </div>
                <a
                  class="carousel-control-prev"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a
                  class="carousel-control-next"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <div class="row divrowbio rowfootmod">
              <div class="col-md-10 col-8 flexHeadSHowmodfoot">
                <div class="flexHeadBio">
                  <div class="flexHeadSHowmodfoot">
                    <!-- <p class="pShowPortFootmod">مكتب فرسان العدالة</p> -->
                    <p class="pTimePortFootmod">{{ work.completion_date }}</p>
                  </div>
                </div>
              </div>
              <div class="col-md-2 col-4 colCopyUrl">
                <div>
                  <div class="backIconShowProfile divColCopyUrl">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="12.667"
                      viewBox="0 0 21 12.667"
                    >
                      <g
                        id="url_1_"
                        data-name="url (1)"
                        transform="translate(0.5 0.5)"
                      >
                        <path
                          id="Path_1922"
                          data-name="Path 1922"
                          d="M301.168,11.667H299.5a.833.833,0,0,1,0-1.667h1.667a4.167,4.167,0,0,0,0-8.333H299.5A.833.833,0,0,1,299.5,0h1.667a5.833,5.833,0,0,1,0,11.667Zm0,0"
                          transform="translate(-287.001 0)"
                          fill="#848484"
                          stroke="#848484"
                          stroke-width="1"
                        ></path>
                        <path
                          id="Path_1923"
                          data-name="Path 1923"
                          d="M7.5,11.667H5.833A5.833,5.833,0,0,1,5.833,0H7.5a.833.833,0,0,1,0,1.667H5.833a4.167,4.167,0,0,0,0,8.333H7.5a.833.833,0,0,1,0,1.667Zm0,0"
                          transform="translate(0 0)"
                          fill="#848484"
                          stroke="#848484"
                          stroke-width="1"
                        ></path>
                        <path
                          id="Path_1924"
                          data-name="Path 1924"
                          d="M176.5,129.667h-5a.833.833,0,0,1,0-1.667h5a.833.833,0,0,1,0,1.667Zm0,0"
                          transform="translate(-164.001 -123)"
                          fill="#848484"
                          stroke="#848484"
                          stroke-width="1"
                        ></path>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- ------------------- -->
    <div
      class="modal fade show"
      id="AddVideoModOffice"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      style="padding-right: 17px"
    >
      <div class="modal-dialog modDialogEditName" role="document">
        <div class="modal-content">
          <div class="modal-header modHead">
            <h5 class="modal-title titleModPort" id="exampleModalLabel">
              إضافة فيديو تعريفي
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div class="modal-body modBodyAddVideo">
            <div class="divContentModVideo">
              <p class="pTitleModVideo">الفيديو التعريفي</p>
              <p class="pNoteeModVideo">
                ارفق فيديو تعريفي يوضح فيه مهاراتك أو خبراتك العملية وتحدث به عن
                نفسك
              </p>
              <input
                class="txtAddVideoMod"
                type="text"
                Placeholder="EX: https://www.youtube.com/watch?v=Sh4pdHnIddssdfVAE"
              />
            </div>
          </div>
          <div class="modal-footer footmodEditName">
            <button
              class="btnBackSettings btnBackSettingsModName"
              data-dismiss="modal"
            >
              إلغاء
            </button>
            <button class="btnNextSettings btnNextSettingsModName">حفظ</button>
          </div>
        </div>
      </div>
    </div>
    <!-- ------------------ -->
    <div
      class="modal fade show"
      id="EditVideoModOffice"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      style="padding-right: 17px"
    >
      <div class="modal-dialog modDialogEditName" role="document">
        <div class="modal-content">
          <div class="modal-header modHead">
            <h5 class="modal-title titleModPort" id="exampleModalLabel">
              تعديل الفيديو التعريفي
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div class="modal-body modBodyAddVideo">
            <div class="divContentModVideo">
              <p class="pTitleModVideo">الفيديو التعريفي</p>
              <p class="pNoteeModVideo">
                ارفق فيديو تعريفي يوضح فيه مهاراتك أو خبراتك العملية وتحدث به عن
                نفسك
              </p>
              <input
                class="txtAddVideoMod"
                type="text"
                value="EX: https://www.youtube.com/watch?v=Sh4pdHnIddssdfVAE"
              />
            </div>
          </div>
          <div class="modal-footer footmodEditName">
            <button
              class="btnBackSettings btnBackSettingsModName"
              data-dismiss="modal"
            >
              إلغاء
            </button>
            <button class="btnNextSettings btnNextSettingsModName">حفظ</button>
          </div>
        </div>
      </div>
    </div>
    <!-- ----------------- -->
    <div
      class="modal fade show"
      id="AddLangmodOffice"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      style="padding-right: 17px"
    >
      <div class="modal-dialog modDialogEditName" role="document">
        <div class="modal-content">
          <div class="modal-header modHead">
            <h5 class="modal-title titleModPort" id="exampleModalLabel">
              إضافة لغة
            </h5>
            <button
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
            <p class="UserNameSettings">اللغة</p>
            <div class="row">
              <div class="col-md-6 col-12">
                <div>
                  <select
                    class="js-example-placeholder-single js-states form-control rowDateofBirth"
                    v-model="language_data.language"
                  >
                    <template v-for="(lang, i) in languages">
                      <option :key="i" :value="i">
                        {{ lang }}
                      </option>
                    </template>
                  </select>
                </div>
              </div>
              <div class="col-md-6 col-12">
                <div>
                  <select
                    class="js-example-placeholder-single js-states form-control rowDateofBirth"
                    v-model="language_data.degree"
                  >
                    <template v-for="(level, i) in levels">
                      <option :key="i" :value="level.value">
                        {{ level.text }}
                      </option>
                    </template>
                  </select>
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
              data-dismiss="modal"
              @click="saveLanguage()"
            >
              حفظ
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- -------------------- -->
    <div
      class="modal fade show"
      id="EditLangmodOffice"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      style="padding-right: 17px"
    >
      <div class="modal-dialog modDialogEditName" role="document">
        <div class="modal-content">
          <div class="modal-header modHead">
            <h5 class="modal-title titleModPort" id="exampleModalLabel">
              تعديل اللغة
            </h5>
            <button
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
            <p class="UserNameSettings">اللغة</p>
            <div class="row">
              <div class="col-md-6 col-12">
                <div>
                  <select
                    class="form-control rowDateofBirth"
                    disabled
                    v-model="language_data.language"
                  >
                    <template v-for="(lang, i) in languages">
                      <option :key="i" :value="i">
                        {{ lang }}
                      </option>
                    </template>
                  </select>
                </div>
              </div>
              <div class="col-md-6 col-12">
                <div>
                  <select
                    class="js-example-placeholder-single js-states form-control rowDateofBirth"
                    v-model="language_data.degree"
                  >
                    <template v-for="(level, i) in levels">
                      <option :key="i" :value="level.value">
                        {{ level.text }}
                      </option>
                    </template>
                  </select>
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
              data-dismiss="modal"
              @click="saveLanguage(language_data.id)"
            >
              حفظ
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- ------------------ -->
    <div
      class="modal fade"
      id="editBioPortTypeone"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modDialogEditName" role="document">
        <div class="modal-content">
          <div class="modal-header modHead">
            <h5 class="modal-title titleModPort" id="exampleModalLabel">
              تعديل النبذة الشخصية
            </h5>
            <button
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
            style="padding-left: 28px; padding-right: 28px; padding-top: 25.5px"
          >
            <p class="NoteBodyEdiNameMod" style="margin-bottom: 31px">
              استخدم هذه المساحة لتظهر للعملاء أن لديك المهارات والخبرة التي
              يبحثون عنها
            </p>
            <p class="NoteBodyEdiNameMod" style="margin-bottom: 3px">
              صِف نقاط قوتك ومهاراتك
            </p>
            <p class="NoteBodyEdiNameMod" style="margin-bottom: 3px">
              تسليط الضوء على المشاريع والإنجازات والتعليم
            </p>
            <p class="NoteBodyEdiNameMod" style="margin-bottom: 24px">
              اجعلها قصيرة وتأكد من خلوها من الأخطاء
            </p>
            <p class="pBodyEdiNameMod">عنوانك</p>
            <p class="NoteBodyEdiNameMod">
              أدخل وصفًا لجملة واحدة لمهاراتك / خبرتك المهنية
            </p>
            <input
              type="text"
              value="محامي نظامي قانوني"
              class="txtUserNameSettings txtUserNameEditmod"
              style="margin-bottom: 0px; margin-top: 0px"
            />
            <textarea
              class="contentScroll contentScrolmodEditBio"
              style="margin-top: 24px"
            >
هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
                                                    إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع.
                                                    ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً،دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه </textarea
            >
            <!-- <input type="text" value="محامي نظامي قانوني" class="txtUserNameSettings txtUserNameEditmod"> -->
          </div>
          <div class="modal-footer footmodEditName">
            <button
              class="btnBackSettings btnBackSettingsModName"
              data-dismiss="modal"
            >
              إلغاء
            </button>
            <button
              class="btnBackSettings btnBackSettingsModName"
              data-dismiss="modal"
            >
              حذف
            </button>

            <button class="btnNextSettings btnNextSettingsModName">حفظ</button>
          </div>
        </div>
      </div>
    </div>
    <!-- modal job edit -->
    <div
      class="modal fade"
      id="editBioPortTypeone"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modDialogEditName" role="document">
        <div class="modal-content">
          <div class="modal-header modHead">
            <h5 class="modal-title titleModPort" id="exampleModalLabel">
              تعديل النبذة الشخصية
            </h5>
            <button
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
            style="padding-left: 28px; padding-right: 28px; padding-top: 25.5px"
          >
            <p class="NoteBodyEdiNameMod" style="margin-bottom: 31px">
              استخدم هذه المساحة لتظهر للعملاء أن لديك المهارات والخبرة التي
              يبحثون عنها
            </p>
            <p class="NoteBodyEdiNameMod" style="margin-bottom: 3px">
              صِف نقاط قوتك ومهاراتك
            </p>
            <p class="NoteBodyEdiNameMod" style="margin-bottom: 3px">
              تسليط الضوء على المشاريع والإنجازات والتعليم
            </p>
            <p class="NoteBodyEdiNameMod" style="margin-bottom: 24px">
              اجعلها قصيرة وتأكد من خلوها من الأخطاء
            </p>
            <p class="pBodyEdiNameMod">عنوانك</p>
            <p class="NoteBodyEdiNameMod">
              أدخل وصفًا لجملة واحدة لمهاراتك / خبرتك المهنية
            </p>
            <input
              type="text"
              value="محامي نظامي قانوني"
              class="txtUserNameSettings txtUserNameEditmod"
              style="margin-bottom: 0px; margin-top: 0px"
            />
            <textarea
              class="contentScroll contentScrolmodEditBio"
              style="margin-top: 24px"
            >
هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
                                                    إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع.
                                                    ومن هنا وجب على المصمم أن يضع نصوصا مؤقتة على التصميم ليظهر للعميل الشكل كاملاً،دور مولد النص العربى أن يوفر على المصمم عناء البحث عن نص بديل لا علاقة له بالموضوع الذى يتحدث عنه </textarea
            >
            <!-- <input type="text" value="محامي نظامي قانوني" class="txtUserNameSettings txtUserNameEditmod"> -->
          </div>
          <div class="modal-footer footmodEditName">
            <button
              class="btnBackSettings btnBackSettingsModName"
              data-dismiss="modal"
            >
              إلغاء
            </button>
            <button
              class="btnBackSettings btnBackSettingsModName"
              data-dismiss="modal"
            >
              حذف
            </button>

            <button class="btnNextSettings btnNextSettingsModName">حفظ</button>
          </div>
        </div>
      </div>
    </div>
    <!-- end of modal job edit -->
    <!---------- -->
    <div
      class="modal fade show"
      id="editBioPortOfficeOne"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      style="padding-right: 17px"
    >
      <div class="modal-dialog modDialogEditName" role="document">
        <div class="modal-content">
          <div class="modal-header modHead">
            <h5 class="modal-title titleModPort" id="exampleModalLabel">
              تعديل النبذة الشخصية
            </h5>
            <button
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
            style="padding-left: 28px; padding-right: 28px; padding-top: 25.5px"
          >
            <p class="NoteBodyEdiNameMod" style="margin-bottom: 31px">
              استخدم هذه المساحة لتظهر للعملاء أن لديك المهارات والخبرة التي
              يبحثون عنها
            </p>
            <p class="NoteBodyEdiNameMod" style="margin-bottom: 3px">
              صِف نقاط قوتك ومهاراتك
            </p>
            <p class="NoteBodyEdiNameMod" style="margin-bottom: 3px">
              تسليط الضوء على المشاريع والإنجازات والتعليم
            </p>
            <p class="NoteBodyEdiNameMod" style="margin-bottom: 24px">
              اجعلها قصيرة وتأكد من خلوها من الأخطاء
            </p>
            <p class="pBodyEdiNameMod">عنوانك</p>
            <p class="NoteBodyEdiNameMod">
              أدخل وصفًا لجملة واحدة لمهاراتك / خبرتك المهنية
            </p>
            <input
              type="text"
              value="مكتب فرسان العدالة"
              class="txtUserNameSettings txtUserNameEditmod"
              style="margin-bottom: 0px; margin-top: 0px"
              v-model="job_data.job_title"
            />
            <textarea
              class="contentScroll contentScrolmodEditBio"
              style="margin-top: 24px"
              v-model="job_data.bio"
            >
            </textarea>
            <!-- <input type="text" value="محامي نظامي قانوني" class="txtUserNameSettings txtUserNameEditmod"> -->
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
              data-dismiss="modal"
              @click="saveJob(job_data.id)"
            >
              حفظ
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- end Content -->
</template>

<script>
import func from "../../../assets/js/functions";
export default {
  data() {
    return {
      lawyer: {},
      guest: false,
      underway_requests: [],
      complete_requests: [],
      my_works: [],
      job_data: {},
      paginate: {},
      language_data: {},
      languages: ["العربية", "English"],
      levels: [
        {
          text: " مبتدئ",
          value: "junior",
        },
        {
          text: " متوسط",
          value: "Intermediate",
        },
        {
          text: " محترف",
          value: "professional",
        },
      ],
      exp_data: {},
      skills: [],
      work: {},
    };
  },
  methods: {
    getUnderwayReq() {
      this.$http
        .get("lawyer/auth/lawyer/my-Request?status=underway")
        .then((res) => {
          this.underway_requests = res.data.data.request;
        });
    },
    getCompleteReq() {
      this.$http
        .get("lawyer/auth/lawyer/my-Request?status=complete")
        .then((res) => {
          this.complete_requests = res.data.data.request;
        });
    },
    getGallary(pageNumber) {
      this.$http
        .get(`lawyer/auth/lawyer/all-gallery?page=${pageNumber}&per_page=3`)
        .then((res) => {
          this.paginate = res.data.data.paginate;
          this.my_works = res.data.data.Gallery;
        });
    },
    getSkills() {
      this.$http.get("api/auth/client/Skills").then((res) => {
        this.skills = res.data.data.Skill;
      });
    },
    saveJob(id) {
      //edit
      if (id) {
        this.$http
          .post("lawyer/auth/lawyer/update-jobs", this.job_data)
          .then(() => {
            this.$notify({
              group: "foo",
              type: "success",
              text: "تم تعديل المسمي الوظيفي بنجاح",
            });
          });
      } else {
        //save
        this.$http
          .post("lawyer/auth/lawyer/update-jobs", this.job_data)
          .then(() => {
            this.$notify({
              group: "foo",
              type: "success",
              text: "تم إضافة المسمي الوظيفي بنجاح",
            });
          });
      }
    },
    editJob(index) {
      this.job_data = this.$store.state.user.jobs[index];
    },
    saveLanguage(id) {
      if (id) {
        this.$http
          .post("lawyer/auth/lawyer/update-language", this.language_data)
          .then(() => {
            this.$notify({
              group: "foo",
              type: "success",
              text: "تم تحديث  اللغة بنجاح",
            });
          });
      } else {
        this.$http
          .post("lawyer/auth/lawyer/update-language", this.language_data)
          .then(() => {
            this.$notify({
              group: "foo",
              type: "success",
              text: "تم إضافة  اللغة بنجاح",
            });
          });
      }
    },
    editLanguage(index) {
      this.language_data = this.$store.state.user.language[index];
      this.language_data.language = this.$store.state.user.language[index].name;
    },
    saveExperience(id) {
      if (id) {
        this.$http
          .post("lawyer/auth/lawyer/update-experience", this.exp_data)
          .then(() => {
            this.$notify({
              group: "foo",
              type: "success",
              text: "تم تحديث  المهارات بنجاح",
            });
          });
      } else {
        this.exp_data.speciality_id = 1;

        this.$http
          .post("lawyer/auth/lawyer/update-experience", this.exp_data)
          .then(() => {
            this.$notify({
              group: "foo",
              type: "success",
              text: "تم إضافة  المهارة بنجاح",
            });
          });
      }
    },
    editExp(index) {
      this.exp_data = this.$store.state.user.experience[index];
    },
    saveWork() {},
    editWork(work) {
      this.work = work;
    },
  },
  mounted() {
    func();
    this.getUnderwayReq();
    this.getCompleteReq();
    this.getGallary();
    this.getSkills();
    if (this.$route.params.id) {
      this.$http
        .get(`api/auth/client/profile-Lawery/${this.$route.params.id}`)
        .then((res) => {
          this.lawyer = {};
          this.lawyer = Object.assign({}, res.data.data);
        });
    }
  },
};
</script>
