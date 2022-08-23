<template>
  <!-- Start Content -->
  <div class="container">



     <!-- single work modal -->
            <div 
              class="modal fade  " id="modalDetailsPort"
          tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"
            >
              <div class="modal-dialog modal-lg">
                <div class="modal-content" v-if="current_work!=null">
                  <div class="modal-header modHead">
                    <h5 class="modal-title titleModPort" id="exampleModalLabel">
                      {{ current_work.title }}
                    </h5>
                    <div style="display: flex">
                      <router-link :to="'/editPort/'+current_work.id" data-bs-dismiss="modal">
                        <div class="backIconShowProfile">
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
                      </router-link>
                      <button @click="deleteWork(current_work.id)"
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                  </div>
                  <div class="modal-body modBody">
                    <div class="divmodImg">
                      <img class="modImg" :src="current_work.image" alt="" width="100%"/>
                    </div>
                    <div class="divPPortmod">
                      <p>{{ current_work.title }}</p>
                      <!-- <div class="divSee divSeePort">
                        <i class="fas fa-eye"></i>
                        <label>{{current_work}}</label>
                      </div> -->
                    </div>
                    <div>
                      <div class="rowSkillsProfile rowSkillsPortfolio">
                        <div  v-for="(skill, i) in current_work.skills"
                            :key="i">
                          <button  class="backSkills"  >
                            <p>{{ skill.name }}</p>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="divPPortmod">
                      <p class="pTitleDescMod">وصف المشروع</p>
                      <p class="pDescMod">
                        {{ current_work.description }}
                      </p>
                    </div>
                    <div class="divPPortmod">
                      <p class="pTitleDescMod">صور إضافية للمشروع</p>
                     <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
                      <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                      </div>
                      <div class="carousel-inner">

                        <div class="carousel-item active" >
                          <img :src="current_work.file" class="d-block w-100" alt="...">
                        </div>
                      </div>
                      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
  
                      </button>
                      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      </button>
                    </div>
          </div>
                  </div>
                  <div class="modal-footer">
                    <div class="row divrowbio rowfootmod">
                      <div class="col-md-10 col-8 flexHeadSHowmodfoot">
                        <div class="flexHeadBio">
                          <div class="flexHeadSHowmodfoot">
                            <p class="pShowPortFootmod">محامي قانوني شرعي</p>
                            <p class="pTimePortFootmod">
                              {{ current_work.completion_date }}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-2 col-4 colCopyUrl">
                        <div>
                          <div class="backIconShowProfile divColCopyUrl">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="21"
                              height="12.667"
                              viewBox="0 0 21 12.667"
                            >
                              <g
                                id="url_1_"
                                data-name="url (1)"
                                transform="translate(0.5 0.5)"
                              >
                                <path
                                  id="Path_1922"
                                  data-name="Path 1922"
                                  d="M301.168,11.667H299.5a.833.833,0,0,1,0-1.667h1.667a4.167,4.167,0,0,0,0-8.333H299.5A.833.833,0,0,1,299.5,0h1.667a5.833,5.833,0,0,1,0,11.667Zm0,0"
                                  transform="translate(-287.001 0)"
                                  fill="#848484"
                                  stroke="#848484"
                                  stroke-width="1"
                                />
                                <path
                                  id="Path_1923"
                                  data-name="Path 1923"
                                  d="M7.5,11.667H5.833A5.833,5.833,0,0,1,5.833,0H7.5a.833.833,0,0,1,0,1.667H5.833a4.167,4.167,0,0,0,0,8.333H7.5a.833.833,0,0,1,0,1.667Zm0,0"
                                  transform="translate(0 0)"
                                  fill="#848484"
                                  stroke="#848484"
                                  stroke-width="1"
                                />
                                <path
                                  id="Path_1924"
                                  data-name="Path 1924"
                                  d="M176.5,129.667h-5a.833.833,0,0,1,0-1.667h5a.833.833,0,0,1,0,1.667Zm0,0"
                                  transform="translate(-164.001 -123)"
                                  fill="#848484"
                                  stroke="#848484"
                                  stroke-width="1"
                                />
                              </g>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
<!-- sing  -->





    <div class="pagesLinks">
     <router-link class=" text-info" to="/lawyerHome">الرئيسية</router-link> /
      <router-link  class=" text-info"  to="/lawyerPortfolio" >معرض أعمالي</router-link> 
    </div>
    <div class="titleAndIcons">
      <h3 class="hTitle">أعمالي</h3>
      <div class="flexIconPortfolio">
        <router-link :to="{ name: 'add-portfolio' }">
          <div class="divBackIconPortfolio">
            <i class="fas fa-plus"></i>
          </div>
        </router-link>

        <div class="divBackIconPortfolio">
          <i
            class="fas fa-share-alt"
            data-target="#exampleModalCenterPortfolio"
            data-toggle="modal"
          ></i>
          <!-- Modal -->
          <div
            class="modal fade"
            id="exampleModalCenterPortfolio"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content modalcontentPortfolio">
                <div class="modal-header modalHeadPortfolio">
                  <h5 class="modal-title" id="exampleModalLongTitle">
                    شارك معرضك الشخصي
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <div class="bodyPortfolioModal">
                    <input
                      type="text"
                      class="txtinputPortfolio"
                      v-model="sharableLink"
                      id="myInput"
                    />

                    <!-- The button used to copy the text -->
                    <button onclick="myFunction()" class="btnModalPortfolio">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="20.571"
                        viewBox="0 0 18 20.571"
                      >
                        <g
                          id="copy-two-paper-sheets-interface-symbol"
                          transform="translate(-43.714)"
                        >
                          <g id="_x33__21_" transform="translate(43.714)">
                            <g
                              id="Group_228"
                              data-name="Group 228"
                              transform="translate(0)"
                            >
                              <path
                                id="Path_117"
                                data-name="Path 117"
                                d="M57.214,0H49.5a2.679,2.679,0,0,0-2.571,2.571l-.743.017a2.574,2.574,0,0,0-2.471,2.554V18a2.679,2.679,0,0,0,2.571,2.571h9.643A2.679,2.679,0,0,0,58.5,18h.643a2.679,2.679,0,0,0,2.571-2.571V5.158ZM55.928,19.286H46.285A1.348,1.348,0,0,1,45,18V5.143a1.274,1.274,0,0,1,1.225-1.265l.7-.021V15.429A2.679,2.679,0,0,0,49.5,18h7.714A1.348,1.348,0,0,1,55.928,19.286Zm4.5-3.857a1.348,1.348,0,0,1-1.286,1.286H49.5a1.348,1.348,0,0,1-1.286-1.286V2.571A1.348,1.348,0,0,1,49.5,1.286h6.429c-.01,1.48,0,2.587,0,2.587A2.649,2.649,0,0,0,58.5,6.429h1.929ZM58.5,5.143c-.685,0-1.286-1.244-1.286-1.911V1.306h0l3.214,3.839ZM57.214,9.012H51.428a.642.642,0,1,0,0,1.284h5.786a.642.642,0,1,0,0-1.284Zm0,3.211H51.428a.642.642,0,1,0,0,1.284h5.786a.642.642,0,1,0,0-1.284Z"
                                transform="translate(-43.714)"
                                fill="#a2a2a6"
                              />
                            </g>
                          </g>
                        </g>
                      </svg>
                    </button>
                  </div>
                  <div class="row rowModalPortfolio">
                    <div class="col-12 colTwitter">
                      <facebook-button
                        btnText
                        class="share-button--circle share-button--outline ml-3"
                        :url="sharableLink"
                        description="GitHub is where people build software."
                      />
                      <twitter-button
                        btnText
                        class="share-button--circle share-button--outline"
                        :url="sharableLink"
                        description="GitHub is where people build software."
                      />
                    </div>
                  </div>
                </div>
                <div class="modal-footer modalFootPortfolio">
                  <button
                    type="button"
                    class="btn btncancelPortfolio"
                    data-dismiss="modal"
                  >
                    إغلاق
                  </button>
                  <!-- <button type="button" class="btn btn-primary">إضافة</button> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row rowPortfolio">
      <div class="col-lg-9 col-md-8 col-12">
        <div class="row">
          <div
            class="col-lg-4 col-md-6 col-12"
            v-for="(work, i) in my_works"
            :key="i"
          >
            <div
              class="ImgSection"
              data-bs-toggle="modal" data-bs-target="#modalDetailsPort"
        
              @click="getWork(work.id)"
            >
              <img :src="work.image" />
              <a href="#">
                <p class="pTitlePortfolio">
                  {{ work.title }}
                </p>
              </a>
              <div class="divSee">
                <i class="fas fa-eye ml-1"></i>
                <label>{{work.gallary_views}}</label>
              </div>
            </div>
       
          </div>
        </div>
        <div class="divLinkRatePortfolio divPaginationProfile">
          <a href="#">
            <nav aria-label="...">
              <ul class="pagination">
                <li
                  v-if="paginate.previousPageUrl"
                  class="page-item"
                  @click="getGallary(paginate.currentPage - 1)"
                >
                  <span class="page-link pageLinlPortfolio">
                    <i class="fas fa-chevron-right"></i>
                    السابق
                  </span>
                </li>
                <li class="page-item">
                  <span class="page-link pageLinlPortfolio">
                    {{ paginate.currentPage }}
                  </span>
                </li>
                <li
                  v-if="paginate.nextPageUrl"
                  class="page-item"
                  @click="getGallary(paginate.currentPage + 1)"
                >
                  <a class="page-link pageLinlPortfolio" href="#">التالي
                    <i class="fas fa-chevron-left"></i>
                  </a>
                </li>
              </ul>
            </nav>
          </a>
        </div>
      </div>

      <div class="col-lg-3 col-md-4 col-12 colFilterPortfolio">
        <div class="divFiltersPortfolio">
          <div>
            <p class="pKeyWords">كلمات مفتاحية</p>
            <input v-model="titleSearch"
              type="text" 
              class="txtFilterPortfolio"
              style="margin-bottom: 52px"
            />
          </div>
          <div>
            <p class="pKeyWords">المهارات المستخدمة</p>
            <select v-model="skillsSelected"
              class="js-example-placeholder-single js-states form-control txtFilterPortfolio txtSkillsPortfolio"
              style="margin-bottom: 52px"
            >
              <option value="">الكل</option>
              <option v-for="(skill , i) in skills" :key="i" :value="skill.id">
              {{skill.name}}
              </option>
             
            </select>
          </div>
          <div>
            <p class="pKeyWords">الأعمال المضافة خلال آخر</p>
            <select v-model="filterTime"
              class="js-example-placeholder-single js-states form-control txtFilterPortfolio txtFilterSince"
              style="margin-bottom: 52px"
            >
              <option value="" selected style="color: #a2a2a6">عرض الكل</option>
              <option value="week">أسبوع</option>
              <option value="month">شهر</option>
              <option value="year">سنة</option>
            </select>
          </div>
            
        </div>
      </div>
    </div>
  </div>
  <!-- End Content -->
</template>

<script>
import TwitterButton from "vue-share-buttons/src/components/TwitterButton";
import FacebookButton from "vue-share-buttons/src/components/FacebookButton";

export default {
  components: {
    TwitterButton,
    FacebookButton
  },
  data() {
    return {
      my_works: [],
      current_work: null,
      paginate: {},
      sharableLink: "user-name@example.com",
      titleSearch :'' ,
      skills: null,
      skillsSelected : '',
      deleteMessage: '',
      filterTime:'',
    };
  },
  watch:{
    titleSearch(){
      this.getGallary()
    },
    skillsSelected(){
      this.getGallary()
    },
    filterTime(){
      this.getGallary()
    },
  },
  methods: {
    getGallary(pageNumber) {
      this.$http
        .get(`https://dashboard.ecp-bash.com/lawyer/auth/lawyer/galleries?title=${this.titleSearch}&skill_id=${this.skillsSelected}&deration=${this.filterTime}&per_page=6`)
        .then((res) => {
          this.paginate = res.data.data.paginate;
          this.my_works = res.data.data.Gallery;
        });
    },
    getWork(id) {

        this.$http
        .get(`https://dashboard.ecp-bash.com/lawyer/auth/lawyer/galleries/${id}`)
        .then((res) => {
          this.current_work = res.data.data;
        });
    },
    deleteWork(id) {
      // Use sweetalert2
      this.$swal({
  title: 'هل انت متأكد من عملية الحذف',
  text: "تريد ان تحذف هذا العمل",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'نعم احذف'
}).then((result) => {
  if (result.isConfirmed) {
    const idd = id
    this.deleteItem(idd);
  }
});
    },
    deleteItem(id){
         this.$http.delete(`https://dashboard.ecp-bash.com/lawyer/auth/lawyer/galleries/${id}`).then(res => {
           console.log(res);
        });
        this.getGallary();
    }
  },
  mounted() {
    this.getGallary();

    this.$http
        .get(`https://dashboard.ecp-bash.com/api/auth/client/Skills`)
        .then((res) => {
          this.skills = res.data.data.Skill;
        });
   
  },
};
</script>
