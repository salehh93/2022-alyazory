<template>
  <!-- Start Content -->
  <div class="container">
    <div class="pagesLinks">
      <router-link to="/">الرئيسية</router-link>
    </div>
    <h3 class="hTitle">أهلاً بعودتك، لدينا الكثير لننجزه</h3>
    <div style="display: flex" class="boxMediaHome">
      <div class="colBoxesHome" style="width: 460px">
        <div class="boxesHome">
          <div class="divbtnEditCardInfo">
            <button class="btnEditCardInfo">
              <router-link
                to="/edit-lawyer-profile"
                style="color: #8e8e93; display: flex"
              >
                تعديل
                <svg
                  id="Rounded"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                >
                  <g id="Image" transform="translate(0 0)">
                    <g
                      id="_-Round-_-Image-_-edit"
                      data-name="-Round-/-Image-/-edit"
                    >
                      <g id="Group_98" data-name="Group 98">
                        <path
                          id="Path"
                          d="M0,0H16V16H0Z"
                          fill="none"
                          fill-rule="evenodd"
                        />
                        <path
                          id="_-Icon-Color"
                          data-name="🔹-Icon-Color"
                          d="M3,11.033v1.689A.275.275,0,0,0,3.278,13H4.967a.261.261,0,0,0,.194-.083l6.067-6.062L9.145,4.771,3.083,10.833A.273.273,0,0,0,3,11.033Zm9.84-5.79a.553.553,0,0,0,0-.783l-1.3-1.3a.553.553,0,0,0-.783,0L9.74,4.177,11.823,6.26Z"
                          fill="#8e8e93"
                          fill-rule="evenodd"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
              </router-link>
            </button>
          </div>
          <div class="cardInfo">
            <div class="divImgCard">
              <img
                :src="
                  $store.state.user.image
                    ? $store.state.user.image
                    : require('../../assets/img/PersonalImg.png')
                "
                alt=""
              />
            </div>
            <div class="divNameCard">
              <a href="profile_Office.html">
                <label>{{ $store.state.user.name }}</label>
              </a>
              <!-- <p class="NameCard"> محمد أحمد عيد </p> -->
            </div>
            <div class="divPositionCard">
              <p>
                {{
                  ($store.state.user.experience[0] &&
                    $store.state.user.experience[0].Speciality) ||
                  ""
                }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="colBoxesHome" style="width: 652px">
        <div
          class="rowWelcome divServicesHome boxesHome"
          style="padding-right: 0px; padding-left: 0px"
        >
          <div class="divContentServices">
            <p class="pServicesHome">خدماتك</p>
            <div
              style="display: flex; padding-left: 98px; padding-right: 98px"
              class="rowBoxImgsServicesHome"
            >
              <div class="colServiceHome">
                <button class="btnServicesHome btnServicesHomeBalance">
                  <div class="backbtnHomeServices">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                      height="45.93"
                      viewBox="0 0 50 45.93"
                    >
                      <g
                        id="cash_2_"
                        data-name="cash (2)"
                        transform="translate(0 -0.174)"
                      >
                        <path
                          id="Path_27"
                          data-name="Path 27"
                          d="M34.573,76.211a7.143,7.143,0,1,0-7.143-7.143,7.143,7.143,0,0,0,7.143,7.143Zm0-13.1a5.952,5.952,0,1,1-5.952,5.952A5.952,5.952,0,0,1,34.573,63.116ZM17.729,55.133a1.2,1.2,0,0,1,1.411-.91l20.053,4.038h6.094L19.371,53.042a2.4,2.4,0,0,0-2.509,1.082,2.567,2.567,0,0,0-.3.77L15.748,59a3.522,3.522,0,0,1,1.338-.638Z"
                          transform="translate(-11.061 -37.101)"
                          fill="#00596b"
                          stroke="#00586b"
                          stroke-width="0.3"
                        />
                        <path
                          id="Path_28"
                          data-name="Path 28"
                          d="M18.3,24.468a3.68,3.68,0,0,1,1.355-.524l.307-1.338a1.116,1.116,0,0,1,1.086-.879c.089,0,32.078,7.883,32.078,7.883A1.169,1.169,0,0,1,54,30.751a3.713,3.713,0,0,1,1.158.457,2.409,2.409,0,0,0-1.754-2.8l-31.81-7.85a2.271,2.271,0,0,0-2.576,1.2C18.864,22.084,18.32,24.366,18.3,24.468Zm20.833-1.444a.893.893,0,1,0-.893-.893A.893.893,0,0,0,39.131,23.024Zm0-1.339a.446.446,0,1,1-.446.446A.446.446,0,0,1,39.131,21.685Zm-3.274-6.1a.6.6,0,1,0-.6-.6A.6.6,0,0,0,35.857,15.583Zm0-.893a.3.3,0,1,1-.3.3.3.3,0,0,1,.3-.3Zm13.69.893a.893.893,0,1,0-.893-.893.893.893,0,0,0,.893.893Zm0-1.339a.446.446,0,1,1-.446.446A.446.446,0,0,1,49.548,14.244ZM60.262,27.488a.893.893,0,1,0-.893.893.893.893,0,0,0,.893-.893Zm-1.339,0a.446.446,0,1,1,.446.446A.446.446,0,0,1,58.923,27.488ZM18.6,14.69a.6.6,0,1,0-.6-.6.6.6,0,0,0,.6.6Zm0-.893a.3.3,0,1,1-.3.3A.3.3,0,0,1,18.6,13.8Z"
                          transform="translate(-12.643 -9.36)"
                          fill="#00596b"
                          stroke="#00586b"
                          stroke-width="0.3"
                        />
                        <circle
                          id="Ellipse_15"
                          data-name="Ellipse 15"
                          cx="0.595"
                          cy="0.595"
                          r="0.595"
                          transform="translate(0 40.45)"
                          fill="#2d4356"
                        />
                        <path
                          id="Path_29"
                          data-name="Path 29"
                          d="M7.488,135.5H6.6a.6.6,0,1,0,0,1.19h.893a.6.6,0,1,0,0-1.19Zm44.345,0H50.94a.6.6,0,0,0,0,1.19h.893a.6.6,0,0,0,0-1.19Z"
                          transform="translate(-4.214 -95.05)"
                          fill="#2d4356"
                        />
                        <circle
                          id="Ellipse_16"
                          data-name="Ellipse 16"
                          cx="0.595"
                          cy="0.595"
                          r="0.595"
                          transform="translate(48.81 40.45)"
                          fill="#2d4356"
                        />
                        <path
                          id="Path_30"
                          data-name="Path 30"
                          d="M55.393,93.006H52.682a2.369,2.369,0,0,0,.413-1.339V77.381A2.381,2.381,0,0,0,50.714,75H17.381A2.381,2.381,0,0,0,15,77.381V91.667a2.367,2.367,0,0,0,.442,1.378A.6.6,0,0,0,15,93.6a.641.641,0,0,0,.678.6H55.393a.6.6,0,1,0,0-1.19ZM16.19,77.381a1.192,1.192,0,0,1,1.19-1.19H50.714a1.192,1.192,0,0,1,1.19,1.19V91.667a1.192,1.192,0,0,1-1.19,1.19H17.381a1.192,1.192,0,0,1-1.19-1.19Z"
                          transform="translate(-10.536 -52.556)"
                          fill="#00596b"
                          stroke="#00586b"
                          stroke-width="0.3"
                        />
                        <path
                          id="Path_31"
                          data-name="Path 31"
                          d="M34.143,97.5a.6.6,0,0,0-.6-.6H31.583a3.213,3.213,0,0,0-1.293-1.774,3.8,3.8,0,0,0-2.1-.568v-6.03a3.807,3.807,0,0,0,2.1-.568,3.213,3.213,0,0,0,1.293-1.774h1.964a.6.6,0,1,0,0-1.19H31.122a.6.6,0,0,0-.583.477A2.288,2.288,0,0,1,27.716,87.3a.595.595,0,0,0-.716.583v7.326a.6.6,0,0,0,.714.583,2.288,2.288,0,0,1,2.825,1.824.6.6,0,0,0,.583.477h2.425a.6.6,0,0,0,.6-.6ZM57.236,87.3a2.906,2.906,0,0,1-1.918-.331,2.227,2.227,0,0,1-.9-1.494A.6.6,0,0,0,53.83,85H51.4a.6.6,0,1,0,0,1.19h1.964a3.213,3.213,0,0,0,1.293,1.774,3.807,3.807,0,0,0,2.1.568v6.03a3.8,3.8,0,0,0-2.1.568A3.213,3.213,0,0,0,53.369,96.9H51.4a.6.6,0,0,0,0,1.19H53.83a.6.6,0,0,0,.583-.477,2.288,2.288,0,0,1,2.823-1.825.595.595,0,0,0,.716-.583V87.885a.595.595,0,0,0-.716-.583Z"
                          transform="translate(-18.964 -59.58)"
                          fill="#b1e8f3"
                        />
                        <path
                          id="Path_32"
                          data-name="Path 32"
                          d="M7.75,60.2l.408-.537L7.9,59.513l-.262.6H7.63l-.266-.6-.263.15.4.524V60.2l-.632-.082v.292l.636-.081v.008l-.409.524.245.155.279-.606h.008l.258.6.271-.155-.412-.516v-.008l.649.077v-.292L7.75,60.2Z"
                          transform="translate(-4.827 -41.679)"
                          fill="#0bceb2"
                        />
                        <path
                          id="Path_33"
                          data-name="Path 33"
                          d="M42.407,30.931l-.441.566.265.167.3-.655h.009l.279.65.293-.167-.446-.557v-.009l.7.084v-.316l-.7.093v-.009l.441-.58-.279-.158-.283.65h-.01l-.287-.645-.284.162.437.567v.009l-.683-.088v.316l.687-.088Z"
                          transform="translate(-29.303 -20.977)"
                          fill="#0bceb2"
                        />
                        <path
                          id="Path_34"
                          data-name="Path 34"
                          d="M52.84,9.352l-.255.327.153.1.174-.378h.005l.161.375.169-.1-.257-.322V9.349l.4.049V9.215l-.4.054V9.263l.255-.335-.161-.091-.164.375h-.005l-.166-.373-.164.094.252.327v.005l-.394-.051V9.4l.4-.051Z"
                          transform="translate(-36.835 -6.085)"
                          fill="#0bceb2"
                        />
                        <path
                          id="Path_35"
                          data-name="Path 35"
                          d="M119.228,43.883l-.434.557.26.165.3-.644h.009l.274.64.288-.164-.438-.548v-.009l.69.082v-.31l-.69.091v-.009l.434-.571-.274-.155-.279.639h-.01l-.283-.635-.279.16.429.557v.009l-.671-.087v.31l.676-.087Z"
                          transform="translate(-83.269 -30.084)"
                          fill="#0bceb2"
                        />
                        <path
                          id="Path_36"
                          data-name="Path 36"
                          d="M152.173,30.96v-.31l-.69.091v-.009l.434-.571-.274-.155-.279.639h-.01l-.283-.635-.279.16.429.557v.009l-.671-.087v.31l.676-.087v.009l-.434.557.26.165.3-.644h.009l.274.64.288-.164-.438-.548v-.009Z"
                          transform="translate(-105.745 -20.953)"
                          fill="#0bceb2"
                        />
                        <path
                          id="Path_37"
                          data-name="Path 37"
                          d="M95.472.867l-.343.441.206.13.235-.51h.007l.217.506.228-.13L95.674.871V.864l.546.065V.683l-.546.072V.748L96.018.3,95.8.174,95.58.68h-.007l-.224-.5L95.129.3l.34.441V.752L94.937.683V.929L95.472.86Z"
                          transform="translate(-66.682)"
                          fill="#0bceb2"
                        />
                        <path
                          id="Path_38"
                          data-name="Path 38"
                          d="M68.879,144.5H66.407a.6.6,0,0,0,0,1.19h2.473a.6.6,0,0,0,0-1.19Zm-17.857,0H48.549a.6.6,0,0,0,0,1.19h2.473a.6.6,0,0,0,0-1.19Zm13.645,0h-11.9a.6.6,0,0,0,0,1.19h4.744v.6H55.143a.6.6,0,1,0,0,1.19h7.44a.6.6,0,0,0,0-1.19H59.923v-.6h4.744a.6.6,0,0,0,0-1.19Z"
                          transform="translate(-33.714 -101.372)"
                          fill="#b1e8f3"
                        />
                        <g id="qatar-riyal" transform="translate(18.502 -40.2)">
                          <g
                            id="Group_10136"
                            data-name="Group 10136"
                            transform="translate(0 68.42)"
                          >
                            <path
                              id="Path_1951"
                              data-name="Path 1951"
                              d="M226.144,104.719h0l.531,0h.071l.619,0a.1.1,0,0,0,.094-.088c.1-1.452-.013-2.065-.45-2.431a.1.1,0,0,0-.06-.022h-.011a.094.094,0,0,0-.065.038.716.716,0,0,0,.023.972,1.285,1.285,0,0,1,.176.517c.013.066.027.134.044.2l-.449,0h-.039l-.457,0c-.265,0-.483,0-.684.01h-.031c-.262,0-.376-.095-.4-.327-.025-.307-.054-.668-.082-1.012-.036-.449-.07-.871-.091-1.112a6.435,6.435,0,0,0-.295-1.172.094.094,0,0,0-.178,0c-.021.061-.05.125-.078.188a.96.96,0,0,0-.123.47c.034.345.1.692.158,1.033l0,.012c.039.213.078.433.11.65s.055.447.076.65c.026.257.053.522.1.785.066.4.292.628.635.635C225.542,104.717,225.814,104.719,226.144,104.719Z"
                              transform="translate(-220.21 -99.659)"
                              fill="#00596b"
                            />
                            <path
                              id="Path_1952"
                              data-name="Path 1952"
                              d="M271.906,363.067l.375.427a.089.089,0,0,0,.06.032h.011a.094.094,0,0,0,.064-.026l.407-.38a.094.094,0,0,0,.007-.131l-.4-.46a.1.1,0,0,0-.071-.032.1.1,0,0,0-.064.025l-.411.379a.091.091,0,0,0-.026.045l-.372-.441a.1.1,0,0,0-.072-.034.094.094,0,0,0-.064.025l-.408.371a.094.094,0,0,0-.008.132l.406.472a.1.1,0,0,0,.069.033h0a.093.093,0,0,0,.064-.025l.4-.367A.1.1,0,0,0,271.906,363.067Z"
                              transform="translate(-266.079 -357.228)"
                              fill="#00596b"
                            />
                            <path
                              id="Path_1953"
                              data-name="Path 1953"
                              d="M3.71,69.147a.587.587,0,0,0-.332-.4,1.3,1.3,0,0,1-.223-.188c-.039-.038-.079-.077-.122-.115a.094.094,0,0,0-.063-.024H2.954a.094.094,0,0,0-.066.046,1.373,1.373,0,0,0-.049,1.128l.022.092a16.711,16.711,0,0,1,.322,2.291l.027.283a1.326,1.326,0,0,1-.18.994,1.393,1.393,0,0,1-1,.375c-.089.008-.177.009-.25.009H1.6a1.177,1.177,0,0,1-.987-.368A.469.469,0,0,1,.5,72.933a2.651,2.651,0,0,1,.368-.915.216.216,0,0,0-.062-.3.221.221,0,0,0-.3.06,3.563,3.563,0,0,0-.475,1.149,1.164,1.164,0,0,0,.159.95,1.2,1.2,0,0,0,.861.492,4.854,4.854,0,0,0,.592.033c.178,0,.368-.008.581-.023a1.587,1.587,0,0,0,1.147-.5A1.791,1.791,0,0,0,3.7,72.513c-.047-.5-.106-1-.163-1.488l0-.029c-.041-.354-.084-.719-.122-1.079a.367.367,0,0,1,.045-.243A.665.665,0,0,0,3.71,69.147Z"
                              transform="translate(0 -68.42)"
                              fill="#00596b"
                            />
                            <path
                              id="Path_1954"
                              data-name="Path 1954"
                              d="M332.335,229.993l-.056-.067c-.108-.14-.388-.5-.641-.784a.361.361,0,0,0-.5-.033.351.351,0,0,0-.033.5c.185.212.393.47.537.653.026.029.046.056.066.082s.035.047.056.072a.886.886,0,0,1,.129,1.114,2.453,2.453,0,0,1-1.992,1.313h0c-.058,0-.118,0-.177-.008a3.586,3.586,0,0,1-.442-.078l-.1-.02-.112-.024a.127.127,0,0,0-.145.081.1.1,0,0,0,.067.11c.159.045.328.106.476.16a3.121,3.121,0,0,0,1.03.249l.082,0c.722-.043,1.222-.558,1.746-1.311a1.486,1.486,0,0,0,.318-.974A1.607,1.607,0,0,0,332.335,229.993Z"
                              transform="translate(-323.065 -226.162)"
                              fill="#00596b"
                            />
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <p class="pbtnHomeServices">الرصيد</p>
                </button>
              </div>
              <div
                class="colServiceHome"
                style="margin-right: 93px; margin-left: 93px"
              >
                <a href="Offices.html">
                  <button class="btnServicesHome">
                    <div class="backbtnHomeServices">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="52"
                        height="44.112"
                        viewBox="0 0 52 44.112"
                      >
                        <g
                          id="XMLID_1396_"
                          transform="translate(0.001 -38.833)"
                        >
                          <g
                            id="XMLID_1465_"
                            transform="translate(-0.001 38.833)"
                          >
                            <path
                              id="XMLID_1523_"
                              d="M52,68.728V56.539a3.248,3.248,0,0,0-4.473-3.01,4.254,4.254,0,0,0-1.368-2.965,4.266,4.266,0,1,0-5.664-.393,5.587,5.587,0,0,0-2,1.93L37.337,54h-3.01V52.612a6.884,6.884,0,0,0-4.894-6.581,4.243,4.243,0,0,0,.831-2.526V43.1a4.266,4.266,0,1,0-8.531,0V43.5a4.242,4.242,0,0,0,.831,2.526,6.884,6.884,0,0,0-4.894,6.581V54h-3.01L13.5,52.1a5.586,5.586,0,0,0-2-1.93,4.265,4.265,0,1,0-5.664.393,4.255,4.255,0,0,0-1.368,2.965A3.248,3.248,0,0,0,0,56.539V58.57a1.016,1.016,0,0,0,2.031,0V56.539a1.219,1.219,0,0,1,2.437,0v8.6a5.255,5.255,0,0,0,5.25,5.25h.436v2.044H5.735A3.71,3.71,0,0,1,2.03,68.728V66.695a1.016,1.016,0,0,0-2.031,0v2.033A5.745,5.745,0,0,0,4.72,74.373v6.541H1.455a1.016,1.016,0,1,0,0,2.031H13.607a3.457,3.457,0,0,0,3.453-3.453V67.811a5.05,5.05,0,0,0-1.018-3.045h4.472v14.93A3.247,3.247,0,0,0,26,82.052a3.247,3.247,0,0,0,5.484-2.357V75.836a1.016,1.016,0,1,0-2.031,0v3.859a1.219,1.219,0,1,1-2.437,0V64.765h2.437V67.71a1.016,1.016,0,0,0,2.031,0V64.765h4.472a5.05,5.05,0,0,0-1.018,3.045V79.492a3.457,3.457,0,0,0,3.453,3.453H50.543a1.016,1.016,0,1,0,0-2.031H47.278V74.373A5.745,5.745,0,0,0,52,68.728ZM48.749,55.32a1.22,1.22,0,0,1,1.219,1.219V68.728a3.709,3.709,0,0,1-3.705,3.705H41.844V70.389h.436a5.255,5.255,0,0,0,5.25-5.25v-8.6A1.22,1.22,0,0,1,48.749,55.32Zm-5.2-10.359A2.234,2.234,0,1,1,41.311,47.2,2.237,2.237,0,0,1,43.546,44.961Zm-5.64,11.07a1.016,1.016,0,0,0,.866-.486l1.458-2.384a3.578,3.578,0,0,1,3.034-1.7A2.237,2.237,0,0,1,45.5,53.695v8.227H41.03V59.575l1.535-2.426a1.016,1.016,0,1,0-1.717-1.086l-1.394,2.2H33.227a1.117,1.117,0,0,1,0-2.234h4.679ZM26.893,47.77l-.881,2.4-.881-2.4ZM23.765,43.1a2.234,2.234,0,1,1,4.469,0V43.5a2.234,2.234,0,1,1-4.469,0Zm-.711,4.907,2.005,5.465a1.016,1.016,0,0,0,1.907,0l2-5.457a4.849,4.849,0,0,1,3.328,4.6V54.14a3.147,3.147,0,0,0-2.012,4.125h-8.57A3.147,3.147,0,0,0,19.7,54.14V52.612A4.849,4.849,0,0,1,23.053,48.006Zm-9.828,7.539a1.015,1.015,0,0,0,.866.486h4.679a1.117,1.117,0,0,1,0,2.234H12.543l-1.394-2.2a1.016,1.016,0,1,0-1.717,1.086l1.536,2.426v2.346H6.5V53.695a2.237,2.237,0,0,1,2.234-2.234,3.578,3.578,0,0,1,3.034,1.7ZM8.452,44.961A2.234,2.234,0,1,1,6.218,47.2,2.237,2.237,0,0,1,8.452,44.961Zm-1.7,29.5h3.4v5.027a3.432,3.432,0,0,0,.308,1.422H6.751Zm8.278-6.654V79.492a1.422,1.422,0,1,1-2.844,0V69.374a1.016,1.016,0,0,0-1.016-1.016H9.717A3.222,3.222,0,0,1,6.5,65.14V63.953h4.489a1.016,1.016,0,0,0,1,.812A3.049,3.049,0,0,1,15.029,67.811Zm9.955,11.884a1.219,1.219,0,1,1-2.437,0V64.765h2.437ZM13,62.734V60.3H39v2.438Zm23.97,5.076a3.049,3.049,0,0,1,3.045-3.045,1.016,1.016,0,0,0,1-.812H45.5V65.14a3.222,3.222,0,0,1-3.218,3.218H40.829a1.016,1.016,0,0,0-1.016,1.016V79.492a1.422,1.422,0,0,1-2.844,0V67.811Zm4.567,13.1a3.432,3.432,0,0,0,.308-1.422V74.465h3.4v6.449Z"
                              transform="translate(0.001 -38.833)"
                              fill="#00586b"
                            />
                            <path
                              id="XMLID_1625_"
                              d="M291.016,353.17a1.016,1.016,0,1,0,.718.3A1.019,1.019,0,0,0,291.016,353.17Z"
                              transform="translate(-260.547 -321.245)"
                              fill="#00586b"
                            />
                            <path
                              id="XMLID_1633_"
                              d="M1.016,265.2A1.015,1.015,0,1,0,0,264.186,1.016,1.016,0,0,0,1.016,265.2Z"
                              transform="translate(0 -240.386)"
                              fill="#00586b"
                            />
                          </g>
                        </g>
                      </svg>
                    </div>
                    <p class="pbtnHomeServices">المكاتب</p>
                  </button>
                </a>
              </div>
              <div class="colServiceHome">
                <button class="btnServicesHome btnServicesHomeMsg">
                  <div class="backbtnHomeServices">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="44.843"
                      height="42.923"
                      viewBox="0 0 44.843 42.923"
                    >
                      <path
                        id="Path_18"
                        data-name="Path 18"
                        d="M19.137,3h8.569A16.875,16.875,0,0,1,44.843,19.6,16.875,16.875,0,0,1,27.706,36.2v7.263C17,39.313,2,33.088,2,19.6A16.875,16.875,0,0,1,19.137,3Zm4.284,29.05h4.284A12.656,12.656,0,0,0,40.559,19.6,12.656,12.656,0,0,0,27.706,7.15H19.137A12.656,12.656,0,0,0,6.284,19.6c0,7.491,5.274,12.38,17.137,17.6Z"
                        transform="translate(-1 -2)"
                        fill="#00596b"
                        stroke="#ebf5f7"
                        stroke-width="2"
                      />
                    </svg>
                  </div>
                  <p class="pbtnHomeServices">الرسائل</p>
                </button>
              </div>
            </div>
          </div>

          <div class="divContentServicesMsgs">
            <div class="headMsgBoxHome">
              <i class="fas fa-chevron-right ArrowBackHomMsg"></i>
              <p class="pServicesHomeMsg">الرسائل</p>
            </div>
            <div class="divCenterNumMsgHome">
              <p class="pNewMsgHome">الرسائل الجديدة</p>
              <p class="pNumMsgHome">0</p>
            </div>
            <div class="row">
              <div class="col-md-6 col-12 colLblmsg">
                <div>
                  <label class="lblMsgHome">الرسائل الواردة</label>
                  <label class="lblNumHome">0</label>
                </div>
              </div>
              <div class="col-md-6 col-12 colLblmsg">
                <div>
                  <label class="lblMsgHome">الرسائل الصادرة</label>
                  <label class="lblNumHome">0</label>
                </div>
              </div>
            </div>
          </div>

          <div class="divContentServicesBalance">
            <div class="headMsgBoxHome">
              <i class="fas fa-chevron-right ArrowBackBalanceHome"></i>
              <p class="pServicesHomeMsg">الرصيد</p>
            </div>
            <div class="row">
              <div class="col-md-6 col-12">
                <p class="pAllBalanceHome">الرصيد الكلي</p>
                <p class="numAllBalanceHome">$0.00</p>
                <div class="divLblMsgHome">
                  <label class="lblMsgHome">الرصيد المتاح</label>
                  <label class="lblNumHome">$0.00</label>
                </div>
              </div>
              <div class="col-md-6 col-12">
                <p class="pAllBalanceHome">الرصيد القابل للسحب</p>
                <p class="numAllBalanceHome pNumBlueBalanceHome">$0.00</p>
                <div class="divLblMsgHome">
                  <label class="lblMsgHome">الرصيد المعلق</label>
                  <label class="lblNumHome">$0.00</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style="display: flex" class="boxMediaHome">
      <div class="colBoxesHome" style="width: 316px">
        <div class="boxesHome boxoffersHome">
          <p class="pboxoffersHome">العروض الخاصة بك</p>
          <router-link to="/lawyerOffers">
            <p class="numBoxOfferHome">{{ all_req_count }}</p>
          </router-link>
        </div>
      </div>
      <div class="colBoxesHome" style="width: 460px">
        <div class="boxesHome typeOffersHome">
          <p class="pServicesHome" style="padding-right: 0px">عروضي</p>
          <div class="row SectypeOffersHome">
            <div class="col-lg-6 col-12 colTypeOfferHome">
              <div>
                <p class="pTypeOffer">بإنتظار الموافقة</p>
                <p class="numTypeOffer">{{ $store.state.user.open_count }}</p>
              </div>
              <div>
                <p class="pTypeOffer">مكتمل</p>
                <p class="numTypeOffer">
                  {{ $store.state.user.complete_count }}
                </p>
              </div>
            </div>
            <div class="col-lg-6 col-12 colTypeOfferHome">
              <div>
                <p class="pTypeOffer">قيد التنفيذ</p>
                <p class="numTypeOffer">
                  {{ $store.state.user.underway_count }}
                </p>
              </div>
              <div>
                <p class="pTypeOffer">مستبعدة</p>
                <p class="numTypeOffer">
                  {{ $store.state.user.Excluded_count }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="colBoxesHome" style="width: 316px">
        <div class="divMyWorkHome" style="width: 316px">
          <p class="pMyWorkHome">أعمالي</p>
          <router-link :to="{ name: 'lawyer-portfolio' }">
            <p class="numMyWorkHome">6</p>
          </router-link>
        </div>
        <div class="divAddWorkHome" style="width: 316px">
          <p class="pAddWorkHome">إضافة عمل جديد</p>
          <router-link :to="{ name: 'add-portfolio' }">
            <div class="backAddWorkHome">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25.96"
                height="25.96"
                viewBox="0 0 25.96 25.96"
              >
                <path
                  id="Plus"
                  d="M10.4,23.4V14.56H2.08a2.08,2.08,0,0,1,0-4.161H10.4V1.56C10.4.7,11.331,0,12.48,0s2.08.7,2.08,1.56V10.4h8.32a2.08,2.08,0,0,1,0,4.161H14.56V23.4c0,.861-.932,1.56-2.08,1.56S10.4,24.261,10.4,23.4Z"
                  transform="translate(0.5 0.5)"
                  fill="#00586b"
                  stroke="rgba(0,0,0,0)"
                  stroke-miterlimit="10"
                  stroke-width="1"
                />
              </svg>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <div style="display: flex" class="boxMediaHome">
      <div class="colBoxesHome" style="width: 364px">
        <div class="divColCalenderHome">
          <p class="pServicesHome titleBoxesHome">مهامي</p>
          <div class="divcontentCalenderHome">
            <div class="container">
              <!-- calendar-->
              <div
                data-role="calendar"
                class="compact"
                data-picker-mode="true"
                data-multi-select="true"
              ></div>
            </div>
            <!-- calendar-->
          </div>
        </div>
        <p class="pServicesHome">قائمة المهام</p>
        <div class="divListTast">
          <div>
            <div class="round inputRadioTask">
              <input type="checkbox" id="checkbox" class="checkRemember" />
              <label for="checkbox"></label>
            </div>
          </div>
          <div>
            <p>الرد على العميل الأول في استشارة</p>
            <label>اليوم</label>
          </div>
        </div>
        <div class="divListTast">
          <div>
            <div class="round inputRadioTask">
              <input
                type="checkbox"
                id="checkbox"
                checked
                class="checkRemember"
              />
              <label for="checkbox"></label>
            </div>
          </div>
          <div>
            <p class="doneTask">عمل دراسة جدوى</p>
            <label>اليوم</label>
          </div>
        </div>
        <div class="divListTast">
          <div>
            <div class="round inputRadioTask">
              <input type="checkbox" id="checkbox" class="checkRemember" />
              <label for="checkbox"></label>
            </div>
            <!-- <input class="inputRadioTask" type="radio"> -->
          </div>
          <div>
            <p>إتمام المشروع الثاني</p>
            <label>غدا</label>
          </div>
        </div>
        <div class="divListTast">
          <div>
            <div class="round inputRadioTask">
              <input type="checkbox" id="checkbox" class="checkRemember" />
              <label for="checkbox"></label>
            </div>
          </div>
          <div>
            <p>استشارة محاميين في المكتب</p>
            <label>غدا</label>
          </div>
        </div>
        <div class="divListTast">
          <div>
            <div class="round inputRadioTask">
              <input type="checkbox" id="checkbox" class="checkRemember" />
              <label for="checkbox"></label>
            </div>
          </div>
          <div>
            <p>استشارة محاميين في المكتب</p>
            <label>غدا</label>
          </div>
        </div>
      </div>
    </div>
    <div class="colBoxesHome" style="width: 748px">
      <div class="divLastOffers">
        <p class="pServicesHome titleBoxesHome">آخر العروض المضافة</p>
        <div
          to="/lawyerOffers"
          v-for="(work, i) in last_added_requests"
          :key="i"
          class="px-3"
        >
          <a href="offerWait_Accpet.html">
            <p class="pTitleWorksProfile">
              {{ work.title }}
            </p>
          </a>
          <p class="pWorksProfile">
            {{ work.description }}
          </p>
          <div class="divIcons row">
            <div class="col-lg-3 col-12">
              <i class="far fa-user iconOrders ml-2"></i>
              <label class="lblOrders">{{ work.client_name }}</label>
            </div>
            <div class="col-lg-3 col-12">
              <i class="far fa-clock iconOrders ml-2"></i>
              <label class="lblOrders">{{ work.delivery_time_form }}</label>
            </div>
            <div class="col-lg-3 col-12">
              <i class="fas fa-money-bill-wave iconOrders ml-2"></i>
              <label class="lblOrders">{{ work.total_value }} عدد العروض</label>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  </div>

  <!-- end Content -->
</template>

<script>
export default {
  data() {
    return {
      last_added_requests: [],
    };
  },
  computed: {
    all_req_count() {
      return (
        Number(this.$store.state.user.open_count) +
        Number(this.$store.state.user.underway_count) +
        Number(this.$store.state.user.complete_count) +
        Number(this.$store.state.user.close_count) +
        Number(this.$store.state.user.Excluded_count)
      );
    },
  },
  methods: {
    getLastAdded() {
      this.$http
        .get("lawyer/auth/lawyer/my-Request?status=last_added")
        .then((res) => {
          this.last_added_requests = res.data.data.request;
        });
    },
  },
  mounted() {
    this.getLastAdded();
  },
};
</script>
