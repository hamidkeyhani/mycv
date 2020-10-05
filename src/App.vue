<template>
  <div id="app">
    <div id="nav">
      <router-link to="/accomplishments">Accomplishments</router-link> |
      <router-link to="/contact">Contact</router-link> |
      <router-link to="/education">Education</router-link> |
      <router-link to="/experience">Experience</router-link> |
      <router-link to="/">Resume</router-link> |
      <router-link to="/skills">Skills</router-link>
    </div>
    <router-view/>
  </div>
</template>

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

#nav {
  padding: 30px;

  @font-face {
    font-family: "Dosis";
    font-weight: 300;
    font-style: normal;
    src: url('assets/fonts/Dosis.ttf') format("truetype");
  }
}
</style>
