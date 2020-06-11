<template>
  <section class="src-components-cuadrados">
    <div id="container">
      <div
        :style="{'backgroundColor': square}"
        class="square" :key="index"
        v-for="(square, index) in this.$store.state.squares"
        @click="checkWin(index, square)"
      ></div>
    </div>
  </section>
</template>

<script lang="js">

  export default  {
    name: 'src-components-cuadrados',
    props:{
      square: String,
      checkWin: Function
    },
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
.src-components-cuadrados {
}
.square {
	background-color: #232323;
	width: 30%;
	padding-bottom: 30%;
	float: left;
	margin: 1.66%;
	border-radius: 10%;
	transition: background 0.8s;
	-webkit-transition: background 0.8s;
	-moz-transition: background 0.8s;

}
#container {
	margin: 20px auto;
	max-width: 600px;
}
</style>
