<template>
  <div id="app">
    <notifications group="foo" />
    <navBar v-if="$store.state.user" />
    <router-view />
    <foot />
    <!-- start buttonTop-->
    <button @click="topFunction()" id="Top">
      <i class="fas fa-chevron-up"></i>
    </button>
  </div>
</template>

<script>
import foot from "./components/shared/footer.vue";
import navBar from "./components/shared/nav.vue";
import "@/assets/bootstrap/js//bootstrap.min.js";

export default {
  components: {
    foot,
    navBar,
  },
  mounted() {
    //Get the button
    var mybutton = document.getElementById("Top");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () {
      scrollFunction();
    };

    function scrollFunction() {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }

    this.$http.get("api/country").then((res) => {
      this.$store.state.countries = res.data.data.country;
    });
  },
  created() {
    this.$store.getters.getCountries;

    let token = localStorage.getItem("auth_token");
    let type = localStorage.getItem("type");
    if (token) {
      this.$store.state.user.token = token;
    } else {
      localStorage.removeItem("auth_token");
      localStorage.removeItem("user");
      this.$router.push("/");
    }
  },
  methods: {
    // When the user clicks on the button, scroll to the top of the document
    topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
  },
};
</script>
<style lang="scss">
#app {
    font-family: Almarai;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 1rem;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

html,
body {
  margin: 0px !important;
  padding: 0px !important;
      font-family: Almarai;
}
</style>
