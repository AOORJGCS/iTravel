<template>
  <div id="home">
    <Header/>  
    <Swiper/>  
  </div>

</template>

<script>
// @ is an alias to /src
import Header from "@/pages/components/header";
import Swiper from "@/pages/components/swiper";

export default {
  name: 'home',
  components: {
     Header,
     Swiper,
  }
}
</script>
