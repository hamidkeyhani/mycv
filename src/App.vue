<template>
  <div id="app">
      <home/>
  </div>
</template>
<script>
import Home from "@/components/home/home";

export default {
  name: "app",
  components: {Home}
}
</script>
<style lang="scss">

html, body{
  height: 100%;
  min-height: 100%;
}

#app {
  font-family: 'Dosis',sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
@font-face {
  font-family: "Dosis";
  font-weight: 300;
  font-style: normal;
  src: url('assets/fonts/Dosis.ttf') format("truetype");
}
</style>
