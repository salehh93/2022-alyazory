<template>
  <!-- Start Content -->
  <div class="row contentLog">
    <div class="col-md-6 col-12 colFormLog">
      <div class="LogInfo">
        <div class="divLogoLog">
          <div class="divWidthImgLogo">
            <img src="../assets/img/Logo.png" alt="" />
          </div>
        </div>
        <div>
          <h6 class="hSignup">أكمل إنشاء حسابك المجاني</h6>
        </div>
        <div>
          <p class="pJoin">التسجيل كـ</p>
          <!-- user type switchers -->
          <div class="container containerType">
            <div class="row">
              <!-- button to set user type as(صاحب مشاريع) -->
              <div class="col-4 divpTypeUser UserEntre">
                <div class="btnTypeUser active">
                  <button
                    class="btnActiveUser"
                    @click="$store.state.register_data.type = 'p_owner'"
                  >
                    صاحب مشاريع
                  </button>
                </div>
              </div>
              <!-- button to set user type as(محامي) -->
              <div
                class="col-4 divpTypeUser UserLawyer"
                @click="$store.state.register_data.type = 'person'"
              >
                <div class="btnTypeUser">
                  <button class="btnActiveUser">محامي</button>
                </div>
              </div>
              <!-- button to set user type as(مكتب محاماة) -->
              <div class="col-4 divpTypeUser UserOffice">
                <div class="btnTypeUser">
                  <button
                    class="btnActiveUser"
                    @click="$store.state.register_data.type = 'office'"
                  >
                    مكتب محاماة
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- register form -->
        <div class="container containerRowNames">
          <div class="row rowNames divNameLawyer divNameLawyer">
            <div class="col-lg-6 col-12 colNames colFirstName">
              <div class="divEmail divEmailSignup">
                <!-- first name input -->
                <input
                  type="text"
                  placeholder="   الاسم الأول  "
                  class="inputNameone"
                  v-model="$store.state.register_data.first_name"
                />
              </div>
            </div>
            <div class="col-lg-6 col-12 colNames">
              <div class="divEmail">
                <!-- seconed name input -->
                <input
                  type="text"
                  placeholder="   الاسم الثاني  "
                  class="inputNameseconde"
                  v-model="$store.state.register_data.seconed_name"
                  @blur="setName()"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="divEmail divPassSignup divNameOffice">
          <!-- office name input -->
          <input
            type="password"
            placeholder="   اسم المكتب  "
            class="inputPass"
            v-model="$store.state.register_data.office_name"
            @blur="setName()"
          />
        </div>
        <!-- password input -->
        <div class="divEmail divPassSignup">
          <input
            type="password"
            placeholder="   إنشاء كلمة مرور قوية  "
            class="inputPass"
            v-model="$store.state.register_data.password"
          />
        </div>

        <div class="ddlistClassify container countrySignUp">
          <!-- country selector -->
          <select
            class="js-example-placeholder-single js-states form-control"
            v-model="$store.state.register_data.country_id"
          >
            <!-- id="Country" -->
            <template v-for="(country, i) in $store.state.countries"
              ><option :value="country.id" :key="i">
                {{ country.name }}
              </option></template
            >
          </select>
        </div>

        <div class="divPrivecy container">
          <label class="containerlbl">
            <!-- agree to terms checkbox -->
            <input
              type="checkbox"
              checked="checked"
              v-model="$store.state.agreed"
            />
            <span class="checkmark checkmarkSignUp"></span>
          </label>
          <label class="lblPrivecy"
            >نعم ، أفهم وأوافق على <a href="#">شروط خدمة مستشارك</a> بما في ذلك،
            <a href="#">سياسة الخصوصية</a> و<a href="#">شروط الاستخدام</a>
          </label>
        </div>

        <div>
          <a>
            <button class="btnLog" @click="signUp()">إنشاء حساب</button>
          </a>
        </div>
        <div>
          <p class="pOrSignUp">
            لدي حساب؟
            <router-link class="linkSignUp" to="/">تسجيل الدخول</router-link>
          </p>
        </div>
      </div>
    </div>
    <div class="col-md-6 col-12 colImgLog">
      <div class="divimgLog">
        <img
          src="../assets/img/LoginImg (2).png"
          alt=""
          style="width: 100% !important"
        />
      </div>
    </div>
  </div>
  <!-- End Content -->
</template>

<script>
import func from "../assets/js/functions";
export default {
  data() {
    return {
      country: null,
    };
  },

  methods: {
    setName() {
      if (
        this.$store.state.register_data.type == "p_owner" ||
        this.$store.state.register_data.type == "person"
      ) {
        this.$store.state.register_data.name =
          this.$store.state.register_data.first_name +
          "  " +
          this.$store.state.register_data.seconed_name;
      } else {
        this.$store.state.register_data.name =
          this.$store.state.register_data.office_name;
      }
    },
    signUp() {
      if (this.$store.state.agreed != false) {
        if (this.$store.state.register_data.type == "p_owner") {
          if (
            this.$store.state.register_data.email &&
            this.$store.state.register_data.first_name &&
            this.$store.state.register_data.seconed_name &&
            this.$store.state.register_data.password &&
            this.$store.state.register_data.country_id
          ) {
            this.$http
              .post("api/client/register", this.$store.state.register_data)
              .then(async (res) => {
                await this.$store.commit("setUser", res.data.object);
                await this.$notify({
                  group: "foo",
                  type: "success",
                  text: "تم التسجيل بنجاح",
                });
                this.$router.push("/edit-profile");
              });
          } else {
            this.$notify({
              group: "foo",
              type: "error",
              text: "يرجي التأكد من البيانات",
            });
          }
        } else if (this.$store.state.register_data.type == "person") {
          if (
            this.$store.state.register_data.email &&
            this.$store.state.register_data.first_name &&
            this.$store.state.register_data.seconed_name &&
            this.$store.state.register_data.password
          ) {
            this.$http
              .post(
                "lawyer/auth/lawyer/register",
                this.$store.state.register_data
              )
              .then(async (res) => {
                await this.$store.commit("setUser", res.data.object);
                await this.$notify({
                  group: "foo",
                  type: "success",
                  text: "تم التسجيل بنجاح",
                });
                this.$router.push("/edit-lawyer-profile");
              });
          } else {
            this.$notify({
              group: "foo",
              type: "error",
              text: "يرجي التأكد من البيانات",
            });
          }
        } else {
          if (
            this.$store.state.register_data.email &&
            this.$store.state.register_data.office_name &&
            this.$store.state.register_data.password &&
            this.$store.state.register_data.country_id
          ) {
            this.$http
              .post(
                "lawyer/auth/lawyer/register",
                this.$store.state.register_data
              )
              .then(async (res) => {
                await this.$store.commit("setUser", res.data.object);
                await this.$notify({
                  group: "foo",
                  type: "success",
                  text: "تم التسجيل بنجاح",
                });
                this.$router.push("/edit-lawyer-profile");
              });
          } else {
            this.$notify({
              group: "foo",
              type: "error",
              text: "يرجي التأكد من البيانات",
            });
          }
        }
      } else {
        this.$notify({
          group: "foo",
          type: "error",
          text: "يرجي التأكد والموافقة علي شروط الخدمة لإتمام عملية التسجيل",
        });
      }
    },
  },
  mounted() {
    func();
  },
};
</script>
