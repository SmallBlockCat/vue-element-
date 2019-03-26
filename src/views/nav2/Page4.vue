<template>
  <div>
    <h1>vuex 测试</h1>
    Clicked: {{ count }} times
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>

<script>
import {mapState, mapMutations,mapActions,mapGetters} from 'vuex'

  export default {
  	 computed:{
        	 ...mapState([
                'count'
            ])
        },
//  computed: {
////	// 使用对象展开运算符将 getters 混入 computed 对象中
//  ...mapGetters([
//    'count'
//    // ...
//  ])
//  },
    methods: {
    ...mapActions([
      'increment', // 映射 this.increment() 为 this.$store.dispatch('increment')
      'decrement'
    ])
      //...mapActions({
      //  add: 'increment' // 映射 this.add() 为 this.$store.dispatch('increment')
      //})
    }
  }

</script>