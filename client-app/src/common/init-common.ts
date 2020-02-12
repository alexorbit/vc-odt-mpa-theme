import Vue from "vue";
import VueAxios from "vue-axios";
import axios from "axios";
import { baseUrl } from "@common/constants";

/**
 * Init common plugins and data for all pages
 */
Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.axios.defaults.baseURL = baseUrl;


