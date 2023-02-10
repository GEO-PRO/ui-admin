<template>
  <div class="h-screen xl:h-auto flex py-5 xl:py-0 my-10 xl:my-0">
    <div
        class="my-auto mx-auto xl:ml-20 bg-white dark:bg-darkmode-600 xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto">
      <h2 class="intro-x font-bold text-2xl xl:text-3xl text-center xl:text-left">
        Sign Up
      </h2>
      <div class="intro-x mt-8 mb-3">
        <input type="text" class="intro-x login__input form-control py-3 px-4 block mt-4" placeholder="Email"
               v-model="emailRegister" required/>
        <div v-if="msg.emailRegister" class="text-red-600 pt-2">{{ msg.emailRegister }}</div>
        <input type="text" class="intro-x login__input form-control py-3 px-4 block mt-4" placeholder="Username"
               v-model="userRegister"/>
        <div v-if="msg.userRegister" class="text-red-600 pt-2">{{ msg.userRegister }}</div>
        <input type="password" class="intro-x login__input form-control py-3 px-4 block mt-4" placeholder="Password"
               v-model="passRegister"/>
        <input type="password" class="intro-x login__input form-control py-3 px-4 block mt-4"
               placeholder="Password Confirmation" v-model="passConfirmRegister"/>
        <div v-if="msg.passConfirmRegister" class="text-red-600 pt-2">{{ msg.passConfirmRegister }}</div>
      </div>
      <div class=" text-red-400 ml-4" id="errorRegister"></div>
      <div class="text-green-400 ml-4" id="successRegister"></div>
      <div class="intro-x mt-5 xl:mt-8 text-center xl:text-left">
        <button v-if="msg.passConfirmRegister == msg.emailRegister"
                class="btn btn-primary py-3 px-4 w-full xl:w-32 xl:mr-3 align-top" @click="confirmRegister()"
                id="btnRegister">
          Register
        </button>
        <button v-else class="btn btn-primary py-3 px-4 w-full xl:w-32 xl:mr-3 align-top" @click="confirmRegister()"
                id="btnRegister" disabled>
          Register
        </button>
        <a href="/user?go=signin" class="btn btn-outline-secondary py-3 px-4 w-full xl:w-32 mt-3 xl:mt-0 align-top">
          Sign in
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import {onMounted} from "vue";
import dom from "@left4code/tw-starter/dist/js/dom";
import axios from "axios";
import {validateEmail, validatePassword, validateUser} from "@/custom-components/pages/register-page"
import { AuthenticationURL, LocationUrl } from "@/custom-components"

export default {
  data() {
    return {
      emailRegister: "",
      userRegister: "",
      passRegister: "",
      passConfirmRegister: "",
      msgEmail: [],
      msg: [],
    }
  },
  watch: {
    emailRegister(value) {
      this.emailRegister = value;
      validateEmail(value, this.msg);
    },

    passConfirmRegister(value) {
      this.passConfirmRegister = value;
      validatePassword(this.msg, this.passRegister, this.passConfirmRegister);
    },

    userRegister(value) {
      this.userRegister = value;
      validateUser(value, this.msg)
    }
  },


  methods: {
    async confirmRegister() {
      // let messageError = ""
      let messageSuccess = ""
      await axios.post(AuthenticationURL + 'auth/register', {
        username: this.userRegister,
        password: this.passConfirmRegister,
        email: this.emailRegister,
      })
          .then(function (response) {
            messageSuccess = response.data.success
            if (messageSuccess) {
              localStorage.setItem('registerSuccess', 'Successfully registered')
              window.location = LocationUrl + 'user?go=signin';
            }
          })
          .catch(function () {
            document.getElementById("errorRegister").innerHTML = "User already exists";
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
