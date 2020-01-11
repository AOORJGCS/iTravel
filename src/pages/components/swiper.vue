<template>
   <div class="wrapper">
     <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide v-for="item in swiperList" :key="item.id">
          <img class="swiper-img" :src="item.imgUrl" >
        </swiper-slide>
 
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
   </div>
</template>
 
<script>
  export default {
    name: 'carrousel',
    data() {
      return {
        swiperOption: {
          pagination:'.swiper-pagination',
          autoplayDisableOnInteraction:false,
          paginationClickable:true,
          autoplay: 1000,
          speed: 800,
          loop:true,
        
        },
        swiperSlides: [1, 2, 3, 4, 5],
        swiperList:[
          {
           id: '001',
           imgUrl:'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20201/8c458e9fe5b5f4575b1d7ec0489a9ff8.jpg_750x200_f0fbf511.jpg'
         },
          {
           id: '002',
           imgUrl:'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/201912/d6df0db510d7b9aaa3d9ce4cffafeca1.jpg_750x200_abb38f14.jpg'
         },
          {
           id: '003',
           imgUrl:'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20201/8c458e9fe5b5f4575b1d7ec0489a9ff8.jpg_750x200_f0fbf511.jpg'
         },
        
      
        ]
      }
    },

  }
</script>

<style lang="stylus" scoped>
 
   .wrapper >>> .swiper-pagination-bullet-active{
         background-color #fff 
  }

    .wrapper{
       width 100%
       height 0
       padding-bottom  26.67%
       background-color #eee

    }

   .wrapper  .swiper-img{
     width 100%
    height: 110.41px;


  }

</style>