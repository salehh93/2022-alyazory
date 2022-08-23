<template>
  <!-- Start Content -->
  <div class="container">
    <div class="pagesLinks">
      <router-link class=" text-info" to="/lawyerHome">الرئيسية</router-link> /
      <router-link  class=" text-info"  to="/lawyerPortfolio" >معرض أعمالي</router-link> / 
      <span>تعديل عمل جديد</span>
    </div>
    
    <div class="row">
      <div class="col-lg-9 col-md-8 col-12">
        <div class="titleAndIcons">
          <h3 class="hTitle">تعديل العمل</h3>
        </div>
        <div class="tabContents">
          <div class="bodyTabPay bodyContentAddWork">
            <div class="divtxtsAddWork">
              <p class="pAddWorksPort">عنوان العمل</p>
              <input
                type="text"
                class="txtUserNameSettings"
                v-model="gallary_data.title"
              />
            </div>
            <div class="divphotoAddWork">
              <p class="pAddWorksPort">* صورة مصغرة</p>
              <div
                class="drop-zone zoneSmallPhoht"
                style="justify-content: space-between"
                @click="$refs.selectImg.click()"
              >
                <div style="display: flex">
                  <div class="divsvgDragFiles divsvgDragFilesSmall">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="svgSmallImg"
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
                  <span class="drop-zone__prompt placeDragFile"
                    >اسحب الصورة إلى هنا <br />
                    أو إنقر للاختيار يدويا</span
                  >
                  <input
                    type="file"
                    name="myFile2"
                    class="drop-zone__input"
                    @change="selectImg($event)"
                    ref="selectImg"
                  />
                </div>
                <div
                  class="backIconEditPhotos"
                  style="display: flex; align-items: center; visibility: hidden"
                >
                  <div class="divIconHoverPortfolio">
                    <div
                      class="backIconShowProfile hideIconEdit"
                      style="width: 30px; height: 30px"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="13.985"
                        viewBox="0 0 14 13.985"
                      >
                        <g
                          id="pencil_2_"
                          data-name="pencil (2)"
                          transform="translate(0 -0.246)"
                        >
                          <path
                            id="Path_1910"
                            data-name="Path 1910"
                            d="M8.645,82.473l-7.7,7.7a.307.307,0,0,0-.08.141L.008,93.744a.3.3,0,0,0,.294.377.3.3,0,0,0,.073-.009L3.8,93.258a.3.3,0,0,0,.141-.08l7.7-7.7Zm0,0"
                            transform="translate(0 -79.889)"
                            fill="#848484"
                          ></path>
                          <path
                            id="Path_1911"
                            data-name="Path 1911"
                            d="M338.38,1.534l-.857-.857a1.553,1.553,0,0,0-2.144,0l-1.05,1.05,3,3,1.05-1.05a1.517,1.517,0,0,0,0-2.144Zm0,0"
                            transform="translate(-324.825 0)"
                            fill="#848484"
                          ></path>
                        </g>
                      </svg>
                    </div>
                    <div
                      class="backIconShowProfile hideIconEdit"
                      style="width: 30px; height: 30px"
                    >
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
                          ></path>
                          <path
                            id="Path_1917"
                            data-name="Path 1917"
                            d="M15.712,5.827H2.788a.538.538,0,1,1,0-1.077H15.712a.538.538,0,1,1,0,1.077Z"
                            transform="translate(0 -0.846)"
                            fill="#848484"
                          ></path>
                          <path
                            id="Path_1918"
                            data-name="Path 1918"
                            d="M13.1,4.981H8.788a.546.546,0,0,1-.538-.538V3.15a1.436,1.436,0,0,1,1.4-1.4h2.585a1.436,1.436,0,0,1,1.4,1.436V4.442a.546.546,0,0,1-.538.538ZM9.327,3.9h3.231V3.186a.323.323,0,0,0-.323-.323H9.65a.323.323,0,0,0-.323.323Z"
                            transform="translate(-1.692)"
                            fill="#848484"
                          ></path>
                          <path
                            id="Path_1919"
                            data-name="Path 1919"
                            d="M14.788,15.571a.546.546,0,0,1-.538-.538V9.288a.538.538,0,1,1,1.077,0v5.744A.546.546,0,0,1,14.788,15.571Z"
                            transform="translate(-3.385 -1.974)"
                            fill="#848484"
                          ></path>
                          <path
                            id="Path_1920"
                            data-name="Path 1920"
                            d="M8.788,15.571a.546.546,0,0,1-.538-.538V9.288a.538.538,0,0,1,1.077,0v5.744A.546.546,0,0,1,8.788,15.571Z"
                            transform="translate(-1.692 -1.974)"
                            fill="#848484"
                          ></path>
                          <path
                            id="Path_1921"
                            data-name="Path 1921"
                            d="M11.788,15.571a.546.546,0,0,1-.538-.538V9.288a.538.538,0,1,1,1.077,0v5.744A.546.546,0,0,1,11.788,15.571Z"
                            transform="translate(-2.538 -1.974)"
                            fill="#848484"
                          ></path>
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <p class="pNotetxtDescAddWork">أضف صورة جذابة معبرة عن العمل.</p>
            </div>
            <div>
              <p class="pAddWorksPort">* تفاصيل العمل</p>
              <textarea
                class="txtUserNameSettings textareaSettings txtDescAddWork"
                cols="30"
                rows="5"
                v-model="gallary_data.description"
              ></textarea>
              <p class="pNotetxtDescAddWork">
                أضف وصفا دقيقا يوضح ميزات العمل.
              </p>
            </div>
            <div class="divphotoAddWork divallImgAddWork">
              <p class="pAddWorksPort">صور العمل</p>
              <div class="drop-zonePhotos" @click="$refs.selectFile.click()">
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
                  >اسحب الصورة إلى هنا <br />
                  أو إنقر للاختيار يدويا</span
                >
                <input
                  type="file"
                  name="myFile1"
                  class="drop-zone__inputPhotos"
                  @change="selectFile($event)"
                  ref="selectFile"
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
              <p class="pNotetxtDescAddWork pNotetxtDescAddWorkPhotos">
                أضف صورة جذابة معبرة عن العمل.
              </p>
            </div>
            <div class="divLinkAddWork">
              <p class="pAddWorksPort">رابط العمل</p>
              <input
                type="link"
                class="txtLinkAddWork"
                v-model="gallary_data.link"
              />
              <p class="pNotetxtDescAddWork">
                رابط للعمل الذي قمت بتنفيذه مثال: رابط موقع، فيديو من YouTube أو
                Vimeo
              </p>
            </div>
            <div class="divLinkAddWork">
              <p class="pAddWorksPort">تاريخ الإنجاز</p>
              <input
                type="date"
                required
                class="txtLinkAddWork"
                v-model="gallary_data.completion_date"
              />
            </div>
            <div class="divLinkAddWork">
              <p class="pAddWorksPort">المهارات</p>
              <div class="divddlistskillsport">
                <multiselect
                  :multiple="true"
                  v-model="gallary_data.skill_id"
                  :options="skills"
                  track-by="name"
                  :hideSelected="true"
                  label="name"
                  :group-select="true"
                  :showLabels="true"
                  selectedLabel="name"
                  mode="multiple"
                  clearable
                >
                  <template v-slot:option="{ option }">
                    <option>
                      {{ option.name }}
                    </option>
                  </template>
                </multiselect>
              </div>
            </div>
          </div>
          <div class="footerTabs footerAddWork">
            <button class="btnBackSettings">رجوع</button>
            <button class="btnNextSettings" @click="savePortfolio()">
              حفظ
            </button>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-4 col-12">
        <div>
          <div>
            <p class="ptitleNoteAddwork">ابدأ ببناء معرض أعمالك</p>
            <p class="pDescNoteAddwork">
              أضف أعمالك السابقة التي قمت بتنفيذها، إضافة الاعمال للملف الشخصي
              يساعد أصحاب المشاريع على معرفة مهاراتك ويزيد من فرص توظيفك.
            </p>
          </div>

          <div>
            <p class="ptitleNoteAddwork">أعمالك تدل على مهاراتك وخبراتك</p>
            <p class="pDescNoteAddwork">
              أضف أعمالاً مميزة ذات جودة عالية وحدثها باستمرار من خلال التقنيات
              والمهارات الجديدة التي تكتسبها.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- end Content -->
</template>

<script>
import { createToaster } from "@meforma/vue-toaster";
const toaster = createToaster({ /* options */ });
export default {
name: "TheEditPortfolio",
  data() {
    return {
      skills: [],
      gallary_data: {
        skill_id: [],
      },
      img: null,
      file: null,
      res : null ,
    };
  },
  methods: {
    getSkills() {
      this.$http.get("api/auth/client/Skills").then((res) => {
        this.skills = res.data.data.Skill;
      });
    },
    selectImg(event) {
      this.img = event.target.files[0];
    },
    selectFile(event ) {
      this.file = event.target.files[0];
    },
    savePortfolio() {
      const objToPost = JSON.parse(JSON.stringify(this.gallary_data));
      const newSkill = {
        skill: objToPost.skill_id.map((item) => {
          item = {
            skill_id: `${item}`,
          };
          return item;
        }),
      };
      objToPost.skill_id = newSkill;

      let form = new FormData();
      Object.entries(objToPost).forEach((entry) => {
        form.append(entry[0], entry[1]);
      });
    //   Form.append("image", this.img);
    //   Form.append("file", this.file);
    //   Form.append("title", this.gallary_data.title);
    //   Form.append("description", this.gallary_data.description);
    //   Form.append("link", this.gallary_data.link);
    //   Form.append("skill_id", newSkill);

      this.$http.put(`lawyer/auth/lawyer/galleries/${this.$route.params.id}`, {
        title :  this.gallary_data.title ,
        description : this.gallary_data.description,
        image : this.img,
        file: this.file,
        link : this.gallary_data.link ,
    //    skill_id : newSkill

      }
                ).then(res => {
         console.log('st:' + res.status);
         this.res  =  res;
             if (res.status == 200) {
this.$notify({
          group: "foo",
          type: "success",
          text: res.data.message,
        });
         this.$router.push("/lawyerPortfolio");
        }
        if (res.response.status === 400) {
         console.log('data res: '+res.response.data.message);
        //  toaster.show(res.response.data.message);
          this.$notify({
          group: "foo",
          type: "danger",
          text: res.response.data.message,
        });
        }
    
         
      }).catch(function(error){
            console.log(error.res)
      });
    },
  },
  mounted() {
    this.getSkills();
    //check if it is edit route
    // if (this.$route.params.id) {
    //   this.$http
    //     .get(`lawyer/auth/lawyer/lawyer-gallery/${this.$route.params.id}`)
    //     .then((res) => {
    //       console.log(res.data.data);
    //       this.gallary_data = res.data.data;
    //     });
    // }
  },
};
</script>
<style  lang="scss">

</style>