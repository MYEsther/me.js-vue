<template>
  <div id="app">
    <v-header></v-header>
    <transition name="move" mode="out-in"><router-view></router-view></transition>
    <a href="javascript:;" v-show="showTopBtn" class="goTop" @click="goTop()"></a>
  </div>
</template>
<script>
import vHeader from './components/common/Header.vue'
export default {
  name: 'app',
  components:{
    vHeader
  },
  data(){
    return {
      showTopBtn:false,
    }
  },
  mounted(){
    var that = this;
    window.addEventListener('scroll', function(){
      if(that.$root.scrollTop()>85){
        that.showTopBtn = true;
      }else{
        that.showTopBtn = false;
      }
    },false)
    
  },
  methods:{
    goTop(){
      window.scrollTo(0,0)
    },
  }
}
</script>

<style lang="less">
@import '../static/css/base.less';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
#app>div:not(.header){
    margin: 80px auto;
    width:1200px;
}
.move-enter-active,.move-leave-active{
    transition: opacity .5s;
}
.move-enter,.move-leave{
    opacity: 0;
}
.goTop{
    display:block;
    position:fixed;
    width:45px;
    height:45px;
    bottom:20px;
    z-index:1002;
    background:url(assets/gotop.jpg) no-repeat center center;
    background-position:0 0 ;
    transition:all .2s;
    right:5%;
    &:hover{
      background-position:0 -45px;
    }
  }
</style>
