<template>
  <section class="src-components-juego">
    <Titulo :header="header"
    />
    <Barra 
    :isEasy="isEasy" 
    :result="result"
    :newColors="newColors"
    :createEasy="createEasy"
    :createHard="createHard"
    />
    <Cuadrados
    :squares="squares"
    :square="square"
    :checkWin="checkWin"
    />
  </section>
</template>

<script lang="js">
  import Titulo from "./Titulo"
  import Barra from "./Barra"
  import Cuadrados from "./Cuadrados"
  export default  {
    name: 'src-components-juego',
    props: [],
    mounted () {
        this.createHard()
    },
    data () {
      return {
        squares: [], // Cuadrados--
        isEasy: true, // Barra
        square: "", // Cuadrados--
        result: "", // Barra
        header: ""
      }
    },
    methods: {
      randomInt() {
            return Math.floor(Math.random() * 256);
        },
        createRandomStringColor() {
            return "RGB(" + this.randomInt() + ", " + this.randomInt() + ", " + this.randomInt() + ")";
        },
        createHard() {
            this.reset()
            if (this.isEasy) {
                this.isEasy = false
            }

            this.$store.dispatch('setCantColors', 6)
            this.createSquares()
        },
        createEasy() {
            this.reset()
            if (!this.isEasy) {
                this.isEasy = true
            }
            this.$store.dispatch('setCantColors', 3)
            this.createSquares()
        },
        newColors() {
            this.reset()
            if (this.isEasy) {
                this.createEasy()
            } else {
                this.createHard()
            }
        },
        checkWin(id, color) {
            if (this.$store.state.title == color) {
                this.result = "You Picked Right!"
                this.setAllSame()
                this.$store.dispatch('setWon', true)
                this.$store.state.won = true
            } else {
                console.log(id)
                this.result = "Try Again!"
                this.$store.dispatch('delById', id)
            }
            
        },
        setAllSame() {
            this.$store.dispatch('resetSquare')
            for (let i = 0; i < this.$store.state.cantColors; i++) {
                this.$store.dispatch('setColorToSquare', this.$store.state.title)
            }
            this.$store.dispatch('setHeader', this.$store.state.title)
        },
        createSquares() {
            this.$store.dispatch('resetSquare')
            for (let i = 0; i < this.$store.state.cantColors; i++) {
                var color = this.createRandomStringColor()
                this.$store.dispatch('setColorToSquare', color)
            }
            this.$store.dispatch('setTitle')
        },
        reset(){
            this.$store.dispatch('resetAll')
        }
    },
    computed: {

    },
    components: {
        Titulo,
        Barra,
        Cuadrados
    }
}


</script>

<style scoped lang="css">
.src-components-juego {
}
</style>
