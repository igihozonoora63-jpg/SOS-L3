<template>
      <h4 class="text-4xl font-bold mb-4 text-center text-green-800 relative z-10">
               About Us 
            </h4>
    <section class="flex items-start justify-start gap-10 p-10 relative z-10">
        <!-- Content for the About section -->
         <img src="/src/assets/Rukari.jpg" alt="Rukari" class="w-100 h-100">
         <div class="flex items-end justify-end gap-5 p-5 relatve z-5">
            <p class="text-gray-600">Tembera Rwanda is a website created by a team of passionate individuals dedicated to showcasing the beauty of Rwanda.
                We believe that Rwanda has a lot to offer, from its stunning landscapes and rich culture to its vibrant cities and welcoming people.
                 Our mission is to provide a platform where visitors can discover the wonders of Rwanda and plan their trips with ease. 
                 Whether you're looking for information on the best places to visit, local cuisine, or cultural experiences, Tembera Rwanda has got you covered.
                  Join us on this journey to explore the heart of Africa and experience the magic of Rwanda!
            </p>
           
        </div>
    </section>
    <!-- Skills section -->
     <section>
        <h4 class="text-4xl font-bold mb-4 text-center text-green-800 relative z-10">
               Our Skills 
            </h4>
         <div class="flex items-start justify-start gap-10 p-10 relative z-10">
            <!-- Skill 1 -->
             <div class="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-5 text-gray-600 shadow-xl w-[300px]">
                <h5 class="text-xl font-bold mb-2">Web Development</h5>
                <p>We have a team of skilled web developers who create stunning and user-friendly websites.</p>
             </div>
             <!-- Skill 2 -->
              <div class="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-5 text-gray-600 shadow-xl w-[300px]">
                <h5 class="text-xl font-bold mb-2">Content Creation</h5>
                <p>Our content creators are experts in crafting engaging and informative content about Rwanda.</p>
             </div>
              <!-- Skill 3 -->
               <div class="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-5 text-gray-600 shadow-xl w-[300px]">
                <h5 class="text-xl font-bold mb-2">Customer Support</h5>
                <p>We provide excellent customer support to assist our visitors with any inquiries or issues they may have.</p>
             </div>
             <!-- Skill 4 -->
              <div class="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-5 text-gray-600 shadow-xl w-[300px]">
                <h5 class="text-xl font-bold mb-2">Tour Planning</h5>
                <p>Our tour planning experts can help you create the perfect itinerary for your trip to Rwanda.</p>

              </div>
         </div>
     </section>
     <!-- Conclusion -->
        <section class="flex items-center justify-center p-10 relative z-10">
             <div class="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-10 text-gray-600 shadow-xl w-[500px]">
                <h1 class="text-4xl font-bold mb-4 text-center">Join Us on This Journey</h1>
                <p class="text-lg text-center">Discover the wonders of Rwanda with Tembera Rwanda. We are here to help you plan your trip and make the most of your experience in this beautiful country.</p>
                <div class="mt-6 flex justify-center">
                 <button class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full transition duration-300">
                    <router-link to="/contact" class="text-white no-underline">Contact Us</router-link>
                 </button>
                </div>
             </div>
        </section>
</template>