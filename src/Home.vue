<template>
  <div id="home">
    <Header/>  
    <Swiper/>  
    <Icons/>  
  </div>

</template>

<script>
// @ is an alias to /src
import Header from "@/pages/components/header";
import Swiper from "@/pages/components/swiper";
import Icons from "@/pages/components/icons";

export default {
  name: 'home',
  components: {
     Header,
     Swiper,
     Icons
  }
}
</script>
