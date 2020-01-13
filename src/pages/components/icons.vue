<template>
<div class="icons-swiper">
     <swiper :options="swiperOption" >
        <swiper-slide  v-for="(page, idex) in pages" :key="idex">
              <div class="icon-box" v-for="item in page" :key="item.id">
                  <div class="icon-img-box" >
                      <img  class="icon-img"  :src="item.imgUrl">
                  </div>
                    <p class="icon-desc">{{item.desc}}</p>
              </div>
       </swiper-slide >
         
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "homeIcons",
  props: {

    },
  data() {
      return {
        swiperOption: {
          pagination:'.swiper-pagination',
          autoplayDisableOnInteraction:false,
          paginationClickable:true,
          autoplay: 1000,
          speed: 600,
          loop:true,
        
        },
iconsList:[
          {
           id: '001',
           imgUrl:'https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
           desc: '景点门票'
         },
          {
           id: '002',
           imgUrl:'https://imgs.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png',
           desc: '一日游'
         },
          {
           id: '003',
           imgUrl:'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/a40ee278d67000f2a29d2e20f6a029b3.png',
           desc: '长沙必游'
         },
          {
           id: '004',
           imgUrl:'https://imgs.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png',
           desc: '踏青赏花'
         },
          {
           id: '005',
           imgUrl:'https://imgs.qunarzz.com/piao/fusion/1803/b1/528a9e80403b8c02.png',
           desc: '游乐场'
         },
          {
           id: '006',
           imgUrl:'https://imgs.qunarzz.com/piao/fusion/1803/e3/67df61427c8e1302.png',
           desc: '动植物园'
         },
          {
           id: '007',
           imgUrl:'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/a40ee278d67000f2a29d2e20f6a029b3.png',
           desc: '自然风光'
         },
          {
           id: '008',
           imgUrl:'https://imgs.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
           desc: '湘西凤凰'
         },
          {
           id: '009',
           imgUrl:'https://imgs.qunarzz.com/piao/fusion/1803/b6/37560ece9c62b502.png',
           desc: '橘汁粥'
         },
            {
           id: '011',
           imgUrl:'https://imgs.qunarzz.com/piao/fusion/1803/b1/528a9e80403b8c02.png',
           desc: '玻璃桥'
         }
       ],
      }
   },
   computed:{
      pages: function (){
         var pages = [];
          this.iconsList.forEach(function(item,idex){
                  var page  = Math.floor(idex / 8);
                  if (! pages[page]) {
                         pages[page] = [];
                  }
                   pages[page].push(item)
          })
        return pages;

      }
   }
}
</script>

<style lang="stylus" scoped>
@import  '~@/assets/styles/variables.styl' ;
@import  '~@/assets/styles/mixins.styl' ;

  .wrapper >>> .swiper-pagination-bullet-active{
         background-color #fff 
  }



.icons-swiper
     width 100%
     height 0
     padding-bottom  50%

 

.icons-swiper .icon-box
  position relative
  float left
  width 25%
  height 0
  padding-bottom 25%



.icon-box .icon-img-box 
      position absolute
      top 0
      left 0
      right 0
      bottom  .44rem




.icons-swiper .icon-img-box .icon-img
      display  block
      height  100%
      margin 0 auto



.icon-desc 
  position absolute
  bottom  0
  left  0
  right  0
  height  .44rem 
  line-height  .44rem
  text-align center
  color  $darkColor
  ellipsis()
 


</style>