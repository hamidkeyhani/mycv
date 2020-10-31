<template src="./Works.html"></template>
<style scoped src="./Works.css"></style>
<script>
export default {
name: "Accomplishments",
  data() {
    return {
      works: [
        {
          company: "Iranian Credit Card",
          appLink: "https://play.google.com/store/apps/details?id=ir.iccard.app&hl=en_US",
          pic: "https://devv.ir/screen/Iccard/iccard1.jpg",
          screenShots: "https://devv.ir/screen/Iccard",
          description: "I work as android developer on this project",
          video: "",
          tech: "",
          preLink: "Download"
        },
        {
          company: "Fava",
          appLink: "https://cafebazaar.ir/app/ir.semnan.app.tourism",
          pic: "https://devv.ir/screen/SemnanTourism/semnan2.jpg",
          screenShots: "https://devv.ir/screen/SemnanTourism",
          description: "I work as android developer on this project",
          video: "",
          tech: "Recycler View, Navigation Menu, MVVM Architecture, Retrofit, RxJava, kotlin, data binding",
          preLink: "Download"
        },
        {
          company: "Grocery App",
          appLink: "https://play.google.com/store/apps/details?id=ir.iccard.app&hl=en_US",
          pic: "https://devv.ir/screen/GroceryApp/Grocery2.jpg",
          screenShots: "https://devv.ir/screen/GroceryApp",
          description: "I work as android developer on this project",
          video: "",
          tech: "",
          preLink: "Download"
        },
        {
          company: "Asa Technology Group",
          appLink: "https://play.google.com/store/apps/details?id=ir.iccard.app&hl=en_US",
          pic: "https://devv.ir/screen/Iccard/iccard3.jpg",
          screenShots: "https://devv.ir/screen/Iccard",
          description: "I work as android developer on this project",
          video: "",
          tech: "",
          preLink: "Download"
        },
        {
          company: "Cout Progress Bar",
          appLink: "https://github.com/hamidkeyhani/CoutProgressBar",
          pic: "https://devv.ir/screen/Cout/Cout.jpg",
          screenShots: "",
          description: "This is a progress bar library for android",
          video: "",
          tech: "",
          preLink: "Github"
        }
      ]
    }
  },
  methods: {
    openNewTab(url) {
      window.open(url)
    }
  }
}
</script>
