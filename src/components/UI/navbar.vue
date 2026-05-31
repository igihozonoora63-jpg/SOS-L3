<script setup>
import { ref } from 'vue'

const selectedLanguage = ref('English')

const languages = [
  'English',
  'Kinyarwanda',
  'Swahili',
  'French'
]
</script>

<template>

  <nav class="bg-green-800 text-white px-8 py-4 flex items-center justify-between shadow-lg">

    <!-- Logo -->
    <div class="flex items-center gap-4">
      <img
        src="/src/assets/Logo1.jpg"
        alt="Logo"
        class="h-10 w-10 rounded"
      >

      <h4 class="font-bold text-lg">
        TEMBERA RWANDA
      </h4>
    </div>

    <!-- Navigation Links -->
    <ul class="flex items-center gap-8 text-sm font-medium">

      <li>
        <router-link to="/" class="hover:text-yellow-300">
          Home
        </router-link>
      </li>

      <li>
        <router-link to="/about" class="hover:text-yellow-300">
          About
        </router-link>
      </li>

      <li>
        <router-link to="/services" class="hover:text-yellow-300">
          Services
        </router-link>
      </li>

      <!-- Gallery Dropdown -->
      <li class="relative group">
        <router-link
          to="/Gallery"
          class="hover:text-yellow-300"
        >
          Gallery ▼
        </router-link>

        <ul
          class="absolute left-0 top-full mt-2 w-48 bg-white text-green-900 rounded shadow-lg invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 z-50"
        >
          <li>
            <router-link
              to="/images"
              class="block px-4 py-2 hover:bg-green-200"
            >
              Images
            </router-link>
          </li>

          <li>
            <router-link
              to="/videos"
              class="block px-4 py-2 hover:bg-green-200"
            >
              Videos
            </router-link>
          </li>
        </ul>
      </li>

      <!-- Destination Dropdown -->
      <li class="relative group">
        <router-link
          to="/Destination"
          class="hover:text-yellow-300"
        >
          Destinations ▼
        </router-link>

        <ul
          class="absolute left-0 top-full mt-2 w-48 bg-white text-green-900 rounded shadow-lg invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 z-50"
        >
          <li><router-link to="/kigali" class="block px-4 py-2 hover:bg-green-200">Kigali</router-link></li>

          <li><router-link to="/western" class="block px-4 py-2 hover:bg-green-200">Western</router-link></li>

          <li><router-link to="/eastern" class="block px-4 py-2 hover:bg-green-200">Eastern</router-link></li>

          <li><router-link to="/southern" class="block px-4 py-2 hover:bg-green-200">Southern</router-link></li>

          <li><router-link to="/northern" class="block px-4 py-2 hover:bg-green-200">Northern</router-link></li>
        </ul>
      </li>

      <!-- Contact -->
      <li>
        <router-link to="/contact" class="hover:text-yellow-300">
          Contact
        </router-link>
      </li>

      <!-- Language Dropdown -->
      <li class="relative group">

        <button
          class="bg-green-700 hover:bg-green-600 px-4 py-2 rounded-lg font-semibold"
        >
          {{ selectedLanguage }} ▼
        </button>

        <div
          class="absolute right-0 top-full mt-2 w-40 bg-white rounded-lg shadow-lg invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 z-50"
        >
          <button
            v-for="language in languages"
            :key="language"
            @click="selectedLanguage = language"
            class="block w-full text-left px-4 py-2 text-gray-700 hover:bg-green-100"
          >
            {{ language }}
          </button>
        </div>

      </li>

    </ul>

  </nav>

</template>