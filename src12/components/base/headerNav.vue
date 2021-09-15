<template>
  <div>
    <div class="header">
      <router-link tag="div" to="/menun" class="left iconfont icon-gengduo1"></router-link>
      <div class="center">VMUSIC</div>
      <router-link tag="div" to="search" class="right iconfont icon-search"></router-link>
    </div>
    
    <div class="navs">
      <router-link to="/recommend" class="item"><span>推荐</span></router-link>
      <router-link to="/rank" class="item"><span>排行榜</span></router-link>
      <router-link to="/singer" class="item"><span>歌手</span></router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" >
    .header{
    height: 40px;
    display: flex;
    background-color: red;
    color: white;
    text-align: center;
    .left,.right{
      flex: 0 0 40px;
      line-height: 40px;
    }
    .center{
      flex: 1;
      line-height: 40px;
    }
  }

  .navs{
    height: 40px;
    display: flex;
    background-color: red;
    color: white;
    text-align: center;
    .item{
      flex: 1;
      width: 33.33%;
      text-align: center;
      font-size: 15px;
      span{
        margin-top: 9px;
        display: inline-block;
        height: 21px;
        line-height: 21px;
        border-bottom:  1px solid transparent;
        color: white;
      }
      &.router-link-active span{
        font-weight: bold;
        border-color: white;
      }
    }
  }
</style>