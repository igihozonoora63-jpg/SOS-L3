

<template>
  <div class="w-full min-h-screen overflow-x-hidden">

    <!-- HERO SECTION -->
    <section class="relative h-screen flex items-center justify-center overflow-hidden">

      <!-- Background Image -->
      <img
        src="/src/assets/Sabyinyo.jpg"
        alt="Background Image"
        class="absolute inset-0 w-full h-full object-cover blur-sm scale-110"
      />

      <!-- Dark overlay -->
      <div class="absolute inset-0 bg-black/30"></div>

      <!-- Transparent Box -->
      <div
        class="relative z-10 bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-10 text-white shadow-xl w-[500px]"
      >
        <h1 class="text-4xl font-bold mb-4 text-center">
          Tembera Rwanda
        </h1>

        <p class="text-lg text-center">
          Discover the Beauty of the Land of a Thousand Hills
        </p>

        <div class="mt-6 flex justify-center">
          <router-link
            to="/Destination"
            class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full transition duration-300"
          >
            Explore Now
          </router-link>
        </div>
      </div>
    </section>

    <!-- EXPLORE RWANDA SECTION -->
    <section class="py-16 bg-white">

      <h4 class="font-bold text-4xl mb-10 text-center text-green-800">
        Explore Rwanda
      </h4>

      <!-- Example province boxes -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 px-10">

        <div class="bg-green-100 rounded-xl p-6 shadow-lg text-center">
         <img src="/src/assets/Convention.jpg" class="w-full h-48 object-cover rounded-lg mb-4" alt="Kigali Convention Center">
          <h2 class="text-2xl font-bold mb-2">Kigali</h2>
          <p>The clean and vibrant capital city.</p>
        </div>

        <div class="bg-green-100 rounded-xl p-6 shadow-lg text-center">
         <img src="/src/assets/Volcano park.jpg" class="w-full h-48 object-cover rounded-lg mb-4" alt="Volcanoes National Park">
          <h2 class="text-2xl font-bold mb-2">Northern Province</h2>
          <p>Home of volcanoes and mountain gorillas.</p>
        </div>

        <div class="bg-green-100 rounded-xl p-6 shadow-lg text-center">
         <img src="/src/assets/Kivu.jpg" class="w-full h-48 object-cover rounded-lg mb-4" alt="Lake Kivu">
          <h2 class="text-2xl font-bold mb-2">Western Province</h2>
          <p>Lake Kivu and breathtaking landscapes.</p>
        </div>
        
        <div class="bg-green-100 rounded-xl p-6 shadow-lg text-center">
         <img src="/src/assets/Akagera.jpg" class="w-full h-48 object-cover rounded-lg mb-4" alt="Akagera National Park">
          <h2 class="text-2xl font-bold mb-2">Eastern Province</h2>
          <p>Rich culture and stunning savannahs.</p>
         
        </div>

        <div class="bg-green-100 rounded-xl p-6 shadow-lg text-center">
         <img src="/src/assets/Ethnographic.jpg" class="w-full h-48 object-cover rounded-lg mb-4" alt="Rwanda Ethnographic Museum">
          <h2 class="text-2xl font-bold mb-2">Southern Province</h2>
          <p>The Epitome of Rwanda's culture</p>
        </div>
      </div>

    </section>
    <!-- Book Tours -->

    <section>
      <h4 class="font-bold text-4xl mb-10 text-center text-green-800">
        Book Your Tours
      </h4>

      <div class="flex items-center justify-center gap-10 p-10">
        <div class="max-w-md">
          <h2 class="text-2xl font-bold mb-4">Ready to Explore Rwanda?</h2>
          <p class="text-gray-600 mb-6">Book your tours with us and experience the best of Rwanda. From gorilla trekking to cultural tours, we have it all.</p>
          <router-link to="/contact" class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full transition duration-300">
            Contact Us
          </router-link>
        </div>
      </div>
    </section>

  </div>
</template>