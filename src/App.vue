<script setup>

</script>
<template>

  <div class="flex items-center justify-center gap-4 mt-6">
    <!-- logo -->
     <img src="/src/assets/logo.png" alt="SOS Logo" class="w-16 h-16">
     <!-- title -->
     <h1 class="font-bold text-4xl text-blue-400">Welcome To SOS Technical High School</h1>
    
     
     
    </div>
 
  <!-- School Image -->
  <div class="mt-8 flex items-end justify-end gap-4 p-4">
   <img src="/src/assets/School.jpg" alt="School Image" class="w-96 h-auto rounded-lg shadow-md">
   <section class="flex items-start justify-start gap-4 mt-6 p-4">
     <!-- Summary of SOS -->
     <p>
       SOS Technical High School is a prestigious educational institution dedicated to providing high-quality technical education to students.<br></br> With a focus on practical skills and hands-on learning, SOS Technical High School prepares students for successful careers in various technical fields. <br></br>The school offers a wide range of programs, including Software Development, Networking and IT, and vocational training, ensuring that students receive comprehensive education and training to excel in their chosen careers. With state-of-the-art facilities and experienced faculty, SOS Technical High School is committed to fostering a supportive and innovative learning environment for all its students.
      </p>
    </section>
  </div>
  <!-- Learn More Button -->
  <section class="flex items-center justify-center gap-4 mt-6 p-4">
    <button class="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300">
      <router-link to="/About">Learn More</router-link>
    </button>

  </section>
   <footer class="bg-gray-800 text-white py-4 mt-8">
    <div class="container mx-auto text-center">
      <p>&copy; 2024 SOS Technical High School. All rights reserved.</p>
      <p>Contact us: <a href="mailto:tc2@sos-rwanda.org" class="text-blue-400 hover:underline">tc2@sos-rwanda.org</a></p>
    </div>
  </footer>
</template>
