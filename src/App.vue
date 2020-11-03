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
<style>

html, body{
  height: 100%;
  min-height: 100%;
}

#app {
  font-family: "Dosis Regular", "Helvetica Neue", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
@font-face {
  font-family: "Dosis Regular";
  font-weight: 5000;
  font-style: normal;
  src: url('assets/fonts/Dosis-Regular.ttf') format("truetype");
}
</style>
