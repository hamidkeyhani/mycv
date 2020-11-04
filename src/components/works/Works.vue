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
          description: "free and user-friendly mobile payment application that provides highly secure access to a wide range of payment services.",
          video: "",
          tech: "MVVM Architecture," +
              " Kotlin coroutines," +
              " Dagger," +
              " RxJava & RxAndroid," +
              " Retrofit," +
              " Gson," +
              " Data Binding," +
              " Socket.io," +
              " Google Map," +
              " Shimmer Library, ..."
          ,
          preLink: "Download"
        },
        {
          company: "Fava Application",
          appLink: "https://cafebazaar.ir/app/ir.semnan.app.tourism",
          pic: "https://devv.ir/screen/SemnanTourism/semnan2.jpg",
          screenShots: "https://devv.ir/screen/SemnanTourism",
          description: "A suitable companion for traveling to Semnan",
          video: "",
          tech: "Recycler View, Navigation Menu, MVVM Architecture, Retrofit, RxJava, kotlin, data binding",
          preLink: "Download"
        },
        {
          company: "Seman Market Application",
          appLink: "",
          pic: "https://devv.ir/screen/GroceryApp/Grocery2.jpg",
          screenShots: "https://devv.ir/screen/GroceryApp",
          description: "This is a Online Grocery Android Application for Semnan Province",
          video: "",
          tech: " MVVM architecture," +
              " RxJava & RxAndroid," +
              " Kotlin," +
              " Room," +
              " Retrofit,"+
              " Android Animations," +
              " Android Material Design Library, ..."
          ,
          preLink: "Download"
        },
        {
          company: "Smart Home Application",
          appLink: "",
          pic: "https://devv.ir/screen/SmartHome/SmartHome1.jpg",
          screenShots: "https://devv.ir/screen/SmartHome",
          description: "At Asa Technology Group I Develop Smart Home Android Application for control our products such as smart key & smart strip",
          video: "",
          tech: " MVVM architecture," +
              " RxJava & RxAndroid," +
              " Kotlin," +
              " Socket (UDP & TCP)," +
              " Bluetooth API, ...",
          preLink: "Download"
        },
        {
          company: "Cout Progress Bar",
          appLink: "https://github.com/hamidkeyhani/CoutProgressBar",
          pic: "https://devv.ir/screen/Cout/Cout.jpg",
          screenShots: "",
          description: "This is a progress bar library for android",
          video: "",
          tech: "Kotlin, Java, Android Animations, Android Library",
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
