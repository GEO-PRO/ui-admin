<template>
  <div class="top-bar-boxed h-[70px] md:h-[65px] z-[51] border-b border-white/[0.08] mt-12 md:mt-0 -mx-3 sm:-mx-8 md:-mx-0 px-3 md:border-b-0 relative md:fixed md:inset-x-0 md:top-0 sm:px-8 md:px-10 md:bg-gradient-to-b md:from-slate-100 md:to-transparent dark:md:from-darkmode-700">
    <div class="h-full flex items-center justify-between">
      <a href="" class="logo -intro-x md:flex xl:w-[180px] block">
        <span class="text-lg ml-3 text-green-500 font-bold 2xl:inline">
          Hello Duy Long!!!
        </span>
      </a>
      <div v-if="acountSuccess" class="col-span-1 col-start-9 self-center flex justify-center">
        <Dropdown class="intro-x h-8 my-auto flex" placement="bottom">
          <DropdownToggle tag="div" role="button" class="overflow-hidden zoom-in scale-110 flex self-center text-white">
            <UserIcon class="block mr-3" />
            <div class="self-center">{{ userName }}</div>
          </DropdownToggle>
          <DropdownMenu class="w-56" @click="acountExit()">
            <DropdownContent
              class="bg-primary/80 before:block before:absolute before:bg-black before:inset-0 before:rounded-md before:z-[-1] text-white">
              <DropdownItem class="dropdown-item hover:bg-white/5">
                <ToggleRightIcon class="w-4 h-4 mr-2" />
                Log Out
              </DropdownItem>
            </DropdownContent>
          </DropdownMenu>
        </Dropdown>
      </div>
      <div v-else class="self-center flex z-[53]">
        <router-link to="/user?go=signin" class="text-right text-white  py-3 w-full whitespace-nowrap mt-3 xl:mt-0 align-top">
          Sign in
        </router-link>
        <!-- <router-link to="/user?go=register" class="py-3 text-white mx-5 mt-3 xl:mt-0 align-top whitespace-nowrap">
          Register
        </router-link> -->
      </div>
      <!-- <div class="self-center flex z-[53]">
        <router-link to="/user?go=signin" class="text-right text-white  py-3 w-full whitespace-nowrap mt-3 xl:mt-0 align-top">
          Sign in
        </router-link>
        <router-link to="/user?go=register" class="py-3 text-white mx-5 mt-3 xl:mt-0 align-top whitespace-nowrap">
         Register
        </router-link>
      </div> -->
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { LocationUrl } from "@/custom-components"

const acountExit = () => {
  window.localStorage.setItem("acountSuccess", "")
  window.location = LocationUrl + "user?go=signin";
};

const searchDropdown = ref(false);
const showSearchDropdown = () => {
  searchDropdown.value = true;
};
const hideSearchDropdown = () => {
  searchDropdown.value = false;
};

const userName = window.localStorage.getItem("userName");
const acountSuccess = window.localStorage.getItem("acountSuccess");
</script>
