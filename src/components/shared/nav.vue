<template>
  <!-- Start Header -->
  <nav class="navbar navbar-expand-lg">
    <div class="container">
      <div style="display: flex; align-items: center">
        <router-link
          class="navbar-brand"
          :to="
            type == 'user' ? '/home' : 'lawyer' ? '/lawyerHome' : '/officeHome'
          "
        >
          <img src="../../assets/img/Logo.png" alt="Logo" />
        </router-link>
        <form class="form-inline my-2 my-lg-0 formSearch">
          <input
            class="form-control mr-sm-2 txtSearch"
            placeholder="بحث"
            type="search"
            aria-label="Search"
          />
        </form>
      </div>
      <div style="display: flex">
        <div
          v-if="type == 'user'"
          id="navbarSupportedContent"
          class="collapse navbar-collapse navCollapse"  
        >
          <ul class="navbar-nav mr-auto containerCollapes">
            <li class="nav-item active ordersLink">
              <router-link class="nav-link" to="/add-order"
                >أضف طلب <span class="sr-only">(current)</span></router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/my-orders"
                >طلباتي <span class="sr-only">(current)</span></router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/search-lawyers" class="nav-link"
                >إبحث عن محامي</router-link
              >
            </li>
            <li class="nav-item navItemMobile">
              <router-link class="nav-link" to="/favorites"
                >المفضلات</router-link
              >
            </li>
            <li class="nav-item navItemMobile">
              <a class="nav-link" href="Balance.html">الرصيد</a>
            </li>
            <li class="nav-item navItemMobile">
              <a class="nav-link" href="Settings.html">إعدادات</a>
            </li>
            <li class="nav-item navItemMobile">
              <router-link
                class="nav-link"
                :to="
                  type == 'user'
                    ? '/edit-profile'
                    : type == 'lawyer'
                    ? '/edit-office-profile'
                    : '/edit-lawyer-profile'
                "
                >تعديل الملف الشخصي</router-link
              >
            </li>
            <li class="nav-item navItemMobile">
              <a class="nav-link" href="#">مساعدة</a>
            </li>
            <li class="nav-item navItemMobile">
              <a class="nav-link" @click="logOut()">تسجيل الخروج</a>
            </li>
          </ul>
        </div>
        <div
          v-else
          id="navbarSupportedContent"
          class="collapse navbar-collapse navCollapse"
        >
          <ul class="navbar-nav mr-auto containerCollapes">
            <li class="nav-item active ordersLink">
              <router-link class="nav-link" to="/orders">
                تصفح الطلبات <span class="sr-only">(current)</span></router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/lawyerOffers"
                >عروضي <span class="sr-only">(current)</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/lawyerPortfolio"
                >أعمالي <span class="sr-only">(current)</span>
              </router-link>
            </li>
            <li class="nav-item navItemMobile">
              <router-link class="nav-link" to="/favorites"
                >المفضلات</router-link
              >
            </li>
            <li class="nav-item navItemMobile">
              <a class="nav-link" href="Balance.html">الرصيد</a>
            </li>
            <li class="nav-item navItemMobile">
              <a class="nav-link" href="Settings.html">إعدادات</a>
            </li>
            <li class="nav-item navItemMobile">
              <router-link
                class="nav-link"
                :to="
                  type == 'user'
                    ? '/edit-profile'
                    : type == 'lawyer'
                    ? '/edit-office-profile'
                    : '/edit-lawyer-profile'
                "
                >تعديل الملف الشخصي</router-link
              >
            </li>
            <li class="nav-item navItemMobile">
              <a class="nav-link" href="#">مساعدة</a>
            </li>
            <li class="nav-item navItemMobile">
              <a class="nav-link" @click="logOut()">تسجيل الخروج</a>
            </li>
          </ul>
        </div>
        <div style="display: flex; align-items: center">
          <div style="display: flex; align-items: center">
            <div class="nav-item dropdown">
              <a
                id="navbarDropdownNotifi"
                class="nav-link linkNotificationHead"
                style="display: flex; align-items: center"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22.546"
                  height="27.133"
                  viewBox="0 0 22.546 27.133"
                >
                  <g
                    id="_13252117381571183079_1_"
                    data-name="13252117381571183079 (1)"
                    transform="translate(-4.575 -2.75)"
                  >
                    <path
                      id="Path_15"
                      data-name="Path 15"
                      d="M25.7,21.162l-.985-1.471a14.5,14.5,0,0,1-2.365-8.042,6.6,6.6,0,0,0-4.631-6.375,2.012,2.012,0,0,0-3.744,0,6.6,6.6,0,0,0-4.631,6.375,14.5,14.5,0,0,1-2.365,8.042L6,21.162a.936.936,0,0,0,.788,1.471H24.818A.993.993,0,0,0,25.7,21.162Z"
                      transform="translate(0 0)"
                      fill="none"
                      stroke="#fff"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      stroke-width="2.5"
                    />
                    <path
                      id="Path_16"
                      data-name="Path 16"
                      d="M19,26a3,3,0,0,1-6,0"
                      transform="translate(-0.149 -0.367)"
                      fill="none"
                      stroke="#fff"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                      stroke-width="2.5"
                    />
                  </g>
                </svg>
              </a>
              <div
                class="dropdown-menu ddlistMsgHead"
                aria-labelledby="navbarDropdownMsg"
              >
                <div class="flexHeadddlistMsgHead">
                  <p class="pflexHeadddlistMsgHead">الاشعارات</p>
                  <a href="Notifications.html">
                    <p class="linkflexHeadddlistMsgHead">عرض الكل</p>
                  </a>
                </div>

                <div class="flexContentMsgHead">
                  <div class="imgddlistMsgHead">
                    <img src="../../assets/img/download.jpg" alt="" />
                  </div>
                  <div>
                    <div class="flexNotReadMsg">
                      <p class="pTitlemsgHead notReadMsg">
                        <a class="addlistNoti" href="#">أمجد محمود</a> أضاف
                        تقييم على عرض
                        <a class="addlistNoti" href="#"
                          >دعوة قضائيةلموضوع النفقة</a
                        >
                      </p>
                      <div>
                        <div class="divNotReadMsg"></div>
                      </div>
                    </div>
                    <div class="divClockOfferDetails divClockddlistMsg">
                      <i class="far fa-clock"></i>
                      <label>منذ 3 أيام و6 ساعات</label>
                    </div>
                  </div>
                </div>

                <div class="flexContentMsgHead">
                  <div class="imgddlistMsgHead">
                    <img src="../../assets/img/download.jpg" alt="" />
                  </div>
                  <div>
                    <div class="flexNotReadMsg">
                      <p class="pTitlemsgHead notReadMsg">
                        مبروك ،، لقد وصلت أرباحك إلى حسابك في باي بال
                        <a class="addlistNoti" href="#"
                          >تفاصيل المعاملات المالية</a
                        >
                      </p>
                      <div>
                        <div class="divNotReadMsg"></div>
                      </div>
                    </div>
                    <div class="divClockOfferDetails divClockddlistMsg">
                      <i class="far fa-clock"></i>
                      <label>منذ 3 أيام و6 ساعات</label>
                    </div>
                  </div>
                </div>

                <div class="flexContentMsgHead">
                  <div class="imgddlistMsgHead">
                    <img src="img/download.jpg" alt="" />
                  </div>
                  <div>
                    <div class="flexNotReadMsg">
                      <p class="pTitlemsgHead notReadMsg">
                        <a class="addlistNoti" href="#">أمجد محمود</a> أضاف
                        تقييم على عرض
                        <a class="addlistNoti" href="#"
                          >دعوة قضائيةلموضوع النفقة</a
                        >
                      </p>
                      <div>
                        <div class="divNotReadMsg"></div>
                      </div>
                    </div>
                    <div class="divClockOfferDetails divClockddlistMsg">
                      <i class="far fa-clock"></i>
                      <label>منذ 3 أيام و6 ساعات</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="nav-item dropdown">
              <a
                id="navbarDropdownNotifi"
                class="nav-link linkMsgsHead"
                style="display: flex; align-items: center"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26.25"
                  height="24.792"
                  viewBox="0 0 26.25 24.792"
                >
                  <path
                    id="Path_18"
                    data-name="Path 18"
                    d="M12.5,3h5.25a10.339,10.339,0,0,1,10.5,10.171,10.339,10.339,0,0,1-10.5,10.171v4.45C11.188,25.249,2,21.435,2,13.171A10.339,10.339,0,0,1,12.5,3Zm2.625,17.8H17.75a7.755,7.755,0,0,0,7.875-7.628A7.755,7.755,0,0,0,17.75,5.543H12.5a7.755,7.755,0,0,0-7.875,7.628c0,4.59,3.231,7.585,10.5,10.781Z"
                    transform="translate(-2 -3)"
                    fill="#fff"
                  />
                </svg>
              </a>
              <div
                class="dropdown-menu ddlistMsgHead"
                aria-labelledby="navbarDropdownMsg"
              >
                <div class="flexHeadddlistMsgHead">
                  <p class="pflexHeadddlistMsgHead">الرسائل</p>
                  <a href="Messages.html">
                    <p class="linkflexHeadddlistMsgHead">عرض الكل</p>
                  </a>
                </div>
                <a class="dropdown-item" href="Messages.html">
                  <div class="flexContentMsgHead">
                    <div class="imgddlistMsgHead">
                      <img src="img/download.jpg" alt="" />
                    </div>
                    <div>
                      <div class="flexNotReadMsg">
                        <p class="pTitlemsgHead notReadMsg">
                          استشارة قانونية مستعجلة
                        </p>
                        <div class="divNotReadMsg"></div>
                      </div>
                      <p class="descTitlemsgHead">
                        هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة أن
                        يستبدل في نفس المساحة
                      </p>
                      <div class="divClockOfferDetails divClockddlistMsg">
                        <i class="far fa-clock"></i>
                        <label>منذ 3 أيام و6 ساعات</label>
                      </div>
                    </div>
                  </div>
                </a>
                <a class="dropdown-item" href="Messages.html">
                  <div class="flexContentMsgHead">
                    <div class="imgddlistMsgHead">
                      <!-- <img src="img/download.jpg" alt="" /> -->
                    </div>
                    <div>
                      <div class="flexNotReadMsg">
                        <p class="pTitlemsgHead notReadMsg">
                          استشارة قانونية مستعجلة
                        </p>
                        <div class="divNotReadMsg"></div>
                      </div>
                      <p class="descTitlemsgHead">
                        هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة أن
                        يستبدل في نفس المساحة
                      </p>
                      <div class="divClockOfferDetails divClockddlistMsg">
                        <i class="far fa-clock"></i>
                        <label>منذ 3 أيام و6 ساعات</label>
                      </div>
                    </div>
                  </div>
                </a>
                <a class="dropdown-item" href="Messages.html">
                  <div class="flexContentMsgHead">
                    <div class="imgddlistMsgHead">
                      <img src="img/download.jpg" alt="" />
                    </div>
                    <div>
                      <div class="flexNotReadMsg">
                        <p class="pTitlemsgHead notReadMsg">
                          استشارة قانونية مستعجلة
                        </p>
                        <div class="divNotReadMsg"></div>
                      </div>
                      <p class="descTitlemsgHead">
                        هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة أن
                        يستبدل في نفس المساحة
                      </p>
                      <div class="divClockOfferDetails divClockddlistMsg">
                        <i class="far fa-clock"></i>
                        <label>منذ 3 أيام و6 ساعات</label>
                      </div>
                    </div>
                  </div>
                </a>
                <a class="dropdown-item" href="Messages.html">
                  <div class="flexContentMsgHead">
                    <div class="imgddlistMsgHead">
                      <img src="img/download.jpg" alt="" />
                    </div>
                    <div>
                      <div class="flexNotReadMsg">
                        <p class="pTitlemsgHead notReadMsg">
                          استشارة قانونية مستعجلة
                        </p>
                        <div class="divNotReadMsg"></div>
                      </div>
                      <p class="descTitlemsgHead">
                        هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة أن
                        يستبدل في نفس المساحة
                      </p>
                      <div class="divClockOfferDetails divClockddlistMsg">
                        <i class="far fa-clock"></i>
                        <label>منذ 3 أيام و6 ساعات</label>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div style="display: flex">
            <router-link
              class="nav-link LinkImgProfile ml-2"
              style="display: inline-block; padding: 0"
              :to="personalImageLink"
            >
              <img
                :src="
                  $store.state.user.image
                    ? $store.state.user.image
                    : require('../../assets/img/PersonalImg.png')
                "
                alt=""
              />
            </router-link>
            <button
              class="navbar-toggler btnToggleHead"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i class="fas fa-bars"></i>
            </button>
          </div>
        </div>

        <div class="nav-item dropdown dropdownHeadPages">
          <a
            id="navbarDropdown"
            class="nav-link ddlistMoreHead"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <svg
              id="Group_88"
              data-name="Group 88"
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="36"
              viewBox="0 0 8 36"
            >
              <circle
                id="Ellipse_2"
                data-name="Ellipse 2"
                cx="4"
                cy="4"
                r="4"
                fill="#fff"
              />
              <circle
                id="Ellipse_3"
                data-name="Ellipse 3"
                cx="4"
                cy="4"
                r="4"
                transform="translate(0 28)"
                fill="#fff"
              />
              <circle
                id="Ellipse_4"
                data-name="Ellipse 4"
                cx="4"
                cy="4"
                r="4"
                transform="translate(0 14)"
                fill="#fff"
              />
            </svg>
          </a>
          <div
            class="dropdown-menu ddlistHead"
            aria-labelledby="navbarDropdown"
          >
            <router-link
              class="dropdown-item aLinksMenuHead"
              :to="
                type == 'user'
                  ? '/client-profile'
                  : type == 'lawyer'
                  ? '/office-profile'
                  : '/office-profile'
              "
            >
              <img
                class="imgddlistHead"
                :src="
                  $store.state.user.image
                    ? $store.state.user.image
                    : require('../../assets/img/PersonalImg.png')
                "
                alt=""
              />
              <label>الملف الشخصي</label>
            </router-link>
            <router-link class="dropdown-item aLinksMenuHead" to="/favorites">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16.79"
                height="15.212"
                viewBox="0 0 16.79 15.212"
              >
                <g id="heart" transform="translate(0.395 -16.746)">
                  <g
                    id="Group_195"
                    data-name="Group 195"
                    transform="translate(0 16.896)"
                  >
                    <path
                      id="Path_100"
                      data-name="Path 100"
                      d="M14.692,18.294a4.372,4.372,0,0,0-6.408,0l-.282.3-.282-.3a4.375,4.375,0,0,0-6.183-.227q-.118.109-.227.227a4.907,4.907,0,0,0,0,6.672l6.278,6.62a.572.572,0,0,0,.808.022l.022-.022,6.275-6.62A4.906,4.906,0,0,0,14.692,18.294Zm-.827,5.884h0L8,30.361,2.138,24.178a3.749,3.749,0,0,1,0-5.1A3.232,3.232,0,0,1,6.705,18.9q.1.088.184.184l.7.735a.589.589,0,0,0,.83,0l.7-.735A3.232,3.232,0,0,1,13.68,18.9q.1.088.184.184A3.715,3.715,0,0,1,13.864,24.178Z"
                      transform="translate(0 -16.896)"
                      fill="#00586b"
                      stroke="#00586b"
                      stroke-width="0.3"
                    />
                  </g>
                </g>
              </svg>
              <label>المفضلات</label>
            </router-link>
            <a class="dropdown-item aLinksMenuHead" href="Balance.html">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17.182"
                height="17.253"
                viewBox="0 0 17.182 17.253"
              >
                <g
                  id="money_2_"
                  data-name="money (2)"
                  transform="translate(-0.217 0.143)"
                >
                  <path
                    id="Path_1937"
                    data-name="Path 1937"
                    d="M17.3,4.784A.81.81,0,0,0,17,4.24L11.785.172a.819.819,0,0,0-1.146.14L5.591,6.747,2.242,8.99h0l-.925.619-.646.432-.033.024a.816.816,0,0,0-.191,1.109h0l.782,1.165.271.4,1.578,2.351h0l.262.39.789,1.175a.817.817,0,0,0,1.132.223h0l1.533-1.026.677.529a.818.818,0,0,0,1.146-.14l2.658-3.388,3.875-2.594.015-.009L16.736,9.2a.816.816,0,0,0,.224-1.132h0L16.07,6.743l1.064-1.357a.811.811,0,0,0,.168-.6Zm-14.8,6.208a2.189,2.189,0,0,1-.738,1.256l-.792-1.18L.862,10.9a.318.318,0,0,1,.062-.422l.025-.019.448-.3.9-.605a2.188,2.188,0,0,1,.205,1.441Zm2.478,5.477a.319.319,0,0,1-.441-.086l-.011-.016-.893-1.33a2.215,2.215,0,0,1,2.7.525Zm3.241-.532a.319.319,0,0,1-.447.055l-.548-.428,2.71-1.814ZM14.9,8.252A2.189,2.189,0,0,1,15.639,7l.906,1.35a.318.318,0,0,1-.088.44l-1.352.9a2.188,2.188,0,0,1-.2-1.44Zm1.841-3.173-.964,1.229-2.5-3.725a.818.818,0,0,0-1.132-.223L9.936,3.838a.249.249,0,0,0,.277.414l.436-.292a2.713,2.713,0,0,0,3.4.663L15.36,6.58a2.7,2.7,0,0,0-.671,3.39l-3.727,2.5h0L6.756,15.281a2.714,2.714,0,0,0-3.4-.662L2.047,12.663A2.684,2.684,0,0,0,3,11.088a2.682,2.682,0,0,0-.278-1.816L9.056,5.028a.249.249,0,0,0-.277-.414L6.926,5.854,11.031.62a.319.319,0,0,1,.447-.055l5.21,4.068a.317.317,0,0,1,.054.446Zm-4.319-2.3a.319.319,0,0,1,.442.086l.457.681.447.666a2.215,2.215,0,0,1-2.7-.525Z"
                    transform="translate(0)"
                    fill="#00586b"
                    stroke="#00586b"
                    stroke-width="0.18"
                  />
                  <path
                    id="Path_1938"
                    data-name="Path 1938"
                    d="M155.706,191.556a3.272,3.272,0,0,0,1.2,5.93A.25.25,0,0,0,157,197a2.769,2.769,0,1,1,1.293-.054.249.249,0,0,0,.137.48,3.274,3.274,0,1,0-2.723-5.866Z"
                    transform="translate(-148.827 -184.653)"
                    fill="#00586b"
                    stroke="#00586b"
                    stroke-width="0.18"
                  />
                  <path
                    id="Path_1939"
                    data-name="Path 1939"
                    d="M359.781,183.079a.248.248,0,0,0,.138-.042l1.174-.786a.249.249,0,0,0-.277-.414l-1.174.786a.249.249,0,0,0,.139.457Z"
                    transform="translate(-347.28 -175.751)"
                    fill="#00586b"
                    stroke="#00586b"
                    stroke-width="0.18"
                  />
                  <path
                    id="Path_1940"
                    data-name="Path 1940"
                    d="M97.077,358.411,95.9,359.2a.249.249,0,1,0,.277.414l1.174-.786a.249.249,0,0,0-.277-.414Z"
                    transform="translate(-92.309 -346.456)"
                    fill="#00586b"
                    stroke="#00586b"
                    stroke-width="0.18"
                  />
                  <path
                    id="Path_1941"
                    data-name="Path 1941"
                    d="M209.186,233.8a.249.249,0,0,0,.414-.278l-.134-.2a1.127,1.127,0,0,0,.208-1.246c-.27-.6-.825-.648-1.389-.515l-.566-.843a.657.657,0,0,1,.264-.033.249.249,0,0,0,.074-.493,1.192,1.192,0,0,0-.622.1l-.11-.163a.249.249,0,0,0-.414.278l.12.178a.968.968,0,0,0-.184,1.038c.22.515.714.576,1.21.492l.728,1.085a.9.9,0,0,1-.478.105.25.25,0,0,0,.006.5,1.378,1.378,0,0,0,.751-.189Zm-1.619-2.144a.343.343,0,0,1-.262-.227.458.458,0,0,1,.016-.407l.424.632A1.245,1.245,0,0,1,207.567,231.654ZM208.6,232a.5.5,0,0,1,.621.284.639.639,0,0,1-.044.607l-.6-.887Z"
                    transform="translate(-199.597 -222.375)"
                    fill="#00586b"
                    stroke="#00586b"
                    stroke-width="0.18"
                  />
                </g>
              </svg>
              <label>الرصيد</label>
            </a>
            <a class="dropdown-item aLinksMenuHead" href="Settings.html">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16.508"
                viewBox="0 0 16 16.508"
              >
                <path
                  id="setting_2_"
                  data-name="setting (2)"
                  d="M23.4,9.566,22.715,9a.967.967,0,0,1,0-1.493l.687-.565A1.286,1.286,0,0,0,23.7,5.3L22.343,2.953a1.286,1.286,0,0,0-1.569-.563l-.833.312a.967.967,0,0,1-1.293-.747L18.5,1.078A1.286,1.286,0,0,0,17.229,0H14.517a1.286,1.286,0,0,0-1.272,1.078l-.146.877a.967.967,0,0,1-1.293.747l-.833-.312A1.286,1.286,0,0,0,9.4,2.953L8.047,5.3a1.286,1.286,0,0,0,.3,1.641l.687.565A.967.967,0,0,1,9.031,9l-.687.565a1.286,1.286,0,0,0-.3,1.641L9.4,13.555a1.286,1.286,0,0,0,1.569.563l.833-.312a.967.967,0,0,1,1.293.747l.146.877a1.286,1.286,0,0,0,1.272,1.078h2.712A1.286,1.286,0,0,0,18.5,15.43l.146-.877a.967.967,0,0,1,1.293-.747l.833.312a1.286,1.286,0,0,0,1.569-.563L23.7,11.206a1.286,1.286,0,0,0-.3-1.64ZM21.226,12.91l-.833-.312a2.257,2.257,0,0,0-3.018,1.742l-.146.877H14.517l-.146-.877A2.257,2.257,0,0,0,11.353,12.6l-.833.312L9.164,10.562,9.851,10a2.257,2.257,0,0,0,0-3.485l-.687-.565L10.52,3.6l.833.312a2.257,2.257,0,0,0,3.018-1.742l.146-.877h2.712l.146.877A2.257,2.257,0,0,0,20.393,3.91l.833-.312,1.356,2.348h0l-.687.565A2.257,2.257,0,0,0,21.9,10l.687.565ZM15.873,5.073a3.181,3.181,0,1,0,3.181,3.181A3.185,3.185,0,0,0,15.873,5.073Zm0,5.073a1.892,1.892,0,1,1,1.892-1.892A1.894,1.894,0,0,1,15.873,10.145Z"
                  transform="translate(-7.873 0)"
                  fill="#00586b"
                />
              </svg>
              <label>إعدادات</label>
            </a>
            <div class="dropdown-divider"></div>
            <router-link
              class="dropdown-item aLinksMenuHead"
              :to="type == 'user' ? '/edit-profile' : '/edit-lawyer-profile'"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="15.999"
                viewBox="0 0 16 15.999"
              >
                <g
                  id="edit_2_"
                  data-name="edit (2)"
                  transform="translate(0 -0.501)"
                >
                  <path
                    id="Path_1942"
                    data-name="Path 1942"
                    d="M12.667,91.149a.666.666,0,0,0-.667.667v5.333a.667.667,0,0,1-.667.667H2a.667.667,0,0,1-.667-.667V87.816A.667.667,0,0,1,2,87.149H7.333a.667.667,0,0,0,0-1.333H2a2,2,0,0,0-2,2v9.333a2,2,0,0,0,2,2h9.333a2,2,0,0,0,2-2V91.816a.666.666,0,0,0-.667-.667Zm0,0"
                    transform="translate(0 -82.649)"
                    fill="#00586b"
                  />
                  <path
                    id="Path_1943"
                    data-name="Path 1943"
                    d="M182.378,73.537a.337.337,0,0,0-.091.17l-.471,2.357a.333.333,0,0,0,.327.4.317.317,0,0,0,.065-.007l2.357-.471a.332.332,0,0,0,.171-.091l5.275-5.275-2.357-2.357Zm0,0"
                    transform="translate(-176.127 -65.643)"
                    fill="#00586b"
                  />
                  <path
                    id="Path_1944"
                    data-name="Path 1944"
                    d="M394.725.989a1.668,1.668,0,0,0-2.357,0l-.923.923L393.8,4.268l.923-.923a1.666,1.666,0,0,0,0-2.357Zm0,0"
                    transform="translate(-379.213 0)"
                    fill="#00586b"
                  />
                </g>
              </svg>
              <label>تعديل الملف الشخصي</label>
            </router-link>
            <a class="dropdown-item aLinksMenuHead" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16.38"
                height="16.38"
                viewBox="0 0 16.38 16.38"
              >
                <g id="help" transform="translate(0.191 0.19)">
                  <path
                    id="Path_1945"
                    data-name="Path 1945"
                    d="M13.656,2.343A8,8,0,0,0,2.343,13.657,8,8,0,0,0,13.656,2.343Zm-.331,10.982A7.531,7.531,0,0,1,2.674,2.675,7.531,7.531,0,0,1,13.325,13.325Zm0,0"
                    transform="translate(0)"
                    fill="#00586b"
                    stroke="#00586b"
                    stroke-width="0.38"
                  />
                  <path
                    id="Path_1946"
                    data-name="Path 1946"
                    d="M61.487,265.907a.235.235,0,0,0-.254.213,6.032,6.032,0,0,1-12.017,0,.234.234,0,0,0-.467.04,6.5,6.5,0,0,0,12.952,0,.234.234,0,0,0-.213-.254Zm0,0"
                    transform="translate(-47.225 -257.597)"
                    fill="#00586b"
                    stroke="#00586b"
                    stroke-width="0.38"
                  />
                  <path
                    id="Path_1947"
                    data-name="Path 1947"
                    d="M48.978,54.183a.234.234,0,0,0,.254-.213,6.032,6.032,0,0,1,12.017.005.234.234,0,0,0,.233.214h.02a.234.234,0,0,0,.213-.254,6.5,6.5,0,0,0-12.951-.006.234.234,0,0,0,.213.254Zm0,0"
                    transform="translate(-47.241 -46.501)"
                    fill="#00586b"
                    stroke="#00586b"
                    stroke-width="0.38"
                  />
                  <path
                    id="Path_1948"
                    data-name="Path 1948"
                    d="M215.558,338.027a1.046,1.046,0,0,0,0,2.091,1.046,1.046,0,1,0,0-2.091Zm0,1.623a.572.572,0,0,1-.565-.577.579.579,0,0,1,.565-.577.577.577,0,1,1,0,1.154Zm0,0"
                    transform="translate(-207.821 -327.464)"
                    fill="#00586b"
                    stroke="#00586b"
                    stroke-width="0.38"
                  />
                  <path
                    id="Path_1949"
                    data-name="Path 1949"
                    d="M177.683,111.822l.012-.01c.037-.034.082-.074.135-.121a3.3,3.3,0,0,0,1.348-2.389c0-1.325-1.107-2.251-2.692-2.251a2.871,2.871,0,0,0-1.781.537,1.476,1.476,0,0,0-.649,1.105.8.8,0,0,0,.831.807.785.785,0,0,0,.641-.387.963.963,0,0,1,.922-.436c.3,0,.995.077.995.792,0,.539-.409.876-.8,1.2-.1.085-.2.166-.29.249a2.48,2.48,0,0,0-.792,2.058c0,.42.089.9.783.9.75,0,.831-.464.831-.664,0-.695.02-.993.51-1.393Zm-.3-.358a1.871,1.871,0,0,0-.677,1.752c0,.078,0,.2-.362.2-.193,0-.231-.045-.244-.06a.612.612,0,0,1-.071-.374,2.029,2.029,0,0,1,.638-1.71l0,0c.077-.073.17-.149.268-.23a2.077,2.077,0,0,0,.975-1.563c0-.766-.574-1.26-1.463-1.26a1.425,1.425,0,0,0-1.291.615c-.13.166-.174.208-.272.208a.344.344,0,0,1-.362-.338c0-.4.592-1.173,1.961-1.173,1.33,0,2.223.716,2.223,1.782a2.857,2.857,0,0,1-1.189,2.038C177.466,111.386,177.42,111.426,177.38,111.463Zm0,0"
                    transform="translate(-168.616 -103.706)"
                    fill="#00586b"
                    stroke="#00586b"
                    stroke-width="0.38"
                  />
                </g>
              </svg>
              <label>مساعدة</label>
            </a>
            <div class="dropdown-divider"></div>
            <button
              type="button"
              class="dropdown-item aLinksMenuHead text-right"
              @click="logOut()"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
              >
                <g id="log-out" transform="translate(-126.235 -159.242)">
                  <path
                    id="Path_1950"
                    data-name="Path 1950"
                    d="M127.635,169.042v1.4a2.8,2.8,0,0,0,2.8,2.8h7a2.8,2.8,0,0,0,2.8-2.8v-8.4a2.8,2.8,0,0,0-2.8-2.8h-7a2.8,2.8,0,0,0-2.8,2.8v1.4a.7.7,0,0,0,1.4,0v-1.4a1.4,1.4,0,0,1,1.4-1.4h7a1.4,1.4,0,0,1,1.4,1.4v8.4a1.4,1.4,0,0,1-1.4,1.4h-7a1.4,1.4,0,0,1-1.4-1.4v-1.4a.7.7,0,0,0-1.4,0Zm5.31-3.5-.905-.9a.7.7,0,0,1,.99-.99l2.1,2.1a.7.7,0,0,1,0,.99l-2.1,2.1a.7.7,0,0,1-.99-.99l.905-.905h-6.01a.7.7,0,1,1,0-1.4Z"
                    fill="#00586b"
                    fill-rule="evenodd"
                  />
                </g>
              </svg>
              <label>تسجيل الخروج</label>
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <!-- End Header -->
</template>

<script>
export default {
  data() {
    return {
      type: "",
    };
  },
  computed: {
    personalImageLink() {
      return this.type == "user" ? "/client-profile" : "/officeHome";
    },
  },
  created() {
    this.type = localStorage.getItem("type");
  },
  methods: {
    async logOut() {
      const clearToken = () => {
        localStorage.setItem("auth_token", "");
        localStorage.setItem("user", "");
        this.$store.state.user = {};
        this.$router.push("/");
      };
      try {
        if (this.type != "user") {
          await this.$http.get("api/auth/lawyer/logout");
        } else {
          await this.$http.get("api/auth/client/logout");
        }
        clearToken();
      } catch (err) {
        console.error(err);
        if (err.response.status === 401) {
          clearToken();
        }
      }
    },
  },
};
</script>
