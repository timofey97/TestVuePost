import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import createPersistedState from "vuex-persistedstate";
import router from '../router';

Vue.use(Vuex)


// функция для загрузки заметок из localStorage


export default new Vuex.Store({
  state: {
    posts: [],
    search: '',
    dialogDelete: false,
    headers: [
        {
          text: 'ID',
          align: 'start',
          value: 'id',
          filterable: false,
        },
        { text: 'Title', value: 'title' },
        { text: 'Actions', value: 'actions', sortable: false },
        
      ],

      editedIndex: -1,
      editedItem: {
        id: '',
        title: '',
      },
      defaultItem: {
        id: '',
        title: '',

      },
  },
  mutations: {
      SET_POSTS(state, posts) {
        state.posts = posts
      },
      EDIT_POST(state, item) {
        state.editedIndex = state.posts.indexOf(item)
        state.editedItem = Object.assign({}, item)
  
      },
      DELETE_POST(state, item) {
        state.editedIndex = state.posts.indexOf(item)
        state.editedItem = Object.assign({}, item)
        state.dialogDelete = true
      },
      DELETE_CONF(state) {
        state.posts.splice(state.editedIndex, 1)
      },
      CLOSE_DEL (state) {
          state.dialogDelete = false
          state.editedItem = Object.assign({}, state.defaultItem)
          state.editedIndex = -1
      },
      ADD_POST(state, payload) {
        state.posts.push(payload);
      },
      UPDATE_POST(state, payload) {
        Object.assign(state.posts[state.editedIndex], payload)
        state.editedItem = Object.assign({}, state.defaultItem)
      }
  },
  actions: {
    getPosts ({state, commit }) {
      if (state.posts.length == 0) {
      axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
      commit('SET_POSTS', response.data)
      })}
      },
      editItem ({ commit }, item) {
        commit('EDIT_POST', item)
      },
      deleteItem ({ commit }, item) {
        commit('DELETE_POST', item)
      },
      deleteItemConfirm  ({ commit }) {
        commit('DELETE_CONF');
      },
      closeDelete ({ commit }) {
        commit('CLOSE_DEL');
      },
      addPost: ({ state, commit }, value) => {
        value.id = state.posts.length+1;
        commit('ADD_POST', value);
        router.push("/posts");
      },
      updatePost: ({ commit }, value) => {
        commit("UPDATE_POST", value);
        router.push("/posts");
      }},
      plugins: [createPersistedState()],
})
