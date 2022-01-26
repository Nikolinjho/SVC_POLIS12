<template>
  <div class="page">
    <div class="header">
      <router-link to="/" class="header__link">
        <svg
          width="40"
          height="37"
          viewBox="0 0 40 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M35.0001 16.9584H10.6901L19.5117 8.79832L17.1551 6.61841L4.31006 18.5L17.1551 30.3817L19.5117 28.2017L10.6901 20.0417H35.0001V16.9584Z"
            fill="#B8B8B8"
          />
        </svg>
        Назад
      </router-link>
      <div class="header__title">Профиль</div>
    </div>
    <div class="profile">
      <div class="profile-row">
        <div class="profile-row__title"></div>
        <div class="profile-row__content">
          <div class="info-item">
            <div class="info-item__category">Name:</div>
            <div class="info-item__title">{{ user.name }}</div>
          </div>
          <div class="info-item">
            <div class="info-item__category">Nickname:</div>
            <div class="info-item__title">{{ user.username }}</div>
          </div>
          <div class="info-item">
            <div class="info-item__category">Email:</div>
            <div class="info-item__title">{{ user.email }}</div>
          </div>
        </div>
      </div>
      <Loader v-if="loading" />
      <div class="profile__content" v-else>
        <div class="profile-row" >
          <div class="profile-row__title">Gallery</div>
          <div class="profile-row__content">
            <Album v-for="album in albums" :key="album.id" :album="album" />
          </div>
        </div>

        <div class="profile-row" >
          <div class="profile-row__title">Posts</div>
            <div class="profile-row__content posts">
              <Post v-for="post in posts" :key="post.id" :post="post"/>
            </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import Album from '../components/Album.vue';
import Post from '../components/Post.vue'

export default {
  name: 'profile',
  components: {
    Album,
    Post
  },
  data() {
    return {
      loading: true,
      albums: [],
      posts: []
    };
  },
  computed: {
    ...mapGetters(['getUserById']),
    user() {
      return this.getUserById(this.id);
    },
  },
  async created() {
    this.id = this.$route.params.id;
    this.albums = await this.$store.dispatch('fetchGallery', this.id);
    this.posts = await this.$store.dispatch('fetchUserPosts', this.id)
    console.log(this.posts);
    this.loading = false;
  },
};
</script>

<style scoped>
.profile {
  &-row {
    margin-top: 45px;
    &__title{
      font-size: 30px;
    }
  }
  &__content{
    padding-bottom:25px;
  }
}
.info-item {
  display: flex;
  align-items: flex-end;

  &__category {
    font-size: 18px;
    margin-right: 8px;
  }
  &__title {
    font-size: 22px;
  }
}
.posts{
  display: flex;
  flex-wrap: wrap;
}

@media (min-width: 1024px){
.info-item {

  &__category {
    font-size: 18px;
  }
  &__title {
    font-size: 30px;
  }
}
}
</style>
