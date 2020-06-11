<template>
  <section class="src-components-titulo">
    <div id="header" :style="{'backgroundColor': this.$store.state.header}">
      <h1>
        The Great
        <br />
        <span id="colorDisplay">{{this.$store.state.title}}</span>
        <br />Guessing Game
      </h1>
    </div>
  </section>
</template>

<script lang="js">

  export default  {
    name: 'src-components-titulo',
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
.src-components-titulo {
}
#header {
	transition: all 0.3s;
	background: steelblue;
	text-transform: uppercase;
	text-align: center;
	margin: 0;
	color: white;
	
}
#colorDisplay {
	font-size: 200%;
}
h1 {
	font-weight: normal;
	line-height: 1.1;
	padding: 20px 0;

}
</style>
