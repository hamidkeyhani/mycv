<template src="./Skills.html"></template>
<style scoped src="./Skills.css"></style>
<script>
export default {
name: "Skills",
  data() {
  return {
    androidSkills: [
      {
        'name' : 'Java',
        'link' : 'https://www.java.com/'
      },
      {
        'name' : 'Kotlin',
        'link' : 'https://kotlinlang.org/'
      },
      {
        'name' : 'Object-Oriented Programing(OOP)',
        'link' : 'https://en.wikipedia.org/wiki/Object-oriented_programming'
      },
      {
        'name' : 'MVVM & MVP Architecture',
        'link' : 'https://developer.android.com/jetpack/guide'
      },
      {
        'name' : 'Android Services',
        'link' : 'https://developer.android.com/guide/components/services'
      },
      {
        'name' : 'RxAndroid & RxJava',
        'link' : 'https://www.vogella.com/tutorials/RxJava/article.html'
      },
      {
        'name' : 'Reactive Programming',
        'link' : 'http://reactivex.io/'
      },
      {
        'name' : 'Broadcasts',
        'link' : 'https://developer.android.com/guide/components/broadcasts'
      },
      {
        'name' : 'Bluetooth API',
        'link' : 'https://developer.android.com/guide/topics/connectivity/bluetooth'
      },
      {
        'name' : 'Socket Programming(UDP & TCP)',
        'link' : 'https://developer.android.com/reference/java/net/Socket'
      },
      {
        'name' : 'Socket.io',
        'link' : 'https://socket.io/'
      },
      {
        'name' : 'MediaPlayer API',
        'link' : 'https://developer.android.com/reference/android/media/MediaPlayer'
      },
      {
        'name' : 'Data Binding',
        'link' : 'https://developer.android.com/topic/libraries/data-binding'
      },
      {
        'name' : 'View Binding',
        'link' : 'https://developer.android.com/topic/libraries/view-binding'
      },
      {
        'name' : 'MapBox SDK',
        'link' : 'https://docs.mapbox.com/android/maps/overview/'
      },
      {
        'name' : 'SQLite',
        'link' : 'https://developer.android.com/training/data-storage/sqlite'
      },
      {
        'name' : 'Room Persistence',
        'link' : 'https://developer.android.com/topic/libraries/architecture/room'
      },
      {
        'name' : 'Dagger',
        'link' : 'https://developer.android.com/training/dependency-injection/dagger-android'
      },
      {
        'name' : 'Gson',
        'link' : 'https://github.com/google/gson'
      },
      {
        'name' : 'Retrofit',
        'link' : 'https://square.github.io/retrofit/'
      },
      {
        'name' : 'Volley',
        'link' : 'https://developer.android.com/training/volley#:~:text=Volley%20is%20an%20HTTP%20library,Automatic%20scheduling%20of%20network%20requests.&text=Transparent%20disk%20and%20memory%20response%20caching%20with%20standard%20HTTP%20cache%20coherence.'
      },
      {
        'name' : 'Lambda Expressions',
        'link' : 'https://www.tutorialspoint.com/java8/java8_lambda_expressions.htm'
      }
    ],
    webSkills: [
      {
        'name' : 'Html & Css',
        'link' : 'https://www.w3schools.com/html/html_css.asp'
      },
      {
        'name' : 'Vue.js',
        'link' : 'https://vuejs.org/'
      },
      {
        'name' : 'Vue Router',
        'link' : 'https://router.vuejs.org/'
      },
      {
        'name' : 'Vuex',
        'link' : 'https://vuex.vuejs.org/'
      },
      {
        'name' : 'Babel js',
        'link' : 'https://babeljs.io/'
      },
      {
        'name' : 'Axios',
        'link' : 'https://www.npmjs.com/package/axios'
      }
    ],
    backEndSkills: [
      {
        'name' : 'Php',
        'link' : 'https://www.php.net/'
      },
      {
        'name' : 'Medoo',
        'link' : 'https://medoo.in/'
      },
      {
        'name' : 'MySQLi',
        'link' : 'https://www.php.net/manual/en/book.mysqli.php'
      },
      {
        'name' : 'Node.js',
        'link' : 'https://nodejs.org/'
      },
      {
        'name' : 'TypeScript',
        'link' : 'https://www.typescriptlang.org/'
      },
      {
        'name' : 'MongoDB',
        'link' : 'https://www.mongodb.com/'
      },
      {
        'name' : 'Mongoose',
        'link' : 'https://mongoosejs.com/'
      }
    ],
    otherSkills: [
      {
        'name': 'Linux Distros(Ubuntu & Manjaro)',
        'link': 'https://www.linux.org/'
      }
    ]
  }
  },
  methods: {
    openNewWindow(link) {
      window.open(link)
    }
  }
}
</script>

