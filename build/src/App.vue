<template>
  <div class="main">
    <transition name="fade">
      <router-view></router-view>
      <!--<home></home>-->
    </transition>
  </div>
</template>

<script>
  import home from './components/home'

  // import navbar from './components/navbar'
  // import foot from './components/footer'
  export default {
    data(){
      return {
          initialpop: true,
          loading: true,
          color:"black",
          size:"30px"
      }
    },
    components:{
      //
      // navbar:navbar,
      // foot:foot,
      home:home,
    }
  }
</script>
<style >
  .fade-enter-active, .fade-leave-active {
    transition-property: opacity;
    transition-duration: .7s;
  }

  .fade-enter-active {
    transition-delay: .7s;
  }

  .fade-enter, .fade-leave-active {
    opacity: 0
  }
  .shadows-box{
      box-shadow: 6px 0 17px -4px #222 , -6px 0 17px -4px #222;
      -moz-box-shadow: 6px 0 12px -4px #222, -6px 0 12px -4px #222;
      -webkit-box-shadow: 6px 0 12px -4px #222, -6px 0 12px -4px #222;
  }

  @media (max-width: 500px){

    .shadows-box{
      box-shadow: 0px 0px 0px 0px #222;
      -moz-box-shadow: 0px 0px 0px 0px #222;
      -webkit-box-shadow:0px 0px 0px 0px #222;
  }
  }

  @import '../src/assets/css/home.css';

</style>
