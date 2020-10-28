<template src="./Contact.html"></template>
<style scoped src="./Contact.css"></style>
<script>
export default {
name: "Contact",
  data() {
    return {
      socialLinks: [
          "+989034017610",
          "hamidkeyhani8761@gmail.com",
          "Iran - Semnan Province - Semnan",
          "https://stackoverflow.com/users/8399393/hamid-keyhani",
          "https://github.com/hamidkeyhani",
          "https://gitlab.com/cout",
          "https://join.skype.com/invite/bid8xHmVl54T",
          "https://telegram.me/coutt",
          "https://www.instagram.com/hamidkeyhani_/"
      ]
    }
  },
  methods: {
    onSocialClick(url) {
      window.open(url)
    },
    sendEmail() {
      window.location = "mailto:hamidkeyhani8761@gmail.com"
    },
    callToMe() {
      document.location.href = "tel:+989034017610"
    }
  }
}
</script>

