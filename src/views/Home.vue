<template>


   <!-- Hero section -->
 
     
    <section class="relative h-screen overflow-hidden">
      <!-- Background image -->
       <img src="/src/assets/Sabyinyo.jpg" alt="Background Image" class="absolute inset-0 w-full h-full object-cover blur-sm scale-105">
       <!-- Search Bar -->
        <div>
         <form>
           <input type="text" placeholder="Search..." class="absolute top-4 left-1/2 transform -translate-x-1/2 bg-white/80 backdrop-blur-md border border-white/30 rounded-full py-2 px-6 text-gray-800 shadow-lg w-[300px] focus:outline-none focus:ring-2 focus:ring-green-500">
         </form>
        </div>
        
      <!-- Transparent Box -->
      <section class="relative z-10 flex items-center justify-center h-full">
         <div class="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-10 text-white shadow-xl w-[500px]">
            <h1 class="text-4xl font-bold mb-4 text-center">Tembera Rwanda</h1>
            <p class="text-lg text-center">Discover the Beauty of the Land of a thousand hills</p>
            <div class="mt-6 flex justify-center">
               <button class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full transition duration-300">
                  <router-link to="/about" class="text-white no-underline">Explore Now</router-link>
               </button>
            </div>
         </div>
      </section>
    </section>
</template>

