import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    id: null,
    searchBar: null,
    displaySearch: false
  },
  getters: {
    display_search: state => {
      return state.displaySearch;
    },
    get_search: state => {
      return state.searchBar;
    }
  },
  mutations: {
    save_products(state, products) {
      state.products = products;
    },
    set_text_search: (state, payload) => {
      state.searchBar = payload;
    },
    set_display_search: (state, payload) => {
      state.displaySearch = payload;
    }
  },
  actions: {
    getProducts({commit}) {
      axios.get('http://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl')
      .then(response => {
        commit('save_products', response.data);
      })
    }
  },
  modules: {
  }
})
