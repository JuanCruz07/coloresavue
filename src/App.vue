<template>
  <div id="app">
    <Juego />
  </div>
</template>

<script>
import Juego from "./components/Juego";
export default {
  name: "App",
  components: {
    Juego
  }
};
</script>

<style >
#app {

}
body {
	background-color: #232323;
	margin: 0;
	font-family: "Montserrat", "Avenir";
}
</style>
