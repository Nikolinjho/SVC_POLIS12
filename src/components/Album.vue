<template>
  <div class="album">
    <div class="album__title">{{ album.title }}</div>
    <VueSlickCarousel v-bind="slickSettings">
      <div class="slide" v-for="slide in album.photos" :key="slide.id">
        <img class="slide__img" :src="slide.url" alt="" />
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';

export default {
  name: 'alboom',
  data() {
    return {
      slickSettings: {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
           {
            breakpoint: 1400,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              arrows: false,
            },
          },
        ],
      },
    };
  },
  components: {
    VueSlickCarousel,
  },
  props: {
    album: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    console.log(this.album['photos']);
  },
};
</script>

<style scoped>
.album {
  margin-top: 35px;
  /* padding: 0 45px; */
  &__title {
    font-size: 25px;
    margin-bottom: 10px;
  }
}

.slide {
  position: relative;
  padding-bottom: 80%;
  &__img {
    position: absolute;
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
    user-drag: none;
    width: 100%;
    height: 100%;
  }
}
</style>
