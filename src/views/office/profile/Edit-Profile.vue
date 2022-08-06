<template>
  <!-- Start Content -->
  <div class="container contentSettings">
    <!-- <div class="pagesLinks">
            <a href="#">الرئيسية/</a>
            <a href="#">الإعدادات</a>
        </div> -->
    <h3 class="hTitle hSettingsPage">الإعدادات</h3>
    <!-- class="d-flex align-items-start" -->
    <div>
      <div class="row">
        <div class="col-lg-3 col-md-5 col-12 colTabsSettings">
          <!-- start div Tabs -->
          <div id="v-pills-tab" class="nav flex-column nav-pills me-3" role="tablist" aria-orientation="vertical">
            <button id="v-pills-photo-tab" ref="step1" class="nav-link btnTabs active" data-bs-toggle="pill"
              data-bs-target="#v-pills-photo" type="button" role="tab" aria-controls="v-pills-photo"
              aria-selected="true">
              الصورة الشخصية
              <i class="fas fa-check-circle iconCheck"></i>
            </button>
            <button id="v-pills-profile-tab" ref="step2" class="nav-link btnTabs" data-bs-toggle="pill"
              data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile"
              aria-selected="false">
              البيانات الشخصية
            </button>
            <button id="v-pills-skills-tab" ref="step3" class="nav-link btnTabs" data-bs-toggle="pill"
              data-bs-target="#v-pills-skills" type="button" role="tab" aria-controls="v-pills-skills"
              aria-selected="false">
              الخبرات والمهارات
            </button>
            <button id="v-pills-bio-tab" ref="step4" class="nav-link btnTabs" data-bs-toggle="pill"
              data-bs-target="#v-pills-bio" type="button" role="tab" aria-controls="v-pills-bio" aria-selected="false">
              المسمى الوظيفي والنبذة
            </button>
            <button id="v-pills-edu-tab" ref="step5" class="nav-link btnTabs" data-bs-toggle="pill"
              data-bs-target="#v-pills-edu" type="button" role="tab" aria-controls="v-pills-edu" aria-selected="false">
              التعليم واللغات
            </button>
            <button id="v-pills-work-tab" ref="step6" class="nav-link btnTabs" data-bs-toggle="pill"
              data-bs-target="#v-pills-work" type="button" role="tab" aria-controls="v-pills-work"
              aria-selected="false">
              العمل والخبرات العملية
            </button>
            <button id="v-pills-job-tab" ref="step7" class="nav-link btnTabs" data-bs-toggle="pill"
              data-bs-target="#v-pills-job" type="button" role="tab" aria-controls="v-pills-job" aria-selected="false">
              مزاولة المهنة
            </button>
          </div>
          <!-- end div Tabs -->
        </div>
        <div class="col-lg-9 col-md-7 col-12">
          <!-- start div content Tabs -->
          <div id="v-pills-tabContent" class="tab-content">
            <div id="v-pills-photo" class="tab-pane fade show active" role="tabpanel"
              aria-labelledby="v-pills-photo-tab">
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
                    <img ref="profileImage" :src="
                      $store.state.user.image
                        ? $store.state.user.image
                        : require('../../../assets/img/PersonalImg.png')
                    " alt="" accept="image/*" style="
                        max-width: 150px !impoertant;
                        max-height: 150px !impoertant;
                        height: 150px !important;
                        width: 150px !important;
                      " class="rounded-circle" />
                    <!-- Button trigger modal -->
                    <button type="button" class="btn btnAddLang" data-toggle="modal"
                      data-target="#exampleModalCenterPhoto">
                      <i class="fas fa-plus addLang"></i> إضافة صورة شخصية
                    </button>
                    <div id="exampleModalCenterPhoto" class="modal fade show" tabindex="-1" role="dialog"
                      aria-labelledby="exampleModalLabel" style="padding-right: 17px">
                      <div class="modal-dialog modDialogEditName" role="document">
                        <div class="modal-content">
                          <div class="modal-header modHead">
                            <h5 id="exampleModalLabel" class="modal-title titleModPort">
                              إضافة صورة شخصية
                            </h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">×</span>
                            </button>
                          </div>
                          <div class="modal-body" style="padding-right: 28px; padding-left: 28px">
                            <div class="input-group mb-3 groupFilePhoto">
                              <div class="input-group-prepend">
                                <span class="input-group-text">تحميل</span>
                              </div>
                              <div class="custom-file">
                                <input id="inputGroupFile01" type="file" class="custom-file-input" @change="getPhoto" />
                                <label class="custom-file-label lblChooseFile" for="inputGroupFile01">اختيار ملف</label>
                              </div>
                            </div>
                          </div>
                          <div class="modal-footer footmodEditName">
                            <button class="btnBackSettings btnBackSettingsModName" data-dismiss="modal">
                              إلغاء
                            </button>
                            <button class="btnNextSettings btnNextSettingsModName" data-dismiss="modal">
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
                  <button class="btnNextSettings" @click="goStep(2)">
                    التالي
                  </button>
                </div>
              </div>
            </div>
            <div id="v-pills-profile" class="tab-pane fade" role="tabpanel" aria-labelledby="v-pills-profile-tab">
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
                  <input v-model="update_data.name" type="text" placeholder="ahmed_eid" class="txtUserNameSettings" />
                  <p class="UserNameSettings">تاريخ الميلاد</p>
                  <div class="row rowDateofBirth rowBirthInfo">
                    <div class="col-sm-12 colDateYear">
                      <input v-model="update_data.dateOfBirth" class="form-control DateYear" type="date" />
                    </div>
                  </div>
                  <!-- <input type="text" placeholder="ahmed_eid" class="txtUserNameSettings"> -->
                  <p class="UserNameSettings">الجنس</p>
                  <select v-model="update_data.gender"
                    class="js-example-placeholder-single js-states form-control Gender rowDateofBirth">
                    <option selected value="M">ذكر</option>
                    <option value="F">أنثى</option>
                  </select>

                  <p class="UserNameSettings">رقم الهاتف</p>
                  <p class="numTabs exampleNameSettings">
                    لا تتم مشاركة هاتفك مع أي أحد
                  </p>
                  <div class="main">
                    <div class="form_group formGroupPhoneSettings" style="width: 100%">
                      <input id="txtPhone" v-model="update_data.Mobile" type="tel"
                        class="txtbox txtUserNameSettings txtPhone" style="width: 100%" />
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

                  <input v-model="update_data.time_zone"
                    class="js-example-placeholder-single js-states form-control rowDateofBirth rowInfoPlace" readonly />

                  <p class="UserNameSettings">الدولة</p>
                  <select v-model="update_data.country_id"
                    class="js-example-placeholder-single js-states form-control rowDateofBirth rowInfoPlace">
                    <option v-for="country in countries" :key="country.id" :value="country.id">
                      {{ country.name }}
                    </option>
                  </select>

                  <p class="UserNameSettings">المدينة</p>
                  <select v-model="update_data.city_id"
                    class="js-example-placeholder-single js-states form-control rowDateofBirth rowInfoPlace">
                    <option v-for="city in cities" :key="city.id" :value="city.id">
                      {{ city.name }}
                    </option>
                  </select>

                  <p class="numTabs pNoteSettings">
                    نحن نأخذ خصوصيتك على محمل الجد. ستتم مشاركة مدينتك وبلدك فقط
                    مع العملاء.
                  </p>

                  <p class="UserNameSettings">عنوان الشارع</p>
                  <input v-model="update_data.street" type="text" class="txtUserNameSettings" />
                </div>
                <hr />
                <div class="footerTabs footerTabsFlex">
                  <button class="btnBackSettings" @click="goStep(1)">
                    رجوع
                  </button>
                  <button class="btnNextSettings" @click="updateProfile(), goStep(3)">
                    التالي
                  </button>
                </div>
              </div>
            </div>
            <div id="v-pills-skills" class="tab-pane fade" role="tabpanel" aria-labelledby="v-pills-skills-tab">
              <div class="tabContents">
                <div class="headTabs">
                  <h6>الخبرات والمهارات</h6>
                  <p class="numTabs">7 - 3</p>
                </div>
                <hr class="hrHeadSettings" />
                <div class="bodyTabs">
                  <p class="UserNameSettings PBodySkills">
                    أخبرنا عن العمل الذي تود القيام به
                  </p>
                  <h6 class="titleSkills">ما هو تخصصك القانوني</h6>
                  <select v-model="experience.speciality_id"
                    class="js-example-placeholder-single js-states form-control rowDateofBirth SelectSpecLaw">
                    <option></option>
                    <option>تخصصك القانوني</option>
                    <option>تخصصك القانوني</option>
                    <option>تخصصك القانوني</option>
                  </select>
                  <h6 class="titleSkills">
                    ما هو طبيعة العمل الذي تود القيام به حسب تخصصك
                  </h6>
                  <p class="numTabs pSelectTest">قم بإختيار اختبارين فأكثر</p>
                  <div class="row rowTestSettings">
                    <div class="col-md-6 col-12">
                      <label class="containerlbl lblSettingsCheck">حضور دعوة الكترونية
                        <input type="checkbox" checked="checked" />
                        <span class="checkmark"></span>
                      </label>

                      <label class="containerlbl lblSettingsCheck">حضور دعوة وجاهية
                        <input type="checkbox" checked="checked" />
                        <span class="checkmark"></span>
                      </label>

                      <label class="containerlbl lblSettingsCheck">رفع شكوى
                        <input type="checkbox" checked="checked" />
                        <span class="checkmark"></span>
                      </label>
                    </div>
                    <div class="col-md-6 col-12">
                      <label class="containerlbl lblSettingsCheck">تقديم استشارة قانونية
                        <input type="checkbox" checked="checked" />
                        <span class="checkmark"></span>
                      </label>

                      <label class="containerlbl lblSettingsCheck">
                        قضايا قانونية (رفع ونقض)
                        <input type="checkbox" checked="checked" />
                        <span class="checkmark"></span>
                      </label>
                    </div>
                  </div>
                  <h6 class="titleSkills askSkills">
                    ما هي مهاراتك التي تقدمها للمستخدم
                  </h6>

                  <div class="divddlistskillsport">
                    <select class="form-control js-example-tokenizerskills select2-hidden-accessible" multiple=""
                      data-select2-id="select2-data-1-sxjd" tabindex="-1" aria-hidden="true">
                      <option selected="selected" data-select2-id="select2-data-3-v8n3">
                        بحث قانوني
                      </option>
                      <option>قانون موضعي</option>
                      <option selected="selected" data-select2-id="select2-data-4-zdgk">
                        تحليل
                      </option>
                    </select>
                  </div>
                </div>
                <hr />
                <div class="footerTabs footerTabsFlex">
                  <button class="btnBackSettings" @click="goStep(2)">
                    رجوع
                  </button>
                  <button class="btnNextSettings" @click="updateExperience(), goStep(4)">
                    التالي
                  </button>
                </div>
              </div>
            </div>
            <div id="v-pills-bio" class="tab-pane fade" role="tabpanel" aria-labelledby="v-pills-bio-tab">
              <div class="tabContents">
                <div class="headTabs">
                  <h6>المسمى الوظيفي والنبذة</h6>
                  <p class="numTabs">7 - 4</p>
                </div>
                <hr class="hrHeadSettings" />
                <div class="bodyTabs">
                  <h6 class="pBio">ما هو المسمى الوظيفي الذي تود أن يمثلك</h6>
                  <input v-model="jobs.job_title" type="text" class="txtUserNameSettings txtBio" />
                  <h6 class="pBio">اكتب نبذة شخصية عنك تظهر في حسابك</h6>
                  <textarea v-model="jobs.bio" class="txtUserNameSettings textareaSettings" cols="30"
                    rows="10"></textarea>
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
                  <button class="btnNextSettings" @click="updateJobs(), goStep(5)">
                    التالي
                  </button>
                </div>
              </div>
            </div>
            <div id="v-pills-edu" class="tab-pane fade" role="tabpanel" aria-labelledby="v-pills-edu-tab">
              <div class="tabContents">
                <div class="headTabs">
                  <h6>التعليم واللغات</h6>
                  <p class="numTabs">7 - 5</p>
                </div>
                <hr class="hrHeadSettings" />
                <div class="bodyTabs">
                  <h6 class="titleSkills">ما هو مستواك في التعليم</h6>
                  <div class="row">
                    <div class="col-md-6 col-12">
                      <select v-model="language.language"
                        class="js-example-placeholder-single js-states form-control rowDateofBirth rowEdu">
                        <option></option>
                        <option selected style="color: #a2a2a6">
                          قم بتحديد اللغة
                        </option>
                        <option>محترف</option>
                        <option>مبتدئ</option>
                      </select>
                    </div>
                    <div class="col-md-6 col-12">
                      <select v-model="language.degree"
                        class="js-example-placeholder-single js-states form-control rowDateofBirth rowEdu">
                        <option></option>
                        <option selected style="color: #a2a2a6">
                          حدد مستواك في اللغة
                        </option>
                        <option>محترف</option>
                        <option>مبتدئ</option>
                      </select>
                    </div>
                  </div>
                  <h6 class="titleSkills">هل تتحدث لغة أخرى</h6>
                  <!-- Button trigger modal -->
                  <button type="button" class="btn btnAddLang" data-toggle="modal" data-target="#AddLangmodOfficeSet">
                    <i class="fas fa-plus addLang"></i> إضافة لغة أخرى
                  </button>
                  <div id="AddLangmodOfficeSet" class="modal fade show" tabindex="-1" role="dialog"
                    aria-labelledby="exampleModalLabel" style="padding-right: 17px">
                    <div class="modal-dialog modDialogEditName" role="document">
                      <div class="modal-content">
                        <div class="modal-header modHead">
                          <h5 id="exampleModalLabel" class="modal-title titleModPort">
                            إضافة لغة
                          </h5>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                          </button>
                        </div>
                        <div class="modal-body" style="padding-right: 28px; padding-left: 28px">
                          <p class="UserNameSettings">اللغة</p>
                          <div class="row">
                            <div class="col-md-6 col-12">
                              <div>
                                <select v-model="language.language"
                                  class="js-example-placeholder-single js-states form-control rowDateofBirth">
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
                                <select v-model="language.degree"
                                  class="js-example-placeholder-single js-states form-control rowDateofBirth">
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
                          <button class="btnBackSettings btnBackSettingsModName" data-dismiss="modal">
                            إلغاء
                          </button>
                          <button class="btnNextSettings btnNextSettingsModName" data-dismiss="modal"
                            @click="updateLanguage()">
                            حفظ
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <hr />
                  <p class="UserNameSettings">مكان التعليم</p>
                  <input v-model="college.university" type="text" placeholder="مثلا الجامعة العربية"
                    class="txtUserNameSettings" />
                  <p class="UserNameSettings">الكلية والتخصص</p>
                  <input v-model="college.speciality" type="text"
                    placeholder="مثلا كلية القانون الدولي/ القانون الجنائي" class="txtUserNameSettings" />
                  <p class="UserNameSettings">مدة الدراسة</p>
                  <div class="row">
                    <div class="col-md-6 col-12">
                      <div>
                        <input v-model="college.from"
                          class="js-example-placeholder-single js-states form-control rowDateofBirth" type="date" />
                      </div>
                    </div>
                    <div class="col-md-6 col-12">
                      <div>
                        <input v-model="college.to"
                          class="js-example-placeholder-single js-states form-control rowDateofBirth" type="date" />
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
                  <button class="btnNextSettings" @click="updateCollege(), goStep(6)">
                    التالي
                  </button>
                </div>
              </div>
            </div>
            <div id="v-pills-work" class="tab-pane fade" role="tabpanel" aria-labelledby="v-pills-work-tab">
              <div class="tabContents">
                <div class="headTabs">
                  <h6>العمل والخبرات العملية</h6>
                  <p class="numTabs">7 - 6</p>
                </div>
                <hr class="hrHeadSettings" />
                <div class="bodyTabs">
                  <h6 class="pBio">مكان العمل</h6>
                  <input v-model="employment.workplace" type="text" placeholder="مثلا مكتب العدالة للأعمال القانونية"
                    class="txtUserNameSettings" />
                  <h6 class="pBio">وصف العمل</h6>
                  <textarea v-model="employment.description" class="txtUserNameSettings textareaSettings" cols="30"
                    rows="10"></textarea>
                  <p class="UserNameSettings">وقت ومدة العمل</p>
                  <div class="row">
                    <div class="col-md-6 col-12">
                      <div>
                        <input v-model="employment.from"
                          class="js-example-placeholder-single js-states form-control rowDateofBirth" type="date" />
                      </div>
                    </div>
                    <div class="col-md-6 col-12">
                      <div>
                        <input v-model="employment.to"
                          class="js-example-placeholder-single js-states form-control rowDateofBirth" type="date" />
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
                  <button class="btnNextSettings" @click="updateEmployee(), goStep(7)">
                    التالي
                  </button>
                </div>
              </div>
            </div>
            <div id="v-pills-job" class="tab-pane fade" role="tabpanel" aria-labelledby="v-pills-job-tab">
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
                  <input v-model="license.license_issuer" type="text" class="txtUserNameSettings" />
                  <h6 class="pBio">رقم الترخيص</h6>
                  <input v-model="license.license_number" type="text" class="txtUserNameSettings" />
                  <h6 class="pBio">سنة الترخيص</h6>
                  <input v-model="license.license_year"
                    class="js-example-placeholder-single js-states form-control rowDateofBirth" type="date" />
                </div>
                <p class="pJob">
                  هذه الخطوة مهمة لاثبات إجازة ممارسة مهنة المحاماة وتساعدك
                  لاحقاً في توثيق حسابك
                </p>
                <hr />
                <div class="footerTabs footerTabsFlex">
                  <button class="btnBackSettings">رجوع</button>
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

export default {
  data() {
    return {
      image: null,
      update_data: {},
      college: {},
      languagess: {
        language: [
          {
            language: "2",
            degree: "junior",
          },
        ],
      },
      jobs: {},
      experience: {},
      employment: {},
      language: {},
      countries: [],
      cities: [],
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
      license: {},
    };
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
  created() {
    func();
    this.getCountries();
    this.getspeciality();
    this.update_data = {
      name: this.$store.state.user.name,
      birth_date: this.$store.state.user.birthday,
      city_id: this.$store.state.user.city_id,
      country_id: this.$store.state.user.country_id,
      gender: this.$store.state.user.gender,
      // image: this.$store.state.user.image,
      // mobile: this.$store.state.user.mobile,
      street: this.$store.state.user.street,
      time_zone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    };
    // this.college = this.$store.state.user;
  },
  methods: {
    getCountries() {
      this.$http.get("api/country").then((res) => {
        this.countries = res.data.data.country;
      });
    },
    getspeciality() {
      this.$http.get("api/auth/client/Speciality").then((res) => {
        console.log(res.data.data);
      });
    },
    // getTimeZones() {
    //   // this.$http.get("http://api.timezonedb.com/v2.1/list-time-zone").then();
    // },
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
    async updateProfile() {
      let form = new FormData();
      await Object.entries(this.update_data).forEach((entry) => {
        form.append(entry[0], entry[1]);
      });
      await form.append("image", this.image);
      this.$http.post("lawyer/auth/lawyer/update-profile", form).then(() => {
        this.$notify({
          group: "foo",
          type: "success",
          text: "تم تحديث الملف الشخصي بنجاح",
        });
      });
    },
    updateCollege() {
      this.college.language = JSON.stringify(this.languagess);
      console.log(this.college);
      this.$http
        .post("lawyer/auth/lawyer/update-college", this.college)
        .then(() => {
          this.$notify({
            group: "foo",
            type: "success",
            text: "تم التحديث بنجاح",
          });
        });
    },
    updateJobs() {
      this.$http.post("lawyer/auth/lawyer/update-jobs", this.jobs).then(() => {
        this.$notify({
          group: "foo",
          type: "success",
          text: "تم التحديث بنجاح",
        });
      });
    },
    updateExperience() {
      this.$http
        .post("lawyer/auth/lawyer/update-experience", this.experience)
        .then(() => {
          this.$notify({
            group: "foo",
            type: "success",
            text: "تم التحديث بنجاح",
          });
        });
    },
    updateEmployee() {
      this.$http
        .post("lawyer/auth/lawyer/update-employe", this.employment)
        .then(() => {
          this.$notify({
            group: "foo",
            type: "success",
            text: "تم التحديث بنجاح",
          });
        });
    },
    updateLanguage() {
      this.languagess.push({
        language: this.language.language,
        degree: this.language.level,
      });
    },
    updateLicense() {
      this.$http
        .post("lawyer/auth/lawyer/update-license", this.license)
        .then(() => {
          this.$notify({
            group: "foo",
            type: "success",
            text: "تم التحديث بنجاح",
          });
          this.$router.push("");
        });
    },
  },
};
</script>
