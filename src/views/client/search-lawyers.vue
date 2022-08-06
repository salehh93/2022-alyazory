<template>
  <div class="container">
    <div class="pagesLinks">
      <a href="index.html">الرئيسية</a>
    </div>
    <h3 class="hTitle">ابحث عن محامي أو مكتب</h3>
    <div class="row">
      <div class="col-lg-3 col-md-4 col-12 search-lawyers-filter">
        <div class="divClassify" style="margin-bottom: 28px">
          <h4>تصنيف حسب</h4>
          <div class="ddlistClassify">
            <select
              class="js-example-placeholder-single js-states form-control country"
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
          <div class="ddlistClassify">
            <select
              class="js-example-placeholder-single js-states form-control law"
            >
              <option></option>
              <option v-for="(law, i) in countryLaws" :key="i" :value="law.id">
                {{ law.name }}
              </option>
            </select>
          </div>
          <div class="ddlistClassify">
            <select
              class="js-example-placeholder-single js-states form-control specialization"
            >
              <option></option>
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
        <div class="divShow" style="margin-bottom: 47.8px">
          <h4>التقييم</h4>
          <div class="ddShowType">
            <div class="divStarts divStartsProfile starSearch">
              <div v-for="i in [1, 2, 3, 4, 5]" :key="i">
                <i
                  :class="`far fa-star star stSearch ${
                    rating >= i ? 'fas' : ''
                  }`"
                  @click="() => (rating === i ? (rating = 0) : (rating = i))"
                ></i>
              </div>
            </div>
          </div>
        </div>
        <div class="divShow" style="margin-bottom: 38px">
          <h4>المهارات</h4>
          <div class="ddShowType">
            <select
              class="js-example-placeholder-single js-states form-control ShowSkills"
            >
              <option></option>
              <option v-for="(skill, i) in skills" :key="i" :value="skill.id">
                {{ skill.name }}
              </option>
            </select>
          </div>
        </div>
        <div class="divDeadline" style="margin-bottom: 38px">
          <h4>المحامي أو المكاتب</h4>

          <label class="containerlbl"
            >هوية موثّقة
            <input v-model="id_number" type="checkbox" />
            <span class="checkmark"></span>
          </label>
          <label class="containerlbl"
            >أضافوا عروضا على مشاريعي
            <input v-model="offers_type[0]" type="checkbox" />
            <span class="checkmark"></span>
          </label>
          <label class="containerlbl">
            وظفتهم سابقا
            <input v-model="offers_type[1]" type="checkbox" />
            <span class="checkmark"></span>
          </label>
        </div>
        <div class="divDeadline">
          <h4>النوع</h4>

          <label class="containerlbl"
            >مكتب
            <input v-model="type[0]" type="checkbox" />
            <span class="checkmark"></span>
          </label>
          <label class="containerlbl"
            >محامي
            <input v-model="type[1]" type="checkbox" />
            <span class="checkmark"></span>
          </label>
        </div>
      </div>
      <div class="col-lg-9 col-md-8 col-12 search-lawyers-content">
        <div class="divSearch">
          <input
            v-model="name"
            type="text"
            class="lawyers-search-box"
            placeholder="   بحث"
          />
        </div>

        <div class="ContetnOffices ContetnOfficesFav">
          <div v-for="lawyer in lawyers" :key="lawyer.id" class="row">
            <div class="col-lg-9 col-md-8 col-12">
              <div
                class="flexInfoClient divcontentOffice divcontentSpecialOrders"
              >
                <div class="imgProfile imgProfileClient imgNofi">
                  <img
                    :src="lawyer.img || require('@/assets/img/lawyer.png')"
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
                    <a href="profile_Office.html">
                      <p class="pNameflexHeadNameOffice">{{ lawyer.name }}</p>
                    </a>
                    <p class="pNumflexHeadNameOffice">
                      {{ lawyer.employment_avg }}%
                    </p>
                    <div class="divStarts divStartsProfile">
                      <div v-for="i in range(0, lawyer.rating)" :key="i">
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
                          />
                          <path
                            id="Path_1934"
                            data-name="Path 1934"
                            d="M8.473,14.127a1.374,1.374,0,0,1-.473.08,1.461,1.461,0,0,1-.513-.093L0,11.62v5.087A1.832,1.832,0,0,0,1.833,18.54H14.167A1.832,1.832,0,0,0,16,16.707V11.62Z"
                            transform="translate(0 -3.207)"
                            fill="#8e8e93"
                          />
                          <path
                            id="Path_1935"
                            data-name="Path 1935"
                            d="M16,6.833V8.36L8.16,10.973a.493.493,0,0,1-.32,0L0,8.36V6.833A1.832,1.832,0,0,1,1.833,5H14.167A1.832,1.832,0,0,1,16,6.833Z"
                            transform="translate(0 -1)"
                            fill="#8e8e93"
                          />
                        </g>
                      </svg>

                      <label class="lblInfoOffices" style="margin-right: 4px">{{
                        lawyer.Speciality || "__"
                      }}</label>
                    </div>
                  </div>
                  <div>
                    <p class="txtLastNoti">
                      {{ lawyer.bio }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-8 col-12 colddlistOffices">
              <a href="AddOrder_Special.html">
                <button class="switchPublic">توظيف</button>
              </a>
              <div class="divcolddlistOffices">
                <!-- <div class="dropdown">
                  <button
                    id="ddlistOffices"
                    class="btnddlistOffices"
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
                    class="dropdown-menu ddlistSetMsg"
                    aria-labelledby="ddlistOffices"
                    x-placement="bottom-start"
                  >
                    <a
                      class="dropdown-item"
                      href="#"
                      style="color: #000 !important; padding-right: 10px"
                    >
                      <label class="lblListMsg">وظفني </label>
                    </a>
                    <a
                      class="dropdown-item"
                      href="#"
                      style="color: #000 !important; padding-right: 10px"
                    >
                      <label class="lblListMsg">تبليغ عن محتوى </label>
                    </a>
                  </div>
                </div> -->
              </div>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import isNil from "lodash/isNil";
import range from "lodash/range";
import func from "../../assets/js/functions";

export default {
  data() {
    return {
      rating: 0,
      skills: [],
      lawyers: [],
      countries: [],
      countryLaws: [],
      specialties: [],
      country_id: null,
      speciality_id: null,
      skill_id: null,
      type: [],
      offers_type: [],
      country_law: null,
      name: null,
      id_number: false,
    };
  },
  watch: {
    country_id() {
      console.log("in here");
      this.getLawyers();
    },
    speciality_id() {
      this.getLawyers();
    },
    skill_id() {
      this.getLawyers();
    },
    type() {
      this.getLawyers();
    },
    offers_type() {
      this.getLawyers();
    },
    country_law() {
      this.getLawyers();
    },
    name() {
      this.getLawyers();
    },
    rating() {
      this.getLawyers();
    },
    id_number() {
      this.getLawyers();
    },
  },
  mounted() {
    func();
    this.getLawyers();
    this.getCountries();
    this.getCountryLaws();
    this.getSpecialties();
    this.getSkills();

    $(".search-lawyers-filter .country").on("change", () => {
      this.country_id = $(".search-lawyers-filter .country").select2(
        "data"
      )[0]?.id;
    });
    $(".search-lawyers-filter .law").on("change", () => {
      this.country_law = $(".search-lawyers-filter .law").select2(
        "data"
      )[0]?.id;
    });
    $(".search-lawyers-filter .specialization").on("change", () => {
      this.speciality_id = $(".search-lawyers-filter .specialization").select2(
        "data"
      )[0]?.id;
    });
    $(".search-lawyers-filter .ShowSkills").on("change", () => {
      this.skill_id = $(".search-lawyers-filter .ShowSkills").select2(
        "data"
      )[0]?.id;
    });
  },
  methods: {
    range,
    getLawyers() {
      const {
        country_id,
        speciality_id,
        skill_id,
        type,
        country_law,
        offers_type,
        name,
        id_number,
        rating,
      } = this;
      const isValid = (val) => !isNil(val) && val !== "";
      const genParam = (obj, modifier) => {
        const value = modifier
          ? modifier(Object.values(obj)[0])
          : Object.values(obj)[0];
        return isValid(value) ? `${Object.keys(obj)[0]}=${value}` : "";
      };
      const params = [
        genParam({ country_id }),
        genParam({ speciality_id }),
        genParam({ skill_id }),
        genParam({ rating }, (v) => (v ? v : null)),
        genParam({ type }, (val) =>
          val
            .map((v, i) => {
              if (i == 0 && v) {
                return "office";
              } else if (i == 1 && v) {
                return "person";
              }
            })
            .filter((e) => !!e)
            .join(",")
        ),
        genParam({ country_law }),
        genParam({ offers_type }, (val) =>
          val
            .map((v, i) => {
              if (i == 0 && v) {
                return 1;
              } else if (i == 1 && v) {
                return 2;
              }
            })
            .filter((e) => !!e)
            .join(",")
        ),
        genParam({ name }),
        genParam({ id_number }, (v) => (v ? `${v}` : null)),
      ].filter((e) => !!e);

      this.$http
        .get(`api/auth/client/filter/lawyers?${params.join("&")}`)
        .then((res) => {
          this.lawyers = res.data.data;
        });
    },
    getCountries() {
      this.$http.get("api/country").then((res) => {
        this.countries = res.data.data.country;
      });
    },
    getCountryLaws() {
      this.$http.get("api/auth/client/country-Law").then((res) => {
        this.countryLaws = res.data.data.countryLaws;
      });
    },
    getSpecialties() {
      this.$http.get("api/auth/client/Speciality").then((res) => {
        this.specialties = res.data.data.Speciality;
      });
    },
    getSkills() {
      this.$http.get("api/auth/client/Skills").then((res) => {
        this.skills = res.data.data.Skill;
      });
    },
  },
};
</script>
<style lang=""></style>
