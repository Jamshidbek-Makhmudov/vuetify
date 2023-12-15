<template>
  <v-layout class="">
<!--  -->
<sidebar :permanent="permanent"/>
<appbar @v-btn-toggle="permanent= !permanent"/>



    <v-main class="">
      <slot/>
    </v-main>
  </v-layout>
</template>

<script setup>

import sidebar from "@/components/partials/sidebar.vue"

import appbar from '../components/partials/appbar.vue'
import { ref } from 'vue'
const permanent = ref(false)



</script>
