<template>
  <div>
    <!-- Start Content profile-->
    <div class="container contentLawyerSection">
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
                          : require('../../assets/img/PersonalImg.png')
                      "
                      alt=""
                    />
                  </div>
                  <div class="absoIconProfile">
                    <router-link to="/edit-profile">
                      <div
                        v-if="!isShownAsPublic"
                        class="absoIconEdit hideIconEdit"
                      >
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
                      </div>
                    </router-link>
                    <!-- Modal -->
                    <!-- <div class="modal fade" id="editTitlePort" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                                    <input type="text" value="محامي نظامي قانوني" class="txtUserNameSettings txtUserNameEditmod">
                                                    </div>
                                                    <div class="modal-footer footmodEditName">
                                                            <button class="btnBackSettings btnBackSettingsModName"  data-dismiss="modal">إلغاء</button>
                                                            <button class="btnNextSettings btnNextSettingsModName">حفظ</button>
                                                    </div>
                                                </div>
                                                </div>
                                            </div> -->
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
                  <p class="pPositionProfile">صاحب مشاريع</p>
                  <div class="divGps">
                    <i class="fas fa-map-marker-alt gpsIcon"></i>
                    <p class="pLocationProfile">
                      {{
                        `${
                          $store.state.user.country
                        } - التوقيت المحلي ${new Date().getHours()}:${new Date().getMinutes()}`
                      }}
                    </p>
                  </div>
                  <div>
                    <p class="numProgress">{{ $store.state.user.avg }}%</p>
                    <div class="progress progressProjects">
                      <div
                        class="progress-bar"
                        role="progressbar"
                        :style="{
                          'border-radius': '12px',
                          'background-color': '#468995',
                          width: `${$store.state.user.avg}%`,
                        }"
                        aria-valuenow="80"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <p class="pProgress">معدل التوظيف</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-5 col-md-6 col-12">
              <div class="divBtnsProfile row profile-buttons-main-container">
                <div
                  class="col-12 colbtnSetProfile d-flex profile-buttons-container-1"
                >
                  <button
                    :class="`btnProfile ${
                      isShownAsPublic
                        ? 'client-profile-active-btn'
                        : 'client-profile-inactive-btn'
                    }`"
                    style="margin: 0"
                    @click="() => (isShownAsPublic = !isShownAsPublic)"
                  >
                    عرض كما يظهر للعام
                  </button>
                  <button
                    v-show="!isShownAsPublic"
                    :class="`btnProfile ${
                      isShownAsPublic
                        ? 'client-profile-inactive-btn'
                        : 'client-profile-active-btn'
                    }`"
                    style="margin: 0"
                    @click="() => $router.push('/edit-profile')"
                  >
                    إعدادات الملف الشخصي
                  </button>
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
                  <!-- <div class="backIconShowProfile hideIconEdit" data-toggle="modal" data-target="#AddBioTitle">
                    <i class="fas fa-plus" style="cursor: pointer;"></i>
                  </div>
                  <div id="AddBioTitle" class="modal fade show" tabindex="-1" role="dialog"
                    aria-labelledby="exampleModalLabel" style="padding-right: 17px">
                    <div class="modal-dialog modDialogEditName" role="document">
                      <div class="modal-content">
                        <div class="modal-header modHead">
                          <h5 id="exampleModalLabel" class="modal-title titleModPort">
                            إضافة مسمى وظيفي جديد
                          </h5>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                          </button>
                        </div>
                        <div class="modal-body" style="padding-right: 28px; padding-left: 28px">
                          <h6 class="pBio">
                            ما هو المسمى الوظيفي الذي تود أن يمثلك
                          </h6>
                          <input type="text" class="txtUserNameSettings txtBio" />
                          <h6 class="pBio">
                            اكتب نبذة شخصية عنك تظهر في حسابك
                          </h6>
                          <textarea class="txtUserNameSettings textareaSettings" style="height: 169px !important"
                            cols="30" rows="10"></textarea>
                        </div>
                        <div class="modal-footer footmodEditName">
                          <button class="btnBackSettings btnBackSettingsModName" data-dismiss="modal">
                            إلغاء
                          </button>
                          <button class="btnNextSettings btnNextSettingsModName">
                            حفظ
                          </button>
                        </div>
                      </div>
                    </div>
                  </div> -->
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
                  id="v-pills-tab"
                  class="btnsShowProfile showProfileTabs nav flex-column nav-pills"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <button
                    v-if="ClientJobs.length"
                    id="client-job-tab"
                    class="btnTypeLawProfile nav-link active"
                    data-bs-toggle="pill"
                    :data-bs-target="`#${ClientJobs[0].job_title}`"
                    type="button"
                    role="tab"
                    :aria-controls="ClientJobs[0].job_title"
                    aria-selected="false"
                  >
                    <p>{{ last(ClientJobs).job_title }}</p>
                    <i class="fas fa-chevron-left iconArrow"></i>
                  </button>
                </div>
              </div>
              <div class="divShowProfile">
                <div class="flexHeadSHow flexLang" style="min-height: 30px">
                  <p class="pShowProfile">اللغات</p>
                  <div
                    v-if="
                      !isShownAsPublic &&
                      allLanguageOptions.length > languages.length
                    "
                    class="backIconShowProfile hideIconEdit"
                    data-toggle="modal"
                    data-target="#AddLangmod"
                  >
                    <i class="fas fa-plus" style="cursor: pointer"></i>
                  </div>
                  <div
                    id="AddLangmod"
                    class="modal fade show"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalLabel"
                    style="padding-right: 17px"
                  >
                    <div class="modal-dialog modDialogEditName" role="document">
                      <div class="modal-content">
                        <div class="modal-header modHead">
                          <h5
                            id="exampleModalLabel"
                            class="modal-title titleModPort"
                          >
                            إضافة لغة
                          </h5>
                          <button
                            ref="closeAddLanguageModal"
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
                                  v-model="languageToAdd.language"
                                  class="js-example-placeholder-single js-states form-control rowDateofBirth"
                                >
                                  <option
                                    selected
                                    disabled
                                    value=""
                                    style="font-size: 18px; color: #a2a2a6"
                                  >
                                    قم بتحديد لغة
                                  </option>
                                  <option
                                    v-if="
                                      !languages.find(
                                        (l) => l.language === 'العربية'
                                      )
                                    "
                                    value="العربية"
                                  >
                                    العربية
                                  </option>
                                  <option
                                    v-if="
                                      !languages.find(
                                        (l) => l.language === 'English'
                                      )
                                    "
                                    value="English"
                                  >
                                    English
                                  </option>
                                </select>
                              </div>
                            </div>
                            <div class="col-md-6 col-12">
                              <div>
                                <select
                                  v-model="languageToAdd.degree"
                                  class="js-example-placeholder-single js-states form-control rowDateofBirth"
                                >
                                  <option selected disabled value="">
                                    حدد مستواك في اللغة
                                  </option>
                                  <option
                                    v-for="level in languageLevels"
                                    :key="level.value"
                                    :value="level.value"
                                  >
                                    {{ level.text }}
                                  </option>
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
                            @click="() => saveLanguage(languageToAdd)"
                          >
                            حفظ
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    v-if="!isShownAsPublic && languages.length"
                    class="backIconShowProfile hideIconEdit"
                    style="cursor: pointer"
                    data-toggle="modal"
                    data-target="#EditLangmod"
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
                          <h5
                            id="exampleModalLabel"
                            class="modal-title titleModPort"
                          >
                            تعديل اللغة
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
                          <p class="UserNameSettings">اللغة</p>
                          <div class="row">
                            <div class="col-md-6 col-12">
                              <div>
                                <select
                                  :value="languageToEdit.language || ''"
                                  class="js-example-placeholder-single js-states form-control rowDateofBirth"
                                  @change="
                                    (e) =>
                                      (languageToEdit = Object.assign(
                                        {},
                                        e.target.value
                                      ))
                                  "
                                >
                                  <option disabled value="">
                                    قم بتحديد لغة
                                  </option>
                                  <option
                                    v-for="(lang, i) in languages"
                                    :key="lang.language"
                                    :selected="i === 0"
                                    :value="lang"
                                  >
                                    {{ lang.language }}
                                  </option>
                                </select>
                              </div>
                            </div>
                            <div class="col-md-6 col-12">
                              <div>
                                <select
                                  v-model="languageToEdit.degree"
                                  class="js-example-placeholder-single js-states form-control rowDateofBirth"
                                >
                                  <option selected disabled>
                                    حدد مستواك في اللغة
                                  </option>
                                  <option
                                    v-for="level in languageLevels"
                                    :key="level.value"
                                    :value="level.value"
                                  >
                                    {{ level.text }}
                                  </option>
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
                            @click="() => saveLanguage(languageToEdit)"
                          >
                            حفظ
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  v-for="(lang, i) in $store.state.user.language"
                  :key="i"
                  class="divPLang"
                >
                  <p class="pLangProfile">{{ lang.language }}:</p>
                  <p class="pLevelLang">
                    {{ getDegreeTranslation(lang.degree) }}
                  </p>
                </div>

                <div class="divEduProfile divNumsClient">
                  <div class="flexHeadSHow flexHeadEdu">
                    <p class="pShowProfile">إحصائيات</p>
                  </div>
                  <div class="divPLeveEdu">
                    <div>
                      <p class="pProjectsProfile">المشاريع المستلمة:</p>
                      <label>34</label>
                    </div>
                    <div>
                      <p class="pProjectsProfile">مشاريع قيد التنفيذ:</p>
                      <label>3</label>
                    </div>
                    <div>
                      <p class="pProjectsProfile">إجمالي تعاملاتي معه:</p>
                      <label>3</label>
                    </div>
                  </div>
                </div>
                <div class="divLastOnline">
                  <div class="divPLang pResgisterOnline">
                    <p class="pLangProfile">تاريخ التسجيل:</p>
                    <p class="pLevelLang">3/12/2021</p>
                  </div>
                  <div class="divPLang pLastonline">
                    <p class="pLangProfile">آخر تواجد:</p>
                    <p class="pLevelLang">منذ 3 دقائق</p>
                  </div>
                </div>
                <div class="divVerfiyProfile divVerfiyProfileEntre">
                  <p class="pLangProfile pVerfiyProfile">التوثيقات</p>
                  <div class="row">
                    <div class="col-lg-5 col-12">
                      <div class="verfiyThings">
                        <i class="fas fa-check verfiyCheckProfile"></i>
                        <p>الهوية</p>
                      </div>
                      <div class="verfiyThings">
                        <i class="fas fa-check verfiyCheckProfile"></i>
                        <p>رقم الجوال</p>
                      </div>
                    </div>
                    <div class="col-lg-7 col-12">
                      <div class="verfiyThings">
                        <i class="fas fa-check verfiyCheckProfile"></i>
                        <p>البريد الالكتروني</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="divDecorations divDecorationsEntre">
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
              <div id="v-pills-tabContent" class="tab-content">
                <div
                  id="v-pills-All"
                  class="SectionBio tab-pane fade show active"
                  role="tabpanel"
                  aria-labelledby="job-bio-tab"
                >
                  <div class="row divrowbio">
                    <div
                      v-if="last(ClientJobs) && last(ClientJobs).job_title"
                      class="col-md-10 col-8"
                    >
                      <div class="flexHeadBio">
                        <div class="flexHeadSHow">
                          <p class="pShowProfile">
                            {{
                              last(ClientJobs) ? last(ClientJobs).job_title : ""
                            }}
                          </p>
                          <div
                            v-if="!isShownAsPublic"
                            class="backIconShowProfile hideIconEdit"
                            data-toggle="modal"
                            data-target="#editBioPort"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="14"
                              height="13.985"
                              viewBox="0 0 14 13.985"
                              style="cursor: pointer"
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
                          <!-- Modal -->
                          <div
                            id="editBioPort"
                            class="modal fade"
                            tabindex="-1"
                            role="dialog"
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true"
                          >
                            <div
                              class="modal-dialog modDialogEditName"
                              role="document"
                            >
                              <div class="modal-content">
                                <div class="modal-header modHead">
                                  <h5
                                    id="exampleModalLabel"
                                    class="modal-title titleModPort"
                                  >
                                    تعديل النبذة الشخصية
                                  </h5>
                                  <button
                                    type="button"
                                    class="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                  >
                                    <span aria-hidden="true">&times;</span>
                                  </button>
                                </div>
                                <div
                                  class="modal-body"
                                  style="
                                    padding-left: 28px;
                                    padding-right: 28px;
                                    padding-top: 25.5px;
                                  "
                                >
                                  <p class="NoteBodyEdiNameMod">
                                    أدخل وصفًا لجملة واحدة لمهاراتك / خبرتك
                                    المهنية
                                  </p>
                                  <input
                                    v-model="currentPosition.job_title"
                                    type="text"
                                    class="txtUserNameSettings txtUserNameEditmod"
                                    style="margin-bottom: 0px; margin-top: 0px"
                                  />
                                  <textarea
                                    v-model="currentPosition.desc"
                                    class="contentScroll contentScrolmodEditBio"
                                    style="margin-top: 24px"
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
                                    @click="saveClientJob"
                                  >
                                    حفظ
                                  </button>
                                </div>
                              </div>
                            </div>
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
                    <p v-if="ClientJobs.length">
                      {{
                        !isBioExpanded && last(ClientJobs).desc.length > 475
                          ? last(ClientJobs).desc.slice(0, 475) + "..."
                          : last(ClientJobs).desc
                      }}
                    </p>
                    <button
                      v-if="
                        ClientJobs.length && last(ClientJobs).desc.length > 475
                      "
                      id="btnMoreBioTwo"
                      class="aBio"
                      @click="() => (isBioExpanded = !isBioExpanded)"
                    >
                      {{ isBioExpanded ? "أقل" : "المزيد" }}
                    </button>
                  </div>
                </div>
              </div>
              <!-- <div id="v-pills-tabContent" class="tab-content"> -->
              <!-- </div> -->

              <div class="divWorksProfile">
                <p class="TitleWorksProfile">سجل الأعمال</p>
                <ul id="myTab" class="nav nav-tabs ulProfile" role="tablist">
                  <li class="nav-item">
                    <a
                      id="open-tab"
                      class="nav-link active aProgressTab activeAccept"
                      data-toggle="tab"
                      href="#open"
                      role="tab"
                      aria-controls="open"
                      aria-selected="true"
                      >مفتوح</a
                    >
                  </li>

                  <li class="nav-item">
                    <a
                      id="profile-tab"
                      class="nav-link aProgressTab activeProgress"
                      data-toggle="tab"
                      href="#progress"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                      >قيد التنفيذ</a
                    >
                  </li>
                  <li class="nav-item">
                    <a
                      id="home-tab"
                      class="nav-link aProgressTab activeComplete"
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
                      id="close-tab"
                      class="nav-link aProgressTab activeClose"
                      data-toggle="tab"
                      href="#close"
                      role="tab"
                      aria-controls="close"
                      aria-selected="true"
                      >مغلق</a
                    >
                  </li>
                </ul>
                <div id="myTabContent" class="tab-content tabcontentProfile">
                  <div
                    id="complete"
                    class="tab-pane fade"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div v-for="order in myOrders_complete" :key="order.id">
                      <a href="OrderComplete.html">
                        <p class="pTitleWorksProfile">
                          {{ order.title }}
                        </p>
                      </a>
                      <p class="pWorksProfile">
                        {{ order.description }}
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
                            {{ order.created_at | formatDate }} -
                            {{
                              addDays(
                                new Date(order.created_at),
                                order.delivery_time_form
                              ) | formatDate
                            }}
                          </p>
                        </div>
                      </div>
                      <hr class="hrProfile" />
                    </div>
                    <div
                      v-if="
                        !myOrders_complete.length &&
                        !isFetchingOrders.myOrders_complete
                      "
                      style="
                        display: flex;
                        align-items: center;
                        justify-content: center;
                      "
                    >
                      <p style="margin: 80px 0px 100px">
                        ليس هناك طلبات مكتملة
                      </p>
                    </div>
                    <div
                      v-else-if="isFetchingOrders.myOrders_complete"
                      style="
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        padding: 4rem 2.5rem 4rem 4rem;
                      "
                    >
                      <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                      </div>
                    </div>
                  </div>
                  <div
                    id="progress"
                    class="tab-pane fade"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <div v-for="order in myOrders_underway" :key="order.id">
                      <a href="OrderComplete.html">
                        <p class="pTitleWorksProfile">
                          {{ order.title }}
                        </p>
                      </a>
                      <p class="pWorksProfile">
                        {{ order.description }}
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
                            {{ order.created_at | formatDate }} -
                            {{
                              addDays(
                                new Date(order.created_at),
                                order.delivery_time_form
                              ) | formatDate
                            }}
                          </p>
                        </div>
                      </div>
                      <hr class="hrProfile" />
                    </div>
                    <div
                      v-if="
                        !myOrders_underway.length &&
                        !isFetchingOrders.myOrders_underway
                      "
                      style="
                        display: flex;
                        align-items: center;
                        justify-content: center;
                      "
                    >
                      <p style="margin: 80px 0px 100px">
                        ليس هناك طلبات قيد التنفيذ
                      </p>
                    </div>
                    <div
                      v-else-if="isFetchingOrders.myOrders_underway"
                      style="
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        padding: 4rem 2.5rem 4rem 4rem;
                      "
                    >
                      <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                      </div>
                    </div>
                  </div>
                  <div
                    id="open"
                    class="tab-pane fade show active"
                    role="tabpanel"
                    aria-labelledby="open-tab"
                  >
                    <div v-for="order in myOrders_open" :key="order.id">
                      <a href="OrderComplete.html">
                        <p class="pTitleWorksProfile">
                          {{ order.title }}
                        </p>
                      </a>
                      <p class="pWorksProfile">
                        {{ order.description }}
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
                            {{ order.created_at | formatDate }} -
                            {{
                              addDays(
                                new Date(order.created_at),
                                order.delivery_time_form
                              ) | formatDate
                            }}
                          </p>
                        </div>
                      </div>
                      <hr class="hrProfile" />
                    </div>
                    <div
                      v-if="
                        !myOrders_open.length && !isFetchingOrders.myOrders_open
                      "
                      style="
                        display: flex;
                        align-items: center;
                        justify-content: center;
                      "
                    >
                      <p style="margin: 80px 0px 100px">
                        ليس هناك طلبات مفتوحة
                      </p>
                    </div>
                    <div
                      v-else-if="isFetchingOrders.myOrders_open"
                      style="
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        padding: 4rem 2.5rem 4rem 4rem;
                      "
                    >
                      <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                      </div>
                    </div>
                  </div>
                  <div
                    id="close"
                    class="tab-pane fade"
                    role="tabpanel"
                    aria-labelledby="close-tab"
                  >
                    <div v-for="order in myOrders_close" :key="order.id">
                      <a href="OrderComplete.html">
                        <p class="pTitleWorksProfile">
                          {{ order.title }}
                        </p>
                      </a>
                      <p class="pWorksProfile">
                        {{ order.description }}
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
                            {{ order.created_at | formatDate }} -
                            {{
                              addDays(
                                new Date(order.created_at),
                                order.delivery_time_form
                              ) | formatDate
                            }}
                          </p>
                        </div>
                      </div>
                      <hr class="hrProfile" />
                    </div>
                    <div
                      v-if="
                        !myOrders_close.length &&
                        !isFetchingOrders.myOrders_close
                      "
                      style="
                        display: flex;
                        align-items: center;
                        justify-content: center;
                      "
                    >
                      <p style="margin: 80px 0px 100px">ليس هناك طلبات مغلقة</p>
                    </div>
                    <div
                      v-else-if="isFetchingOrders.myOrders_close"
                      style="
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        padding: 4rem 2.5rem 4rem 4rem;
                      "
                    >
                      <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end Content -->
    <!--start content rates-->
    <!-- Start Content -->
    <div class="container contentReviewSection">
      <div class="contentProfile">
        <div class="headProfile">
          <div class="row">
            <div class="col-lg-9 col-md-6 col-12">
              <div class="InfoProfile">
                <div class="divImgProfile">
                  <div class="imgProfile">
                    <img src="img/lawyer.png" alt="" />
                  </div>
                  <div class="absoIconProfile">
                    <!-- <div class="absoIconEdit" >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="11.987" viewBox="0 0 12 11.987">
                                            <g id="pencil_2_" data-name="pencil (2)" transform="translate(0 -0.246)">
                                              <path id="Path_1910" data-name="Path 1910" d="M7.41,82.473l-6.6,6.6a.263.263,0,0,0-.069.121L.007,92.134a.26.26,0,0,0,.252.323.258.258,0,0,0,.063-.008l2.937-.732a.26.26,0,0,0,.121-.069l6.6-6.6Zm0,0" transform="translate(0 -80.223)" fill="#848484"/>
                                              <path id="Path_1911" data-name="Path 1911" d="M337.8,1.35l-.735-.735a1.331,1.331,0,0,0-1.838,0l-.9.9L336.9,4.088l.9-.9a1.3,1.3,0,0,0,0-1.838Zm0,0" transform="translate(-326.182)" fill="#848484"/>
                                            </g>
                                          </svg>
                                    </div>
                                     -->

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
                  <p class="NameProfile">محمد أحمد عيد</p>
                  <div class="online"></div>
                  <p class="pPositionProfile">
                    محامي نظامي قانوني- قانون سعودي
                  </p>
                  <div class="divGps">
                    <i class="fas fa-map-marker-alt gpsIcon"></i>
                    <p class="pLocationProfile">
                      المملكة العربية السعودية - 1pm التوقيت المحلي
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
            <div class="col-lg-3 col-md-6 col-12 colBtnProfileSetRate">
              <div class="divBtnsProfile row">
                <!-- <div class="col-lg-6 col-12">
                            <button class="btnProfile btnViewProfile">عرض كما يظهر للعام</button>
                            </div> -->
                <div class="colbtnSetProfile">
                  <button class="btnProfile btnSetProfile">
                    <a href="Edit_Profile.html"> إعدادات الملف الشخصي </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bodyProfile">
          <div class="row">
            <div class="col-lg-4 col-md-5 col-12 rightColProfile">
              <div class="divStatisticsReviews">
                <p class="pStatisticsReviews">إحصائيات</p>
                <hr class="hrProfile" />
                <div class="flexHeadReviews">
                  <p class="PReviews">التقييمات</p>
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
                      <i class="fas fa-star-half-alt star"></i>
                      <!-- <i class="fas fa-star "></i> -->
                    </div>
                    <p class="pStarts">4.5</p>
                  </div>
                </div>
                <div class="flexCompeleProject">
                  <p class="PflexCompeleProject">معدل اكمال المشاريع</p>
                  <div class="backcompleteProject">88%</div>
                </div>
                <div class="flexCompeleProject">
                  <p class="PflexCompeleProject">معدل إعادة التوظيف</p>
                  <div class="backcompleteProject greenBackReviews">88%</div>
                </div>
                <div class="flexCompeleProject">
                  <p class="PflexCompeleProject">معدل التسليم بالوقت</p>
                  <div class="backcompleteProject greenBackReviews">100%</div>
                </div>
                <div class="flexCompeleProject">
                  <p class="PflexCompeleProject">متوسط سرعة الرد</p>
                  <div>
                    <p class="NumPflexCompeleProject">3 دقائق</p>
                  </div>
                </div>
                <div class="flexCompeleProject">
                  <p class="PflexCompeleProject">المشاريع المكتملة</p>
                  <p class="NumPflexCompeleProject pProjectNum">4</p>
                </div>
                <div class="flexCompeleProject">
                  <p class="PflexCompeleProject">مشاريع يعمل عليها</p>
                  <p class="NumPflexCompeleProject pProjectNum">1</p>
                </div>
              </div>
              <div class="secOnlineReviews">
                <div class="row">
                  <div class="col-6">
                    <div>تاريخ التسجيل</div>
                    <div>آخر تواجد</div>
                  </div>
                  <div class="col-6">
                    <div>24 ديسمبر 2021</div>
                    <div>منذ دقيقة</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-8 col-md-7 col-12 LeftColProfile">
              <div class="secRates">
                <div class="FlexHeadColReviews">
                  <div>
                    <p class="TitleColRates">التقييمات</p>
                  </div>
                  <div>
                    <div class="BackArrowRates">
                      <i class="fas fa-chevron-right"></i>
                    </div>
                  </div>
                </div>
                <div>
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
                        <i class="far fa-star star outlineStar"></i>
                      </div>
                      <div>
                        <i class="far fa-star star outlineStar"></i>
                      </div>
                      <p class="pStarts">3.00</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="secTestimonials">
                <div class="FlexHeadTestimonials">
                  <div>
                    <p class="TitleTestimonials">آراء العملاء</p>
                  </div>
                  <div>
                    <button class="BackIconTestimonials">
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
                </div>
                <hr class="hrTestimonials" />

                <div class="secFeedback">
                  <div class="flexTitleProjectRates">
                    <p>
                      هذا النص هو مثال لنص يمكن أن يستبدل في المساحة(عنوان
                      الاستشارة)
                    </p>
                    <div class="backcompleteProject pbackcompleteProject">
                      <p>مكتمل</p>
                    </div>
                  </div>
                  <div class="divClockRate">
                    <i class="far fa-clock"></i>
                    <label>منذ 3 شهور</label>
                  </div>
                  <div class="divPointsRate">
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
                  <div>
                    <div class="flexInfoClient">
                      <div class="imgProfile imgProfileClient">
                        <img src="img/lawyer.png" alt="" />
                      </div>
                      <div class="divNameClient">
                        <div>
                          <p class="NameClient">محمد عيد</p>
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
                      <p class="pFeedbackClient">
                        هذا النص هو مثال لنص يمكن أن يستبدل في الم... المساحة
                      </p>
                      <p class="pFeedbackClient">
                        هذا النص هو مثال لنص يمكن أن يستبدل في الم... المساحة
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end Content -->
    <!--end content rates-->
  </div>
</template>

<script>
import uniqBy from "lodash/uniqBy";
import format from "date-fns/format";
import addDays from "date-fns/addDays";
import { languageOptions, languageLevels } from "../../constants/index";

export default {
  filters: {
    formatDate(val) {
      try {
        const date = val ? format(new Date(val), "d/M/yyyy") : ``;
        return date;
      } catch (err) {
        console.error(err);
      }
      return val;
    },
  },
  data() {
    return {
      isShownAsPublic: false,
      languageOptions,
      languageLevels,
      currentPosition: this.last(this.$store.state.user.ClientJobs),
      isBioExpanded: false,
      languageToEdit: { ...this.$store.state.user.language[0] },
      languageToAdd: { id: null, language: "", degree: "" },
      isFetchingOrders: {
        myOrders_open: true,
        myOrders_close: true,
        myOrders_underway: true,
        myOrders_complete: true,
      },
      myOrders_open: [],
      myOrders_close: [],
      myOrders_underway: [],
      myOrders_complete: [],
    };
  },
  computed: {
    ClientJobs() {
      return this.$store.state.user.ClientJobs || [];
    },
    languages() {
      return this.$store.state.user.language.map((l) => {
        l.language = l.language || l.name;
        delete l.name;
        return l;
      });
    },
    allLanguageOptions() {
      // TODO: this should only return the "languageOptions",
      // but to show already submitted languages with wrong names concat is used
      const allOptions = languageOptions.concat(
        this.$store.state.user.language.map((e) => e.language)
      );
      return uniqBy(allOptions, (e) => e);
    },
  },
  created() {
    this.$store.getters.getMyOrders_open.then((res) => {
      this.isFetchingOrders.myOrders_open = false;
      this.myOrders_open = (res.data.data.request || []).sort((a, b) =>
        new Date(b.created_at) > new Date(a.craeted_at) ? 1 : -1
      );
    });
    this.$store.getters.getMyOrders_close.then((res) => {
      this.isFetchingOrders.myOrders_close = false;
      this.myOrders_close = (res.data.data.request || []).sort((a, b) =>
        new Date(b.created_at) > new Date(a.craeted_at) ? 1 : -1
      );
    });
    this.$store.getters.getMyOrders_underway.then((res) => {
      this.isFetchingOrders.myOrders_underway = false;
      this.myOrders_underway = (res.data.data.request || []).sort((a, b) =>
        new Date(b.created_at) > new Date(a.craeted_at) ? 1 : -1
      );
    });
    this.$store.getters.getMyOrders_complete.then((res) => {
      this.isFetchingOrders.myOrders_complete = false;
      this.myOrders_complete = (res.data.data.request || []).sort((a, b) =>
        new Date(b.created_at) > new Date(a.craeted_at) ? 1 : -1
      );
    });
  },
  methods: {
    addDays,
    getDegreeTranslation(degree) {
      return languageLevels.find((l) => l.value === degree)?.text || degree;
    },
    last(array) {
      const length = array?.length;
      return length ? array[length - 1] : array[0] || {};
    },
    async saveClientJob() {
      try {
        await this.$http.post("api/auth/client/edit-job", this.currentPosition);
        const userInfo = await this.$http.get("api/auth/client/profile");
        await this.$store.commit("setUser", userInfo.data.data);
        this.$notify({
          group: "foo",
          type: "success",
          text: "تم تحديث البيانات بنجاح",
        });
      } catch (err) {
        this.$notify({
          group: "foo",
          type: "error",
          text: "لم يتم التحديث, يرجى المحاولة لاحقا",
        });
      }
    },
    async saveLanguage(lang) {
      if (!(lang.name || lang.language) || !lang.degree) {
        return;
      }
      try {
        await this.$http.post("api/auth/client/edit-languages", {
          language: [lang],
        });
        const userInfo = await this.$http.get("api/auth/client/profile");
        await this.$store.commit("setUser", userInfo.data.data);
        this.$notify({
          group: "foo",
          type: "success",
          text: "تم تحديث البيانات بنجاح",
        });
      } catch (err) {
        this.$notify({
          group: "foo",
          type: "error",
          text: "لم يتم التحديث, يرجى المحاولة لاحقا",
        });
      }
      this.$refs.closeEditLanguageModal.click();
      this.$refs.closeAddLanguageModal.click();
    },
  },
};
</script>

<style>
.contentGride {
  /* width: 300px; */
  position: relative;
  margin-bottom: 294px;
  /* background: blue; */
  margin-right: 23.8px;
}

.draggable {
  /* display: inline-block;
  float: left;
  height: 60px;
  padding: 20px 0;
  margin: 5px;
  text-align: center;
  background: yellow; */
  position: absolute;
  transition: all 700ms ease;
  padding-right: 0px;
}
</style>
