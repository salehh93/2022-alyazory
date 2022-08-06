<template>
  <!-- Start Content -->
  <div class="container">
    <div class="pagesLinks">
      <router-link to="/home">الرئيسية</router-link>
    </div>
    <div class="titleAndIcons">
      <h3 class="hTitle">إضافة طلب</h3>
    </div>
    <div class="row">
      <div class="col-lg-9 col-md-8 col-12">
        <div class="tabContents">
          <div class="bodyTabPay bodyContentAddWork">
            <div class="divtxtsAddWork">
              <p class="pAddWorksPort">عنوان الطلب</p>
              <input
                v-model="order.title"
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
                    v-for="(skill, i) in skills"
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
                v-model="order.description"
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
                  <label for="validationCustomUsername" class="lblFormAddOffers"
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
                      v-model="order.budget"
                      type="text"
                      :class="`form-control txtformAddOfferDetails ${
                        errors.budget ? 'input-error' : ''
                      }`"
                      aria-describedby="inputGroupPrepend"
                      required=""
                      @input="() => validateForm('budget')"
                    />
                    <div class="invalid-feedback">الرجاء تحديد الميزانية</div>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-12">
                <div class="colFormAddOffer colFormAddOrder">
                  <label for="validationCustomUsername" class="lblFormAddOffers"
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
                      v-model="order.total_value"
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
                  v-model="order.delivery_time_form"
                  type="number"
                  :class="`form-control txtformAddOfferDetails order-date-input ${
                    errors.delivery_time_form ? 'input-error' : ''
                  }`"
                  aria-describedby="inputGroupPrepend"
                  required=""
                  @change="() => validateForm('delivery_time_form')"
                />
                <div class="invalid-feedback">الرجاء تحديد وقت الاستلام</div>
              </div>
            </div>
            <div class="divphotoAddWork divallImgAddWork colFormAddOrder">
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
                          v-for="(speciality, i) in specialties"
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
          <div class="footerTabs footerAddWork">
            <button class="btnBackSettings" @click="cancel()">رجوع</button>
            <button class="btnNextSettings" @click="addOrder()">نشر</button>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-4 col-12">
        <div>
          <div>
            <p class="ptitleNoteAddwork">ابدأ ببناء مشروعك</p>
            <p class="pDescNoteAddwork">
              من خلال مستشارك تستطيع بناء طلبك بالشكل الذي تريد، أدخل تفاصيل
              الطلب والميزانية المتوقعة، ليتم مراجعة طلبك ونشره مجاناً على
              ميتشارك . بعد ذلك، سيتقدّم أفضل المحاميين وأصحاب المكاتب المسجلين
              بعروض مختلفة لتختار العرض المناسب لك وتبدأ بتنفيذ مشروعك.
            </p>
          </div>

          <div>
            <p class="ptitleNoteAddwork">موقع مستشارك يضمن حقوقك</p>
            <p class="pDescNoteAddwork">
              عندما تتعامل مع أحد المحاميين من خلال موقع مستشارك، يبقى الموقع
              وسيطا بينك وبين المحامي الذي ينفّذ طلبك وفقط عندما ينتهي تنفيذ
              المشروع كاملاً يتم تحويل المبلغ لحساب المحامي الذي نفّذ مشروعك.
            </p>
          </div>

          <div>
            <p class="ptitleNoteAddwork">نصائح لعمل ناجح</p>
            <p class="pDescNoteAddwork">
              أدخل تفاصيل الطلب بدقة<br />
              املأ جميع الحقول ووفّر أمثلة لما تريد<br />
              جزّء الطلب على عدّة مراحل صغيرة
            </p>
          </div>
          <div>
            <p class="pDescNoteAddwork pNoteOrdersConditions">
              إضافة هذه الشروط اختياري يسهل عليك البحث عن محامي أو مكتب حسب
              المطلوب لانجاز طلبك ويسهل عليهم أيضا تقديم عروض حسب الشروط المرفقة
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- end Content -->
</template>

<script>
import func from "../../assets/js/functions";
import { addOrderSchema } from "../../schema/add-order";

export default {
  data() {
    return {
      order: {
        skill_id: [],
        speciality_id: [],
        delivery_time_to: "1/1/1",
        "file[0]": [],
        type: "consultation",
      },
      skills: [],
      specialties: [],
      countries: [],
      toSend: new FormData(),
      errors: {},
    };
  },
  mounted() {
    func();
    this.getSkills();
    this.getSpecialities();
    this.getCountries();
    this.getCountryLaws();
    $(".js-example-placeholder-single.country-laws").on("change", () => {
      this.order.countrylaw_id = $(
        ".js-example-placeholder-single.country-laws"
      ).select2("data")[0]?.id;
      this.validateForm("countrylaw_id");
    });
    $(".js-example-placeholder-single.country").on("change", () => {
      this.order.country_id = $(
        ".js-example-placeholder-single.country"
      ).select2("data")[0]?.id;
      this.validateForm("country_id");
    });
    $(".specialization").on("change", () => {
      this.order.speciality_id = $(".specialization")
        .select2("data")
        .map((e) => e.id);
      this.validateForm("speciality_id");
    });
    $(".js-example-tokenizerskills").on("change", () => {
      this.order.skill_id = $(".js-example-tokenizerskills")
        .select2("data")
        .map((e) => e.id);
      this.validateForm("skill_id");
    });
  },
  methods: {
    getSkills() {
      this.$http.get("api/auth/client/Skills").then((res) => {
        this.skills = res.data.data.Skill;
      });
    },
    getSpecialities() {
      this.$http.get("api/auth/client/Speciality").then((res) => {
        this.specialties = res.data.data.Speciality;
      });
    },
    getCountryLaws() {
      this.$http.get("api/auth/client/country-Law").then((res) => {
        this.countryLaws = res.data.data.countryLaws;
      });
    },
    getCountries() {
      this.$http.get("api/country").then((res) => {
        this.countries = res.data.data.country;
      });
    },
    setFile(e) {
      this.order["file[0]"] = e.target.files[0];
    },
    cancel() {
      this.order = {
        skill_id: [],
        speciality_id: [],
        delivery_time_to: "1/1/1",
      };
    },
    validateForm(fieldName) {
      try {
        addOrderSchema.validateSync(this.order, {
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
    addOrder() {
      const isValid = this.validateForm();
      if (!isValid) {
        return;
      }
      Object.entries(this.order).forEach(([key, value]) => {
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
        this.order = {
          skill_id: [],
          speciality_id: [],
          delivery_time_to: "1/1/1",
        };
        this.errors = {};
        $(".js-example-placeholder-single.country-laws").empty();
        $(".js-example-placeholder-single.country").empty();
        $(".specialization").empty();
        $(".js-example-tokenizerskills").empty();
      });
    },
  },
};
</script>

<style>
.drop-zone {
  height: 79px;
  /* padding: 25px; */
  display: flex;
  /* align-items: center; */
  /* justify-content: center; */
  text-align: center;
  font-family: "Quicksand", sans-serif;
  font-weight: 500;
  font-size: 20px;
  cursor: pointer;
  color: #cccccc;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  margin-bottom: 10px;
}

.drop-zone--over {
  border-style: solid;
}

.drop-zone__input {
  display: none;
}

.drop-zone__thumb {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
  /* background-color: #cccccc; */
  background-size: cover;
  /* color: #fff; */
  position: relative;
}

.drop-zone__thumb::after {
  content: attr(data-label);
  position: absolute;
  bottom: 19px;
  left: 0;
  width: 100%;
  padding: 5px 20px;
  color: #ffffff;
  /* background: rgba(0, 0, 0, 0.75); */
  font-size: 14px;
  color: #000;
  text-align: right;
}

.placeDragFile {
  font-family: "Almarai";
  font-size: 16px;
  color: #a2a2a6;
  border-right: 1px solid #d9d9d9;
  padding-right: 20px;
  margin-right: 20px;
  display: flex;
  align-items: center;
}
</style>
