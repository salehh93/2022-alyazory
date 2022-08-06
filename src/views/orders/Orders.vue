<template>
  <!-- Start Content -->
  <div class="container">
    <div class="pagesLinks">
      <a href="index.html">الرئيسية/</a>
      <a href="Orders.html">تصفح الطلبات</a>
    </div>
    <h3 class="hTitle">تصفح الطلبات المتاحة</h3>
    <div class="row">
      <div class="col-lg-3 col-md-4 col-12">
        <div class="cardInfo">
          <div class="divImgCard">
            <img :src="$store.state.user.image" alt="" />
          </div>
          <div class="divNameCard">
            <router-link to="/">
              <label>المحامي: {{ $store.state.user.name }}</label>
            </router-link>
            <!-- <p class="NameCard"> محمد أحمد عيد </p> -->
          </div>
          <div class="divPositionCard">
            <p>محامي نظامي قانوني</p>
          </div>
        </div>
        <div class="divClassify">
          <h4>تصنيف حسب</h4>
          <div class="ddlistClassify">
            <select
              class="js-example-placeholder-single js-states form-control country"
            >
              <option></option>
              <option>السعودية</option>
              <option>فلسطين</option>
              <option>مصر</option>
              <option>العراق</option>
              <option>لبنان</option>
            </select>
          </div>
          <div class="ddlistClassify">
            <select
              class="js-example-placeholder-single js-states form-control law"
            >
              <option></option>
              <option>سعودي</option>
              <option>فلسطيني</option>
              <option>مصري</option>
              <option>عراقي</option>
              <option>لبناني</option>
            </select>
          </div>
          <div class="ddlistClassify">
            <select
              class="js-example-placeholder-single js-states form-control specialization"
            >
              <option></option>
              <option>جنائي</option>
              <option>مدني</option>
              <option>تجاري</option>
            </select>
          </div>
        </div>
        <div class="divShow">
          <h4>نوع العرض</h4>
          <div class="ddShowType">
            <select
              class="js-example-placeholder-single js-states form-control ShowType"
            >
              <option></option>
            </select>
          </div>
        </div>

        <div class="divDeadline">
          <h4>مدة التسليم</h4>
          <!-- <div class="divCheckTime">
                        <label class="lblDeadline">
                        <input type="checkbox">
                        <span class="checkmark"></span>
                        أقل من أسبوع</label>
                    </div> -->
          <label class="containerlbl"
            >أقل من أسبوع
            <input type="checkbox" checked="checked" />
            <span class="checkmark"></span>
          </label>
          <label class="containerlbl"
            >من أسبوع إلى 2 أسابيع
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
          <label class="containerlbl"
            >من 2 أسبوع إلى شهر
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
          <label class="containerlbl"
            >أكثر من شهر
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
        </div>
        <div class="divDeadline">
          <h4>الميزانية</h4>

          <label class="containerlbl"
            >أقل من 100$
            <input type="checkbox" checked="checked" />
            <span class="checkmark"></span>
          </label>
          <label class="containerlbl"
            >من 100$ - 500$
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
          <label class="containerlbl"
            >من 500$ - 1000$
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
          <label class="containerlbl"
            >أكثر من 5000$
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
        </div>
      </div>
      <div class="col-lg-9 col-md-8 col-12">
        <div class="row rowWelcome">
          <div class="col-md-6 col-12">
            <div class="divWelcome">
              <h2>الأربعاء، 2/ ديسمبر</h2>
              <p>مساء الخير،</p>
              <p>{{ $store.state.user.name }}</p>
            </div>
          </div>
          <div class="col-md-6 col-12">
            <div class="divImgWelcome">
              <img src="img/imgWelcome.PNG" alt="" />
            </div>
          </div>
        </div>
        <div class="divSearch">
          <input type="search" class="searchContent" placeholder="بحث" />
          <div class="PlaceholderSearchContent">
            <div class="divPlaceSort dropdown">
              <svg
                id="navbarDropdownSort"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="15"
                viewBox="0 0 20 15"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <g id="_32" data-name="32" transform="translate(-2.714 -8.857)">
                  <path
                    id="Path_96"
                    data-name="Path 96"
                    d="M21.167,7.667H2.833A.833.833,0,0,1,2.833,6H21.167a.833.833,0,0,1,0,1.667Z"
                    transform="translate(0.714 2.857)"
                    fill="#a2a2a6"
                  />
                  <path
                    id="Path_97"
                    data-name="Path 97"
                    d="M16.5,11.667H4.833a.833.833,0,1,1,0-1.667H16.5a.833.833,0,0,1,0,1.667Z"
                    transform="translate(2.048 5.524)"
                    fill="#a2a2a6"
                  />
                  <path
                    id="Path_98"
                    data-name="Path 98"
                    d="M11.833,15.667h-5a.833.833,0,1,1,0-1.667h5a.833.833,0,0,1,0,1.667Z"
                    transform="translate(3.381 8.19)"
                    fill="#a2a2a6"
                  />
                </g>
              </svg>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownSort">
                <a class="dropdown-item" href="#">الأحدث عرضاَ</a>
                <a class="dropdown-item" href="#">الأقدم عرضاَ</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">الأقل عروضاَ</a>
                <a class="dropdown-item" href="#">الأكثر عروضاَ</a>
              </div>
            </div>
          </div>
        </div>
        <div class="divOrders">
          <div v-for="(req, i) in requests" :key="i" class="row">
            <div class="col-lg-10 col-md-9 col-12">
              <router-link
                :to="`/${type === 'user' ? 'order-view' : 'order-details'}/${
                  req.id
                }`"
              >
                <p class="OrderTitle">{{ req.title }}</p></router-link
              >
              <p class="OrderDescription">{{ req.description }}</p>
              <div class="divIcons row">
                <div class="col-lg-3 col-12">
                  <i class="far fa-clock iconOrders"></i>
                  <label class="lblOrders">{{
                    req.created_at.toString().substr(0, 10)
                  }}</label>
                </div>
                <div class="col-lg-3 col-12">
                  <i class="fas fa-tag iconOrders"></i>
                  <label class="lblOrders">عدد العروض</label>
                </div>
              </div>
            </div>
            <div class="col-lg-2 col-md-3 col-12">
              <div class="backIcon">
                <div class="divBackIcon">
                  <i class="far fa-heart" style="font-size: larger"></i>
                </div>
                <div class="divBackIcon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="iconDisLike"
                    width="18"
                    height="17.25"
                    viewBox="0 0 19.006 18.25"
                  >
                    <g id="thumb-down" transform="translate(0.5 -10.171)">
                      <rect
                        id="Rectangle_23"
                        data-name="Rectangle 23"
                        width="5.25"
                        height="9"
                        transform="translate(0.375 11.046)"
                        fill="#fff"
                      />
                      <path
                        id="Path_101"
                        data-name="Path 101"
                        d="M5.625,20.421H.375A.375.375,0,0,1,0,20.046v-9a.375.375,0,0,1,.375-.375h5.25A.375.375,0,0,1,6,11.046v9A.375.375,0,0,1,5.625,20.421ZM.75,19.671h4.5v-8.25H.75v8.25Z"
                        transform="translate(0)"
                        fill="#c5c5c5"
                      />
                      <path
                        id="Path_102"
                        data-name="Path 102"
                        d="M160,43.422a3.886,3.886,0,0,1,2.25-.75h6.937a1.309,1.309,0,0,1,.9,2.265,1.3,1.3,0,0,1,.75,2.25,1.3,1.3,0,0,1,.45,2.461,1.5,1.5,0,0,1-.787,2.774h-5.25A11.969,11.969,0,0,1,166,55.8c0,1.406-1.219,2.625-1.875,2.625A1.961,1.961,0,0,1,163,58.047V55.422l-2.25-4.875-.75-.375Z"
                        transform="translate(-154.375 -30.876)"
                        fill="#fff"
                      />
                      <path
                        id="Path_103"
                        data-name="Path 103"
                        d="M153.834,48.5a2.355,2.355,0,0,1-1.36-.457.375.375,0,0,1-.14-.293V45.212l-2.161-4.68-.632-.317a.375.375,0,0,1-.207-.335V33.13a.375.375,0,0,1,.11-.265,4.209,4.209,0,0,1,2.515-.859H158.9a1.69,1.69,0,0,1,1.687,1.687,1.665,1.665,0,0,1-.176.75,1.681,1.681,0,0,1,.75,2.25,1.677,1.677,0,0,1,.438,2.681,1.852,1.852,0,0,1,.488,1.256,1.875,1.875,0,0,1-1.875,1.875h-4.725a10.789,10.789,0,0,1,.6,3C156.084,47.131,154.7,48.5,153.834,48.5Zm-.75-.953a1.585,1.585,0,0,0,.75.2,2.476,2.476,0,0,0,1.5-2.25,11.694,11.694,0,0,0-.725-3.241.375.375,0,0,1,.35-.508h5.25a1.125,1.125,0,0,0,.587-2.079.375.375,0,0,1,.025-.652.929.929,0,0,0-.318-1.756.375.375,0,0,1-.214-.646.929.929,0,0,0-.536-1.6.375.375,0,0,1-.214-.646.927.927,0,0,0,.3-.679.938.938,0,0,0-.937-.937h-6.937a3.865,3.865,0,0,0-1.875.547v6.346l.543.271a.375.375,0,0,1,.173.178l2.25,4.875a.378.378,0,0,1,.034.158Z"
                        transform="translate(-144.084 -20.584)"
                        fill="#c5c5c5"
                      />
                      <path
                        id="Path_104"
                        data-name="Path 104"
                        d="M5.625,20.421H.375A.375.375,0,0,1,0,20.046v-9a.375.375,0,0,1,.375-.375h5.25A.375.375,0,0,1,6,11.046v9A.375.375,0,0,1,5.625,20.421ZM.75,19.671h4.5v-8.25H.75v8.25Z"
                        transform="translate(0)"
                        fill="#707070"
                        stroke="#707070"
                        stroke-width="1"
                      />
                      <path
                        id="Path_105"
                        data-name="Path 105"
                        d="M153.816,48.5a2.354,2.354,0,0,1-1.359-.457.375.375,0,0,1-.141-.293V45.212l-2.161-4.68-.632-.317a.375.375,0,0,1,.335-.671l.75.375a.375.375,0,0,1,.173.178l2.25,4.875a.379.379,0,0,1,.035.158v2.422a1.585,1.585,0,0,0,.75.2,2.476,2.476,0,0,0,1.5-2.25,11.693,11.693,0,0,0-.725-3.241.375.375,0,0,1,.35-.508h5.25a1.125,1.125,0,0,0,.587-2.079.375.375,0,0,1,.025-.652.929.929,0,0,0-.318-1.756.375.375,0,0,1-.214-.646.929.929,0,0,0-.535-1.6.375.375,0,0,1-.214-.646.927.927,0,0,0,.3-.679.938.938,0,0,0-.937-.937h-6.937a3.559,3.559,0,0,0-1.984.641.375.375,0,0,1-.53-.53,4.21,4.21,0,0,1,2.515-.86h6.937a1.69,1.69,0,0,1,1.687,1.687,1.665,1.665,0,0,1-.176.75,1.681,1.681,0,0,1,.75,2.25,1.677,1.677,0,0,1,.438,2.681,1.853,1.853,0,0,1,.488,1.256,1.875,1.875,0,0,1-1.875,1.875h-4.725a10.79,10.79,0,0,1,.6,3C156.066,47.131,154.684,48.5,153.816,48.5Z"
                        transform="translate(-144.066 -20.584)"
                        fill="#707070"
                        stroke="#707070"
                        stroke-width="1"
                      />
                    </g>
                  </svg>

                  <!-- <i class="far fa-thumbs-down"></i> -->
                </div>
              </div>
            </div>
          </div>
          <hr class="hrOrders" />
        </div>
      </div>
    </div>
  </div>
  <!-- End Content -->
</template>

<script>
export default {
  data() {
    return {
      requests: [],
      type: "",
    };
  },
  created() {
    this.type = localStorage.getItem("type");
  },
  mounted() {
    this.getRequests();
  },
  methods: {
    getRequests() {
      const userType = localStorage.getItem("type");
      const url =
        userType === "user"
          ? "/api/auth/client/requets?status=open"
          : "lawyer/auth/lawyer/requests?country_law=&type=&speciality_id=&budget=1";
      this.$http.get(url).then((res) => {
        this.requests = res.data.data.request;
      });
    },
  },
};
</script>
