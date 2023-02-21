<template>
  <div>
    <div>
      <div class="container sm:px-10">
        <div class="block xl:grid grid-cols-2 gap-4">
          <div class="hidden xl:flex flex-col min-h-screen">
            <router-link to="/" href="" class="-intro-x flex items-center pt-5">
              <span class="text-green-500 text-lg ml-3"> BIODIVERTSITY </span>
            </router-link>
          </div>
          <SignIn v-show="isSignin"/>
          <!-- <Register v-show="isRegister" @changeShow="changeShow()" @keepShow="keepShow()"/> -->
        </div>
      </div>
    </div>
    <!-- <div class="absolute z-50">registerSuccess: {{registerSuccess}}</div> -->
  </div>
</template>

<script>
import SignIn from "@/custom-components/pages/signin-page/Main.vue"
import Register from "@/custom-components/pages/register-page/Main.vue"

export default {
  components: {
    SignIn,
    Register,
  },

  data() {
    return {
      isSignin: '',
      /*isRegister: '',*/
    }
  },

  methods: {
    getUserRul() {
      return window.location.href.split('go=')[1]
    },

    keepShow() {
      this.isSignin = false
      /*this.isRegister = true*/
    },
  },

  mounted() {
    if (this.getUserRul() === "signin") {
      this.isSignin = true
    } /*else if (this.getUserRul() === "register") {
      this.isRegister = true
    }*/

    this.registerSuccess = localStorage.getItem("registerSuccess");
    localStorage.removeItem('registerSuccess');
  },
}
</script>
