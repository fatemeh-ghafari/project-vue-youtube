<template>
<div id="app">
  <h1>Text((: !</h1>
  <p>
    <router-link to="/">Go to Home</router-link>
    <router-link to="/videoPlay">Go to Video play</router-link>
  </p>
 
  <router-view></router-view>
</div>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    //
  }),
};
</script>
