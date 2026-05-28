<script setup>
import Home from './views/Home.vue';
import Navbar from './components/UI/navbar.vue';
import Footer from './components/UI/footer.vue';

</script>
<template>
  <Navbar/>
  <Home/>
  <router-view/>
  <Footer/>
</template>


