<template>
<h1> {{test}} </h1>
<router-link id="FirstPart" to="/Home">FirstPart</router-link>
<hr>
<!-- <router-view></router-view> -->
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      test:"This is Home Page "
    };
  }
};
</script>
