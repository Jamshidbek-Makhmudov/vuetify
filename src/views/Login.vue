<template >
    <div class="w-screen h-screen bg-gradient-to-tr from-authBgS to-authBgE flex items-center justify-center">
      <div class="card w-[500] bg-white rounded-lg p-5  ">
        <div class="flex justify-center mb-[43px]">
          <span class="me-2 w-[6px] bg-[#f8d442]"></span>
          <h2 class="uppercase text-[32px] font-[700]">crud operators</h2>


        </div>
        <div class="text-center mb-[50px]">
          <h3 class="text-[28px] font-[600] uppercase ">sign in</h3>
          <p class="text-[14px]"> Enter your credentials to access your account</p>

        </div>
        <div>
          <v-text-field class="mb-5" type="email" density="compact" label="email" placeholder="Enter your email" variant="outlined" v-model="email" :rules="[rules.required, rules.email]"/>
          <v-text-field :type=" visible ? 'text' : 'password'" density="compact" label="password" placeholder="Enter your password" variant="outlined" v-model="password" prepend-inner-icon="mdi-lock-outline" :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye' " @click:append-inner="visible= !visible" :rules="[rules.required]" counter minLength="3" />
        </div>
        <v-button class="uppercase w-100 my-[30px]" @click="onSubmit">sign in</v-button>
        <div class="flex justify-center ">
          <p class="me-2"> Forgot your password?</p>
          <router-link class="capitalize underline text-[#f8d442] hover:text-blue-600" to="/">reset password</router-link>
        </div>




      </div>
    </div>
</template>

<script setup>
import { ref ,reactive} from 'vue'
import VButton from "@/components/button.vue"
import { useRouter } from "vue-router"
const router= useRouter()

const visible = ref(true)
const email=ref('')
const password = ref('')
const rules = reactive({
          required: value => !!value || 'Required.',
  email: value => {
    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(value) || 'Invalid e-mail';
  }
})

const onSubmit = () => {
  if (!email.value.length && !password.value.length) return

  router.push({name:"Home"})
}

</script>

<style lang="scss" scoped>

</style>
