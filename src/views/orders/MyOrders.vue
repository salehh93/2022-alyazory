<template>
  <!-- Start Content -->
  <div class="container">
    <div class="pagesLinks">
      <router-link to="/home">الرئيسية/</router-link>
      <router-link to="/my-orders"> طلباتي</router-link>
    </div>
    <h3 class="hTitle">طلباتي</h3>
    <div class="row">
      <div class="col-lg-3 col-md-4 col-12">
        <div class="divfillterOffers divFilterKeysOffer">
          <p class="pKeyWords">كلمات مفتاحية</p>
          <input type="text" class="txtFilterPortfolio" />
        </div>
        <div class="divfillterOffers divFilterNameOffer">
          <p class="pKeyWords">اسم صاحب المشروع</p>
          <input type="text" class="txtFilterPortfolio" />
        </div>
      </div>
      <div class="col-lg-9 col-md-8 col-12">
        <ul id="myTab" class="nav nav-tabs ulProfile ulOffers" role="tablist">
          <li class="nav-item">
            <a
              id="Accept-tab"
              class="nav-link active aProgressTab liTabOffers activeAccept"
              data-toggle="tab"
              href="#Accept"
              role="tab"
              aria-controls="Accept"
              aria-selected="false"
              >مفتوح</a
            >
          </li>
          <li class="nav-item">
            <a
              id="profile-tab"
              class="nav-link aProgressTab liTabOffers activeProgress"
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
              class="nav-link aProgressTab liTabOffers activeComplete"
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
              class="nav-link aProgressTab liTabOffers activeClose"
              data-toggle="tab"
              href="#close"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
              >مغلق</a
            >
          </li>
        </ul>
        <div
          id="myTabContent"
          class="tab-content tabContentOffers tabcontentProfile"
          style="padding-bottom: 0.4px"
        >
          <div
            id="Accept"
            class="tab-pane fade show active"
            role="tabpanel"
            aria-labelledby="Accept-tab"
          >
            <div
              v-for="(req, i) in myOrders_open"
              :key="i"
              class="contentOffers"
            >
              <router-link :to="`/order-view/${req.id}`">
                <p class="pTitleWorksProfile">
                  {{ req.title }}
                </p>
              </router-link>
              <p class="pWorksProfile">
                {{ req.description }}
              </p>
              <div class="divIcons row">
                <div class="col-lg-2 col-12">
                  <i
                    class="far fa-clock iconOrders"
                    style="padding-left: 6px"
                  ></i>
                  <label class="lblOrders">{{
                    req.created_at | formatDate
                  }}</label>
                </div>
                <div class="col-lg-3 col-12">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13.314"
                    height="11.49"
                    viewBox="0 0 13.314 11.49"
                  >
                    <g
                      id="Group_10014"
                      data-name="Group 10014"
                      transform="translate(0.15 0.164)"
                    >
                      <g
                        id="Group_10013"
                        data-name="Group 10013"
                        transform="translate(0 0)"
                      >
                        <path
                          id="Path_1882"
                          data-name="Path 1882"
                          d="M12.982,34.912h0l-2.454-6.163a.255.255,0,0,0-.331-.143h0L.238,32.572a.25.25,0,0,0-.1.081A.252.252,0,0,0,0,32.874v6.635a.255.255,0,0,0,.255.255H10.973a.255.255,0,0,0,.255-.255V35.885l1.611-.642A.255.255,0,0,0,12.982,34.912Zm-2.264,4.342H.51V33.129H10.718ZM4.258,32.62l4.273-1.7a2.03,2.03,0,0,0,1.463.631l.426,1.072Zm6.971,2.717V32.874a.255.255,0,0,0-.255-.255h0l-.541-1.358a.211.211,0,0,0-.021-.032.252.252,0,0,0-.267-.2A1.526,1.526,0,0,1,8.8,30.456a.253.253,0,0,0-.327-.057l-.036.007L3.223,32.483a.252.252,0,0,0-.14.136H1.5l8.649-3.444,2.266,5.69Z"
                          transform="translate(0 -28.588)"
                          fill="#8e8e93"
                          stroke="#8e8e93"
                          stroke-width="0.3"
                        />
                        <path
                          id="Path_1883"
                          data-name="Path 1883"
                          d="M32.182,190.836a1.526,1.526,0,0,1,1.03,1.029.255.255,0,0,0,.244.182.233.233,0,0,0,.039-.006l.035.007h6.125l.031-.006a.238.238,0,0,0,.287-.175h0a1.526,1.526,0,0,1,1.03-1.03.252.252,0,0,0,.175-.281.257.257,0,0,0,.007-.038v-2.042a.23.23,0,0,0-.008-.038.252.252,0,0,0-.175-.281,1.524,1.524,0,0,1-1.03-1.03.252.252,0,0,0-.283-.175l-.036-.007H33.531a.242.242,0,0,0-.038.008.252.252,0,0,0-.281.175,1.526,1.526,0,0,1-1.03,1.03.252.252,0,0,0-.175.281.258.258,0,0,0-.007.038v2.042a.235.235,0,0,0,.007.035A.253.253,0,0,0,32.182,190.836Zm.328-2.257a2.025,2.025,0,0,0,1.124-1.124h5.917a2.026,2.026,0,0,0,1.125,1.124v1.834a2.027,2.027,0,0,0-1.124,1.124H33.635a2.027,2.027,0,0,0-1.124-1.124Z"
                          transform="translate(-30.979 -181.894)"
                          fill="#8e8e93"
                          stroke="#8e8e93"
                          stroke-width="0.3"
                        />
                        <path
                          id="Path_1884"
                          data-name="Path 1884"
                          d="M129.531,222.007A1.531,1.531,0,1,0,128,220.476,1.531,1.531,0,0,0,129.531,222.007Zm0-2.552a1.021,1.021,0,1,1-1.021,1.021A1.021,1.021,0,0,1,129.531,219.455Z"
                          transform="translate(-123.917 -212.873)"
                          fill="#8e8e93"
                          stroke="#8e8e93"
                          stroke-width="0.3"
                        />
                        <path
                          id="Path_1885"
                          data-name="Path 1885"
                          d="M76.383,255.711a.383.383,0,1,0-.383-.383A.383.383,0,0,0,76.383,255.711Zm0-.51a.128.128,0,1,1-.128.128A.128.128,0,0,1,76.383,255.2Z"
                          transform="translate(-73.576 -247.724)"
                          fill="#8e8e93"
                          stroke="#8e8e93"
                          stroke-width="0.3"
                        />
                        <path
                          id="Path_1886"
                          data-name="Path 1886"
                          d="M252.383,255.711a.383.383,0,1,0-.383-.383A.383.383,0,0,0,252.383,255.711Zm0-.51a.128.128,0,1,1-.128.128A.128.128,0,0,1,252.383,255.2Z"
                          transform="translate(-243.961 -247.724)"
                          fill="#8e8e93"
                          stroke="#8e8e93"
                          stroke-width="0.3"
                        />
                      </g>
                    </g>
                  </svg>

                  <label class="lblOrders" style="padding-right: 6px"
                    >{{ req.budget }} ريال سعودي</label
                  >
                </div>
                <div class="col-lg-3 col-12">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13.5"
                    height="13.5"
                    viewBox="0 0 13.5 13.5"
                  >
                    <g
                      id="calendar_2_"
                      data-name="calendar (2)"
                      transform="translate(-1.75 -1.749)"
                    >
                      <path
                        id="Path_1888"
                        data-name="Path 1888"
                        d="M14.443,31.286H2.557A.557.557,0,0,1,2,30.729V22.186A.186.186,0,0,1,2.186,22H14.814a.186.186,0,0,1,.186.186v8.543A.557.557,0,0,1,14.443,31.286ZM2.371,22.371v8.357a.186.186,0,0,0,.186.186H14.443a.186.186,0,0,0,.186-.186V22.371Z"
                        transform="translate(0 -16.287)"
                        fill="#8e8e93"
                        stroke="#707070"
                        stroke-width="0.5"
                      />
                      <path
                        id="Path_1889"
                        data-name="Path 1889"
                        d="M14.814,11.436H2.186A.186.186,0,0,1,2,11.25V9.127a.557.557,0,0,1,.557-.557H4.448a.186.186,0,1,1,0,.371H2.557a.186.186,0,0,0-.186.186v1.937H14.629V9.127a.186.186,0,0,0-.186-.186H12.552a.186.186,0,1,1,0-.371h1.891A.557.557,0,0,1,15,9.127V11.25A.186.186,0,0,1,14.814,11.436Z"
                        transform="translate(0 -5.351)"
                        fill="#8e8e93"
                        stroke="#707070"
                        stroke-width="0.5"
                      />
                      <path
                        id="Path_1890"
                        data-name="Path 1890"
                        d="M26.33,8.941H20.506a.186.186,0,1,1,0-.371H26.33a.186.186,0,0,1,0,.371Z"
                        transform="translate(-14.918 -5.351)"
                        fill="#8e8e93"
                        stroke="#707070"
                        stroke-width="0.5"
                      />
                      <path
                        id="Path_1891"
                        data-name="Path 1891"
                        d="M52.438,4.81a.756.756,0,0,1-.755-.755v-1.3a.755.755,0,0,1,1.511,0v1.3A.756.756,0,0,1,52.438,4.81Zm0-2.439a.384.384,0,0,0-.384.384v1.3a.384.384,0,1,0,.768,0v-1.3a.384.384,0,0,0-.384-.384Z"
                        transform="translate(-40.456 0)"
                        fill="#8e8e93"
                        stroke="#707070"
                        stroke-width="0.5"
                      />
                      <path
                        id="Path_1892"
                        data-name="Path 1892"
                        d="M14.938,4.81a.756.756,0,0,1-.755-.755v-1.3a.755.755,0,0,1,1.511,0v1.3a.756.756,0,0,1-.755.755Zm0-2.439a.384.384,0,0,0-.384.384v1.3a.384.384,0,0,0,.768,0v-1.3A.384.384,0,0,0,14.938,2.371Z"
                        transform="translate(-9.92)"
                        fill="#8e8e93"
                        stroke="#707070"
                        stroke-width="0.5"
                      />
                      <path
                        id="Path_1893"
                        data-name="Path 1893"
                        d="M58.053,32h-.434a.186.186,0,1,1,0-.371h.434a.186.186,0,1,1,0,.371Z"
                        transform="translate(-45.138 -24.124)"
                        fill="#8e8e93"
                        stroke="#707070"
                        stroke-width="0.5"
                      />
                      <path
                        id="Path_1894"
                        data-name="Path 1894"
                        d="M46.752,32h-.434a.186.186,0,0,1,0-.371h.434a.186.186,0,1,1,0,.371Z"
                        transform="translate(-35.936 -24.124)"
                        fill="#8e8e93"
                        stroke="#707070"
                        stroke-width="0.5"
                      />
                      <path
                        id="Path_1895"
                        data-name="Path 1895"
                        d="M35.451,32h-.434a.186.186,0,0,1,0-.371h.434a.186.186,0,0,1,0,.371Z"
                        transform="translate(-26.734 -24.124)"
                        fill="#8e8e93"
                        stroke="#707070"
                        stroke-width="0.5"
                      />
                      <path
                        id="Path_1896"
                        data-name="Path 1896"
                        d="M58.053,41.579h-.434a.186.186,0,0,1,0-.371h.434a.186.186,0,0,1,0,.371Z"
                        transform="translate(-45.138 -31.927)"
                        fill="#8e8e93"
                        stroke="#707070"
                        stroke-width="0.5"
                      />
                      <path
                        id="Path_1897"
                        data-name="Path 1897"
                        d="M46.752,41.579h-.434a.186.186,0,0,1,0-.371h.434a.186.186,0,1,1,0,.371Z"
                        transform="translate(-35.936 -31.927)"
                        fill="#8e8e93"
                        stroke="#707070"
                        stroke-width="0.5"
                      />
                      <path
                        id="Path_1898"
                        data-name="Path 1898"
                        d="M35.451,41.579h-.434a.186.186,0,0,1,0-.371h.434a.186.186,0,1,1,0,.371Z"
                        transform="translate(-26.734 -31.927)"
                        fill="#8e8e93"
                        stroke="#707070"
                        stroke-width="0.5"
                      />
                      <path
                        id="Path_1899"
                        data-name="Path 1899"
                        d="M24.15,41.579h-.434a.186.186,0,0,1,0-.371h.434a.186.186,0,0,1,0,.371Z"
                        transform="translate(-17.532 -31.927)"
                        fill="#8e8e93"
                        stroke="#707070"
                        stroke-width="0.5"
                      />
                      <path
                        id="Path_1900"
                        data-name="Path 1900"
                        d="M12.849,41.579h-.434a.186.186,0,0,1,0-.371h.434a.186.186,0,1,1,0,.371Z"
                        transform="translate(-8.329 -31.927)"
                        fill="#8e8e93"
                        stroke="#707070"
                        stroke-width="0.5"
                      />
                      <path
                        id="Path_1901"
                        data-name="Path 1901"
                        d="M58.053,51.163h-.434a.186.186,0,0,1,0-.371h.434a.186.186,0,0,1,0,.371Z"
                        transform="translate(-45.138 -39.731)"
                        fill="#8e8e93"
                        stroke="#707070"
                        stroke-width="0.5"
                      />
                      <path
                        id="Path_1902"
                        data-name="Path 1902"
                        d="M46.752,51.163h-.434a.186.186,0,0,1,0-.371h.434a.186.186,0,0,1,0,.371Z"
                        transform="translate(-35.936 -39.731)"
                        fill="#8e8e93"
                        stroke="#707070"
                        stroke-width="0.5"
                      />
                      <path
                        id="Path_1903"
                        data-name="Path 1903"
                        d="M35.451,51.163h-.434a.186.186,0,0,1,0-.371h.434a.186.186,0,1,1,0,.371Z"
                        transform="translate(-26.734 -39.731)"
                        fill="#8e8e93"
                        stroke="#707070"
                        stroke-width="0.5"
                      />
                      <path
                        id="Path_1904"
                        data-name="Path 1904"
                        d="M24.15,51.163h-.434a.186.186,0,0,1,0-.371h.434a.186.186,0,1,1,0,.371Z"
                        transform="translate(-17.532 -39.731)"
                        fill="#8e8e93"
                        stroke="#707070"
                        stroke-width="0.5"
                      />
                      <path
                        id="Path_1905"
                        data-name="Path 1905"
                        d="M12.849,51.163h-.434a.186.186,0,0,1,0-.371h.434a.186.186,0,1,1,0,.371Z"
                        transform="translate(-8.329 -39.731)"
                        fill="#8e8e93"
                        stroke="#707070"
                        stroke-width="0.5"
                      />
                      <path
                        id="Path_1906"
                        data-name="Path 1906"
                        d="M35.451,60.746h-.434a.186.186,0,0,1,0-.371h.434a.186.186,0,1,1,0,.371Z"
                        transform="translate(-26.734 -47.535)"
                        fill="#8e8e93"
                        stroke="#707070"
                        stroke-width="0.5"
                      />
                      <path
                        id="Path_1907"
                        data-name="Path 1907"
                        d="M24.15,60.746h-.434a.186.186,0,0,1,0-.371h.434a.186.186,0,1,1,0,.371Z"
                        transform="translate(-17.532 -47.535)"
                        fill="#8e8e93"
                        stroke="#707070"
                        stroke-width="0.5"
                      />
                      <path
                        id="Path_1908"
                        data-name="Path 1908"
                        d="M12.849,60.746h-.434a.186.186,0,0,1,0-.371h.434a.186.186,0,0,1,0,.371Z"
                        transform="translate(-8.329 -47.535)"
                        fill="#8e8e93"
                        stroke="#707070"
                        stroke-width="0.5"
                      />
                    </g>
                  </svg>
                  <label class="lblOrders" style="padding-right: 4px"
                    >مدة التنفيذ {{ req.delivery_time_form }} أيام
                  </label>
                </div>
              </div>
              <hr :key="`divider-${i}`" />
            </div>
            <div
              v-if="!myOrders_open.length && !isFetchingOrders.myOrders_open"
              style="
                display: flex;
                align-items: center;
                justify-content: center;
              "
            >
              <p style="margin: 80px 0px 100px">ليس هناك طلبات مفتوحة</p>
            </div>
            <div
              v-else-if="isFetchingOrders.myOrders_open"
              style="
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 4rem;
              "
            >
              <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
              </div>
            </div>
            <PaginationComponent
              :total-number-of-items="all_myOrders_open.length"
              :pagination-index="pagination.myOrders_open"
              :items-per-page="pagination.itemsPerPage"
              @pageClick="(page) => onPageClick('myOrders_open', page)"
              @previousPage="() => onPreviousPage('myOrders_open')"
              @nextPage="() => onNextPage('myOrders_open')"
            />
          </div>
          <!-- complete -->
          <div
            id="complete"
            class="tab-pane fade"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <div
              v-for="(req, i) in myOrders_complete"
              :key="i"
              class="contentOffers"
            >
              <router-link :to="`/order-view/${req.id}`">
                <p class="pTitleWorksProfile">
                  {{ req.title }}
                </p>
              </router-link>
              <p class="pWorksProfile">
                {{ req.description }}
              </p>
              <div class="divIcons row">
                <!-- <div class="col-lg-2 col-12">
                  <a href="Entrepreneur.html">
                    <i class="fas fa-user iconOrders"></i>
                    <label class="lblOrders">اسم الناشر</label>
                  </a>
                </div> -->
                <div class="col-lg-2 col-12">
                  <i
                    class="far fa-clock iconOrders"
                    style="padding-left: 6px"
                  ></i>
                  <label class="lblOrders">{{
                    req.created_at | formatDate
                  }}</label>
                </div>
                <div class="col-lg-3 col-12">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13.314"
                    height="11.49"
                    viewBox="0 0 13.314 11.49"
                  >
                    <g
                      id="Group_10014"
                      data-name="Group 10014"
                      transform="translate(0.15 0.164)"
                    >
                      <g
                        id="Group_10013"
                        data-name="Group 10013"
                        transform="translate(0 0)"
                      >
                        <path
                          id="Path_1882"
                          data-name="Path 1882"
                          d="M12.982,34.912h0l-2.454-6.163a.255.255,0,0,0-.331-.143h0L.238,32.572a.25.25,0,0,0-.1.081A.252.252,0,0,0,0,32.874v6.635a.255.255,0,0,0,.255.255H10.973a.255.255,0,0,0,.255-.255V35.885l1.611-.642A.255.255,0,0,0,12.982,34.912Zm-2.264,4.342H.51V33.129H10.718ZM4.258,32.62l4.273-1.7a2.03,2.03,0,0,0,1.463.631l.426,1.072Zm6.971,2.717V32.874a.255.255,0,0,0-.255-.255h0l-.541-1.358a.211.211,0,0,0-.021-.032.252.252,0,0,0-.267-.2A1.526,1.526,0,0,1,8.8,30.456a.253.253,0,0,0-.327-.057l-.036.007L3.223,32.483a.252.252,0,0,0-.14.136H1.5l8.649-3.444,2.266,5.69Z"
                          transform="translate(0 -28.588)"
                          fill="#8e8e93"
                          stroke="#8e8e93"
                          stroke-width="0.3"
                        />
                        <path
                          id="Path_1883"
                          data-name="Path 1883"
                          d="M32.182,190.836a1.526,1.526,0,0,1,1.03,1.029.255.255,0,0,0,.244.182.233.233,0,0,0,.039-.006l.035.007h6.125l.031-.006a.238.238,0,0,0,.287-.175h0a1.526,1.526,0,0,1,1.03-1.03.252.252,0,0,0,.175-.281.257.257,0,0,0,.007-.038v-2.042a.23.23,0,0,0-.008-.038.252.252,0,0,0-.175-.281,1.524,1.524,0,0,1-1.03-1.03.252.252,0,0,0-.283-.175l-.036-.007H33.531a.242.242,0,0,0-.038.008.252.252,0,0,0-.281.175,1.526,1.526,0,0,1-1.03,1.03.252.252,0,0,0-.175.281.258.258,0,0,0-.007.038v2.042a.235.235,0,0,0,.007.035A.253.253,0,0,0,32.182,190.836Zm.328-2.257a2.025,2.025,0,0,0,1.124-1.124h5.917a2.026,2.026,0,0,0,1.125,1.124v1.834a2.027,2.027,0,0,0-1.124,1.124H33.635a2.027,2.027,0,0,0-1.124-1.124Z"
                          transform="translate(-30.979 -181.894)"
                          fill="#8e8e93"
                          stroke="#8e8e93"
                          stroke-width="0.3"
                        />
                        <path
                          id="Path_1884"
                          data-name="Path 1884"
                          d="M129.531,222.007A1.531,1.531,0,1,0,128,220.476,1.531,1.531,0,0,0,129.531,222.007Zm0-2.552a1.021,1.021,0,1,1-1.021,1.021A1.021,1.021,0,0,1,129.531,219.455Z"
                          transform="translate(-123.917 -212.873)"
                          fill="#8e8e93"
                          stroke="#8e8e93"
                          stroke-width="0.3"
                        />
                        <path
                          id="Path_1885"
                          data-name="Path 1885"
                          d="M76.383,255.711a.383.383,0,1,0-.383-.383A.383.383,0,0,0,76.383,255.711Zm0-.51a.128.128,0,1,1-.128.128A.128.128,0,0,1,76.383,255.2Z"
                          transform="translate(-73.576 -247.724)"
                          fill="#8e8e93"
                          stroke="#8e8e93"
                          stroke-width="0.3"
                        />
                        <path
                          id="Path_1886"
                          data-name="Path 1886"
                          d="M252.383,255.711a.383.383,0,1,0-.383-.383A.383.383,0,0,0,252.383,255.711Zm0-.51a.128.128,0,1,1-.128.128A.128.128,0,0,1,252.383,255.2Z"
                          transform="translate(-243.961 -247.724)"
                          fill="#8e8e93"
                          stroke="#8e8e93"
                          stroke-width="0.3"
                        />
                      </g>
                    </g>
                  </svg>

                  <label class="lblOrders" style="padding-right: 6px"
                    >{{ req.budget }} ريال سعودي</label
                  >
                </div>
                <div class="col-lg-3 col-12">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13.5"
                    height="13.5"
                    viewBox="0 0 13.5 13.5"
                  >
                    <g
                      id="calendar_2_"
                      data-name="calendar (2)"
                      transform="translate(-1.75 -1.749)"
                    >
                      <path
                        id="Path_1888"
                        data-name="Path 1888"
                        d="M14.443,31.286H2.557A.557.557,0,0,1,2,30.729V22.186A.186.186,0,0,1,2.186,22H14.814a.186.186,0,0,1,.186.186v8.543A.557.557,0,0,1,14.443,31.286ZM2.371,22.371v8.357a.186.186,0,0,0,.186.186H14.443a.186.186,0,0,0,.186-.186V22.371Z"
                        transform="translate(0 -16.287)"
                        fill="#8e8e93"
                        stroke="#707070"
                        stroke-width="0.5"
                      />
                      <path
                        id="Path_1889"
                        data-name="Path 1889"
                        d="M14.814,11.436H2.186A.186.186,0,0,1,2,11.25V9.127a.557.557,0,0,1,.557-.557H4.448a.186.186,0,1,1,0,.371H2.557a.186.186,0,0,0-.186.186v1.937H14.629V9.127a.186.186,0,0,0-.186-.186H12.552a.186.186,0,1,1,0-.371h1.891A.557.557,0,0,1,15,9.127V11.25A.186.186,0,0,1,14.814,11.436Z"
                        transform="translate(0 -5.351)"
                        fill="#8e8e93"
                        stroke="#707070"
                        stroke-width="0.5"
                      />
                      <path
                        id="Path_1890"
                        data-name="Path 1890"
                        d="M26.33,8.941H20.506a.186.186,0,1,1,0-.371H26.33a.186.186,0,0,1,0,.371Z"
                        transform="translate(-14.918 -5.351)"
                        fill="#8e8e93"
                        stroke="#707070"
                        stroke-width="0.5"
                      />
                      <path
                        id="Path_1891"
                        data-name="Path 1891"
                        d="M52.438,4.81a.756.756,0,0,1-.755-.755v-1.3a.755.755,0,0,1,1.511,0v1.3A.756.756,0,0,1,52.438,4.81Zm0-2.439a.384.384,0,0,0-.384.384v1.3a.384.384,0,1,0,.768,0v-1.3a.384.384,0,0,0-.384-.384Z"
                        transform="translate(-40.456 0)"
                        fill="#8e8e93"
                        stroke="#707070"
                        stroke-width="0.5"
                      />
                      <path
                        id="Path_1892"
                        data-name="Path 1892"
                        d="M14.938,4.81a.756.756,0,0,1-.755-.755v-1.3a.755.755,0,0,1,1.511,0v1.3a.756.756,0,0,1-.755.755Zm0-2.439a.384.384,0,0,0-.384.384v1.3a.384.384,0,0,0,.768,0v-1.3A.384.384,0,0,0,14.938,2.371Z"
                        transform="translate(-9.92)"
                        fill="#8e8e93"
                        stroke="#707070"
                        stroke-width="0.5"
                      />
                      <path
                        id="Path_1893"
                        data-name="Path 1893"
                        d="M58.053,32h-.434a.186.186,0,1,1,0-.371h.434a.186.186,0,1,1,0,.371Z"
                        transform="translate(-45.138 -24.124)"
                        fill="#8e8e93"
                        stroke="#707070"
                        stroke-width="0.5"
                      />
                      <path
                        id="Path_1894"
                        data-name="Path 1894"
                        d="M46.752,32h-.434a.186.186,0,0,1,0-.371h.434a.186.186,0,1,1,0,.371Z"
                        transform="translate(-35.936 -24.124)"
                        fill="#8e8e93"
                        stroke="#707070"
                        stroke-width="0.5"
                      />
                      <path
                        id="Path_1895"
                        data-name="Path 1895"
                        d="M35.451,32h-.434a.186.186,0,0,1,0-.371h.434a.186.186,0,0,1,0,.371Z"
                        transform="translate(-26.734 -24.124)"
                        fill="#8e8e93"
                        stroke="#707070"
                        stroke-width="0.5"
                      />
                      <path
                        id="Path_1896"
                        data-name="Path 1896"
                        d="M58.053,41.579h-.434a.186.186,0,0,1,0-.371h.434a.186.186,0,0,1,0,.371Z"
                        transform="translate(-45.138 -31.927)"
                        fill="#8e8e93"
                        stroke="#707070"
                        stroke-width="0.5"
                      />
                      <path
                        id="Path_1897"
                        data-name="Path 1897"
                        d="M46.752,41.579h-.434a.186.186,0,0,1,0-.371h.434a.186.186,0,1,1,0,.371Z"
                        transform="translate(-35.936 -31.927)"
                        fill="#8e8e93"
                        stroke="#707070"
                        stroke-width="0.5"
                      />
                      <path
                        id="Path_1898"
                        data-name="Path 1898"
                        d="M35.451,41.579h-.434a.186.186,0,0,1,0-.371h.434a.186.186,0,1,1,0,.371Z"
                        transform="translate(-26.734 -31.927)"
                        fill="#8e8e93"
                        stroke="#707070"
                        stroke-width="0.5"
                      />
                      <path
                        id="Path_1899"
                        data-name="Path 1899"
                        d="M24.15,41.579h-.434a.186.186,0,0,1,0-.371h.434a.186.186,0,0,1,0,.371Z"
                        transform="translate(-17.532 -31.927)"
                        fill="#8e8e93"
                        stroke="#707070"
                        stroke-width="0.5"
                      />
                      <path
                        id="Path_1900"
                        data-name="Path 1900"
                        d="M12.849,41.579h-.434a.186.186,0,0,1,0-.371h.434a.186.186,0,1,1,0,.371Z"
                        transform="translate(-8.329 -31.927)"
                        fill="#8e8e93"
                        stroke="#707070"
                        stroke-width="0.5"
                      />
                      <path
                        id="Path_1901"
                        data-name="Path 1901"
                        d="M58.053,51.163h-.434a.186.186,0,0,1,0-.371h.434a.186.186,0,0,1,0,.371Z"
                        transform="translate(-45.138 -39.731)"
                        fill="#8e8e93"
                        stroke="#707070"
                        stroke-width="0.5"
                      />
                      <path
                        id="Path_1902"
                        data-name="Path 1902"
                        d="M46.752,51.163h-.434a.186.186,0,0,1,0-.371h.434a.186.186,0,0,1,0,.371Z"
                        transform="translate(-35.936 -39.731)"
                        fill="#8e8e93"
                        stroke="#707070"
                        stroke-width="0.5"
                      />
                      <path
                        id="Path_1903"
                        data-name="Path 1903"
                        d="M35.451,51.163h-.434a.186.186,0,0,1,0-.371h.434a.186.186,0,1,1,0,.371Z"
                        transform="translate(-26.734 -39.731)"
                        fill="#8e8e93"
                        stroke="#707070"
                        stroke-width="0.5"
                      />
                      <path
                        id="Path_1904"
                        data-name="Path 1904"
                        d="M24.15,51.163h-.434a.186.186,0,0,1,0-.371h.434a.186.186,0,1,1,0,.371Z"
                        transform="translate(-17.532 -39.731)"
                        fill="#8e8e93"
                        stroke="#707070"
                        stroke-width="0.5"
                      />
                      <path
                        id="Path_1905"
                        data-name="Path 1905"
                        d="M12.849,51.163h-.434a.186.186,0,0,1,0-.371h.434a.186.186,0,1,1,0,.371Z"
                        transform="translate(-8.329 -39.731)"
                        fill="#8e8e93"
                        stroke="#707070"
                        stroke-width="0.5"
                      />
                      <path
                        id="Path_1906"
                        data-name="Path 1906"
                        d="M35.451,60.746h-.434a.186.186,0,0,1,0-.371h.434a.186.186,0,1,1,0,.371Z"
                        transform="translate(-26.734 -47.535)"
                        fill="#8e8e93"
                        stroke="#707070"
                        stroke-width="0.5"
                      />
                      <path
                        id="Path_1907"
                        data-name="Path 1907"
                        d="M24.15,60.746h-.434a.186.186,0,0,1,0-.371h.434a.186.186,0,1,1,0,.371Z"
                        transform="translate(-17.532 -47.535)"
                        fill="#8e8e93"
                        stroke="#707070"
                        stroke-width="0.5"
                      />
                      <path
                        id="Path_1908"
                        data-name="Path 1908"
                        d="M12.849,60.746h-.434a.186.186,0,0,1,0-.371h.434a.186.186,0,0,1,0,.371Z"
                        transform="translate(-8.329 -47.535)"
                        fill="#8e8e93"
                        stroke="#707070"
                        stroke-width="0.5"
                      />
                    </g>
                  </svg>
                  <label class="lblOrders" style="padding-right: 4px"
                    >مدة التنفيذ {{ req.delivery_time_form }} أيام</label
                  >
                </div>
              </div>
              <hr :key="`divider-${i}`" />
            </div>
            <div
              v-if="
                !myOrders_complete.length && !isFetchingOrders.myOrders_complete
              "
              style="
                display: flex;
                align-items: center;
                justify-content: center;
              "
            >
              <p style="margin: 80px 0px 100px">ليس هناك طلبات مكتملة</p>
            </div>
            <div
              v-else-if="isFetchingOrders.myOrders_complete"
              style="
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 4rem;
              "
            >
              <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
              </div>
            </div>
            <PaginationComponent
              :total-number-of-items="all_myOrders_complete.length"
              :pagination-index="pagination.myOrders_complete"
              :items-per-page="pagination.itemsPerPage"
              @pageClick="(page) => onPageClick('myOrders_complete', page)"
              @previousPage="() => onPreviousPage('myOrders_complete')"
              @nextPage="() => onNextPage('myOrders_complete')"
            />
          </div>
          <!-- underway -->

          <div
            id="progress"
            class="tab-pane fade"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <div
              v-for="(req, i) in myOrders_underway"
              :key="i"
              class="contentOffers"
            >
              <router-link :to="`/order-view/${req.id}`">
                <p class="pTitleWorksProfile">
                  {{ req.title }}
                </p>
              </router-link>
              <p class="pWorksProfile">
                {{ req.description }}
              </p>
              <div class="divIcons row">
                <!--<div class="col-lg-2 col-12">
                   <a href="Entrepreneur.html">
                    <i class="fas fa-user iconOrders"></i>
                    <label class="lblOrders">اسم الناشر</label>
                  </a>
                </div> -->
                <div class="col-lg-2 col-12">
                  <i
                    class="far fa-clock iconOrders"
                    style="padding-left: 6px"
                  ></i>
                  <label class="lblOrders">{{
                    req.created_at | formatDate
                  }}</label>
                </div>
                <div class="col-lg-3 col-12">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13.314"
                    height="11.49"
                    viewBox="0 0 13.314 11.49"
                  >
                    <g
                      id="Group_10014"
                      data-name="Group 10014"
                      transform="translate(0.15 0.164)"
                    >
                      <g
                        id="Group_10013"
                        data-name="Group 10013"
                        transform="translate(0 0)"
                      >
                        <path
                          id="Path_1882"
                          data-name="Path 1882"
                          d="M12.982,34.912h0l-2.454-6.163a.255.255,0,0,0-.331-.143h0L.238,32.572a.25.25,0,0,0-.1.081A.252.252,0,0,0,0,32.874v6.635a.255.255,0,0,0,.255.255H10.973a.255.255,0,0,0,.255-.255V35.885l1.611-.642A.255.255,0,0,0,12.982,34.912Zm-2.264,4.342H.51V33.129H10.718ZM4.258,32.62l4.273-1.7a2.03,2.03,0,0,0,1.463.631l.426,1.072Zm6.971,2.717V32.874a.255.255,0,0,0-.255-.255h0l-.541-1.358a.211.211,0,0,0-.021-.032.252.252,0,0,0-.267-.2A1.526,1.526,0,0,1,8.8,30.456a.253.253,0,0,0-.327-.057l-.036.007L3.223,32.483a.252.252,0,0,0-.14.136H1.5l8.649-3.444,2.266,5.69Z"
                          transform="translate(0 -28.588)"
                          fill="#8e8e93"
                          stroke="#8e8e93"
                          stroke-width="0.3"
                        />
                        <path
                          id="Path_1883"
                          data-name="Path 1883"
                          d="M32.182,190.836a1.526,1.526,0,0,1,1.03,1.029.255.255,0,0,0,.244.182.233.233,0,0,0,.039-.006l.035.007h6.125l.031-.006a.238.238,0,0,0,.287-.175h0a1.526,1.526,0,0,1,1.03-1.03.252.252,0,0,0,.175-.281.257.257,0,0,0,.007-.038v-2.042a.23.23,0,0,0-.008-.038.252.252,0,0,0-.175-.281,1.524,1.524,0,0,1-1.03-1.03.252.252,0,0,0-.283-.175l-.036-.007H33.531a.242.242,0,0,0-.038.008.252.252,0,0,0-.281.175,1.526,1.526,0,0,1-1.03,1.03.252.252,0,0,0-.175.281.258.258,0,0,0-.007.038v2.042a.235.235,0,0,0,.007.035A.253.253,0,0,0,32.182,190.836Zm.328-2.257a2.025,2.025,0,0,0,1.124-1.124h5.917a2.026,2.026,0,0,0,1.125,1.124v1.834a2.027,2.027,0,0,0-1.124,1.124H33.635a2.027,2.027,0,0,0-1.124-1.124Z"
                          transform="translate(-30.979 -181.894)"
                          fill="#8e8e93"
                          stroke="#8e8e93"
                          stroke-width="0.3"
                        />
                        <path
                          id="Path_1884"
                          data-name="Path 1884"
                          d="M129.531,222.007A1.531,1.531,0,1,0,128,220.476,1.531,1.531,0,0,0,129.531,222.007Zm0-2.552a1.021,1.021,0,1,1-1.021,1.021A1.021,1.021,0,0,1,129.531,219.455Z"
                          transform="translate(-123.917 -212.873)"
                          fill="#8e8e93"
                          stroke="#8e8e93"
                          stroke-width="0.3"
                        />
                        <path
                          id="Path_1885"
                          data-name="Path 1885"
                          d="M76.383,255.711a.383.383,0,1,0-.383-.383A.383.383,0,0,0,76.383,255.711Zm0-.51a.128.128,0,1,1-.128.128A.128.128,0,0,1,76.383,255.2Z"
                          transform="translate(-73.576 -247.724)"
                          fill="#8e8e93"
                          stroke="#8e8e93"
                          stroke-width="0.3"
                        />
                        <path
                          id="Path_1886"
                          data-name="Path 1886"
                          d="M252.383,255.711a.383.383,0,1,0-.383-.383A.383.383,0,0,0,252.383,255.711Zm0-.51a.128.128,0,1,1-.128.128A.128.128,0,0,1,252.383,255.2Z"
                          transform="translate(-243.961 -247.724)"
                          fill="#8e8e93"
                          stroke="#8e8e93"
                          stroke-width="0.3"
                        />
                      </g>
                    </g>
                  </svg>

                  <label class="lblOrders" style="padding-right: 6px"
                    >{{ req.budget }} ريال سعودي</label
                  >
                </div>
                <div class="col-lg-3 col-12">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13.5"
                    height="13.5"
                    viewBox="0 0 13.5 13.5"
                  >
                    <g
                      id="calendar_2_"
                      data-name="calendar (2)"
                      transform="translate(-1.75 -1.749)"
                    >
                      <path
                        id="Path_1888"
                        data-name="Path 1888"
                        d="M14.443,31.286H2.557A.557.557,0,0,1,2,30.729V22.186A.186.186,0,0,1,2.186,22H14.814a.186.186,0,0,1,.186.186v8.543A.557.557,0,0,1,14.443,31.286ZM2.371,22.371v8.357a.186.186,0,0,0,.186.186H14.443a.186.186,0,0,0,.186-.186V22.371Z"
                        transform="translate(0 -16.287)"
                        fill="#8e8e93"
                        stroke="#707070"
                        stroke-width="0.5"
                      />
                      <path
                        id="Path_1889"
                        data-name="Path 1889"
                        d="M14.814,11.436H2.186A.186.186,0,0,1,2,11.25V9.127a.557.557,0,0,1,.557-.557H4.448a.186.186,0,1,1,0,.371H2.557a.186.186,0,0,0-.186.186v1.937H14.629V9.127a.186.186,0,0,0-.186-.186H12.552a.186.186,0,1,1,0-.371h1.891A.557.557,0,0,1,15,9.127V11.25A.186.186,0,0,1,14.814,11.436Z"
                        transform="translate(0 -5.351)"
                        fill="#8e8e93"
                        stroke="#707070"
                        stroke-width="0.5"
                      />
                      <path
                        id="Path_1890"
                        data-name="Path 1890"
                        d="M26.33,8.941H20.506a.186.186,0,1,1,0-.371H26.33a.186.186,0,0,1,0,.371Z"
                        transform="translate(-14.918 -5.351)"
                        fill="#8e8e93"
                        stroke="#707070"
                        stroke-width="0.5"
                      />
                      <path
                        id="Path_1891"
                        data-name="Path 1891"
                        d="M52.438,4.81a.756.756,0,0,1-.755-.755v-1.3a.755.755,0,0,1,1.511,0v1.3A.756.756,0,0,1,52.438,4.81Zm0-2.439a.384.384,0,0,0-.384.384v1.3a.384.384,0,1,0,.768,0v-1.3a.384.384,0,0,0-.384-.384Z"
                        transform="translate(-40.456 0)"
                        fill="#8e8e93"
                        stroke="#707070"
                        stroke-width="0.5"
                      />
                      <path
                        id="Path_1892"
                        data-name="Path 1892"
                        d="M14.938,4.81a.756.756,0,0,1-.755-.755v-1.3a.755.755,0,0,1,1.511,0v1.3a.756.756,0,0,1-.755.755Zm0-2.439a.384.384,0,0,0-.384.384v1.3a.384.384,0,0,0,.768,0v-1.3A.384.384,0,0,0,14.938,2.371Z"
                        transform="translate(-9.92)"
                        fill="#8e8e93"
                        stroke="#707070"
                        stroke-width="0.5"
                      />
                      <path
                        id="Path_1893"
                        data-name="Path 1893"
                        d="M58.053,32h-.434a.186.186,0,1,1,0-.371h.434a.186.186,0,1,1,0,.371Z"
                        transform="translate(-45.138 -24.124)"
                        fill="#8e8e93"
                        stroke="#707070"
                        stroke-width="0.5"
                      />
                      <path
                        id="Path_1894"
                        data-name="Path 1894"
                        d="M46.752,32h-.434a.186.186,0,0,1,0-.371h.434a.186.186,0,1,1,0,.371Z"
                        transform="translate(-35.936 -24.124)"
                        fill="#8e8e93"
                        stroke="#707070"
                        stroke-width="0.5"
                      />
                      <path
                        id="Path_1895"
                        data-name="Path 1895"
                        d="M35.451,32h-.434a.186.186,0,0,1,0-.371h.434a.186.186,0,0,1,0,.371Z"
                        transform="translate(-26.734 -24.124)"
                        fill="#8e8e93"
                        stroke="#707070"
                        stroke-width="0.5"
                      />
                      <path
                        id="Path_1896"
                        data-name="Path 1896"
                        d="M58.053,41.579h-.434a.186.186,0,0,1,0-.371h.434a.186.186,0,0,1,0,.371Z"
                        transform="translate(-45.138 -31.927)"
                        fill="#8e8e93"
                        stroke="#707070"
                        stroke-width="0.5"
                      />
                      <path
                        id="Path_1897"
                        data-name="Path 1897"
                        d="M46.752,41.579h-.434a.186.186,0,0,1,0-.371h.434a.186.186,0,1,1,0,.371Z"
                        transform="translate(-35.936 -31.927)"
                        fill="#8e8e93"
                        stroke="#707070"
                        stroke-width="0.5"
                      />
                      <path
                        id="Path_1898"
                        data-name="Path 1898"
                        d="M35.451,41.579h-.434a.186.186,0,0,1,0-.371h.434a.186.186,0,1,1,0,.371Z"
                        transform="translate(-26.734 -31.927)"
                        fill="#8e8e93"
                        stroke="#707070"
                        stroke-width="0.5"
                      />
                      <path
                        id="Path_1899"
                        data-name="Path 1899"
                        d="M24.15,41.579h-.434a.186.186,0,0,1,0-.371h.434a.186.186,0,0,1,0,.371Z"
                        transform="translate(-17.532 -31.927)"
                        fill="#8e8e93"
                        stroke="#707070"
                        stroke-width="0.5"
                      />
                      <path
                        id="Path_1900"
                        data-name="Path 1900"
                        d="M12.849,41.579h-.434a.186.186,0,0,1,0-.371h.434a.186.186,0,1,1,0,.371Z"
                        transform="translate(-8.329 -31.927)"
                        fill="#8e8e93"
                        stroke="#707070"
                        stroke-width="0.5"
                      />
                      <path
                        id="Path_1901"
                        data-name="Path 1901"
                        d="M58.053,51.163h-.434a.186.186,0,0,1,0-.371h.434a.186.186,0,0,1,0,.371Z"
                        transform="translate(-45.138 -39.731)"
                        fill="#8e8e93"
                        stroke="#707070"
                        stroke-width="0.5"
                      />
                      <path
                        id="Path_1902"
                        data-name="Path 1902"
                        d="M46.752,51.163h-.434a.186.186,0,0,1,0-.371h.434a.186.186,0,0,1,0,.371Z"
                        transform="translate(-35.936 -39.731)"
                        fill="#8e8e93"
                        stroke="#707070"
                        stroke-width="0.5"
                      />
                      <path
                        id="Path_1903"
                        data-name="Path 1903"
                        d="M35.451,51.163h-.434a.186.186,0,0,1,0-.371h.434a.186.186,0,1,1,0,.371Z"
                        transform="translate(-26.734 -39.731)"
                        fill="#8e8e93"
                        stroke="#707070"
                        stroke-width="0.5"
                      />
                      <path
                        id="Path_1904"
                        data-name="Path 1904"
                        d="M24.15,51.163h-.434a.186.186,0,0,1,0-.371h.434a.186.186,0,1,1,0,.371Z"
                        transform="translate(-17.532 -39.731)"
                        fill="#8e8e93"
                        stroke="#707070"
                        stroke-width="0.5"
                      />
                      <path
                        id="Path_1905"
                        data-name="Path 1905"
                        d="M12.849,51.163h-.434a.186.186,0,0,1,0-.371h.434a.186.186,0,1,1,0,.371Z"
                        transform="translate(-8.329 -39.731)"
                        fill="#8e8e93"
                        stroke="#707070"
                        stroke-width="0.5"
                      />
                      <path
                        id="Path_1906"
                        data-name="Path 1906"
                        d="M35.451,60.746h-.434a.186.186,0,0,1,0-.371h.434a.186.186,0,1,1,0,.371Z"
                        transform="translate(-26.734 -47.535)"
                        fill="#8e8e93"
                        stroke="#707070"
                        stroke-width="0.5"
                      />
                      <path
                        id="Path_1907"
                        data-name="Path 1907"
                        d="M24.15,60.746h-.434a.186.186,0,0,1,0-.371h.434a.186.186,0,1,1,0,.371Z"
                        transform="translate(-17.532 -47.535)"
                        fill="#8e8e93"
                        stroke="#707070"
                        stroke-width="0.5"
                      />
                      <path
                        id="Path_1908"
                        data-name="Path 1908"
                        d="M12.849,60.746h-.434a.186.186,0,0,1,0-.371h.434a.186.186,0,0,1,0,.371Z"
                        transform="translate(-8.329 -47.535)"
                        fill="#8e8e93"
                        stroke="#707070"
                        stroke-width="0.5"
                      />
                    </g>
                  </svg>
                  <label class="lblOrders">باق على التسليم أيام </label>
                </div>
              </div>
              <hr :key="`divider-${i}`" />
            </div>
            <div
              v-if="
                !myOrders_underway.length && !isFetchingOrders.myOrders_underway
              "
              style="
                display: flex;
                align-items: center;
                justify-content: center;
              "
            >
              <p style="margin: 80px 0px 100px">ليس هناك طلبات قيد التنفيذ</p>
            </div>
            <div
              v-else-if="isFetchingOrders.myOrders_underway"
              style="
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 4rem;
              "
            >
              <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
              </div>
            </div>
            <PaginationComponent
              :total-number-of-items="all_myOrders_underway.length"
              :pagination-index="pagination.myOrders_underway"
              :items-per-page="pagination.itemsPerPage"
              @pageClick="(page) => onPageClick('myOrders_underway', page)"
              @previousPage="() => onPreviousPage('myOrders_underway')"
              @nextPage="() => onNextPage('myOrders_underway')"
            />
          </div>
          <!-- closed -->
          <div
            id="close"
            class="tab-pane fade"
            role="tabpanel"
            aria-labelledby="close-tab"
          >
            <div
              v-for="(req, i) in myOrders_close"
              :key="i"
              class="contentOffers"
            >
              <router-link :to="`/order-view/${req.id}`">
                <p class="pTitleWorksProfile">
                  {{ req.title }}
                </p>
              </router-link>
              <p class="pWorksProfile">
                {{ req.description }}
              </p>
              <div class="divIcons row">
                <!-- <div class="col-lg-2 col-12">
                  <a href="Entrepreneur.html">
                    <i class="fas fa-user iconOrders"></i>
                    <label class="lblOrders">اسم الناشر</label>
                  </a>
                </div> -->
                <div class="col-lg-2 col-12">
                  <i
                    class="far fa-clock iconOrders"
                    style="padding-left: 6px"
                  ></i>
                  <label class="lblOrders">{{
                    req.created_at | formatDate
                  }}</label>
                </div>
                <div class="col-lg-3 col-12">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13.314"
                    height="11.49"
                    viewBox="0 0 13.314 11.49"
                  >
                    <g
                      id="Group_10014"
                      data-name="Group 10014"
                      transform="translate(0.15 0.164)"
                    >
                      <g
                        id="Group_10013"
                        data-name="Group 10013"
                        transform="translate(0 0)"
                      >
                        <path
                          id="Path_1882"
                          data-name="Path 1882"
                          d="M12.982,34.912h0l-2.454-6.163a.255.255,0,0,0-.331-.143h0L.238,32.572a.25.25,0,0,0-.1.081A.252.252,0,0,0,0,32.874v6.635a.255.255,0,0,0,.255.255H10.973a.255.255,0,0,0,.255-.255V35.885l1.611-.642A.255.255,0,0,0,12.982,34.912Zm-2.264,4.342H.51V33.129H10.718ZM4.258,32.62l4.273-1.7a2.03,2.03,0,0,0,1.463.631l.426,1.072Zm6.971,2.717V32.874a.255.255,0,0,0-.255-.255h0l-.541-1.358a.211.211,0,0,0-.021-.032.252.252,0,0,0-.267-.2A1.526,1.526,0,0,1,8.8,30.456a.253.253,0,0,0-.327-.057l-.036.007L3.223,32.483a.252.252,0,0,0-.14.136H1.5l8.649-3.444,2.266,5.69Z"
                          transform="translate(0 -28.588)"
                          fill="#8e8e93"
                          stroke="#8e8e93"
                          stroke-width="0.3"
                        />
                        <path
                          id="Path_1883"
                          data-name="Path 1883"
                          d="M32.182,190.836a1.526,1.526,0,0,1,1.03,1.029.255.255,0,0,0,.244.182.233.233,0,0,0,.039-.006l.035.007h6.125l.031-.006a.238.238,0,0,0,.287-.175h0a1.526,1.526,0,0,1,1.03-1.03.252.252,0,0,0,.175-.281.257.257,0,0,0,.007-.038v-2.042a.23.23,0,0,0-.008-.038.252.252,0,0,0-.175-.281,1.524,1.524,0,0,1-1.03-1.03.252.252,0,0,0-.283-.175l-.036-.007H33.531a.242.242,0,0,0-.038.008.252.252,0,0,0-.281.175,1.526,1.526,0,0,1-1.03,1.03.252.252,0,0,0-.175.281.258.258,0,0,0-.007.038v2.042a.235.235,0,0,0,.007.035A.253.253,0,0,0,32.182,190.836Zm.328-2.257a2.025,2.025,0,0,0,1.124-1.124h5.917a2.026,2.026,0,0,0,1.125,1.124v1.834a2.027,2.027,0,0,0-1.124,1.124H33.635a2.027,2.027,0,0,0-1.124-1.124Z"
                          transform="translate(-30.979 -181.894)"
                          fill="#8e8e93"
                          stroke="#8e8e93"
                          stroke-width="0.3"
                        />
                        <path
                          id="Path_1884"
                          data-name="Path 1884"
                          d="M129.531,222.007A1.531,1.531,0,1,0,128,220.476,1.531,1.531,0,0,0,129.531,222.007Zm0-2.552a1.021,1.021,0,1,1-1.021,1.021A1.021,1.021,0,0,1,129.531,219.455Z"
                          transform="translate(-123.917 -212.873)"
                          fill="#8e8e93"
                          stroke="#8e8e93"
                          stroke-width="0.3"
                        />
                        <path
                          id="Path_1885"
                          data-name="Path 1885"
                          d="M76.383,255.711a.383.383,0,1,0-.383-.383A.383.383,0,0,0,76.383,255.711Zm0-.51a.128.128,0,1,1-.128.128A.128.128,0,0,1,76.383,255.2Z"
                          transform="translate(-73.576 -247.724)"
                          fill="#8e8e93"
                          stroke="#8e8e93"
                          stroke-width="0.3"
                        />
                        <path
                          id="Path_1886"
                          data-name="Path 1886"
                          d="M252.383,255.711a.383.383,0,1,0-.383-.383A.383.383,0,0,0,252.383,255.711Zm0-.51a.128.128,0,1,1-.128.128A.128.128,0,0,1,252.383,255.2Z"
                          transform="translate(-243.961 -247.724)"
                          fill="#8e8e93"
                          stroke="#8e8e93"
                          stroke-width="0.3"
                        />
                      </g>
                    </g>
                  </svg>

                  <label class="lblOrders" style="padding-right: 6px"
                    >{{ req.budget }} ريال سعودي</label
                  >
                </div>
                <div class="col-lg-3 col-12">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13.5"
                    height="13.5"
                    viewBox="0 0 13.5 13.5"
                  >
                    <g
                      id="calendar_2_"
                      data-name="calendar (2)"
                      transform="translate(-1.75 -1.749)"
                    >
                      <path
                        id="Path_1888"
                        data-name="Path 1888"
                        d="M14.443,31.286H2.557A.557.557,0,0,1,2,30.729V22.186A.186.186,0,0,1,2.186,22H14.814a.186.186,0,0,1,.186.186v8.543A.557.557,0,0,1,14.443,31.286ZM2.371,22.371v8.357a.186.186,0,0,0,.186.186H14.443a.186.186,0,0,0,.186-.186V22.371Z"
                        transform="translate(0 -16.287)"
                        fill="#8e8e93"
                        stroke="#707070"
                        stroke-width="0.5"
                      />
                      <path
                        id="Path_1889"
                        data-name="Path 1889"
                        d="M14.814,11.436H2.186A.186.186,0,0,1,2,11.25V9.127a.557.557,0,0,1,.557-.557H4.448a.186.186,0,1,1,0,.371H2.557a.186.186,0,0,0-.186.186v1.937H14.629V9.127a.186.186,0,0,0-.186-.186H12.552a.186.186,0,1,1,0-.371h1.891A.557.557,0,0,1,15,9.127V11.25A.186.186,0,0,1,14.814,11.436Z"
                        transform="translate(0 -5.351)"
                        fill="#8e8e93"
                        stroke="#707070"
                        stroke-width="0.5"
                      />
                      <path
                        id="Path_1890"
                        data-name="Path 1890"
                        d="M26.33,8.941H20.506a.186.186,0,1,1,0-.371H26.33a.186.186,0,0,1,0,.371Z"
                        transform="translate(-14.918 -5.351)"
                        fill="#8e8e93"
                        stroke="#707070"
                        stroke-width="0.5"
                      />
                      <path
                        id="Path_1891"
                        data-name="Path 1891"
                        d="M52.438,4.81a.756.756,0,0,1-.755-.755v-1.3a.755.755,0,0,1,1.511,0v1.3A.756.756,0,0,1,52.438,4.81Zm0-2.439a.384.384,0,0,0-.384.384v1.3a.384.384,0,1,0,.768,0v-1.3a.384.384,0,0,0-.384-.384Z"
                        transform="translate(-40.456 0)"
                        fill="#8e8e93"
                        stroke="#707070"
                        stroke-width="0.5"
                      />
                      <path
                        id="Path_1892"
                        data-name="Path 1892"
                        d="M14.938,4.81a.756.756,0,0,1-.755-.755v-1.3a.755.755,0,0,1,1.511,0v1.3a.756.756,0,0,1-.755.755Zm0-2.439a.384.384,0,0,0-.384.384v1.3a.384.384,0,0,0,.768,0v-1.3A.384.384,0,0,0,14.938,2.371Z"
                        transform="translate(-9.92)"
                        fill="#8e8e93"
                        stroke="#707070"
                        stroke-width="0.5"
                      />
                      <path
                        id="Path_1893"
                        data-name="Path 1893"
                        d="M58.053,32h-.434a.186.186,0,1,1,0-.371h.434a.186.186,0,1,1,0,.371Z"
                        transform="translate(-45.138 -24.124)"
                        fill="#8e8e93"
                        stroke="#707070"
                        stroke-width="0.5"
                      />
                      <path
                        id="Path_1894"
                        data-name="Path 1894"
                        d="M46.752,32h-.434a.186.186,0,0,1,0-.371h.434a.186.186,0,1,1,0,.371Z"
                        transform="translate(-35.936 -24.124)"
                        fill="#8e8e93"
                        stroke="#707070"
                        stroke-width="0.5"
                      />
                      <path
                        id="Path_1895"
                        data-name="Path 1895"
                        d="M35.451,32h-.434a.186.186,0,0,1,0-.371h.434a.186.186,0,0,1,0,.371Z"
                        transform="translate(-26.734 -24.124)"
                        fill="#8e8e93"
                        stroke="#707070"
                        stroke-width="0.5"
                      />
                      <path
                        id="Path_1896"
                        data-name="Path 1896"
                        d="M58.053,41.579h-.434a.186.186,0,0,1,0-.371h.434a.186.186,0,0,1,0,.371Z"
                        transform="translate(-45.138 -31.927)"
                        fill="#8e8e93"
                        stroke="#707070"
                        stroke-width="0.5"
                      />
                      <path
                        id="Path_1897"
                        data-name="Path 1897"
                        d="M46.752,41.579h-.434a.186.186,0,0,1,0-.371h.434a.186.186,0,1,1,0,.371Z"
                        transform="translate(-35.936 -31.927)"
                        fill="#8e8e93"
                        stroke="#707070"
                        stroke-width="0.5"
                      />
                      <path
                        id="Path_1898"
                        data-name="Path 1898"
                        d="M35.451,41.579h-.434a.186.186,0,0,1,0-.371h.434a.186.186,0,1,1,0,.371Z"
                        transform="translate(-26.734 -31.927)"
                        fill="#8e8e93"
                        stroke="#707070"
                        stroke-width="0.5"
                      />
                      <path
                        id="Path_1899"
                        data-name="Path 1899"
                        d="M24.15,41.579h-.434a.186.186,0,0,1,0-.371h.434a.186.186,0,0,1,0,.371Z"
                        transform="translate(-17.532 -31.927)"
                        fill="#8e8e93"
                        stroke="#707070"
                        stroke-width="0.5"
                      />
                      <path
                        id="Path_1900"
                        data-name="Path 1900"
                        d="M12.849,41.579h-.434a.186.186,0,0,1,0-.371h.434a.186.186,0,1,1,0,.371Z"
                        transform="translate(-8.329 -31.927)"
                        fill="#8e8e93"
                        stroke="#707070"
                        stroke-width="0.5"
                      />
                      <path
                        id="Path_1901"
                        data-name="Path 1901"
                        d="M58.053,51.163h-.434a.186.186,0,0,1,0-.371h.434a.186.186,0,0,1,0,.371Z"
                        transform="translate(-45.138 -39.731)"
                        fill="#8e8e93"
                        stroke="#707070"
                        stroke-width="0.5"
                      />
                      <path
                        id="Path_1902"
                        data-name="Path 1902"
                        d="M46.752,51.163h-.434a.186.186,0,0,1,0-.371h.434a.186.186,0,0,1,0,.371Z"
                        transform="translate(-35.936 -39.731)"
                        fill="#8e8e93"
                        stroke="#707070"
                        stroke-width="0.5"
                      />
                      <path
                        id="Path_1903"
                        data-name="Path 1903"
                        d="M35.451,51.163h-.434a.186.186,0,0,1,0-.371h.434a.186.186,0,1,1,0,.371Z"
                        transform="translate(-26.734 -39.731)"
                        fill="#8e8e93"
                        stroke="#707070"
                        stroke-width="0.5"
                      />
                      <path
                        id="Path_1904"
                        data-name="Path 1904"
                        d="M24.15,51.163h-.434a.186.186,0,0,1,0-.371h.434a.186.186,0,1,1,0,.371Z"
                        transform="translate(-17.532 -39.731)"
                        fill="#8e8e93"
                        stroke="#707070"
                        stroke-width="0.5"
                      />
                      <path
                        id="Path_1905"
                        data-name="Path 1905"
                        d="M12.849,51.163h-.434a.186.186,0,0,1,0-.371h.434a.186.186,0,1,1,0,.371Z"
                        transform="translate(-8.329 -39.731)"
                        fill="#8e8e93"
                        stroke="#707070"
                        stroke-width="0.5"
                      />
                      <path
                        id="Path_1906"
                        data-name="Path 1906"
                        d="M35.451,60.746h-.434a.186.186,0,0,1,0-.371h.434a.186.186,0,1,1,0,.371Z"
                        transform="translate(-26.734 -47.535)"
                        fill="#8e8e93"
                        stroke="#707070"
                        stroke-width="0.5"
                      />
                      <path
                        id="Path_1907"
                        data-name="Path 1907"
                        d="M24.15,60.746h-.434a.186.186,0,0,1,0-.371h.434a.186.186,0,1,1,0,.371Z"
                        transform="translate(-17.532 -47.535)"
                        fill="#8e8e93"
                        stroke="#707070"
                        stroke-width="0.5"
                      />
                      <path
                        id="Path_1908"
                        data-name="Path 1908"
                        d="M12.849,60.746h-.434a.186.186,0,0,1,0-.371h.434a.186.186,0,0,1,0,.371Z"
                        transform="translate(-8.329 -47.535)"
                        fill="#8e8e93"
                        stroke="#707070"
                        stroke-width="0.5"
                      />
                    </g>
                  </svg>
                  <label class="lblOrders" style="padding-right: 4px"
                    >مدة التنفيذ {{ req.delivery_time_form }} أيام</label
                  >
                </div>
              </div>
            </div>
            <div
              v-if="!myOrders_close.length && !isFetchingOrders.myOrders_close"
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
                padding: 4rem;
              "
            >
              <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
              </div>
            </div>
            <PaginationComponent
              :total-number-of-items="all_myOrders_close.length"
              :pagination-index="pagination.myOrders_close"
              :items-per-page="pagination.itemsPerPage"
              @pageClick="(page) => onPageClick('myOrders_close', page)"
              @previousPage="() => onPreviousPage('myOrders_close')"
              @nextPage="() => onNextPage('myOrders_close')"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Content -->
</template>

<script>
import format from "date-fns/format";
import Pagination from "./PaginationComponent.vue";

export default {
  filters: {
    formatDate(val) {
      return val ? format(new Date(val), "d/M/yyyy") : ``;
    },
  },
  components: { PaginationComponent: Pagination },
  data() {
    return {
      pagination: {
        itemsPerPage: 10,
        myOrders_open: 0,
        myOrders_close: 0,
        myOrders_underway: 0,
        myOrders_complete: 0,
      },
      isFetchingOrders: {
        myOrders_open: true,
        myOrders_close: true,
        myOrders_underway: true,
        myOrders_complete: true,
      },
      all_myOrders_open: [],
      all_myOrders_close: [],
      all_myOrders_underway: [],
      all_myOrders_complete: [],
    };
  },
  computed: {
    myOrders_open() {
      const startIndex =
        this.pagination.myOrders_open * this.pagination.itemsPerPage;
      return this.all_myOrders_open.slice(
        startIndex,
        startIndex + this.pagination.itemsPerPage
      );
    },
    myOrders_close() {
      const startIndex =
        this.pagination.myOrders_close * this.pagination.itemsPerPage;
      return this.all_myOrders_close.slice(
        startIndex,
        startIndex + this.pagination.itemsPerPage
      );
    },
    myOrders_underway() {
      const startIndex =
        this.pagination.myOrders_underway * this.pagination.itemsPerPage;
      return this.all_myOrders_underway.slice(
        startIndex,
        startIndex + this.pagination.itemsPerPage
      );
    },
    myOrders_complete() {
      const startIndex =
        this.pagination.myOrders_complete * this.pagination.itemsPerPage;
      return this.all_myOrders_complete.slice(
        startIndex,
        startIndex + this.pagination.itemsPerPage
      );
    },
  },
  created() {
    this.$store.getters.getMyOrders_open.then((res) => {
      this.isFetchingOrders.myOrders_open = false;
      this.all_myOrders_open = (res.data.data.request || []).sort((a, b) =>
        new Date(b.created_at) > new Date(a.craeted_at) ? 1 : -1
      );
    });
    this.$store.getters.getMyOrders_close.then((res) => {
      this.isFetchingOrders.myOrders_close = false;
      this.all_myOrders_close = res.data.data.request || [];
    });
    this.$store.getters.getMyOrders_underway.then((res) => {
      this.isFetchingOrders.myOrders_underway = false;
      this.all_myOrders_underway = res.data.data.request || [];
    });
    this.$store.getters.getMyOrders_complete.then((res) => {
      this.isFetchingOrders.myOrders_complete = false;
      this.all_myOrders_complete = res.data.data.request || [];
    });
  },
  methods: {
    onNextPage(key) {
      if (
        this[`all_${key}`].length >
        (this.pagination[key] + 1) * this.pagination.itemsPerPage
      ) {
        this.pagination[key] += 1;
      }
    },
    onPreviousPage(key) {
      if (this.pagination[key] > 0) {
        this.pagination[key] -= 1;
      }
    },
    onPageClick(key, page) {
      this.pagination[key] = page;
    },
  },
};
</script>
