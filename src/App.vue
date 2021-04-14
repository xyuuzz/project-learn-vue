<template>

  <!-- Nah dibawah ini adalah sebuah komponen yang kita buat sendiri, ingat yaa, nama komponen itu bebas, namanya dnklsadnaslkdnal pun boleh, namun sebagai Programmer Professional, nama file tentunya berhubungan dengan isi yang ada di dalam file nya. -->
  <Index lapor="lapor ini adalah komponen index.vue"/>

  <img alt="Vue logo" src="./assets/logo.png">

  <!-- msg merupakan props dari komponen HelloWorld -->
  <!-- apa sih itu props? Props pada vue.js adalah sebuah data yang dapat di parsing(dikirim) oleh file yang menggunakan komponen yang memiliki sebuah props, yang nanti value nya itu dapat diterima oleh si pemilik komponen untuk diolah lebih lanjut -->
  <!-- disini komponen HelloWorld memiliki sebuah props bernama msg. nah di App.vue ini, kita menggunakan komponen HelloWorld dan mempassing sebuah value ke komponen HelloWorld yang perantaranya adalah si props msg tersebut. -->
  <HelloWorld msg="Selamat Belajar Vue.JS kakak"/> 
  
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld, 
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>