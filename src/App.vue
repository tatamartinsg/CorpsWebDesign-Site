<script>
import { RouterLink, RouterView } from 'vue-router'
import Header from './utils/Header.vue'
import Footer from './utils/Footer.vue'

export default {
    name: 'App',
    components: {
      'navbar-header': Header,
      'my-footer': Footer
    },
  }
</script>

<template>
  <div>
    <div>
      <navbar-header />
    </div>
  </div>
  <RouterView />
  <div>
      <my-footer />
  </div>
</template>

<style>
body{
  min-width: 150px;
}
</style>
