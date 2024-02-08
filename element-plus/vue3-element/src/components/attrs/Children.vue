<template>
<div>{{ msg }}</div>
</template>

<script setup lang="ts">
interface myProps{
  msg:string
}
const props=withDefaults(defineProps<myProps>(),{
  msg:''
})

</script>
