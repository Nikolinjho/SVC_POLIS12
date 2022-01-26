import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate'


Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    users: {},
  },
  actions: {
    async fetchUsers({ commit, dispatch }) {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users/',
        );
        const users = await response.json();
        commit('setUsers', users);
        return users
        // return Object.values(users).map(user => ({
        //   id: user.id,
        //   name: user.name,
        //   nickname: user.username,
        //   email: user.email
        // }));
      } catch (error) {
        throw error;
      }
    },
    async fetchGallery({commit,dispatch}, userId){
      const albums = await dispatch('fetchAlbumByUserId', userId)
      return await Promise.all(Object.keys(albums).map(async key => {
        const photosOfAlbum = await dispatch('fetchPhotosByAlbum', albums[key].id)
        return {
          ...albums[key],
          photos: photosOfAlbum
        }
      }))
    },
    async fetchAlbumByUserId({commit, dispatch}, id){
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}/albums`)
      const albums = await response.json()
      return albums
    },
    async fetchPhotosByAlbum({commit, dispatch}, albumId, limit = 5){
      const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos?_limit=${limit}`)
      const photos = response.json()
      return photos
    },
    async fetchUserPosts({commit, dispatch}, id){
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
      const posts = await response.json()
      return posts
    }
  },
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
  },
  getters: {
    users: state => state.users,
    getUserById: (state) => (id) => {
      return state.users.find(user => user.id == id)
    },
  },
  plugins: [createPersistedState()]
});

export default store;
