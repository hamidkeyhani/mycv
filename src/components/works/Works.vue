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
          appLink: "",
          pic: "https://devv.ir/screen/Iccard/iccard1.jpg",
          title: "",
          screenShots: "https://devv.ir/screen/Iccard",
          description: "I work as android developer on this project"
        },
        {
          company: "Fava",
          appLink: "https://cafebazaar.ir/app/ir.semnan.app.tourism",
          pic: "https://devv.ir/screen/SemnanTourism/semnan2.jpg",
          title: "Semnan Tourism App",
          screenShots: "https://devv.ir/screen/SemnanTourism",
          description: "I work as android developer on this project"
        },
        {
          company: "Private",
          appLink: "",
          pic: "https://devv.ir/screen/Iccard/iccard5.jpg",
          title: "",
          screenShots: "https://devv.ir/screen/Iccard",
          description: "I work as android developer on this project"
        },
        {
          company: "Asa Technology Group",
          appLink: "",
          pic: "https://devv.ir/screen/Iccard/iccard3.jpg",
          title: "",
          screenShots: "https://devv.ir/screen/Iccard",
          description: "I work as android developer on this project"
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
