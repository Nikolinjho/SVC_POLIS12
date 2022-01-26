<template>
  <div id="app" class="container">
    <!-- <keep-alive> -->
    <router-view />
    <!-- </keep-alive> -->
  </div>
</template>

<script>
export default {
  name: 'App',

  methods: {},
  computed: {},
};
</script>

<style>
* {
  box-sizing: border-box;
}
#app {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  -webkit-font-smoothing: antialiased;
  color: black;
  height: 100%;
  /* margin-top: 30px; */
}

.container {
  margin: 0 15px;
}

@media (min-width: 768px) {
  .container {
    margin-right: 30px;
    margin-left: 30px;
  }
}

@media (min-width: 1024px) {
  .container {
    margin-right: 50px;
    margin-left: 50px;
  }
}

@media (min-width: 1100px) {
  .container {
    margin-right: 14vw;
    margin-left: 14vw;
  }
}

@media (min-width: 1600px) {
  .container {
    margin-right: 12vw;
    margin-left: 12vw;
  }
}
</style>
