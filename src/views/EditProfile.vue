<template>
  <!-- Start Content -->
  <div class="container contentSettings">
    <h3 class="hTitle hSettingsPage">الإعدادات</h3>
    <!-- class="d-flex align-items-start" -->
    <div>
      <div class="row">
        <div class="col-lg-3 col-md-5 col-12 colTabsSettings">
          <!-- start div Tabs -->
          <div
            id="v-pills-tab"
            class="nav flex-column nav-pills me-3"
            role="tablist"
            aria-orientation="vertical"
          >
            <!-- trigger the image update tab -->
            <button
              id="v-pills-photo-tab"
              ref="iData"
              :class="`nav-link btnTabs ${
                activeStep === 1 ? 'active active-c-btn' : ''
              }`"
              data-bs-target="#v-pills-photo"
              type="button"
              role="tab"
              aria-controls="v-pills-photo"
              aria-selected="true"
              @click="() => (activeStep = 1)"
            >
              الصورة الشخصية
            </button>
            <!-- trigger the personal info update tab -->
            <button
              id="v-pills-profile-tab"
              ref="pData"
              :class="`nav-link btnTabs ${
                activeStep === 2 ? 'active active-c-btn' : ''
              }`"
              data-bs-target="#v-pills-profile"
              type="button"
              role="tab"
              aria-controls="v-pills-profile"
              aria-selected="false"
              @click="() => (activeStep = 2)"
            >
              البيانات الشخصية
            </button>
            <!-- trigger the job info update tab -->
            <button
              id="v-pills-bio-tab"
              ref="jData"
              :class="`nav-link btnTabs ${
                activeStep === 3 ? 'active active-c-btn' : ''
              }`"
              data-bs-target="#v-pills-bio"
              type="button"
              role="tab"
              aria-controls="v-pills-bio"
              aria-selected="false"
              @click="() => (activeStep = 3)"
            >
              المسمى الوظيفي والنبذة
            </button>
          </div>
          <!-- end div Tabs -->
        </div>
        <div class="col-lg-9 col-md-7 col-12">
          <!-- start div content Tabs -->

          <div id="v-pills-tabContent" class="tab-content">
            <!-- image tab -->
            <div
              id="v-pills-photo"
              :class="`tab-pane ${activeStep === 1 ? 'show active' : 'fade'}`"
              role="tabpanel"
              aria-labelledby="v-pills-photo-tab"
            >
              <div class="tabContents">
                <div class="headTabs">
                  <h6>الصورة الشخصية</h6>
                  <!-- <p class="numTabs">7 - 1</p> -->
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
                        previewImage || require('../assets/img/PersonalImg.png')
                      "
                      alt=""
                      accept="image/*"
                      style="
                         {
                          max-width: 150px !impoertant;
                          max-height: 150px !impoertant;
                          height: 150px !important;
                          width: 150px !important;
                        }
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
                    <!-- choose image modal -->
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
                              aria-label="Close"
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
                  <!-- <button class="btnBackSettings">رجوع</button> -->

                  <div
                    id="v-pills-tab"
                    class="nav flex-column nav-pills me-3"
                    role="tablist"
                    aria-orientation="vertical"
                  >
                    <button
                      id="v-pills-profile-tab"
                      class="btnNextSettings"
                      data-bs-toggle="pill"
                      type="button"
                      role="tab"
                      aria-controls="v-pills-profile"
                      aria-selected="false"
                      @click="() => onNextStep(1)"
                    >
                      التالي
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <!-- end of image tab -->

            <!-- personel data tab -->
            <div
              id="v-pills-profile"
              :class="`tab-pane ${activeStep === 2 ? 'show active' : 'fade'}`"
              role="tabpanel"
              aria-labelledby="v-pills-profile-tab"
            >
              <div class="tabContents">
                <div class="headTabs">
                  <h6>البيانات الشخصية</h6>
                  <!-- <p class="numTabs">7 - 2</p> -->
                </div>
                <hr />
                <div class="bodyTabs">
                  <p class="UserNameSettings">اسم المستخدم</p>
                  <p class="numTabs exampleNameSettings">
                    قم باختيار اسم حقيقي لك لانه سيظهر في رابط الصفحة في الأعلى
                    مثلاًwww.mostasharq.com/user_name
                  </p>
                  <input
                    v-model="update_data.username"
                    type="text"
                    :class="`txtUserNameSettings ${
                      errors.username ? 'input-error' : ''
                    }`"
                    @change="() => validateStep(2, 'username')"
                  />
                  <p class="UserNameSettings">الاسم</p>
                  <input
                    v-model="update_data.name"
                    type="text"
                    :class="`txtUserNameSettings ${
                      errors.name ? 'input-error' : ''
                    }`"
                    @change="() => validateStep(2, 'name')"
                  />
                  <!-- user date of birth -->
                  <p class="UserNameSettings">تاريخ الميلاد</p>
                  <div class="row rowDateofBirth rowBirthInfo">
                    <div class="col-lg-12 col-md-12 col-12">
                      <input
                        v-model="update_data.birth_date"
                        :class="`js-example-placeholder-single js-states form-control DateDay ${
                          errors.birth_date ? 'input-error' : ''
                        }`"
                        type="date"
                        @change="() => validateStep(2, 'birth_date')"
                      />
                    </div>
                  </div>
                  <p class="UserNameSettings">الجنس</p>
                  <select
                    v-model="update_data.gender"
                    :class="`js-example-placeholder-single js-states form-control Gender rowDateofBirth ${
                      errors.gender ? 'select-error' : ''
                    }`"
                    @change="() => validateStep(2, 'gender')"
                  >
                    <option></option>
                    <option selected value="M">ذكر</option>
                    <option value="F">أنثى</option>
                  </select>

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
                        v-model="update_data.mobile"
                        :auto-format="false"
                        mode="national"
                        :class="errors.mobile ? 'input-error' : ''"
                        @blur="() => validateStep(2, 'mobile')"
                      />
                      <p v-if="errors.mobile" class="input-error-message">
                        {{ errors.mobile.message }}
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
                  <p class="UserNameSettings">الدولة</p>
                  <select
                    v-model="update_data.country_id"
                    :class="`form-control form-spacer ${
                      errors.country_id ? 'select-error' : ''
                    }`"
                    @change="() => validateStep(2, 'country_id')"
                  >
                    <option
                      v-for="(country, i) in countries"
                      :key="i"
                      :value="country.id"
                    >
                      {{ country.name }}
                    </option>
                  </select>

                  <p class="UserNameSettings">المدينة</p>
                  <!--  js-example-placeholder-single js-states -->
                  <select
                    v-model="update_data.city_id"
                    :class="`form-control rowDateofBirth rowInfoPlace ${
                      errors.city_id ? 'select-error' : ''
                    }`"
                    @change="() => validateStep(2, 'city_id')"
                  >
                    <option
                      v-for="(city, i) in cities"
                      :key="i"
                      :value="city.id"
                    >
                      {{ city.name }}
                    </option>
                  </select>

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
                  <button
                    class="btnBackSettings"
                    @click="() => onPreviousStep(2)"
                  >
                    رجوع
                  </button>
                  <button class="btnNextSettings" @click="() => onNextStep(2)">
                    التالي
                  </button>
                </div>
              </div>
            </div>
            <!-- end of personel data tab -->
            <div
              id="v-pills-bio"
              :class="`tab-pane ${activeStep === 3 ? 'show active' : 'fade'}`"
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
                    v-model="update_data.job_title.job_title[0].job_title"
                    type="text"
                    :class="`txtUserNameSettings txtBio ${
                      errors['job_title.job_title[0].job_title']
                        ? 'input-error'
                        : ''
                    }`"
                    @input="
                      () => validateStep(3, 'job_title.job_title[0].job_title')
                    "
                  />
                  <h6 class="pBio">اكتب نبذة شخصية عنك تظهر في حسابك</h6>
                  <textarea
                    v-model="update_data.job_title.job_title[0].desc"
                    :class="`txtUserNameSettings textareaSettings textareaSetClient ${
                      errors['job_title.job_title[0].desc'] ? 'input-error' : ''
                    }`"
                    cols="30"
                    rows="10"
                    @input="
                      () => validateStep(3, 'job_title.job_title[0].desc')
                    "
                  ></textarea>
                  <h6 class="titleSkills">ما هو مستواك في اللغة العربية</h6>
                  <select
                    v-model="update_data.language.language[0].degree"
                    :class="`js-example-placeholder-single js-states form-control rowDateofBirth rowEdu ${
                      errors['language.language[0].degree']
                        ? 'select-error'
                        : ''
                    }`"
                    @change="
                      () => validateStep(3, 'language.language[0].degree')
                    "
                  >
                    <option selected style="color: #a2a2a6">
                      قم باختيار مستواك ما بين محترف إلى مبتدئ
                    </option>
                    <option v-for="(l, i) in levels" :key="i" :value="l.value">
                      {{ l.text }}
                    </option>
                  </select>
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
                                  v-model="language"
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
                                  v-model="level"
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
                            class="btnBackSettings btnBackSettingsModName"
                            data-dismiss="modal"
                            @click="(language = ''), (level = '')"
                          >
                            إلغاء
                          </button>
                          <button
                            class="btnNextSettings btnNextSettingsModName"
                            data-dismiss="modal"
                            @click="addLanguage()"
                          >
                            حفظ
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div class="footerTabs footerTabsFlex">
                  <button class="btnBackSettings" @click="$refs.pData.click()">
                    رجوع
                  </button>
                  <button class="btnSavdAddSettings" @click="saveData()">
                    حفظ
                  </button>
                  <!-- <button class="btnNextSettings">التالي</button> -->
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
import func from "../assets/js/functions";
import { first, last } from "../utils/index";
import {
  personalInfoSchema,
  jobTitelAndDescSchema,
} from "../schema/edit-profile";

export default {
  data() {
    return {
      update_data: {
        username: null,
        name: null,
        birth_date: null,
        city_id: null,
        country_id: null,
        gender: null,
        mobile: null,
        street: null,
        language: {
          language: [
            {
              language: "العربية",
              degree: "",
            },
          ],
        },
        job_title: {
          job_title: [
            {
              job_title: "",
              desc: "",
            },
          ],
        },
      },
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
      previewImage: this.$store.state.user.image,
      languages: ["English"],
      countries: [],
      cities: [],
      language: "",
      level: "",
      image: null,
      toSend: new FormData(),
      countryCode: null,
      errors: [],
      activeStep: 1,
    };
  },
  watch: {
    "update_data.country_id": {
      handler: function (_, newVla) {
        this.getCities();
        if (newVla) {
          this.update_data.city_id = null;
        }
      },
    },
  },
  mounted() {
    func();
    this.getCountries();
    const updateUserData = () => {
      const storedLanguages = this.$store.state.user.language;
      const storedJobTitles = this.$store.state.user.ClientJobs;
      this.update_data.username = this.$store.state.user.username;
      this.update_data.name = this.$store.state.user.name;
      this.update_data.birth_date = this.$store.state.user.birthday;
      this.update_data.city_id = this.$store.state.user.city_id;
      this.update_data.country_id = this.$store.state.user.country_id;
      this.update_data.gender = this.$store.state.user.gender;
      this.update_data.mobile = this.$store.state.user.mobile;
      this.update_data.street = this.$store.state.user.street;
      this.update_data.language = {
        language: [
          {
            language: first(storedLanguages)?.language || "العربية",
            degree: first(storedLanguages)?.degree || "",
          },
        ],
      };
      this.update_data.job_title = {
        job_title: [
          {
            job_title: last(storedJobTitles).job_title || "",
            desc: last(storedJobTitles).desc || "",
          },
        ],
      };
    };
    updateUserData();
  },
  methods: {
    getPhoto(e) {
      this.image = e.target.files[0];
      let reader = new FileReader();
      reader.onload = (res) => {
        this.previewImage = res.target.result;
      };
      reader.readAsDataURL(e.target.files[0]);
    },
    getLangs() {
      this.$http.get("https://api.linguin.ai/v1/").then((res) => {
        console.log(res.data);
      });
    },
    getCountries() {
      this.$http.get("api/country").then((res) => {
        this.countries = res.data.data.country;
      });
    },
    getCities() {
      this.$http
        .get(`api/city?county_id=${this.update_data.country_id}`)
        .then((res) => {
          this.cities = res.data.data.city;
        });
    },
    addLanguage() {
      this.update_data.language.language.push({
        language: this.language,
        degree: this.level,
      });
    },
    validateStep(stepNumber, fieldName) {
      const validateAgainstSchema = (schema) => {
        try {
          schema.validateSync(this.update_data, {
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
            this.$forceUpdate();
          } else {
            this.errors = {};
            err.inner.forEach(
              ({ path, message }) => (this.errors[path] = { message })
            );
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
          return validateAgainstSchema(personalInfoSchema);
        }
        case 3: {
          return validateAgainstSchema(jobTitelAndDescSchema);
        }
        default:
          return false;
      }
    },
    onPreviousStep(stepNumber) {
      const refsMap = {
        2: this.$refs.iData,
        3: this.$refs.jData,
      };
      refsMap[stepNumber].click();
    },
    onNextStep(stepNumber) {
      const refsMap = {
        1: this.$refs.pData,
        2: this.$refs.jData,
        3: this.$refs.pData,
      };
      if (this.validateStep(stepNumber)) {
        refsMap[stepNumber].click();
        this.activeStep = stepNumber + 1;
      }
    },
    async saveData() {
      const isFirstTabValid = this.validateStep(1);
      if (!isFirstTabValid) {
        this.activeStep = 1;
        return;
      }
      const isSecondTabValid = this.validateStep(2);
      if (!isSecondTabValid) {
        this.activeStep = 2;
        return;
      }
      const isThirdTabValid = this.validateStep(3);
      if (!isThirdTabValid) {
        return;
      }
      try {
        this.toSend = new FormData();
        Object.entries(this.update_data).forEach(([key, value]) => {
          this.toSend.append(
            key,
            typeof value === "object" ? JSON.stringify(value) : value
          );
        });
        this.toSend.append("image", this.image);
        await this.$http.post("api/auth/client/update-profile", this.toSend);
        // update state
        const userInfo = await this.$http.get("api/auth/client/profile");
        await this.$store.commit("setUser", userInfo.data.data);
        this.$notify({
          group: "foo",
          type: "success",
          text: "تم تحديث البيانات بنجاح",
        });
        this.$router.push("/Home");
      } catch (err) {
        this.$notify({
          group: "foo",
          type: "error",
          text:
            err.response?.data?.message ||
            "لم يتم التحديث, يرجى المحاولة لاحقا",
        });
      }
    },
  },
};
</script>

<style scoped>
.active-c-btn {
  background-color: aliceblue !important;
  transform: scale3d(1.1, 1.1, 1.1);
}
</style>
