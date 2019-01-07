<template>
<div class="navbar">

  <nav class="navbar navbar-default navbar-fixed-top" role="navigation" style="background-color:#12151b;border:#12151b;z-index: 9999">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button style="color: black" type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar top-bar"></span>
        <span class="icon-bar middle-bar"></span>
        <span class="icon-bar bottom-bar"></span>
      </button>

    </div>
    <div class="navbar-brand navbar-brand-centered"><a href=""><img src="../assets/images/gttrans.png" id="navbar-logo"></a></div>
    <span class="navbar-brand" id="mobile-logo">Tech.GT</span>
    <!-- Collect the nav links, forms, and other content for toggling -->

    <div class="collapse navbar-collapse" id="navbar-collapse-1">
      <ul class="nav navbar-nav navbar-left">
        <li>
          <div id="abt-us">
            <a v-bind:href="'/#/category/technology'" style="text-decoration: none;"><span class="hover1">Home</span></a>
          </div>
        </li>

        <li>
          <div id="gallery">
            <a v-bind:href="'/#/tag/tech'"  style="text-decoration: none;"><span class="hover1">Tech</span></a>
          </div>
        </li>
        <li>
          <div id="test">
            <a v-bind:href="'/#/tag/howto'"  style="text-decoration: none;"><span class="hover1">How tos</span></a>
          </div>
        </li>

      </ul>
      <ul class="nav navbar-nav navbar-right">

        <li>
          <div id="academy">
            <a v-bind:href="'/#/tag/howitworks'" style="text-decoration: none;"><span class="hover1">How it works</span></a>
          </div>
        </li>
        <li>
          <div id="register">
            <a v-bind:href="'/#/about'" style="text-decoration: none;"><span class="hover1" id="reg">About</span></a>
          </div>
        </li>
        <li>
          <div id="blog">
            <a target="_blank" href="https://www.guindytimes.com" style="text-decoration: none;"><span class="hover1">GuindyTimes</span></a>
          </div>
        </li>
      </ul>
    </div>
    <!-- /.navbar-collapse -->
  </nav>

</div>
</template>

<script>
    export default {
        name: "navbar"
    }
</script>

<style scoped>

  @import '../assets/css/navbar.css';

</style>
