<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <!-- <router-link to="/about">About</router-link> -->
	  <router-link to="/playbookList">playbooklist</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
	
</script>

<style>
html, body {
    overflow: hidden;
    margin: 0;
    font-size: 12px;
}
#app{
  margin: 0;
  padding: 0;
}
</style>
