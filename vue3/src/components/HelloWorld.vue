<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
console.log('打印count',count,typeof count,count.value)

let obj={a:1,b:2}
Object.defineProperties(obj,{
  a:{
    get(){
      console.log('get')
      return 1
    },
    set(){
      console.log('set')
    }
  }
})
console.log('打印aa',obj.a)
obj.a=2
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
