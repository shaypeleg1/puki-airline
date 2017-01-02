<template>
<nav class="navbar navbar-default">
  <div class="navbar-header">
    <router-link to="/" class="navbar-brand">Vue Airlines Ltd.</router-link>
  </div>
  <div>
    <ul class="nav navbar-nav">
      <li>
        <router-link to="/about">About</router-link>
      </li>
      <li>
        <router-link to="/contact">Contact</router-link>
      </li>
      <li>
        <router-link to="/plane-center">Planes Center</router-link>
      </li>
      <li>
        <router-link to="/passenger-center">Passengers Center</router-link>
      </li>

    </ul>
  </div>
</nav>
</template>

<script>
export default {
  name: 'main-nav'
}
</script>

<style scoped>

</style>


