<template>
    <footer class="bg-green-800 text-white px-8 py-10 mt-10">
        
        <div class="flex flex-wrap justify-between gap-8">
            <!-- this is the footer -->
             <div>
            <h3 class="text-yellow-300 font-bold text-lg mt-3">TEMBERA RWANDA</h3>
            <p class="text-sm text-green-200">Discover the beauty of the land of a thousand hills</p>
            </div>
            
        
        <!-- Quick links  -->
         <div>
            <h3 class="text-lg font-bold text-yellow-300 mt-3 mb-3">Quick Links</h3>
            <ul class="text-sm text-green-200 space-y-2">
                <li><router-link to='/home' class="hover:text-yellow-300">Home</router-link></li>
                <li><router-link to='/about' class="hover:text-yellow-300">About</router-link></li>
                <li><router-link to='/gallery' class="hover:text-yellow-300">Gallery</router-link></li>
                <li><router-link to='/destination' class="hover:text-yellow-300">Destination</router-link></li>
                <li><router-link to='/services' class="hover:text-yellow-300">Services</router-link></li>
            </ul>
         </div>
         <!-- Destinations -->
          <div>
            <h3 class="text-yellow-300 font-bold text-lg mb-3">Destination</h3>
            <ul class="space-y-2 text-sm">
                <li><router-link to="/" class="hover:bg-yellow-300">Northern Province</router-link></li>
                <li><router-link to="/" class="hover:bg-yellow-300">Southern Province</router-link></li>
                <li><router-link to="/" class="hover:bg-yellow-300">Western Province</router-link></li>
                <li><router-link to="/" class="hover:bg-yellow-300">Eastern Province</router-link></li>
                <li><router-link to="/" class="hover:bg-yellow-300">Kigali City</router-link></li>
            </ul>
          </div>
          <!-- Contact info -->
           <div>
            <h3 class="text-yellow-300 font-bold text-lg mb-3">Contact info</h3>
            <ul class="space-y-2 text-sm">
                <li>ahantunyaburanga@gmail.com</li>
                <li>0785310468</li>
                <li>Kagugu Kigali Rwanda</li>
            </ul>
           </div>
        </div>
        
        <!-- Copyright -->
         <div class="border-t text-sm border-green-600 mt-8 pt-4 ">
            <p class="text-center">&copy; 2026 IGIHOZO Noora. All rights reserved</p>
         </div>

    </footer>
</template>