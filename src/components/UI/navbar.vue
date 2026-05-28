<script setup>

</script>


<template>
 
   
 <nav class="bg-green-800 text-white px-8 py-4 flex items-center justify-between shadow-ig">
    <h4 class="flex items-start justify-start font-bold text-lg text-white">TEMBERA RWANDA</h4>

    <ul class="flex gap-8 text-sm font-medium w-full  justify-end">
      <li><router-link to="/home" class="hover:text-yellow-300">Home</router-link></li>
      <li><router-link to="/about" class="hover:text-yellow-300">About</router-link></li>
      <li><router-link to="/services" class="hover:text-yellow-300">Services</router-link></li>
      
    
    <li class="relative group">
   <router-link to='/Gallery' class="hover:text-yellow-300">Gallery<span>v</span></router-link>
      
      <ul class=" invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute bg-white text-green-900 rounded shadow w-48 top-4 left-0 z-50">
        <li><a href="#" class="block px-4 py-2 hover:bg-green-200 text-green-900">Images</a></li>
        <li><a href="#" class="block px-4 py-2 hover:bg-green-200 text-green-900">Videos</a></li>
      </ul>
    </li>
    <li class="relative group">
      <router-link to='/Destination'class="hover:text-yellow-300">Destinations<span>v</span></router-link>
      <ul class="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute bg-white text-green-900 rounded shadow w-48 top-4 left-0 z-50">
        <li><a href="#" class="block px-4 py-2 hover:bg-green-200 text-green-900">Kigali</a></li>
        <li><a href="#" class="block px-4 py-2 hover:bg-green-200 text-green-900">Western</a></li>
        <li><a href="#" class="block px-4 py-2 hover:bg-green-200 text-green-900">Easterm</a></li>
        <li><a href="#" class="block px-4 py-2 hover:bg-green-200 text-green-900">Southern</a></li>
        <li><a href="#" class="block px-4 py-2 hover:bg-green-200 text-green-900">Northern</a></li>
      </ul>
    </li>
    <li><router-link to="/contact" class="hover:text-yellow-300">Contact</router-link></li>
      
    </ul>
 </nav>


</template>