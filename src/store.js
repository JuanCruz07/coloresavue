import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        cantColors: 0, // Juego
        squares: [], // Cuadrados--
        // isEasy: true, // Barra
        won: false, // Barra
        // square: "", // Cuadrados--
        title: "", // Titulo
        result: "", // Barra
        header: ""
    },
    actions: {
        setColorToSquare({commit}, color){
            commit ('addColor', color)
        },
        resetSquare({commit}){
            commit('reset')
        },
        setCantColors({commit}, cant){
            commit('setCantColors', cant)
        },
        setTitle({commit}){
            commit('setTitle')
        },
        setHeader({commit}, color){
            commit('setHeader', color)
        },
        resetAll({commit}){
            commit('resetAll')
        },
        setWon({commit}, valor){
            commit('setWon', valor)
        },
        delById({commit}, id){
            commit('delById', id)
        },
        getSquares({commit}){
            commit('getSquares')
        }
    },
    mutations: {
        setCantColors(state, cant){
            return state.cantColors = cant
        },
        reset(state){
            state.squares = []
        },
        addColor(state, color){
            state.squares.push(color)
        },
        setTitle(state){
            state.title = state.squares[Math.floor(Math.random() * state.squares.length)]
        },
        setHeader(state, color){
            state.header = color
        },
        resetAll(state){
            state.result = null
            state.won = false
            state.header = null
        },
        setWon(state, valor){
            state.won = valor
        },
        delById(state, id){
            console.log(state.squares[id])
            state.squares[id] = "RGB(35, 35, 35)"
            console.log(state.squares[id])
            state.squares.push()
        },
        getSquares(state){
            return state.squares
        }
    }
})