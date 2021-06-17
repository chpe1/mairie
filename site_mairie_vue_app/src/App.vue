<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { WOW } from "wowjs";
import "animate.css";
import './stylesheets/default.css'
import './stylesheets/style.css'
import './stylesheets/responsive.css'
import 'normalize.css'
new WOW().init();

export default {
  name: "App",
};
</script>