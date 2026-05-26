<script setup>
import { ref } from 'vue';
const isOpen = ref(false);
</script>


<template>
    <div class="bg-blue-500 text-white p-4">
 <nav>
    <h4 class="flex items-start justify-start font-bold text-lg text-white">TEMBERA RWANDA</h4>

    <ul class="flex items-end justify-end space-x-4 text-white font-medium">
      <li><a href="#" class="hover:text-gray-300">Home</a></li>
      <li><a href="#" class="hover:text-gray-300">About</a></li>

      <li><a>
        <button @click="isOpen = !isOpen" class="hover:text-gray-300">Images ⬇️</button>
      </a></li>
      <div>
        <ul v-if="isOpen" class="absolute bg-blue-500 text-white mt-2 rounded shadow-lg">
          <li><a href="#" class="block px-4 py-2 hover:bg-blue-600">Image 1</a></li>
          <li><a href="#" class="block px-4 py-2 hover:bg-blue-600">Video 1</a></li>
        </ul>
      </div>
      <li><a href="#" class="hover:text-gray-300">Contact</a></li>

    </ul>
 </nav>
 </div>
</template>