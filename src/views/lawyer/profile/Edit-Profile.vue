<template>
  <!-- Start Content -->
  <div class="container contentSettings">
    <!-- <div class="pagesLinks">
            <a href="#">الرئيسية/</a>
            <a href="#">الإعدادات</a>
        </div> -->
    <h3 class="hTitle hSettingsPage">الإعدادات</h3>
    <!-- class="d-flex align-items-start" -->
    <div class="lawyer-edit-profile">
      <div class="row">
        <div class="col-lg-3 col-md-5 col-12 colTabsSettings">
          <!-- start div Tabs -->
          <div
            id="v-pills-tab"
            class="nav flex-column nav-pills me-3"
            role="tablist"
            aria-orientation="vertical"
          >
            <button
              id="v-pills-photo-tab"
              ref="step1"
              type="button"
              role="tab"
              aria-controls="v-pills-photo"
              aria-selected="true"
              :class="`nav-link btnTabs ${
                activeStep === 1 ? 'active active-c-btn' : ''
              }`"
              @click="() => (activeStep = 1)"
            >
              الصورة الشخصية
              <!-- <i class="fas fa-check-circle iconCheck"></i> -->
            </button>
            <button
              id="v-pills-profile-tab"
              ref="step2"
              type="button"
              role="tab"
              aria-controls="v-pills-profile"
              aria-selected="false"
              :class="`nav-link btnTabs ${
                activeStep === 2 ? 'active active-c-btn' : ''
              }`"
              @click="() => (activeStep = 2)"
            >
              البيانات الشخصية
            </button>
            <button
              id="v-pills-skills-tab"
              ref="step3"
              type="button"
              role="tab"
              aria-controls="v-pills-skills"
              aria-selected="false"
              :class="`nav-link btnTabs ${
                activeStep === 3 ? 'active active-c-btn' : ''
              }`"
              @click="() => (activeStep = 3)"
            >
              الخبرات والمهارات
            </button>
            <button
              id="v-pills-bio-tab"
              ref="step4"
              type="button"
              role="tab"
              aria-controls="v-pills-bio"
              aria-selected="false"
              :class="`nav-link btnTabs ${
                activeStep === 4 ? 'active active-c-btn' : ''
              }`"
              @click="() => (activeStep = 4)"
            >
              المسمى الوظيفي والنبذة
            </button>
            <button
              id="v-pills-edu-tab"
              ref="step5"
              type="button"
              role="tab"
              aria-controls="v-pills-edu"
              aria-selected="false"
              :class="`nav-link btnTabs ${
                activeStep === 5 ? 'active active-c-btn' : ''
              }`"
              @click="() => (activeStep = 5)"
            >
              التعليم واللغات
            </button>
            <button
              id="v-pills-work-tab"
              ref="step6"
              type="button"
              role="tab"
              aria-controls="v-pills-work"
              aria-selected="false"
              :class="`nav-link btnTabs ${
                activeStep === 6 ? 'active active-c-btn' : ''
              }`"
              @click="() => (activeStep = 6)"
            >
              العمل والخبرات العملية
            </button>
            <button
              id="v-pills-job-tab"
              ref="step7"
              type="button"
              role="tab"
              aria-controls="v-pills-job"
              aria-selected="false"
              :class="`nav-link btnTabs ${
                activeStep === 7 ? 'active active-c-btn' : ''
              }`"
              @click="() => (activeStep = 7)"
            >
              مزاولة المهنة
            </button>
          </div>
          <!-- end div Tabs -->
        </div>
        <div class="col-lg-9 col-md-7 col-12">
          <!-- start div content Tabs -->
          <div id="v-pills-tabContent" class="tab-content">
            <div
              id="v-pills-photo"
              :class="`tab-pane ${activeStep === 1 ? 'show active' : 'fade'}`"
              role="tabpanel"
              aria-labelledby="v-pills-photo-tab"
            >
              <div class="tabContents">
                <div class="headTabs">
                  <h6>الصورة الشخصية</h6>
                  <p class="numTabs">7 - 1</p>
                </div>
                <hr class="hrHeadSettings" />
                <div class="bodyTabs">
                  <p class="numTabs">
                    رجاء، قم بتحميل صورة بروفيشنال تكون واضحة وتُظهر ملامحك
                  </p>
                  <div class="divPersonalImg">
                    <img
                      ref="profileImage"
                      :src="
                        previewImage ||
                        require('../../../assets/img/PersonalImg.png')
                      "
                      alt=""
                      accept="image/*"
                      style="
                        max-width: 150px !impoertant;
                        max-height: 150px !impoertant;
                        height: 150px !important;
                        width: 150px !important;
                      "
                      class="rounded-circle"
                    />
                    <!-- Button trigger modal -->
                    <button
                      type="button"
                      class="btn btnAddLang"
                      data-toggle="modal"
                      data-target="#exampleModalCenterPhoto"
                    >
                      <i class="fas fa-plus addLang"></i> إضافة صورة شخصية
                    </button>
                    <div
                      id="exampleModalCenterPhoto"
                      class="modal fade show"
                      tabindex="-1"
                      role="dialog"
                      aria-labelledby="exampleModalLabel"
                      style="padding-right: 17px"
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
                              إضافة صورة شخصية
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
                            <div class="input-group mb-3 groupFilePhoto">
                              <div class="input-group-prepend">
                                <span class="input-group-text">تحميل</span>
                              </div>
                              <div class="custom-file">
                                <input
                                  id="inputGroupFile01"
                                  type="file"
                                  class="custom-file-input"
                                  @change="getPhoto"
                                />
                                <label
                                  class="custom-file-label lblChooseFile"
                                  for="inputGroupFile01"
                                  >اختيار ملف</label
                                >
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
                            >
                              حفظ
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h6 class="hPhoto">دليل الصورة الشخصية</h6>
                  <p class="numTabs pPhoto">مظهر احترافي</p>
                  <p class="numTabs pPhoto">دقة وضوح عالية</p>
                  <p class="numTabs pPhoto">تشمل فقط وجهك</p>
                  <p class="numTabs pPhoto">لديك خلفية محايدة</p>
                </div>
                <hr />
                <div class="footerTabs footerTabsFlex">
                  <button
                    class="btnNextSettings"
                    type="button"
                    @click="() => onNextStep(1)"
                  >
                    التالي
                  </button>
                </div>
              </div>
            </div>
            <div
              id="v-pills-profile"
              :class="`tab-pane ${activeStep === 2 ? 'show active' : 'fade'}`"
              role="tabpanel"
              aria-labelledby="v-pills-profile-tab"
            >
              <div class="tabContents">
                <div class="headTabs">
                  <h6>البيانات الشخصية</h6>
                  <p class="numTabs">7 - 2</p>
                </div>
                <hr />
                <div class="bodyTabs">
                  <p class="UserNameSettings">اسم المستخدم</p>
                  <p class="numTabs exampleNameSettings">
                    قم باختيار اسم حقيقي لك لانه سيظهر في رابط الصفحة في الأعلى
                    مثلاًwww.mostasharq.com/user_name
                  </p>
                  <input
                    v-model="update_data.name"
                    type="text"
                    placeholder="ahmed_ali"
                    :class="`txtUserNameSettings ${
                      errors.name ? 'input-error' : ''
                    }`"
                    @change="() => validateStep(2, 'name')"
                  />
                  <p class="UserNameSettings">تاريخ الميلاد</p>
                  <div class="row rowDateofBirth rowBirthInfo">
                    <div class="col-sm-12 colDateYear">
                      <input
                        v-model="update_data.dateOfBirth"
                        type="date"
                        :class="`form-control DateYear ${
                          errors.dateOfBirth ? 'input-error' : ''
                        }`"
                        @change="() => validateStep(2, 'dateOfBirth')"
                      />
                    </div>
                  </div>
                  <!-- <input type="text" placeholder="ahmed_eid" class="txtUserNameSettings"> -->
                  <p class="UserNameSettings">الجنس</p>
                  <div
                    :class="`ddlistClassify ${
                      errors.gender ? 'input-error' : ''
                    }`"
                  >
                    <select
                      v-model="update_data.gender"
                      :class="`js-example-placeholder-single js-states form-control Gender rowDateofBirth`"
                    >
                      <option disabled selected value=""></option>
                      <option value="M">ذكر</option>
                      <option value="F">أنثى</option>
                    </select>
                  </div>

                  <p class="UserNameSettings">رقم الهاتف</p>
                  <p class="numTabs exampleNameSettings">
                    لا تتم مشاركة هاتفك مع أي أحد
                  </p>
                  <div class="main">
                    <div
                      class="form_group formGroupPhoneSettings"
                      style="width: 100%"
                    >
                      <vue-tel-input
                        v-model="update_data.Mobile"
                        :auto-format="false"
                        mode="national"
                        :class="errors.Mobile ? 'input-error' : ''"
                        @blur="() => validateStep(2, 'mobile')"
                      />
                      <p v-if="errors.Mobile" class="input-error-message">
                        {{ errors.Mobile.message }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tabContents">
                <div class="headTabs">
                  <h6 class="hInfoPlace">الموقع</h6>
                </div>
                <hr class="hrHeadSettings" />
                <div class="bodyTabs">
                  <p class="UserNameSettings">المنطقة الزمنية</p>
                  <input
                    v-model="update_data.time_zone"
                    class="js-example-placeholder-single js-states form-control rowDateofBirth"
                    readonly
                  />

                  <p class="UserNameSettings">الدولة</p>
                  <div :class="`${errors.country_id ? 'input-error' : ''}`">
                    <select
                      v-model="update_data.country_id"
                      :class="`js-example-placeholder-single js-states form-control rowDateofBirth lawyer-country-id ${
                        errors.country_id ? 'select-error' : ''
                      }`"
                      @change="() => validateStep(2, 'country_id')"
                    >
                      <option
                        v-for="country in countries"
                        :key="country.id"
                        :value="country.id"
                      >
                        {{ country.name }}
                      </option>
                    </select>
                  </div>

                  <p class="UserNameSettings">المدينة</p>
                  <div :class="`${errors.city_id ? 'input-error' : ''}`">
                    <select
                      v-model="update_data.city_id"
                      :class="`js-example-placeholder-single js-states form-control rowDateofBirth lawyer-city-id ${
                        errors.city_id ? 'select-error' : ''
                      }`"
                      @change="() => validateStep(2, 'city_id')"
                    >
                      <option
                        v-for="city in cities"
                        :key="city.id"
                        :value="city.id"
                      >
                        {{ city.name }}
                      </option>
                    </select>
                  </div>

                  <p class="numTabs pNoteSettings">
                    نحن نأخذ خصوصيتك على محمل الجد. ستتم مشاركة مدينتك وبلدك فقط
                    مع العملاء.
                  </p>

                  <p class="UserNameSettings">عنوان الشارع</p>
                  <input
                    v-model="update_data.street"
                    type="text"
                    :class="`txtUserNameSettings ${
                      errors.street ? 'input-error' : ''
                    }`"
                    @change="() => validateStep(2, 'street')"
                  />
                </div>
                <hr />
                <div class="footerTabs footerTabsFlex">
                  <button class="btnBackSettings" @click="() => goStep(1)">
                    رجوع
                  </button>
                  <button class="btnNextSettings" @click="updateProfile()">
                    التالي
                  </button>
                </div>
              </div>
            </div>
            <div
              id="v-pills-skills"
              :class="`tab-pane ${activeStep === 3 ? 'show active' : 'fade'}`"
              role="tabpanel"
              aria-labelledby="v-pills-skills-tab"
            >
              <div class="tabContents">
                <div class="headTabs">
                  <h6>الخبرات والمهارات</h6>
                  <p class="numTabs">7 - 3</p>
                </div>
                <hr class="hrHeadSettings" />
                <div class="bodyTabs ddlistClassify">
                  <p class="UserNameSettings PBodySkills">
                    أخبرنا عن العمل الذي تود القيام به
                  </p>
                  <h6 class="titleSkills">ما هو تخصصك القانوني</h6>
                  <div :class="`${errors.speciality_id ? 'input-error' : ''}`">
                    <select
                      v-model="experience.Speciality_id"
                      :class="`js-example-placeholder-single js-states form-control rowDateofBirth SelectSpecLawyer`"
                    >
                      <option></option>
                      <option
                        v-for="(speciality, i) in specialities"
                        :key="i"
                        :value="speciality.id"
                      >
                        {{ speciality.name }}
                      </option>
                    </select>
                  </div>
                  <h6 class="titleSkills">
                    ما هو طبيعة العمل الذي تود القيام به حسب تخصصك
                  </h6>
                  <p
                    :class="`numTabs pSelectTest ${
                      errors.work_nature_id ? 'checkbox-error' : ''
                    }`"
                  >
                    قم بإختيار اختيارين فأكثر
                  </p>
                  <div class="row rowTestSettings">
                    <div class="col-md-6 col-12">
                      <label
                        v-for="(nature, i) in work_natures"
                        :key="i"
                        class="containerlbl lblSettingsCheck"
                        >{{ nature.name }}
                        <input
                          type="checkbox"
                          :checked="
                            experience.work_nature_id.find(
                              (e) => e.id === nature.id
                            )
                          "
                          @click="addToNatures(nature.id)"
                        />
                        <span class="checkmark"></span>
                      </label>
                    </div>
                  </div>
                  <h6 class="titleSkills askSkills">
                    ما هي مهاراتك التي تقدمها للمستخدم
                  </h6>
                  <div class="divLinkAddWork">
                    <div
                      :class="`divddlistskillsport ${
                        errors.skill_id ? 'input-error' : ''
                      }`"
                    >
                      <select
                        v-model="experience.skill_id"
                        class="form-control js-example-tokenizerskills"
                        multiple="multiple"
                      >
                        <option
                          v-for="(skill, i) in skills"
                          :key="i"
                          :value="{ skill_id: skill.id }"
                        >
                          {{ skill.name }}
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                <hr />
                <div class="footerTabs footerTabsFlex">
                  <button class="btnBackSettings" @click="goStep(2)">
                    رجوع
                  </button>
                  <button class="btnNextSettings" @click="updateExperience()">
                    التالي
                  </button>
                </div>
              </div>
            </div>
            <div
              id="v-pills-bio"
              :class="`tab-pane ${activeStep === 4 ? 'show active' : 'fade'}`"
              role="tabpanel"
              aria-labelledby="v-pills-bio-tab"
            >
              <div class="tabContents">
                <div class="headTabs">
                  <h6>المسمى الوظيفي والنبذة</h6>
                  <p class="numTabs">7 - 4</p>
                </div>
                <hr class="hrHeadSettings" />
                <div class="bodyTabs">
                  <h6 class="pBio">ما هو المسمى الوظيفي الذي تود أن يمثلك</h6>
                  <input
                    v-model="jobs.job_title"
                    type="text"
                    :class="`txtUserNameSettings txtBio ${
                      errors.job_title ? 'input-error' : ''
                    }`"
                    @input="() => validateStep(4, 'job_title')"
                  />
                  <h6 class="pBio">اكتب نبذة شخصية عنك تظهر في حسابك</h6>
                  <textarea
                    v-model="jobs.bio"
                    :class="`txtUserNameSettings textareaSettings ${
                      errors.bio ? 'input-error' : ''
                    }`"
                    cols="30"
                    rows="10"
                    @input="() => validateStep(4, 'bio')"
                  ></textarea>
                </div>
                <p class="pSkip">تخطي هذه الخطوة واعدادها لاحقاً</p>
                <hr />
                <div class="footerTabs footerTabsFlex">
                  <button class="btnBackSettings" @click="goStep(3)">
                    رجوع
                  </button>
                  <button class="btnSavdAddSettings">
                    حفظ وإضافة مسمى آخر
                  </button>
                  <button class="btnNextSettings" @click="updateJobs()">
                    التالي
                  </button>
                </div>
              </div>
            </div>
            <div
              id="v-pills-edu"
              :class="`tab-pane ${activeStep === 5 ? 'show active' : 'fade'}`"
              role="tabpanel"
              aria-labelledby="v-pills-edu-tab"
            >
              <div class="tabContents">
                <div class="headTabs">
                  <h6>التعليم واللغات</h6>
                  <p class="numTabs">7 - 5</p>
                </div>
                <hr class="hrHeadSettings" />
                <div class="bodyTabs">
                  <h6 class="titleSkills">ما هو مستواك في اللغة العربية</h6>
                  <div class="row" style="width: 100%; margin: 0">
                    <select
                      v-model="language.language[selectedLanguageIndex].degree"
                      :class="`js-example-placeholder-single js-states form-control rowDateofBirth rowEdu ${
                        errors[
                          `language.language[${selectedLanguageIndex}].degree`
                        ]
                          ? 'select-error'
                          : ''
                      }`"
                      @change="
                        () =>
                          validateStep(
                            5,
                            `language.language[${selectedLanguageIndex}].degree`
                          )
                      "
                    >
                      <option selected disabled value="" style="color: #a2a2a6">
                        قم باختيار مستواك ما بين محترف إلى مبتدئ
                      </option>
                      <option
                        v-for="(l, i) in levels"
                        :key="i"
                        :value="l.value"
                      >
                        {{ l.text }}
                      </option>
                    </select>
                  </div>
                  <template
                    v-if="
                      languages.filter(
                        (l) =>
                          !language.language.find((lang) => lang.language === l)
                      ).length
                    "
                  >
                    <h6 class="titleSkills">هل تتحدث لغة أخرى</h6>
                    <!-- Button trigger modal -->
                    <button
                      type="button"
                      class="btn btnAddLang"
                      data-toggle="modal"
                      data-target="#AddLangmodOfficeSet"
                    >
                      <i class="fas fa-plus addLang"></i> إضافة لغة أخرى
                    </button>
                  </template>
                  <div
                    id="AddLangmodOfficeSet"
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
                                  v-model="selectedLangToAdd"
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
                                    v-for="lang in languages"
                                    :key="lang"
                                    :value="lang"
                                  >
                                    {{ lang }}
                                  </option>
                                </select>
                              </div>
                            </div>
                            <div class="col-md-6 col-12">
                              <div>
                                <select
                                  v-model="languageLevel"
                                  class="js-example-placeholder-single js-states form-control rowDateofBirth"
                                >
                                  <option
                                    selected
                                    disabled
                                    value=""
                                    style="font-size: 18px; color: #a2a2a6"
                                  >
                                    حدد مستواك في اللغة
                                  </option>
                                  <option
                                    v-for="(l, i) in levels"
                                    :key="i"
                                    :value="l.value"
                                  >
                                    {{ l.text }}
                                  </option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="modal-footer footmodEditName">
                          <button
                            ref="addLanguageCloseModal"
                            class="btnBackSettings btnBackSettingsModName"
                            data-dismiss="modal"
                            @click="
                              (selectedLangToAdd = ''), (languageLevel = '')
                            "
                          >
                            إلغاء
                          </button>
                          <button
                            class="btnNextSettings btnNextSettingsModName"
                            @click="addLanguage()"
                          >
                            حفظ
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <hr />
                  <p class="UserNameSettings">مكان التعليم</p>
                  <input
                    v-model="college.university"
                    type="text"
                    placeholder="مثلا الجامعة العربية"
                    :class="`txtUserNameSettings ${
                      errors['college.university'] ? 'input-error' : ''
                    }`"
                    @input="() => validateStep(5, 'college.university')"
                  />
                  <p class="UserNameSettings">الكلية والتخصص</p>
                  <input
                    v-model="college.speciality"
                    type="text"
                    placeholder="مثلا كلية القانون الدولي/ القانون الجنائي"
                    :class="`txtUserNameSettings ${
                      errors['college.speciality'] ? 'input-error' : ''
                    }`"
                    @input="() => validateStep(5, 'college.speciality')"
                  />
                  <p class="UserNameSettings">مدة الدراسة</p>
                  <div class="row">
                    <div class="col-md-6 col-12">
                      <div>
                        <input
                          v-model="college.from"
                          type="date"
                          :class="`js-example-placeholder-single js-states form-control rowDateofBirth DateDay ${
                            errors['college.from'] ? 'input-error' : ''
                          }`"
                          @change="() => validateStep(5, 'college.from')"
                        />
                      </div>
                    </div>
                    <div class="col-md-6 col-12">
                      <div>
                        <input
                          v-model="college.to"
                          type="date"
                          :class="`js-example-placeholder-single js-states form-control rowDateofBirth DateDay ${
                            errors['college.to'] ? 'input-error' : ''
                          }`"
                          @change="() => validateStep(5, 'college.to')"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <p class="pSkip">تخطي هذه الخطوة واعدادها لاحقاً</p>
                <hr />
                <div class="footerTabs footerTabsFlex">
                  <button class="btnBackSettings" @click="goStep(4)">
                    رجوع
                  </button>
                  <button class="btnSavdAddSettings">
                    حفظ وإضافة مكان آخر
                  </button>
                  <button class="btnNextSettings" @click="updateCollege()">
                    التالي
                  </button>
                </div>
              </div>
            </div>
            <div
              id="v-pills-work"
              :class="`tab-pane ${activeStep === 6 ? 'show active' : 'fade'}`"
              role="tabpanel"
              aria-labelledby="v-pills-work-tab"
            >
              <div class="tabContents">
                <div class="headTabs">
                  <h6>العمل والخبرات العملية</h6>
                  <p class="numTabs">7 - 6</p>
                </div>
                <hr class="hrHeadSettings" />
                <div class="bodyTabs">
                  <h6 class="pBio">مكان العمل</h6>
                  <input
                    v-model="employment.workplace"
                    type="text"
                    placeholder="مثلا مكتب العدالة للأعمال القانونية"
                    :class="`txtUserNameSettings ${
                      errors['employment.workplace'] ? 'input-error' : ''
                    }`"
                    @input="() => validateStep(6, 'employment.workplace')"
                  />
                  <h6 class="pBio">وصف العمل</h6>
                  <textarea
                    v-model="employment.description"
                    cols="30"
                    rows="10"
                    :class="`txtUserNameSettings textareaSettings ${
                      errors['employment.description'] ? 'input-error' : ''
                    }`"
                    @input="() => validateStep(6, 'employment.description')"
                  ></textarea>
                  <p class="UserNameSettings">وقت ومدة العمل</p>
                  <div class="row">
                    <div class="col-md-6 col-12">
                      <div>
                        <input
                          v-model="employment.from"
                          type="date"
                          :class="`js-example-placeholder-single js-states form-control rowDateofBirth DateDay ${
                            errors['employment.from'] ? 'input-error' : ''
                          }`"
                          @change="() => validateStep(5, 'employment.from')"
                        />
                      </div>
                    </div>
                    <div class="col-md-6 col-12">
                      <div>
                        <input
                          v-model="employment.to"
                          type="date"
                          :class="`js-example-placeholder-single js-states form-control rowDateofBirth DateDay ${
                            errors['employment.to'] ? 'input-error' : ''
                          }`"
                          @change="() => validateStep(5, 'employment.to')"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <p class="pSkip">تخطي هذه الخطوة واعدادها لاحقاً</p>
                <hr />
                <div class="footerTabs footerTabsFlex">
                  <button class="btnBackSettings" @click="goStep(5)">
                    رجوع
                  </button>
                  <button class="btnSavdAddSettings">
                    حفظ وإضافة مكان آخر
                  </button>
                  <button class="btnNextSettings" @click="updateEmployee()">
                    التالي
                  </button>
                </div>
              </div>
            </div>
            <div
              id="v-pills-job"
              :class="`tab-pane ${activeStep === 7 ? 'show active' : 'fade'}`"
              role="tabpanel"
              aria-labelledby="v-pills-job-tab"
            >
              <div class="tabContents">
                <div class="headTabs">
                  <h6 class="hJob">مزاولة المهنة</h6>
                  <p class="numTabs exampleNameSettings">
                    البيانات المضافة في هذا الجزء خاصة ولا تظهر للآخرين
                  </p>
                  <p class="numTabs">7 - 7</p>
                </div>
                <hr class="hrHeadSettings" />
                <div class="bodyTabs">
                  <h6 class="pBio">جهة مصدرة الترخيص</h6>
                  <input
                    v-model="license.license_issuer"
                    type="text"
                    :class="`txtUserNameSettings ${
                      errors['license.license_issuer'] ? 'input-error' : ''
                    }`"
                    @input="() => validateStep(7, 'license.license_issuer')"
                  />
                  <h6 class="pBio">رقم الترخيص</h6>
                  <input
                    v-model="license.license_number"
                    type="text"
                    :class="`txtUserNameSettings ${
                      errors['license.license_number'] ? 'input-error' : ''
                    }`"
                    @input="() => validateStep(7, 'license.license_number')"
                  />
                  <h6 class="pBio">سنة الترخيص</h6>
                  <input
                    v-model="license.license_year"
                    type="date"
                    :class="`js-example-placeholder-single js-states form-control rowDateofBirth DateDay ${
                      errors['license.license_year'] ? 'input-error' : ''
                    }`"
                    @change="() => validateStep(7, 'license.license_year')"
                  />
                </div>
                <p class="pJob">
                  هذه الخطوة مهمة لاثبات إجازة ممارسة مهنة المحاماة وتساعدك
                  لاحقاً في توثيق حسابك
                </p>
                <hr />
                <div class="footerTabs footerTabsFlex">
                  <button class="btnBackSettings" @click="goStep(6)">
                    رجوع
                  </button>
                  <button class="btnNextJob" @click="updateLicense()">
                    الانتقال إلى الملف الشخصي
                  </button>
                </div>
              </div>
            </div>
          </div>
          <!-- end div content Tabs -->
        </div>
      </div>
    </div>
  </div>
  <!-- End Content -->
</template>

<script>
import func from "../../../assets/js/functions";
import {
  lawyerPersonalInfoSchema,
  lawyerSkillsSchema,
  lawyerJobInfoSchema,
  lawyerLangAndEdSchema,
  lawyerWorkAndExperienceSchema,
  lawyerLicenseSchema,
} from "../../../schema/edit-profile";
import { first, last } from "../../../utils/index";
// import Treeselect from "@riophae/vue-treeselect";
// // import the styles
// import "@riophae/vue-treeselect/dist/vue-treeselect.css";
const genderMapper = {
  Male: "M",
  Female: "F",
};
export default {
  components: {
    // Treeselect,
  },
  data() {
    return {
      image: null,
      update_data: {},
      college: {},
      previewImage: this.$store.state.user.image,
      language: {
        language: [
          {
            language: "العربية",
            degree: "",
          },
        ],
      },
      selectedLangToEdit: "العربية",
      selectedLangToAdd: "",
      languageLevel: "",
      jobs: {},
      experience: {
        work_nature_id: [],
      },
      skills: [],
      employment: {},
      countries: [],
      cities: [],
      languages: ["English"],
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
      license: {},
      specialities: [],
      work_natures: [],
      errors: [],
      activeStep: 1,
    };
  },
  computed: {
    selectedLanguageIndex() {
      const index = this.language.language.findIndex(
        (l) => l.language === this.selectedLangToEdit
      );
      return index > 0 ? index : 0;
    },
  },
  watch: {
    "update_data.country_id": {
      handler: function (val) {
        this.$http.get(`api/city?county_id=${val}`).then((res) => {
          this.cities = res.data.data.city;
        });
      },
    },
  },
  mounted() {
    func();
    $(".js-example-placeholder-single.SelectSpecLawyer").on("change", () => {
      this.experience.speciality_id = $(
        ".js-example-placeholder-single.SelectSpecLawyer"
      )
        .select2("data")
        .map((e) => e.id)[0];
      this.validateStep(3, "speciality_id");
    });
    $(".js-example-tokenizerskills").on("change", () => {
      this.experience.skill_id = $(".js-example-tokenizerskills")
        .select2("data")
        .map((e) => {
          console.log("e", e);
          console.log("e.element._value", e.element._value);
          return e.element._value;
        });
      this.validateStep(3, "skill_id");
    });
    $(".js-states.form-control.Gender").on("change", () => {
      this.update_data.gender = $(".js-states.form-control.Gender")
        .select2("data")
        .map((e) => e.id)[0];
      this.validateStep(2, "gender");
    });
  },
  created() {
    this.getCountries();
    this.getspeciality();
    this.getWorkNatuers();
    this.getSkills();
    this.initializeData();
  },
  methods: {
    getCountries() {
      this.$http.get("api/country").then((res) => {
        this.countries = res.data.data.country;
      });
    },
    getspeciality() {
      this.$http.get("api/auth/client/Speciality").then((res) => {
        this.specialities = res.data.data.Speciality;
      });
    },
    getWorkNatuers() {
      this.$http.get("api/work-natures").then((res) => {
        this.work_natures = res.data.data.workNature;
      });
    },
    getSkills() {
      this.$http.get("api/auth/client/Skills").then((res) => {
        res.data.data.Skill.forEach((skill) => {
          this.skills.push({
            id: skill.id,
            name: skill.name,
          });
        });
      });
    },
    getPhoto(e) {
      this.image = e.target.files[0];
      let reader = new FileReader();
      reader.onload = (res) => {
        this.$refs.profileImage.setAttribute("src", res.target.result);
        this.$store.state.user.image = res.target.result;
      };
      reader.readAsDataURL(e.target.files[0]);
    },
    goStep(step) {
      this.$refs[`step${step}`].click();
    },
    onNextStep(stepNumber) {
      if (this.validateStep(stepNumber)) {
        this.$refs[`step${stepNumber}`].click();
        this.activeStep = stepNumber + 1;
      }
    },
    validateStep(stepNumber, fieldName) {
      console.log("being validated");
      const validateAgainstSchema = (schema, data) => {
        try {
          schema.validateSync(data, {
            abortEarly: false,
          });
          this.errors = {};
          this.$forceUpdate();
          return true;
        } catch (err) {
          console.log("err", err);
          if (fieldName) {
            const fieldError = err.inner.find((e) => e.path === fieldName);
            this.errors[fieldName] = fieldError
              ? { message: fieldError.message }
              : null;
            this.$forceUpdate();
          } else {
            this.errors = {};
            err.inner.forEach(
              ({ path, message }) => (this.errors[path] = { message })
            );
            console.log("this.errors", this.errors);
            this.$forceUpdate();
            return false;
          }
        }
      };
      switch (stepNumber) {
        case 1: {
          return true;
        }
        case 2: {
          return validateAgainstSchema(
            lawyerPersonalInfoSchema,
            this.update_data
          );
        }
        case 3: {
          return validateAgainstSchema(lawyerSkillsSchema, this.experience);
        }
        case 4: {
          return validateAgainstSchema(lawyerJobInfoSchema, this.jobs);
        }
        case 5: {
          return validateAgainstSchema(lawyerLangAndEdSchema, {
            language: this.language,
            college: this.college,
          });
        }
        case 6: {
          return validateAgainstSchema(lawyerWorkAndExperienceSchema, {
            employment: this.employment,
          });
        }
        case 7: {
          return validateAgainstSchema(lawyerLicenseSchema, {
            license: this.license,
          });
        }
        default:
          return false;
      }
    },
    async updateProfile() {
      if (!this.validateStep(2)) {
        return;
      }
      let form = new FormData();
      await Object.entries(this.update_data).forEach((entry) => {
        form.append(entry[0], entry[1]);
      });
      await form.append("image", this.image);
      this.$http
        .post("lawyer/auth/lawyer/update-profile", form)
        .then(() => {
          this.$notify({
            group: "foo",
            type: "success",
            text: "تم تحديث الملف الشخصي بنجاح",
          });
          this.updateState();
          this.goStep(3);
        })
        .catch(() => {
          this.$notify({
            group: "foo",
            type: "error",
            text: "حدث خطأ ما...يرجي مراجعة البيانات",
          });
        });
    },
    updateCollege() {
      if (!this.validateStep(5)) {
        return;
      }
      const formData = new FormData();
      formData.append("speciality", this.college.speciality);
      formData.append("university", this.college.university);
      formData.append("from", this.college.from);
      formData.append("to", this.college.to);
      formData.append("language", JSON.stringify(this.language));
      this.$http
        .post("lawyer/auth/lawyer/update-college", formData)
        .then(() => {
          this.$notify({
            group: "foo",
            type: "success",
            text: "تم التحديث بنجاح",
          });
          this.updateState();
          this.goStep(6);
        })
        .catch(() => {
          this.$notify({
            group: "foo",
            type: "error",
            text: "حدث خطأ ما...يرجي مراجعة البيانات",
          });
        });
    },
    updateJobs() {
      if (!this.validateStep(4)) {
        return;
      }
      this.$http
        .post("lawyer/auth/lawyer/update-jobs", this.jobs)
        .then(() => {
          this.$notify({
            group: "foo",
            type: "success",
            text: "تم التحديث بنجاح",
          });
          this.updateState();
          this.goStep(5);
        })
        .catch(() => {
          this.$notify({
            group: "foo",
            type: "error",
            text: "حدث خطأ ما...يرجي مراجعة البيانات",
          });
        });
    },
    updateExperience() {
      if (!this.validateStep(3)) {
        return;
      }
      this.$http
        .post("lawyer/auth/lawyer/update-experience", this.experience)
        .then(() => {
          this.$notify({
            group: "foo",
            type: "success",
            text: "تم التحديث بنجاح",
          });
          this.experience = {
            work_nature_id: [],
          };
          this.updateState();
          this.goStep(4);
        })
        .catch(() => {
          this.$notify({
            group: "foo",
            type: "error",
            text: "حدث خطأ ما...يرجي مراجعة البيانات",
          });
        });
    },
    updateEmployee() {
      if (!this.validateStep(6)) {
        return;
      }
      this.$http
        .post("lawyer/auth/lawyer/update-employe", this.employment)
        .then(() => {
          this.$notify({
            group: "foo",
            type: "success",
            text: "تم التحديث بنجاح",
          });
          this.updateState();
          this.goStep(7);
        })
        .catch(() => {
          this.$notify({
            group: "foo",
            type: "error",
            text: "حدث خطأ ما...يرجي مراجعة البيانات",
          });
        });
    },
    addLanguage() {
      if (this.selectedLangToAdd && this.languageLevel) {
        this.language.language.push({
          language: this.selectedLangToAdd,
          degree: this.languageLevel,
        });
        this.$refs.addLanguageCloseModal.click();
      }
    },
    updateLicense() {
      if (!this.validateStep(7)) {
        return;
      }
      this.$http
        .post("lawyer/auth/lawyer/update-license", this.license)
        .then(() => {
          this.$notify({
            group: "foo",
            type: "success",
            text: "تم التحديث بنجاح",
          });
          this.updateState();
          this.$router.push("/office-profile");
        })
        .catch(() => {
          this.$notify({
            group: "foo",
            type: "error",
            text: "حدث خطأ ما...يرجي مراجعة البيانات",
          });
        });
    },
    addToNatures(id) {
      let checked = this.checkExist(this.experience.work_nature_id, id);
      if (checked == true) {
        let index = this.experience.work_nature_id.indexOf(id);
        this.experience.work_nature_id.splice(index, 1);
      } else if (checked == false) {
        this.experience.work_nature_id.push({ id: id });
      }
      this.validateStep(3, "work_nature_id");
    },
    checkExist(arr, item) {
      return arr.some((el) => {
        return el.id === item;
      });
    },
    async updateState() {
      const userInfo = await this.$http.get(
        "lawyer/auth/lawyer/lawyer-profile"
      );
      await this.$store.commit("setUser", userInfo.data.data);
      this.initializeData();
    },
    initializeData() {
      const user = this.$store.state.user;
      this.update_data = {
        name: user.name,
        dateOfBirth: user.dateOfBirth,
        gender: user.gender ? genderMapper[user.gender] : user.gender,
        Mobile: user.mobile,
        time_zone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        country_id: user.country_id,
        city_id: user.city_id,
        street: user.street,
      };
      this.college = last(user.education);
      this.employment = last(user.employe);
      this.jobs = last(user.jobs);
      this.experience = {
        ...last(user.experience),
        skill_id: [{ skill_id: last(user.experience).skill_id }],
        speciality_id: last(user.experience).Speciality_id,
        work_nature_id: user.workNature,
      };
      this.license.license_issuer = user.license_issuer;
      this.license.license_number = user.license_number;
      this.license.license_year = user.license_year;
      const storedLanguages = user.language;
      this.language = {
        language: storedLanguages.length
          ? storedLanguages
          : [
              {
                language: first(storedLanguages)?.language || "العربية",
                degree: first(storedLanguages)?.degree || "",
              },
            ],
      };
      this.selectedLangToEdit = first(storedLanguages)?.language || "العربية";
    },
  },
};
</script>

<style>
.active-c-btn {
  background-color: aliceblue !important;
  transform: scale3d(1.1, 1.1, 1.1);
}
</style>
