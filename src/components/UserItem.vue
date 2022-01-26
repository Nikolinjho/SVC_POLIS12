<template>
  <div class="user-item" v-hover>
    <router-link
      tag="a"
      :to="{ name: 'profile', params: { id: user.id } }"
      class="user-item__inner"
    >
      <div class="user-item__name">{{ user.name }}</div>
      <div class="user-item__nickname">"{{ user.username }}"</div>
      <div class="user-item__email">{{ user.email }}</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'userItem',
  data() {
    return {};
  },
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.user-item {
  width: 100%;
  flex: 1 0 100%;
  margin-bottom: 35px;
  &__inner {
    margin: 0 20px;
    padding: 52px 55px;
    display: block;
    color: #323c46;
    background-color: #f8f8f9;
    line-height: 1;
    position: relative;
  }
  &__name {
    font-size: 25px;
  }
  &__nickname {
    font-size: 18px;
    margin-bottom: 15px;
  }
  &__email {
    font-size: 18px;
  }
}

@media (min-width: 768px) {
  .user-item {
    width: 50%;
    flex: 1 0 50%;
  }
}
</style>
