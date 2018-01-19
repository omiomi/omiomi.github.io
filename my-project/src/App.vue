<template>
  <div id="app">
    <nav-top></nav-top>
    <router-view/>
  </div>
</template>

<script>
import navTop from './components/TopNav'

export default {
  name: 'app',
  components: {
    navTop
  }
}
</script>

<style lang="scss">
  @import "node_modules/bootstrap/scss/functions";
  @import "node_modules/bootstrap/scss/variables";
  @import "node_modules/bootstrap/scss/mixins";

  // Optional
  @import "node_modules/bootstrap/scss/reboot";
  @import "node_modules/bootstrap/scss/type";
  @import "node_modules/bootstrap/scss/images";
  @import "node_modules/bootstrap/scss/code";
  @import "node_modules/bootstrap/scss/grid";
  $colors: (
    "blue": $blue,
    "indigo": $indigo,
    "purple": $purple,
    "pink": $pink,
    "red": $red,
    "orange": $orange,
    "yellow": $yellow,
    "green": $green,
    "teal": $teal,
    "cyan": $cyan,
    "white": $white,
    "gray": $gray-600,
    "gray-dark": $gray-800
  ) !default;
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #{$pink};
}
</style>
