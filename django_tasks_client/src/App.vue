<template>
  <div id="app">
    <Tasks_one />
  </div>
</template>

<script>
import Tasks_one from "./components/Tasks_one.vue";
export default {
  name: "App",
  components: {
    Tasks_one,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
