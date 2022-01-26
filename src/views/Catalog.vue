<template>
<div class="catalog">
  <Loader v-if="loading" />
  <div class="header">
    <div class="header__title">
      Каталог
    </div>
  </div>
  <div class="catalog__grid">
    <User-Item v-for="userItem in users" :key="userItem.id" :user="userItem" />
  </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex';

import UserItem from '../components/UserItem.vue';

export default {
  name: 'catalog',
  components: {
    UserItem,
  }, 
  data() {
    return {
      loading: true
    };
  },
  computed: {
    ...mapGetters(['getUserById']),
    users(){
      return this.$store.getters.users
    }
  },
  async created() {
    if (!Object.keys(this.$store.getters.users).length) {
      console.log(123);
      await this.$store.dispatch('fetchUsers');
    } 
      this.loading = false

  },
};
</script>

<style>

.catalog__grid {
  display: flex;
  flex-wrap: wrap;
}
</style>
