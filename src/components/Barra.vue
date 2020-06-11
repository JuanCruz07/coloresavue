<template>
  <section class="src-components-barra">
    <div id="navigator">
      <button id="reset" @click="newColors">{{this.$store.state.won ? 'Play Again!' : 'New Colors!'}}</button>
      <span id="message">{{result}}</span>

      <button
        id="easy"
        :class="{selected: isEasy? true:false}"
        @click="isEasy ? null : createEasy()"
      >easy</button>
      <button
        id="hard"
        :class="{selected: isEasy? false:true}"
        @click="isEasy ? createHard() : null"
      >hard</button>
    </div>
  </section>
</template>

<script lang="js">

  export default  {
    name: 'src-components-barra',
    props: ['isEasy', 'result', 'newColors', 'createEasy', 'createHard'],
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
.src-components-barra {
}
#navigator {
  background: #ffffff;
  height: 30px;
  text-align: center;
  margin: 0;
  margin-top: -30px;
}
#message {
	color: black;
	display: inline-block;
	width: 20%;
}
button {
	border: none;
	background-color: white;
	font-family: "Montserrat", "Avenir";
	text-transform: uppercase;
	height: 100%;
	font-weight: 700;
	letter-spacing: 1px;
	color: steelblue;
	transition: all 0.3s;
	outline: none;
}
button:hover {
	color: white;
	background-color: steelblue;
}
.selected {
	background-color: steelblue;
	color: white;
}

</style>
