<template>
  <div class="header">
        <div class="header-left">
          <span class="icon iconfont">&#xe609;</span>
          </div>
        <div class="header-middle">
          <span class="icon iconfont serach-icon ">&#xe632;</span>
          <div class="kw">输入城市/</div>
          <input type="text" class="middle-input">
        </div>
        <div class="header-right">
          城市<span class="icon iconfont">&#xe72e;</span>
      </div>
  </div>
</template>

<script>
export default {
  name: "Header",

};
</script>



<style lang="stylus" scoped>
@import  '~@/assets/styles/variables.styl' ;
 .header{
      width 100%;
      height .88rem;
      display flex;
      color #fff;
      text-align center;
      background-color $bgColor;

 }

.header-left{
 width .8rem
 height 100%
 line-height: .88rem


}
.header-middle{
      flex  1
      margin .14rem 0
      position relative
}

 .header-middle .middle-input
       width 100%
       height 100%
       border-radius .06rem

.header-middle .kw
     color #e4e7ea
     position absolute
     top .16rem
     left .65rem

.header-middle .serach-icon
     position absolute
     top .13rem
     left .2rem
     color #e4e7ea


.header-right{
     width 1rem;
     height 100%;
     line-height: .88rem


 }


  .message 
    padding 10px;
    border 1px solid #eee;
  

  .warning 
    @extend .message;
    color #E2E21E;
  

</style>
