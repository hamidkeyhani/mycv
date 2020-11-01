<template src="./Works.html"></template>
<style scoped src="./Works.css"></style>
<script>
export default {
name: "Accomplishments",
  data() {
    return {
      works: [
        {
          company: "Iranian Credit Card Application",
          appLink: "https://play.google.com/store/apps/details?id=ir.iccard.app&hl=en_US",
          pic: "https://devv.ir/screen/Iccard/iccard2.jpg",
          screenShots: "https://devv.ir/screen/Iccard",
          description: "I work as android developer on this project",
          video: "",
          tech: "",
          preLink: "Download"
        },
        {
          company: "Fava Application",
          appLink: "https://cafebazaar.ir/app/ir.semnan.app.tourism",
          pic: "https://devv.ir/screen/SemnanTourism/semnan2.jpg",
          screenShots: "https://devv.ir/screen/SemnanTourism",
          description: "This is a Tourism Application for Semnan Province. I develop this app as senior android developer in Semnan Information and Communication Technology (Fava)",
          video: "",
          tech: "Recycler View, Navigation Menu, MVVM Architecture, Retrofit, RxJava, kotlin, data binding",
          preLink: "Download"
        },
        {
          company: "Seman Market Application",
          appLink: "https://play.google.com/store/apps/details?id=ir.iccard.app&hl=en_US",
          pic: "https://devv.ir/screen/GroceryApp/Grocery2.jpg",
          screenShots: "https://devv.ir/screen/GroceryApp",
          description: "This is a Grocery Android Application for Semnan Province",
          video: "",
          tech: "",
          preLink: "Download"
        },
        {
          company: "Smart Home Application",
          appLink: "https://play.google.com/store/apps/details?id=ir.iccard.app&hl=en_US",
          pic: "https://devv.ir/screen/SmartHome/SmartHome1.jpg",
          screenShots: "https://devv.ir/screen/SmartHome",
          description: "At Asa Technology Group I Develop Smart Home Android Application for control our products such as smart key & smart strip",
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
