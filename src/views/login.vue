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
          <h6 class="hLog">تسجيل دخول</h6>
        </div>
        <div>
          <p class="pJoin">التسجيل كـ</p>
          <!-- user type switchers -->
          <div class="container containerType">
            <div class="row" style="overflow: hidden">
              <!-- button to set user type as(صاحب مشاريع) -->
              <div class="col-6 divpTypeUser UserEntre">
                <div class="btnTypeUser active">
                  <button class="btnActiveUser" @click="userType = 'p_owner'">
                    صاحب مشاريع
                  </button>
                </div>
              </div>
              <!-- button to set user type as(محامي) -->
              <div class="col-6 divpTypeUser UserLawyer">
                <div class="btnTypeUser">
                  <button class="btnActiveUser" @click="userType = 'lawyer'">
                    محامي
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="divEmail">
          <!-- email input -->
          <input v-model="email" type="email" placeholder="   البريد الالكتروني  " class="EmailLogin" />
        </div>
        <div class="divEmail">
          <!-- password input -->
          <input v-model="password" type="password" placeholder="   كلمة المرور  " class="PassLogin" />
        </div>
        <div class="divForget container">
          <div>
            <p class="pForget">نسيت كلمة المرور؟</p>
          </div>
        </div>
        <div>
          <a @click="signIn()">
            <button class="btnLog">تسجيل الدخول</button>
          </a>
        </div>
        <div>
          <p class="pOrSignUp">
            لا تمتلك حساب؟
            <router-link class="linkSignUp" to="/register">تسجيل الاشتراك</router-link>
          </p>
        </div>
        <div class="divPOrSignup">
          <p class="PLine">__________</p>
          <p class="pOrSignUp">تسجيل الدخول</p>
          <p class="PLine">__________</p>
        </div>
        <div class="socialLog container">
          <div class="backSocialLog backSocialLogFace">
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="13.234" height="26" viewBox="0 0 13.234 26">
                <g id="facebook-logo" transform="translate(-123.395)">
                  <g id="Group_157" data-name="Group 157" transform="translate(123.395 0)">
                    <path id="Path_86" data-name="Path 86"
                      d="M136.629,9.287h-4.761V6.966s-.267-2.207,1.276-2.207h3.136V0h-5.34s-4.469-.019-4.469,4.469c0,.964,0,2.719-.011,4.818h-3.066v3.832h3.058C126.435,19.21,126.414,26,126.414,26h5.454V13.118h3.6Z"
                      transform="translate(-123.395 0)" fill="#00586b" />
                  </g>
                </g>
              </svg>
            </a>
          </div>
          <div class="backSocialLog">
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                <g id="google" transform="translate(-23 -21)">
                  <path id="Path_2017" data-name="Path 2017"
                    d="M275.509,213.9h-8.158a.651.651,0,0,0-.651.651v2.608a.651.651,0,0,0,.651.651h4.6a6.125,6.125,0,0,1-2.638,3.092l1.957,3.392a9.808,9.808,0,0,0,5-8.574,6.756,6.756,0,0,0-.111-1.281A.659.659,0,0,0,275.509,213.9Z"
                    transform="translate(-233.263 -184.639)" fill="#167ee6" />
                  <path id="Path_2018" data-name="Path 2018"
                    d="M63.055,328.545a6.085,6.085,0,0,1-5.263-3.045L54.4,327.453a9.991,9.991,0,0,0,13.657,3.666v0L66.1,327.723A6.034,6.034,0,0,1,63.055,328.545Z"
                    transform="translate(-30.055 -291.459)" fill="#12b347" />
                  <path id="Path_2019" data-name="Path 2019"
                    d="M261.5,380.8v0l-1.957-3.392a6.05,6.05,0,0,1-3.041.822v3.914A9.956,9.956,0,0,0,261.5,380.8Z"
                    transform="translate(-223.5 -341.137)" fill="#0f993e" />
                  <path id="Path_2020" data-name="Path 2020"
                    d="M26.914,142.894a6.05,6.05,0,0,1,.822-3.041L24.345,137.9a9.944,9.944,0,0,0,0,9.987l3.392-1.953A6.007,6.007,0,0,1,26.914,142.894Z"
                    transform="translate(0 -111.894)" fill="#ffd500" />
                  <path id="Path_2021" data-name="Path 2021"
                    d="M63.055,24.914A6.06,6.06,0,0,1,66.918,26.3a.65.65,0,0,0,.874-.039l1.846-1.846a.656.656,0,0,0-.039-.959,9.967,9.967,0,0,0-15.2,2.548l3.392,1.953A6.085,6.085,0,0,1,63.055,24.914Z"
                    transform="translate(-30.055)" fill="#ff4b26" />
                  <path id="Path_2022" data-name="Path 2022"
                    d="M260.363,26.3a.65.65,0,0,0,.874-.039l1.846-1.846a.656.656,0,0,0-.039-.959A9.937,9.937,0,0,0,256.5,21v3.914A6.036,6.036,0,0,1,260.363,26.3Z"
                    transform="translate(-223.5)" fill="#d93f21" />
                </g>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- logo image -->
    <div class="col-md-6 col-12 colImgLog">
      <div class="divimgLog">
        <img src="../assets/img/LoginImg (2).png" alt="" style="width: 100% !important" />
      </div>
    </div>
  </div>
</template>

<script>
//importing jquery functions
import func from "../assets/js/functions";

export default {
  name: "login",
  data() {
    return {
      email: "",
      password: "",
      userType: "p_owner",
    };
  },
  mounted() {
    //invoking jquery functions
    func();
  },
  methods: {
    //signin method
    signIn() {
      if (this.userType == "p_owner") {
        this.$http
          .post("api/client/login", {
            email: this.email,
            password: this.password,
          })
          .then((res) => {
            localStorage.setItem("auth_token", res.data.object.token);
            this.$http.get("api/auth/client/profile").then(async (userInfo) => {
              localStorage.setItem("type", "user");
              await this.$store.commit("setUser", {
                ...res.data.object,
                ...userInfo.data.data,
              });
              await this.$notify({
                group: "foo",
                type: "success",
                text: "تم تسجيل الدخول بنجاح",
              });
              this.$router.push("/Home");
            });
          })
          .catch(() => {
            this.$notify({
              group: "foo",
              type: "error",
              text: "برجاء مراجعة الحساب وكلمة المرور",
            });
          });
      } else if (this.userType == "lawyer") {
        this.$http
          .post("lawyer/auth/lawyer/login", {
            email: this.email,
            password: this.password,
          })
          .then(async (res) => {
            localStorage.setItem("auth_token", res.data.object.token);
            this.$http
              .get("lawyer/auth/lawyer/lawyer-profile")
              .then(async (userInfo) => {
                await this.$store.commit("setUser", {
                  ...res.data.object,
                  ...userInfo.data.data,
                });
                await this.$notify({
                  group: "foo",
                  type: "success",
                  text: "تم تسجيل الدخول بنجاح",
                });
                console.log("res", res);
                console.log("userInfo", userInfo);
                if (res.data.object.type == "person") {
                  localStorage.setItem("type", "lawyer");
                  this.$router.push("/lawyerHome");
                } else {
                  localStorage.setItem("type", "office");
                  this.$router.push("/officeHome");
                }
              });
          })
          .catch(() => {
            this.$notify({
              group: "foo",
              type: "error",
              text: "برجاء مراجعة الحساب وكلمة المرور",
            });
          });
      }
    },
  },
};
</script>
