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

    <div class="relative group">
  <button
    class="bg-green-700 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-semibold"
  >
    {{ selectedLanguage }} ▼
  </button>

  <div
    class="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300"
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
</div>


</template>