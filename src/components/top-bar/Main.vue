<template>
  <div class="top-bar-boxed h-[70px] md:h-[65px] z-[51] border-b border-white/[0.08] mt-12 md:mt-0 -mx-3 sm:-mx-8 md:-mx-0 px-3 md:border-b-0 relative md:fixed md:inset-x-0 md:top-0 sm:px-8 md:px-10 md:bg-gradient-to-b md:from-slate-100 md:to-transparent dark:md:from-darkmode-700">
    <div class="h-full flex items-center justify-between">
      <a href="" class="logo -intro-x md:flex xl:w-[180px] block">
        <span class="text-lg ml-3 text-green-500 font-bold 2xl:inline">
          BIODIVERSITY
        </span>
      </a>
      <Dropdown class="intro-x w-8 h-8">
        <DropdownToggle tag="div" role="button"
          class="w-8 h-8 rounded-full overflow-hidden shadow-lg image-fit zoom-in scale-110">
          <img alt="Enigma Tailwind HTML Admin Template" :src="$f()[9].photos[0]" />
        </DropdownToggle>
        <DropdownMenu class="w-56">
          <DropdownContent
            class="bg-primary/80 before:block before:absolute before:bg-black before:inset-0 before:rounded-md before:z-[-1] text-white">
            <DropdownItem class="dropdown-item hover:bg-white/5">
              <ToggleRightIcon class="w-4 h-4 mr-2" />
              Logout
            </DropdownItem>
          </DropdownContent>
        </DropdownMenu>
      </Dropdown>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const searchDropdown = ref(false);
const showSearchDropdown = () => {
  searchDropdown.value = true;
};
const hideSearchDropdown = () => {
  searchDropdown.value = false;
};
</script>
