<template>

    <v-app-bar :elevation="1" color="#fdfdfd" class="py-2 flex items-center justify-between">
      <v-app-bar-nav-icon @click="onSidebarToggle" class="me-auto"></v-app-bar-nav-icon>
      <div>
        <input type="text" class="p-2 rounded-md !border-2 !border-solid !border-gray-500 fouce:outline-none" placeholder="Search..." name="" value=""/>
       <v-btn>
        <span class="fa-solid fa-bell" style="color:black"></span>
       </v-btn>

      </div>
    </v-app-bar>
</template>

<script setup>
import { ref } from 'vue'
const permanent = ref(false)

const emit = defineProps(['toggleSidebar'])

function onSidebarToggle() {

  permanent.value = !permanent.value
  emit('toggleSidebar', permanent.value)

 }

</script>

<style lang="scss" scoped>

</style>
