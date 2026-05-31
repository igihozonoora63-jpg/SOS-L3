<script setup>
import img1 from '../assets/Sabyinyo.jpg';
import img2 from '../assets/KCC.jpg';
import img3 from '../assets/Nyungwe.jpg';
</script>



<template>

    <section class="relative h-screen overflow-hidden">
        <div class="absolute inset-0  flex w-[300%] h-full animate-slide">
            <img :src= "img1" class="w-full h-full object-cover"/>
            <img :src= "img2" class="w-full h-full object-cover"/>
            <img :src= "img3" class="w-full h-full object-cover"/>
        </div>

        
    </section>


     <section class="py-16 bg-white">

      <h4 class="font-bold text-4xl mb-10 text-center text-green-800">
        Gallery
      </h4>

      <!-- Example province boxes -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 px-10">

        <div class="bg-green-100 rounded-xl p-6 shadow-lg text-center">
         <img src="/src/assets/KCC.jpg" class="w-full h-48 object-cover rounded-lg mb-4" alt="Kigali Convention Center">
          <h2 class="text-2xl font-bold mb-2">Kigali Convention Center</h2>
            <p>A modern architectural marvel in the heart of Kigali.</p>
        </div>

        <div class="bg-green-100 rounded-xl p-6 shadow-lg text-center">
         <img src="/src/assets/canopy walk.jpg" class="w-full h-48 object-cover rounded-lg mb-4" alt="Nyungwe Canopy Walk">
           <h2 class="text-2xl font-bold mb-2">Nyungwe Canopy Walk</h2>
            <p>Experience the breathtaking views of Nyungwe Forest from above.</p>
        </div>

        <div class="bg-green-100 rounded-xl p-6 shadow-lg text-center">
         <img src="/src/assets/Kivu boats.jpg" class="w-full h-48 object-cover rounded-lg mb-4" alt="Lake Kivu">
          <h2 class="text-2xl font-bold mb-2">Lake Kivu</h2>
          <p>Lake Kivu and breathtaking landscapes.</p>
        </div>
        
        <div class="bg-green-100 rounded-xl p-6 shadow-lg text-center">
         <img src="/src/assets/Karisimbi.jpg" class="w-full h-48 object-cover rounded-lg mb-4" alt="Karisimbi">
          <h2 class="text-2xl font-bold mb-2">Mount Karisimbi</h2>
          <p>The highest peak in the Virunga mountain range.</p>
         
        </div>

        <div class="bg-green-100 rounded-xl p-6 shadow-lg text-center">
         <img src="/src/assets/Palace.jpg" class="w-full h-48 object-cover rounded-lg mb-4" alt="King's Palace">
          <h2 class="text-2xl font-bold mb-2">King's Palace</h2>
          <p>Discover the rich history and culture of Rwanda at the King's Palace.</p>
        </div>
        
        <div class="bg-green-100 rounded-xl p-6 shadow-lg text-center">
         <img src="/src/assets/Volcanoes.jpg" class="w-full h-48 object-cover rounded-lg mb-4" alt="Volcanoes National Park">
          <h2 class="text-2xl font-bold mb-2">Volcanoes National Park</h2>
          <p>Home to the endangered mountain gorillas and stunning volcanic landscapes.</p>
        </div>
        
        <div class="bg-green-100 rounded-xl p-6 shadow-lg text-center">
         <img src="/src/assets/Sonatube.jpg" class="w-full h-48 object-cover rounded-lg mb-4" alt="Sonatube">
          <h2 class="text-2xl font-bold mb-2">Sonatube</h2>
          <p>A unique blend of art and culture in the heart of Kigali.</p>

        </div>
        
        <div class="bg-green-100 rounded-xl p-6 shadow-lg text-center">
         <img src="/src/assets/zip line.jpg" class="w-full h-48 object-cover rounded-lg mb-4" alt="Kigali zip line">
          <h2 class="text-2xl font-bold mb-2">Kigali Zip Line</h2>
          <p>Experience the thrill of flying over the lush landscapes of Mount Kigali.</p>

        </div>

        <div class="bg-green-100 rounded-xl p-6 shadow-lg text-center">
         <img src="/src/assets/Twin Lakes.jpg" class="w-full h-48 object-cover rounded-lg mb-4" alt="Twin Lakes">
          <h2 class="text-2xl font-bold mb-2">Twin Lakes</h2>
          <p>Experience the beauty of Rwanda's Twin Lakes, a scenic destination for nature lovers.</p>

        </div>
        <div class="bg-green-100 rounded-xl p-6 shadow-lg text-center">
         <img src="/src/assets/Hills.jpg" class="w-full h-48 object-cover rounded-lg mb-4" alt="Hills">
          <h2 class="text-2xl font-bold mb-2">Hills</h2>
          <p>Experience the beauty of Rwanda's rolling hills and scenic landscapes.</p>

        </div>

        <div class="bg-green-100 rounded-xl p-6 shadow-lg text-center">
         <img src="/src/assets/Rukari.jpg" class="w-full h-48 object-cover rounded-lg mb-4" alt="Rukari">
          <h2 class="text-2xl font-bold mb-2">Rukari</h2>
          <p>Discover the natural beauty and cultural heritage of Rukari.</p>

        </div>
      </div>

    </section>
</template>

<style>
@keyframes slide {
  0%, 30% {
    transform: translateX(0);
  }

  35%, 65% {
    transform: translateX(-100vw);
  }

  70%, 100% {
    transform: translateX(-200vw);
  }
}

.animate-slide {
  animation: slide 12s infinite ease-in-out;
}
</style>