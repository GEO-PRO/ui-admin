<template>
  <div class="h-screen xl:h-auto flex py-5 xl:py-0 my-10 xl:my-0">
    <div class="my-auto mx-auto xl:ml-20 bg-white dark:bg-darkmode-600 xl:bg-transparent px-5 sm:px-8 py-8
      xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto">
      <h2 class="intro-x font-bold text-2xl xl:text-3xl text-center xl:text-left">
        Sign In
      </h2>
      <!-- <div class="intro-x text-green-400 pt-2 text-base">{{ registerSuccess }}</div> -->
      <div class="intro-x mt-5">
        <input type="text" class="intro-x login__input form-control py-3 px-4 block" placeholder="Username"
               v-model="userSignin"/>
        <input type="password" class="intro-x login__input form-control py-3 px-4 block mt-4" placeholder="Password"
               v-model="passSignin"/>
      </div>
      <div id="errorSignin" class="text-red-600 pt-2">{{ messageSignin }}</div>
      <div class="intro-x gap-4 my-5 xl:mt-8 text-center xl:text-left">
        <button class="btn btn-primary py-3 px-4 w-full xl:mr-3 align-top" @click="confirmSignin()">
          Login
        </button>
      </div>
      <!-- <div class="intro-x grid grid-cols-2 gap-4 mt-5 xl:mt-8 text-center xl:text-left">
        <a href="/" class="btn btn-outline-secondary py-3 px-4 w-full mt-3 xl:mt-0 align-top">
          Guest
        </a>
        <a href="/user?go=register" class="btn btn-outline-secondary py-3 px-4 w-full mt-3 xl:mt-0 align-top">
          Register
        </a>
      </div> -->
    </div>
  </div>
</template>

<script>
import {onMounted} from "vue";
import dom from "@left4code/tw-starter/dist/js/dom";
import axios from "axios";
import { AuthenticationURL, LocationUrl } from "@/custom-components"

export default {
  props: {
    registerSuccess: String,
  },

  data() {
    return {
      userSignin: "",
      passSignin: "",
      messageSignin: "",
    }
  },
  methods: {
    confirmSignin() {
      axios.post(`${AuthenticationURL}auth/signin`, {
        username: this.userSignin,
        password: this.passSignin,
      }).then(function (response) {
        window.location = LocationUrl;
        localStorage.setItem('userName', response.data.username)
        localStorage.setItem('acountSuccess', true)
      }).catch(function () {
        document.getElementById("errorSignin").innerHTML = "Username or Password is incorrect";
      });
    },
  },
  setup() {
    onMounted(() => {
      dom("body").removeClass("main").removeClass("error-page").addClass("login");
    })
  }
}
</script>
