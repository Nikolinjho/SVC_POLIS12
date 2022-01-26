<template>
  <div class="post">
    <div class="post__title">{{ post.title }}</div>
    <div class="post__text">{{ post.body }}</div>
  </div>
</template>

<script>
export default {
  name: 'post',
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.post {
  margin-top: 15px;
  width: 100%;
  flex: 1 0 100%;

  &__title {
    font-size: 25px;
    line-height: 28px;
  }
  &__text {
    margin-top: 8px;
    font-size: 16px;
    line-height: 19px;
  }
}

@media (min-width: 768px) {
  .post {
    width: 50%;
    flex: 1 0 50%;
    &:nth-child(odd) {
      padding-right: 25px;
    }
    &:nth-child(even) {
      padding-left: 25px;
    }
  }
}
</style>
