<template>
    <v-navigation-drawer color="grey-lighten-2" :permanent="permanent" class="text-left">
      <div class="px-5">
          <div class="flex justify-center mb-[330px]">
          <span class="me-2 w-[6px] bg-[#f8d442]"></span>
          <h2 class="uppercase text-[20px] font-[700]">crud operators</h2>

        </div>

      </div>
      <v-btn color="" text="Text 1" variant="text" class="w-full !text-left !capitalize"/>
      <v-btn color="" text="Text 1" variant="text" class="w-full !text-left !capitalize"/>
      <v-btn color="" text="Text 1" variant="text" class="w-full !text-left !capitalize"/>
      <v-btn color="" text="Text 1" variant="text" class="w-full !text-left !capitalize"/>
      <v-btn color="" text="Text 1" variant="text" class="w-full !text-left !capitalize"/>
    </v-navigation-drawer>
</template>

<script setup>
defineProps({
  permanent: {
    type: Boolean,
    default:true
  }
})

</script>

<style lang="scss" scoped>

</style>
