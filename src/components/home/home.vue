<template>
  <div class="row my-card">
    <Header></Header>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>
<style scoped src="./home.css"></style>
<script>
import Header from "@/components/header/header";
export default {
name: "home",
  components: {Header}
}
</script>

