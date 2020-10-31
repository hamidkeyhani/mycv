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
          title: "Primary project of iranian credit card company",
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
          appLink: "https://play.google.com/store/apps/details?id=ir.iccard.app&hl=en_US",
          pic: "https://devv.ir/screen/Iccard/iccard5.jpg",
          title: "Primary project of iranian credit card company",
          screenShots: "https://devv.ir/screen/Iccard",
          description: "I work as android developer on this project"
        },
        {
          company: "Asa Technology Group",
          appLink: "https://play.google.com/store/apps/details?id=ir.iccard.app&hl=en_US",
          pic: "https://devv.ir/screen/Iccard/iccard3.jpg",
          title: "Primary project of iranian credit card company",
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
