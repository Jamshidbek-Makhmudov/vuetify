<template>
  <div>
    <v-btn v-if="isPrepend" :prepend-icon="icon?.length ? icon : null " :color="color" :class="class" ><slot/></v-btn>
    <v-btn v-else :append-icon="icon?.length ? icon : null " :color="color" :class="class" ><slot/></v-btn>

  </div>
</template>

<script setup>
defineProps({
  icon: {
    type: String,
    required:false
  },
  color: {
    type: String,
    required: false,
    default:'#feaf00'
  },
  isPrepend: {
    type: Boolean,
    default: false,


  },
  class: {
    type: String,
    default:''
  }
})


</script>

<style scoped>
</style>
