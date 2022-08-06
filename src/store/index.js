import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

// TODO: store baseURL as an env variable
export default new Vuex.Store({
  state: {
    serverBaseURL: "https://dashboard.ecp-bash.com",
    register_data: {
      email: null,
      first_name: null,
      seconed_name: null,
      office_name: null,
      name: null,
      type: "p_owner",
      password: null,
      country_id: null,
    },
    agreed: false,
    countries: [],
    user: null,
  },
  getters: {
    getCountries(state) {
      axios.get("https://dashboard.ecp-bash.com/api/country").then((res) => {
        state.countries = res.data.data.country;
      });
    },
    getMyOrders_open(state) {
      return axios.get(
        "https://dashboard.ecp-bash.com/api/auth/client/requets?status=open",
        {
          headers: {
            Authorization: `Bearer ${state.user.token}`,
          },
        }
      );
    },
    getMyOrders_complete(state) {
      return axios.get(
        "https://dashboard.ecp-bash.com/api/auth/client/requets?status=complate",
        {
          headers: {
            Authorization: `Bearer ${state.user.token}`,
          },
        }
      );
    },
    getMyOrders_close(state) {
      return axios.get(
        "https://dashboard.ecp-bash.com/api/auth/client/requets?status=close",
        {
          headers: {
            Authorization: `Bearer ${state.user.token}`,
          },
        }
      );
    },
    getMyOrders_underway(state) {
      return axios.get(
        "https://dashboard.ecp-bash.com/api/auth/client/requets?status=underway",
        {
          headers: {
            Authorization: `Bearer ${state.user.token}`,
          },
        }
      );
    },
    getMyOrders_last(state) {
      return axios.get(
        "https://dashboard.ecp-bash.com/api/auth/client/requets?status=last_added",
        {
          headers: {
            Authorization: `Bearer ${state.user.token}`,
          },
        }
      );
    },
  },
  mutations: {
    setUser(state, user) {
      if (!state.user) {
        state.user = {};
      }
      const userObj = Object.assign(
        {},
        state.user,
        user,
        user.image && typeof user.image === "string"
          ? {
              image: `${
                user.image.includes("https") ? "" : state.serverBaseURL + "/"
              }${user.image}`,
            }
          : { image: null }
      );
      console.log("userObj", userObj);
      state.user = userObj;
      if (user.token) {
        localStorage.setItem("auth_token", user.token);
      }
      localStorage.setItem("user", JSON.stringify(userObj));
    },
  },
  actions: {},
  modules: {},
});
